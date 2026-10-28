# Spira

## At a glance

| Field             | Value                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type              | Two-sided web platform (REST API + single-page web app) for food-surplus donation. MVP                                                                                                                                                                                                                                        |
| Context           | Academic project: Harbour.Space course "From Zero to Hero". Team of 6. The idea was the team's; it was meant to be "almost launched" as a business initiative                                                                                                                                                                 |
| Author's role     | Built all the technology: the entire API alone, and the portal frontend. The UI design was NOT his (see "What the author built")                                                                                                                                                                                              |
| Status            | MVP, no real users or pilots. Live and reachable, but not meant to be used (author). API on Render, database on Supabase, portal on Vercel                                                                                                                                                                                    |
| Repos             | [SpiraAPI](https://github.com/Dava2310/SpiraAPI) (backend, public), [Spira-Portal](https://github.com/Dava2310/Spira-Portal) (web app, public). Live: portal `https://spira-portal.vercel.app`, API `https://spiraapi.onrender.com` (URLs confirmed by the author; the free tier may take a while to wake up)                 |
| Period            | About 3 weeks including design, planning, implementation and testing (author). Git: 2026-09-16 to 2026-09-25 (10 calendar days, 7 active days)                                                                                                                                                                                |
| Effort estimate   | About 3 weeks of team project time (author). Git-only estimate: 15-20 hours of committed work (a lower bound, see Timeline)                                                                                                                                                                                                   |
| Contributors/team | Team of 6: Daniel (all code), designers Elena Paoli and Ecem Gonul (UI design and prototypes), and three more teammates on the business side (market segmentation, solidifying the idea). All commits in both repos are Daniel's (git identities "Dava2310" and "Daniel Vetencourt", the latter only on GitHub merge commits) |
| Outcome           | Well received: very good feedback, mostly on the business side; a solid MVP (author). No formal grade cited                                                                                                                                                                                                                   |

## Summary

Spira is a platform where retailers (supermarkets and shops) list surplus food that is close to its date, and NGOs and food banks find it on a shelf, claim it and collect it with a QR code or a 6-digit PIN. Every completed handover produces a numbered custody certificate (PDF/CSV) and feeds impact numbers (meals, CO2 avoided). It is an MVP made of a NestJS + PostgreSQL API and one React app that shows the retailer or the NGO side depending on the account.

## The problem and the idea

Shops end up with food near its date. Charities that could use it have no simple way to see what is nearby, reserve it and prove it was handed over. The team's idea (not Daniel's, per the author) was to put both sides on one system: the retailer logs and lists surplus, the NGO browses it by distance and urgency, and a single-use pickup pass plus an immutable certificate document the handover. The team treated it as a possible real business, not only a course exercise.

## Impact highlights

Ranked by how impressive and credible they are. All verified in the code.

### 1. Found and fixed a cross-tenant data leak, with a repeatable probe

- **What it is.** After the first working version, Daniel tested the API with two retailers and two NGOs and found that most routes returned or changed any organisation's data to any logged-in user. He fixed it in one pass and kept the test as scripts.
- **Why it matters.** Multi-tenant isolation is the classic serious bug in two-sided SaaS. The judgement is in what he did: measured first (most cross-tenant reads and writes succeeded: 22 reads and 10 writes in his probe; the author does not consider the numbers important, so keep them out of the copy), then fixed, then re-measured (all of them blocked, legitimate reads unaffected). Rules include: another organisation's row answers "not found", not "forbidden", so ids cannot be probed; an NGO sees only lots published to the shelf (private stock and retail prices stay hidden); a certificate is readable only by the two parties; a user with a missing organisation link is rejected instead of treated as unrestricted; creating records under someone else's organisation is also blocked.
- **Evidence.** `SpiraAPI/src/common/scoping/org-scope.ts` (220 lines: `resolveScope`, `ownScopeWhere`, `assertOwn`, `assertCanCreateFor`, `assertDonationParty`); commit `8d8d0b8` "Scope every organization's data to that organization" (its message holds the before/after numbers); `scripts/tenant-isolation-{seed,probe,positive}.sh` (119 lines) and `scripts/README.md`. Applied across the generic controllers (contacts, receipts, donations, inventory, locations...).
- **How to say it (EN).** "I tested the API with two competing shops and two NGOs, found that any logged-in user could read or edit another organisation's data, and fixed it with one scoping layer plus a probe script that checks reads and writes."
- **ES.** "Probé la API con dos comercios y dos ONG, descubrí que cualquier usuario autenticado podía leer o modificar datos de otra organización, y lo corregí con una capa de aislamiento y un script que comprueba lecturas y escrituras."

### 2. Race-safe claiming off the shared shelf

- **What it is.** When an NGO claims lots from the shelf, the server locks the lots, re-checks they are still available, creates the donation, its line items and the stock reservation in a single database transaction.
- **Why it matters.** Two NGOs can tap "claim" on the last tray at the same moment. A client-side availability check cannot prevent that. The code uses `SELECT ... FOR UPDATE` (pessimistic write lock) inside a transaction; the loser gets an HTTP 409 listing the unavailable lots, and the portal treats the 409 as a normal outcome ("taken first"), not a crash. The lot data is copied into donation lines (name, quantity, weight, expiry), and the impact figures are pinned at claim time so the number shown now is the number on the certificate later.
- **Evidence.** `SpiraAPI/src/recipient-portal/reservations.service.ts` `claim()` (`dataSource.transaction`, `setLock('pessimistic_write')`, `ConflictException` with `unavailableItemIds`); portal side `Spira-Portal/src/features/reservations/_logic/index.ts` (comment at the 409) and `src/routes/ngo/StorePage.tsx`. Not covered by an automated test (see Missing).
- **How to say it (EN).** "Claiming from the shelf runs in one database transaction with row locks, so two organisations cannot take the same lot; the loser gets a clear conflict message."
- **ES.** "Reclamar excedentes se ejecuta en una sola transacción con bloqueo de filas, de modo que dos organizaciones no puedan llevarse el mismo lote; la que llega segunda recibe un aviso claro de conflicto."

### 3. A donation lifecycle enforced as a state machine, with a single-use pickup pass

- **What it is.** A donation moves through DRAFT, OFFERED, ACCEPTED/DECLINED, READY_FOR_PICKUP, DRIVER_EN_ROUTE, DELIVERED or CANCELLED. Each action is allowed only from specific states and by a specific side. At handover, the shop verifies a QR code or a 6-digit PIN; the pass is single-use and expires after 6 hours.
- **Why it matters.** Two-sided workflows break when either side can push the object into any state. Here a table (`ALLOWED_FROM`) lists legal origins per transition and `assertTransition` rejects the rest, with a message naming the allowed states. The PIN has to be keyable by hand yet unambiguous, so uniqueness is enforced in the database with a partial unique index that applies only to unused tokens (spent PINs can be reused), and generation retries on a unique-violation. Verification returns a verdict instead of an error so the scanner can show "invalid" as a screen state. Use-by food past its date cannot be claimed or staged at all, while past best-before stays claimable (commit `5cd55e2`).
- **Evidence.** `SpiraAPI/src/donations/enums/donation-status.enum.ts`; `src/donations/donations.service.ts` (1,360 lines): `ALLOWED_FROM`, `assertTransition`, `saveTokenWithFreshPin`, `verifyPickupToken`, `confirm`; `src/donations/entities/pickup-token.entity.ts` (indexes `uq_pickup_token_pin_open`, `uq_pickup_token_code`); `src/database/migrations/1790249427000-AddExpiryKind.ts`. Portal: `src/components/PickupPass.tsx` (real QR via qrcode.react, PIN with copy, enlarge) and `src/routes/retailer/HandoverPage.tsx` (keypad always available; camera scan via the browser's native `BarcodeDetector` where supported).
- **How to say it (EN).** "I modelled the donation as an explicit state machine and gated the handover with a single-use QR/PIN pass, enforcing PIN uniqueness in the database."
- **ES.** "Modelé la donación como una máquina de estados explícita y protegí la entrega con un pase QR/PIN de un solo uso, garantizando la unicidad del PIN en la base de datos."

### 4. Immutable, auditable custody certificates

- **What it is.** Completing a handover issues a numbered certificate (format `FR-REC-YYYY-NNNNNN`) as PDF, with a CSV export for a date range. It freezes the parties' legal names and tax IDs, the address, totals, and the impact figures and factor used.
- **Why it matters.** It is a record that may be reprinted years later, so it copies values instead of pointing at rows that can change. The signatory name degrades through explicit label, linked contact, branch contact, retailer contact (found as a real bug during live testing, commit `5028d1a`). There is no update endpoint for certificates (only GET routes). Only the two parties can read one (highlight 1).
- **Evidence.** `SpiraAPI/src/donation-receipts/donation-receipts.service.ts` (`issueForDonation`, `nextReceiptNumber`, `findForExport`), `receipt-export.service.ts` (pdfkit PDF, CSV with escaping), `donation-receipts.controller.ts` (GET only: list, by-number, export, `:id/pdf`, `:id`); unique index `uq_receipt_number`.
- **How to say it (EN).** "Each completed handover produces a numbered PDF custody certificate that snapshots both parties and the impact figures, so it reprints identically later."
- **ES.** "Cada entrega completada genera un certificado de custodia en PDF, numerado, que congela a ambas partes y las cifras de impacto, de modo que se reimprime idéntico."

### 5. OpenAPI-generated typed client keeps front and back in sync

- **What it is.** The API publishes an OpenAPI spec; the portal's whole data layer is a client generated from it (156 files, about 24,800 lines, never hand-edited). Components never call the API; they go through small `_logic` modules.
- **Why it matters.** It removes a whole class of contract bugs and let one person build both sides quickly. It also shaped the product: two prototype UIs used different names and even different state machines for the same object, and generating from one spec forced a single vocabulary (the Portal README has the mapping table). The session is rebuilt from `GET /api/me` on every load, never from the token contents, so a revoked token fails closed. Real bugs in the toolchain were found and fixed: nullable DTO fields typed explicitly so the client is usable (`aaa458e`), and the committed spec missing the `/api` prefix on every path (`5028d1a`).
- **Evidence.** `SpiraAPI/package.json` scripts `generate:swagger`, `generate:clients`; `src/generate-swagger.ts`; `swagger.json`; `Spira-Portal/src/api-client/`, `src/lib/axios.ts` (token interceptor, 401 handler), `src/lib/api-client.ts`, `src/auth/AuthProvider.tsx`, `src/auth/RequireSide.tsx`, `README.md` ("Why one app", "Architecture").
- **How to say it (EN).** "The portal talks to the API only through a client generated from its OpenAPI spec, so the two sides share one contract."
- **ES.** "El portal habla con la API solo mediante un cliente generado desde su especificación OpenAPI, así ambos lados comparten un único contrato."

### 6. Verified against the deployed system, and the findings were fixed

- **What it is.** Daniel ran a long series of checks over HTTP against the deployed API and database (188 per his commit message; the author does not consider the number important, so do not quote it), and fixed what only showed up there: the Swagger UI shadowing the health route, the spec missing its path prefix, a placeholder on the certificate signatory. Rate limiting was added to the three public routes, and the commit records a mistake caught by running it (a named throttler silently limited the whole API to 5 requests per hour).
- **Why it matters.** Shows habit of testing against reality and writing down what went wrong. Smaller evidence of care: a migration-based schema (no auto-sync in production), TLS and Supabase pooler notes, and about 2,800 lines of design docs.
- **Evidence.** Commits `5028d1a`, `b635700` (message), `9f80589`; `SpiraAPI/docs/deployment.md`, `docs/authentication.md`; `src/auth/auth.controller.ts` (`@Throttle`: 10 sign-ins/min, 5 registrations/hour); registration done in one transaction (`auth.service.ts`).
- **How to say it (EN).** "I tested the deployed API end to end and fixed what only appeared there; I also rate-limited the public routes and documented the deployment."
- **ES.** "Probé la API desplegada de punta a punta y corregí lo que solo aparecía allí; además limité la tasa de las rutas públicas y documenté el despliegue."

Considered and not featured: the map (Leaflet pins with a count of shops left off for lack of coordinates; nice detail but standard), distance search (bounding box in SQL, then haversine in memory; sound but small, `src/common/geo/haversine.ts`, `surplus.service.ts`). Mention them only as supporting details.

## What the author built (role and ownership)

- **Daniel:** the whole API (about 24,300 lines of non-test TypeScript in `src`, 21 entity files, 19 controllers, about 120 routes, 2 migrations, 6 docs files) and the portal (about 10,100 lines of hand-written source in 12 feature logic modules and 17 route pages, plus the generated client). Counted with `git ls-files` and `wc -l`, excluding lock files; area sizes: donations 4.3k lines, recipient portal 3.1k, inventory 2.2k, locations 1.6k, certificates 1.4k, auth 1.2k.
- **Not Daniel's:** the product idea (the team's; three teammates worked on the business side: market segmentation and solidifying the idea) and the UI design. Visual design came from a ready-made design by the two designers, Elena Paoli and Ecem Gonul, whose prototypes were produced with Google AI Studio and handed over. Daniel turned them into a working app on a real backend.
- **AI assistance (stated candidly):** a large share of the code was AI-assisted: "a pseudo vibe-coded app because it was an MVP", in the author's words. The commits agree: AI co-author trailers appear on 17 of the 24 non-merge API commits and on all 14 portal commits, and the repo ships assistant skill files. Suggested phrasing: "built fast as an MVP with AI coding assistants; I designed the domain model and rules, and tested and corrected the result." The test evidence supports that he reviewed it (highlights 1 and 6 came from his own probing).
- **Commit share:** 100% of commits in both repos are his (API: 24 commits plus 13 GitHub merge commits from 13 pull requests; Portal: 14).

## Features

Counts: about 120 route handlers (grep of `@Get/@Post/@Put/@Patch/@Delete` in `src/**/*.controller.ts`: 122; the committed spec said 121 operations on 77 paths). 16 tables in the initial migration. Roles in code: ADMIN, RETAILER, RECIPIENT (NGO).

**Everyone**

- Self-registration as retailer or NGO (one transaction creates organisation, user and contact); sign-in; sign-out that truly revokes the token (denylist by token id, checked on every request); change password; rate limits.

**Retailer (store)**

- First-run branch setup: address, coordinates (browser location possible), opening hours, pickup windows.
- Inventory: log, edit, delete, search, category and urgency facets, cursor paging; "best before" vs "use by".
- Home dashboard; donations: stage lots into the branch's open donation, offer to a partner NGO (needs an active partnership), seal as ready, cancel with a coded reason, return a staged lot to inventory.
- Hand over: verify scanned QR or keyed PIN, confirm, issue the certificate.
- Profile: branch details, period impact report, partner NGOs, warnings for missing pickup windows or map position.

**NGO / food bank**

- Surplus shelf within a radius from verified retailers, with distance, urgency and pickup-window label; per-store page; claim lots; accept or decline retailer offers.
- Handover pass (QR + PIN) per reservation, collection history, Leaflet map with a pin per shop, urgent-alerts panel from the organisation's radius and urgency settings.
- Organisation profile: staff contacts, vehicles, notification preferences, collection base, certificates download.

**Admin:** a role and generic CRUD routes exist; there is no admin UI (out of scope, author).

**Out of scope on purpose (docs):** onward distribution to beneficiaries, matching engine, refresh tokens, email (SMTP variables are placeholders).

**Flow note.** A shelf claim creates the donation directly in ACCEPTED (not READY_FOR_PICKUP as one design doc line says); the code is the source of truth.

## Tech stack

| Layer    | Technology                                                                                                   | Why it is notable                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Frontend | React 19.2, TypeScript 6, Vite 8, Tailwind 4, React Router 7, TanStack Query 5, Axios, Leaflet, qrcode.react | Current major versions; generated typed client                            |
| Backend  | NestJS 12 (ESM), TypeScript 6, class-validator, @nestjs/swagger, @nestjs/throttler, pdfkit                   | DTO validation everywhere; Swagger drives the client                      |
| Database | PostgreSQL 16, TypeORM 1.1, 2 migrations (16 tables, 46 index/check lines in the first one)                  | Partial unique indexes, CHECK constraints, soft deletes, snapshot columns |
| Auth     | JWT (2 h), bcrypt, token denylist table, global guard (public routes opt out), role guard, org scoping       | Real revocation, protected by default                                     |
| Infra    | Docker Compose (Postgres), Render, Supabase, Vercel (`vercel.json` rewrite)                                  | No CI, no API Dockerfile                                                  |
| Testing  | Vitest 4, supertest; 3 bash isolation scripts                                                                | See Missing                                                               |
| Tooling  | pnpm 10, oxlint, Prettier, OpenAPI Generator (needs Java)                                                    |                                                                           |

## Architecture &amp; code practices

**Structure.** The API is a NestJS modular monolith: one module per domain concept (controller, service, DTOs, entity), two role-specific "portal" modules, and a `common/` folder (scoping, pagination, geo, expiry, soft-delete and audit base entities). The portal is feature-sliced: `routes/` (pages), `features/<x>/_logic` (view models, API calls, query keys), `auth/`, `lib/` (one Axios instance). Route trees are gated by side.

**Present**

- Layered backend, validated DTOs, Swagger, generated client.
- Protected-by-default auth, role guard, token revocation, rate limiting, organisation scoping (relevant to mention).
- Database-level integrity: partial unique indexes, CHECK constraints, soft delete, immutable receipts.
- Transaction for registration and for claiming; migrations with `synchronize` off.
- Linting and formatting; strict TypeScript; about 2,800 lines of design and deployment docs; 13 PRs for features and fixes.

**Missing**

- Automated tests are thin: 29 spec files with about 30 cases (about 700 lines), almost all "should be defined" smoke tests; the e2e spec is the Nest default. The real checks are the bash probe scripts and manual live testing. Do not claim "well tested". Relevant to say honestly.
- The handover `confirm` runs several writes without one transaction, and certificate/donation numbers use count + 1 (protected by unique indexes, but a rare concurrent collision would surface as an error, not a retry). Not for the portfolio; an honest answer if asked.
- No CI, no API Dockerfile, no frontend tests. Relevant only if asked.
- No refresh tokens, email, account lockout; no admin UI (not relevant, MVP scope).
- Secrets and env handling: not verified; author says data is not critical. Do not discuss in the portfolio.

## Timeline &amp; effort

- **Git facts:** API 2026-09-16 to 09-24 (37 commits incl. 13 merges); Portal 2026-09-23 to 09-25 (14 commits). 7 distinct active days, 10 calendar days, 51 commits. Session-clustering estimate (gap over 3 h starts a new session, plus 30 min each): about 15-20 hours.
- **Author's statement:** about 3 weeks of work, covering design, planning, implementation and testing (confirmed).
- **Reconciliation:** git shows only when code was committed. Idea, design and team planning happened in the first part of those three weeks, before the first commit, and large commits ("the 35 app endpoints", "Wire every remaining action") bundle days of work. So 3 weeks of project time and 10 days of commits are compatible. Wording: "built over about three weeks, from design and planning to implementation and testing, as part of the course".

## Lessons learned (the author's words, refined)

- "An MVP built with AI is fast, but speed hides gaps: my own probe showed that most of the API leaked data between organisations, so I learned to test the rules, not only the happy path."
- "Modelling both sides of a handover as one state machine, with one rule table, kept two different apps from drifting apart."
- "Locks and database constraints are the honest answer to 'two people click at once'; checks in the browser are not."
- "Testing against the deployed system found bugs that local runs never showed."
- "Generating the client from the API spec is what made it realistic for one person to build both sides."
- "In a team with designers, I worked from their prototypes and had to reconcile two inconsistent models into one; I would write tests earlier next time."

## Portfolio material

**Exists**

- `SpiraAPI/docs/database-schema-v2.md` (has a Mermaid ER diagram), `database-schema.md`, `authentication.md`, `deployment.md`, `frontend-integration-plan.md`, `cost-model.md` (contains discussion of AI features that are not for the portfolio; skip it).
- `SpiraAPI/swagger.json` and Swagger UI at `/docs` on a running API.
- Portal README: architecture and vocabulary-merge table. Logo: `Spira-Portal/src/components/SpiraLogo.tsx`, `public/favicon.svg`.
- Live URLs: portal `https://spira-portal.vercel.app`, API `https://spiraapi.onrender.com` (confirmed by the author, may link). No screenshots exist in any repo.

**Still to capture** (run locally with seeded demo data: 2 retailers with branches and pinned coordinates, 2 NGOs with a collection base, a dozen lots in varied categories including one use-by lot past its date, one past best-before, one donation per status)

1. Retailer inventory: list with category and urgency facets, one lot marked use-by (card image candidate).
2. Retailer donations: a staged batch ready to offer, then one sealed as ready.
3. Retailer handover screen: keypad with a PIN typed, and the verified-result state.
4. NGO surplus shelf with distances and urgency badges, filtered by radius.
5. NGO store page mid-claim, plus the "taken first" 409 message (claim the same lot from two sessions).
6. NGO pickup pass: QR and PIN, plus the enlarged view and the "collected" state.
7. NGO map with several pins and the "shops without coordinates" note.
8. A generated certificate PDF (page one) from `GET /api/donation-receipts/:id/pdf`.
9. Swagger UI at `/docs` showing the route groups.
10. Diagram to draw: the donation state machine (from the enum comment and `ALLOWED_FROM`), and a one-picture view of the claim transaction (lock, check, write, 409).

## Draft portfolio copy

**English**

- Kind label: Academic project · 2026
- Name: Spira
- One-liner: Food-surplus platform where shops list expiring stock and NGOs claim it and collect it with a QR/PIN pass. (113 chars)
- Tags: NestJS, PostgreSQL, TypeORM, React, TypeScript, OpenAPI, Leaflet
- Case study outline:
  - **The problem.** Shops throw away food close to its date while charities cannot see what is nearby or prove a handover. Our six-person team at Harbour.Space (course "From Zero to Hero") designed Spira as a two-sided platform that could grow into a real initiative. The idea was well received, mostly for its business case, and it held up as a solid MVP.
  - **My role.** I built all the technology: the whole API alone, and the web app. The UI came from a design by two teammates, Elena Paoli and Ecem Gonul, while three others worked on the business side (market segmentation, shaping the idea). It was a fast MVP built with AI coding assistants; I owned the data model, the rules and the testing.
  - **What I built.** A NestJS and PostgreSQL API (about 120 routes, role-based access, certificate PDFs) and one React app serving both retailers and NGOs through a client generated from the API's OpenAPI spec. Shops log and offer surplus; NGOs browse by distance, claim, and collect with a QR or PIN; each handover issues a numbered certificate.
  - **Key decisions.** One state machine for the whole donation; row locks in a transaction for claims; a unique PIN enforced by the database; certificates that snapshot their data; one scoping layer for organisation data; one app for both sides built from one generated contract.
  - **What I learned.** My own probe showed the first version leaked data between organisations, which I then fixed and kept a script to re-check. I learned to test the rules, not just the happy path, and that locks and constraints, not UI checks, prevent double-claims. Next time I would add automated tests earlier.

**Español**

- Etiqueta: Proyecto académico · 2026
- Nombre: Spira
- Descripción: Plataforma de excedentes: los comercios publican productos por caducar y las ONG los reclaman y recogen con un pase QR/PIN. (about 128 chars)
- Tags: NestJS, PostgreSQL, TypeORM, React, TypeScript, OpenAPI, Leaflet
- Esquema del caso de estudio:
  - **El problema.** Los comercios desperdician comida cercana a su fecha mientras las ONG no ven qué hay cerca ni pueden acreditar una entrega. Nuestro equipo de seis en Harbour.Space (curso "From Zero to Hero") diseñó Spira como plataforma de dos lados con potencial de iniciativa real. La idea tuvo muy buena acogida, sobre todo por su propuesta de negocio, y resultó un MVP sólido.
  - **Mi rol.** Construí toda la tecnología: la API completa en solitario y la aplicación web. La interfaz partió de un diseño de Elena Paoli y Ecem Gonul, del equipo, y otras tres personas trabajaron la parte de negocio (segmentación de mercado, definición de la idea). Fue un MVP rápido hecho con asistentes de IA; yo me encargué del modelo de datos, las reglas y las pruebas.
  - **Qué construí.** Una API en NestJS y PostgreSQL (unas 120 rutas, acceso por roles, certificados en PDF) y una app React para comercios y ONG que usa un cliente generado desde la especificación OpenAPI. Los comercios registran y ofrecen excedentes; las ONG los buscan por distancia, los reclaman y los recogen con QR o PIN; cada entrega emite un certificado numerado.
  - **Decisiones clave.** Una máquina de estados para toda la donación; bloqueo de filas en una transacción para los reclamos; PIN único garantizado por la base de datos; certificados que congelan sus datos; una capa de aislamiento por organización; una app para ambos lados con un único contrato generado.
  - **Qué aprendí.** Mi propia prueba mostró que la primera versión filtraba datos entre organizaciones; lo corregí y conservé un script para volver a comprobarlo. Aprendí a probar las reglas y no solo el caso feliz, y que son los bloqueos y las restricciones, no la interfaz, los que evitan reclamos dobles. La próxima vez añadiría pruebas automáticas antes.
