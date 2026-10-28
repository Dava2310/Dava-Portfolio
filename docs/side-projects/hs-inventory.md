# IT Assets Tracker (hs-inventory)

Version 2. Rebuilt after the author answered the v1 open questions, with a deeper read of the code. Facts come from fresh read-only clones of the three repos (nothing was run). "(inferred)" marks anything not stated by the author or proven by the repos.

## At a glance

| Field           | Value                                                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type            | Full-stack web app: one REST API and two interchangeable frontends (Next.js and Vue 3)                                                                                                                                                                                              |
| Context         | Solo academic project for the "Modern Frontend Frameworks" course at Harbour.Space (Barcelona; the institution is named on the portfolio, city included in the English and Spanish copy). The teacher asked students to build the same frontend twice with two different frameworks |
| Author's role   | Everything: API, both frontends, tests, CI, tooling. Solo project                                                                                                                                                                                                                   |
| Status          | Finished course deliverable. Last commit 2026-04-03. The deployed API is currently not responding (cold start or down); links may be shown but need a check before publishing                                                                                                       |
| Repos           | [API-HS-2026](https://github.com/Dava2310/API-HS-2026) (NestJS), [NextJS-HS](https://github.com/Dava2310/NextJS-HS) (Next.js), [VueJS-HS](https://github.com/Dava2310/VueJS-HS) (Vue 3). One project, three repos, one portfolio entry                                              |
| Period          | Git: 2026-03-16 to 2026-04-03 (19 calendar days, 10 distinct active days). Author: "about 3 weeks". Consistent                                                                                                                                                                      |
| Effort estimate | About 51 h combined, estimated from commit clusters (see Timeline). Not tracked time                                                                                                                                                                                                |
| Contributors    | Daniel only. 139 commits across the three repos (API 16, Next.js 74, Vue 49). "Daniel Vetencourt" and "Dava2310" are the same person (GitHub merge-button identity)                                                                                                                 |
| Outcome         | Nothing stated by the author (no grade given). Do not claim one                                                                                                                                                                                                                     |

Live URLs (from repo metadata and READMEs). The author allows linking them, but the API is not working right now, so re-check before publishing:

- API + Swagger UI: [https://api-hs-2026.onrender.com/api](https://api-hs-2026.onrender.com/api) (Render free tier, cold start up to about 60 s)
- Next.js app: [https://itassetstracker.vercel.app](https://itassetstracker.vercel.app)
- Vue app: [https://vueitassetstracker.vercel.app](https://vueitassetstracker.vercel.app)

Both frontends have the API URL hard-coded in `lib/axios.ts` (Next) and `src/lib/axios.ts` (Vue), so while the API is down, the live frontends show nothing.

## Summary

IT Assets Tracker manages a company's IT equipment: assets, categories and the employees who hold them, with a dashboard of availability. A NestJS + PostgreSQL API serves the data and publishes an OpenAPI contract. From that contract a typed client is generated, and two frontends (Next.js and Vue 3) use it to build the same app. The project is an academic exercise, with fake data, built in about three weeks by one person.

## The problem and the idea

The course goal, in the author's words: do not stick to one framework, build the same frontend twice with different frameworks. The author added his own goals: apply as many good practices as possible on the API side (structure, validation, soft deletes, CI) and learn how to test a frontend properly (unit, component and end-to-end).

The domain problem is simple and deliberately so: track which equipment a company owns, who has it, and how much is free. The simple domain left time for the real subject, which was the engineering around it and the framework comparison. Authentication and roles were deliberately out of scope to keep the project inside three weeks (see "Not for the portfolio" below for how to word it).

## Impact highlights

Ranked by how impressive and how verifiable they are for a hiring manager.

### 1. One API contract drives both frontends (OpenAPI to generated typed client)

- What it is: the API describes itself in an OpenAPI file. A generator turns that file into a typed TypeScript client (one class per controller, one model per DTO). Both frontends use that client, so calling the API is a typed method call, for example `apiClient.assets.assetsControllerFindAll()`.
- Why it matters: it removes hand-written fetch code and keeps three codebases in sync with one source of truth. The same data layer could be ported from React to Vue with almost no change. The author names it as the most valuable decision of the API.
- Evidence:
  - Pipeline in `API-HS-2026`: `src/generate-swagger.ts` boots the Nest app, builds the Swagger document with `SwaggerModule.createDocument` and writes `swagger.json` (1,403 lines, 23 operations, matching the 23 routes). `package.json` scripts `generate:swagger` and `generate:clients` (generator `typescript-axios` through `@openapitools/openapi-generator-cli`, version pinned to 7.13.0 in `openapitools.json`, options in `openapi/config.json`).
  - Both frontends commit the generated output: `NextJS-HS/api-client/` and `VueJS-HS/src/api-client/` (about 3,700 and 4,600 lines of generated TS, counted with `wc -l`; the Vue copy is longer only because Prettier reformatted it).
  - Each frontend wraps it the same way in `lib/api-client.ts`: one shared axios instance plus `new AssetsApi(config, undefined, axiosInstance)` for each controller.
  - The response DTOs carry `@ApiProperty` metadata (examples, min/max lengths, nullability), so the generated models are precise.
  - History: the client was regenerated when the API changed (Next.js commits "Updated api-client" 2026-03-20 and "Updated api specification" 2026-03-30).
- Honest limit: regeneration is a manual copy (generate in the API repo, copy into each frontend). There is no CI step that checks the copies are current. The Vue README calls it "auto-generated"; accurate for the code, not for the delivery.
- How to say it (EN): "The NestJS API publishes an OpenAPI spec, and I generated a typed client from it that both frontends use, so every API call is type-checked and the two apps cannot drift from the backend."
- Cómo decirlo (ES): "La API en NestJS publica una especificación OpenAPI y de ella generé un cliente tipado que usan los dos frontends, así cada llamada a la API se verifica en tiempo de compilación y las apps no se desvían del backend."

### 2. A frontend test pyramid with unit, component and end-to-end layers, in both frameworks

- What it is: the author's own "biggest lesson". Each frontend has pure-logic unit tests (form schemas, mappers, chart helpers), component tests (forms, tables, metric cards), Playwright end-to-end tests, and a Storybook catalog, all wired into CI.
- Why it matters: testing is where the author deliberately invested. Test code is a large share of the frontends, and the layers each catch a different kind of bug.
- Evidence (counted by grepping `it(`/`test(` lines in `*.test.*`, `*.spec.*` files; `it.each` would be undercounted):
  - Next.js: 77 unit/component tests in 10 files plus 7 e2e tests in 4 files. Vue: 93 unit/component tests in 11 files plus 6 e2e tests in 4 files.
  - Test code size (`wc -l`): Next 822 lines unit/component + 491 e2e; Vue 1,289 lines unit/component + 362 e2e.
  - Unit layer: for example `NextJS-HS/app/employees/_logic/index.test.ts` (21 tests on the Zod form schema: name length, accents and apostrophes accepted, digits rejected, 10-character alphanumeric code, email, password rules) and `VueJS-HS/src/views/dashboard/composables/dashboardUtils.spec.ts` (15 tests on month sorting and the 3m/6m/year range filter).
  - Component layer (Testing Library for React, Vue Test Utils for Vue): `section-cards.test.tsx` (the five metric cards, one-decimal formatting of 33.333 as 33.3%, "N/A" fallback), `form.test.tsx` (create button, fields in the dialog, no trigger in edit mode), `data-table.test.tsx` (6 tests). External pieces are mocked (toast library, router, `getAssets`).
  - E2E layer: `e2e/{assets,categories,employees}.spec.ts` plus an example. Real browser flows: open the create dialog, submit, wait for a success or error toast (a `Promise.race` between the two so a failure reports the real error text instead of a timeout), delete a row, unassign an employee. Cold-start tolerance is explicit (3 min test timeout, 2.5 min toast window, documented in comments for Render's free tier). Asset tests run in `serial` mode and `test.skip` themselves when the database is empty.
  - A good small story: the commit "test(e2e): remove category delete test, deletion blocked when assets exist" (2026-04-03) shows an e2e test exposing an interaction between the API's business rule (cannot delete a category in use) and the UI flow.
  - Storybook 10 in both repos with the a11y addon: Button, Badge, Input, Card, DataTable and a Colors palette story (`NextJS-HS/stories/`, `VueJS-HS/src/stories/`).
- Honest limit: the e2e tests run against the live deployed API and its shared database (no mocked network, no per-run database). They therefore depend on the API being up, and the create tests leave data behind. Unit/component tests are fast and isolated. The backend has no behaviour tests (see below).
- How to say it (EN): "I built a three-layer frontend test suite in both apps, with more than 170 unit and component tests, Playwright end-to-end flows against the real API, and a Storybook catalog, all running in CI."
- Cómo decirlo (ES): "Armé una batería de pruebas en tres niveles en ambas apps, con más de 170 pruebas unitarias y de componentes, flujos end-to-end con Playwright contra la API real y un catálogo en Storybook, todo ejecutándose en CI."

### 3. A same-app, two-framework comparison with a real, evidence-backed conclusion

- What it is: the course exercise, done with measurable parity. The data layer, schemas, mappers and even one whole e2e spec are the same in both apps, which isolates what the frameworks really change.
- Why it matters: it shows judgement, not just tool use. The author concluded that Next.js was the wrong tool here and that React + Vite would have been the right choice, and the code backs that up (details in "Next.js vs Vue, what the code shows" below).
- Evidence:
  - `NextJS-HS/app/assets/_logic/index.ts` and `VueJS-HS/src/views/assets/composables/useAsset.ts` contain the same view-model type, mapper (`toAssetVM`), query key and API call functions, and the same Zod rules (SKU regex, "model and brand must differ", "SKU must not match the name").
  - `NextJS-HS/e2e/assets.spec.ts` and `VueJS-HS/e2e/assets.spec.ts` are identical once whitespace and trailing commas are ignored (normalised diff of 0 lines); the categories and employees specs differ moderately.
  - Both apps have 6 routes and the same shadcn component set, with the same page structure.
  - In the Next app, no page fetches data on the server: every domain page is a client component wrapped by a thin server `page.tsx` that only sets the title metadata (for example `app/assets/page.tsx` plus `assets-page.tsx`). The app uses Next's App Router but none of what justifies it.
- How to say it (EN): "I built the same dashboard in Next.js and Vue 3 against one API; with a client-only data layer, Next.js added a server/client split without benefit, and the lesson was that React + Vite would have fit better."
- Cómo decirlo (ES): "Construí el mismo panel en Next.js y en Vue 3 sobre una sola API; con una capa de datos solo de cliente, Next.js añadía una separación servidor/cliente sin beneficio, y aprendí que React + Vite habría encajado mejor."

### 4. API design that keeps rules in one place: layered modules, strict DTO validation and safe soft deletes

- What it is: five feature modules (employees, categories, assets, roles, statistics) with the same layout and thin controllers. Validation happens at the edge, business rules live in services, and the database enforces the last line of defence.
- Why it matters: this is the "very well structured" API the author describes, and the details show care about edge cases, not only CRUD.
- Evidence:
  - Global `ValidationPipe` with `transform`, `whitelist` and `forbidNonWhitelisted` in `src/main.ts`: unknown fields are rejected rather than silently dropped.
  - DTOs with explicit messages (`create-asset.dto.ts`: `@Length(3, 20)` on SKU, `@IsPositive` on IDs). Update DTOs are derived with `PartialType(CreateAssetDto)`, so create and update cannot drift apart.
  - Interface usage: `CrudRepository<T>` (`src/common/use-case/crud-repository.ts`) with `findValid(id)`, implemented by all four entity services (`implements CrudRepository<Asset>` and so on). Each service parses the ID and throws a typed `NotFoundException` the same way.
  - Soft delete done correctly: `@DeleteDateColumn` on the entities, `softDelete()` in services. Because unique columns (SKU, employee code, email, category code) remain unique at database level even for deleted rows, the duplicate checks use `withDeleted: true` (`findBySku`, `findByEmail`, `findByCode`) so the user gets a clear 400 instead of a database error. There are matching "excluding id" variants for updates.
  - Integrity rules around soft delete: deleting an employee first clears their assets' employee link (`AssetsService.cleanEmployeeAssets`, FK also `onDelete: 'SET NULL'`); deleting a category with active assets is blocked with a message that includes the count (`CategoriesService.remove`).
  - Security detail: `password` has `@Column({ select: false })` and `@ApiHideProperty()` on the Employee entity, and responses go through response DTOs. The hash cannot leak through a list or a Swagger model. Passwords are hashed with bcrypt (cost 10) on create.
  - Reporting queries done in SQL, not in memory: `getAssetCreationTimeSeriesByYear` groups by month in PostgreSQL, always returns 12 months (zero-filled), and validates the year. `findMostPopularByAssetCount` joins only non-deleted assets and breaks ties by id deterministically (the 2026-04-01 commit "Fixing bug on query for Most Popular Category" fixed it).
  - Module graph: circular dependency between Assets and Employees resolved with `forwardRef`; `StatisticsService` composes the Assets and Categories services instead of querying tables directly.
- Honest limit: services do several awaited calls without a database transaction, and `statistics.assetsMetrics()` loads all assets to count them (fine for 500 rows).
- How to say it (EN): "I structured the NestJS API as feature modules with strict DTO validation, a shared repository interface and soft deletes that keep unique constraints and relationships consistent."
- Cómo decirlo (ES): "Estructuré la API en NestJS como módulos por funcionalidad, con validación estricta de DTOs, una interfaz de repositorio compartida y borrado lógico que mantiene la coherencia de restricciones únicas y relaciones."

### 5. Automated quality gates in the frontends: CI, pre-commit hooks and deliberate pipeline testing

- What it is: both frontends run lint, format check and unit tests on every pull request, then a second job runs Playwright against a production build. A Husky pre-commit hook runs lint-staged. The work followed a branch and pull-request flow.
- Why it matters: it is the workflow of a team, applied by a solo student. The author also tested the safety net itself.
- Evidence:
  - `.github/workflows/ci.yml` in both repos: job 1 "Lint, Format and Test", job 2 "Playwright Tests" (`needs: ci`) that first polls the API `/api/health` endpoint every 15 s for up to 20 tries (so a sleeping Render instance does not fail the build), installs browsers, builds, runs Playwright and uploads the HTML report as an artifact for 30 days. Retries are 2 on CI.
  - `.husky/pre-commit` runs `npx lint-staged` (ESLint + Prettier on staged files); `lint-staged` config in `VueJS-HS/package.json`.
  - A `GET /health` endpoint was added to the API for this purpose.
  - PR-based flow: Next.js has 14 numbered pull requests merged from `develop`, Vue 8 (counted from merge commits).
  - Pipeline tested on purpose: commits such as "Test for CI failure" and "Making the test to fail" followed by reverts show the author checking that CI really fails when it should.
  - Vue CI runs Playwright across all three browser projects (chromium, firefox, webkit; commit "run playwright tests on all browsers in CI"). The Vue Playwright config serves the app through `pnpm run build && pnpm run preview`, so e2e runs against a type-checked production build.
- Honest limit: the API repo has neither CI nor Husky (the author's "CI/Husky" strength is true of the frontends only). The `check:format-lint` script exists in the API but nothing runs it automatically. State this accurately in any copy: CI and Husky are on the frontends.
- How to say it (EN): "Both frontends run lint, formatting and tests on every pull request, plus a Playwright job that waits for the API to wake up and publishes the test report."
- Cómo decirlo (ES): "Ambos frontends ejecutan lint, formato y pruebas en cada pull request, además de un job de Playwright que espera a que la API despierte y publica el reporte de pruebas."

### 6. Data and deployment that make the project reproducible

- What it is: the API ships with Docker, a Docker Compose stack with a database health check, and migrations that seed a realistic fake dataset.
- Why it matters: anyone can run the full system in a few commands with believable data, which also made the dashboard and tests meaningful. This is a supporting point, not a headline.
- Evidence:
  - `Dockerfile`: two-stage Node 22 Alpine build (compile, then production-only dependencies). `docker-compose.yml`: Postgres 16 with `pg_isready` health check and `depends_on: service_healthy`; `docker-compose.db.yml` for database only.
  - Migrations in `src/database/migrations/` (5 files, 1,089 lines): clean (FK-ordered TRUNCATE), roles, 50 categories, employees, and 500 assets (50 categories x 10: 300 assigned and 200 free, by design, per the comment in `SeedAssets`). Each has a `down` that removes only its own rows (the clean step cannot be reversed, and says so).
  - `DATABASE_URL` or individual variables, `.env.example` committed, configurable CORS origins, JSON structured logging.
- Honest limit: `synchronize: true` is always on in `app.module.ts`, so the schema is created by TypeORM and the migrations only seed data. The author said this did not matter for an academic project. Do not present the migrations as schema migrations.
- How to say it (EN): "The API runs with one Docker Compose command and seeds 500 fake assets, 50 categories and a set of employees through reversible migrations."
- Cómo decirlo (ES): "La API se levanta con un solo comando de Docker Compose y carga 500 activos, 50 categorías y un grupo de empleados de ejemplo mediante migraciones reversibles."

### Not highlighted, because it is thin

- API tests: 12 `.spec.ts` files, each with a single "should be defined" test (or the Nest starter check). Scaffold only, per the author. Never say the API is tested.
- Roles module: full CRUD in the API, but roles are only a field on the employee (no access control), and the Next.js app deleted its roles UI in the final cleanup (commit 2026-04-02).
- `jwt.config.ts`, `cookie-parser` and JWT/SMTP variables in `.env.example`: leftover configuration, no auth code uses them.
- Drag-and-drop row reordering in the dashboard table: a UI nicety, local state only (not saved), so not featured.

## What the author built (role and ownership)

- Everything, solo. All commits in all three repos are by the author (two identities for one GitHub account). Contributions by repo (commits): API 16, Next.js 74, Vue 49.
- Authored code (`wc -l` on tracked files, excluding lock files, generated client and docs):
  - API: about 2,690 lines of application TypeScript in `src` plus 1,089 lines of seed migrations and 233 lines of scaffold specs.
  - Next.js: about 2,970 lines of app code (pages, logic, forms, columns, shell), 822 lines of unit/component tests, 491 lines of e2e tests. Another 3,329 lines are shadcn/ui generated components.
  - Vue: about 3,026 lines of app code, 1,289 lines of unit/component tests, 362 lines of e2e tests. Another 3,967 lines are shadcn-vue generated components.
  - Generated (not authored): the OpenAPI client, about 3,700 lines in Next and 4,600 in Vue.
- Third-party starting points to be honest about: shadcn/ui and shadcn-vue component code (copied into the repo by their CLI), the shadcn dashboard layout as the visual starting point of both UIs (confirmed by the author), and framework scaffolds. The domain code, the data layer, tests, CI and API are the author's.
- Course framing: teacher-assigned exercise (two frameworks); scope, domain and engineering choices were the author's.

## Features

Confirmed in the code. There are no login screens or per-role permissions (out of scope by design). All users see everything.

Dashboard (both frontends)

- Five metric cards from `GET /statistics/assets-metrics`: total, assigned, available, availability percentage, most popular category.
- Interactive area chart of assets created per month for a chosen year, with 3-month, 6-month and full-year ranges (`GET /assets/creation-timeseries/:year`).
- Assets table with drag-and-drop row ordering (dnd-kit).

Assets

- List with filter by name or SKU, sorting, pagination; create, view, edit on dedicated pages (`/assets/new`, `/assets/:id/edit`); soft delete.
- Fields: SKU (unique, 3 to 20 characters), name, description, model, brand, category (required), custodian employee. Note: `CreateAssetDto` requires `employeeId`; an asset can only become unassigned afterwards via "Free" (`PATCH /assets/:id/free`, 400 if nobody holds it).
- Extra client-side rules on top of the API: SKU format, "model and brand must differ", "SKU must not match the name".

Employees

- List, create (dialog), view/edit, soft delete. Full name, 10-character unique code, unique email, password (min 8, hashed), role. Deleting an employee releases their assets.

Categories

- List, create, edit, soft delete. Unique 10-character code and name. Deletion is blocked while active assets use the category.

Roles

- API only: create, list, get, update (no delete route). Seeded: admin, manager, employee, it_staff, finance. Not used for access control, not shown in either UI.

Other

- `GET /health` (used by CI), toast feedback on every operation, light/dark theme support in the Next.js app (next-themes; the Vue theme toggle was not verified).

Counts (decorator count in controllers): 23 HTTP routes (employees 5, categories 5, assets 7, roles 4, statistics 1, health 1), 4 entities (Employee, Asset, Category, Role), 6 pages per frontend.

## Tech stack

| Layer                        | Technology (package files)                                                            | Why it is notable                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| API                          | NestJS ^11, TypeScript ^5.7                                                           | Module-per-domain, DI with `forwardRef` for the circular dependency |
| Validation                   | class-validator ^0.15, class-transformer ^0.5                                         | Global strict pipe: whitelist plus reject unknown fields            |
| API docs / contract          | @nestjs/swagger ^11, committed `swagger.json`                                         | Source of the generated client                                      |
| Database                     | PostgreSQL 16 (Docker), TypeORM ^0.3.28, `pg` ^8.20                                   | Soft deletes, SQL aggregations, 5 seed migrations                   |
| Passwords                    | bcrypt ^6                                                                             | Hash only; hidden from queries and Swagger                          |
| API tooling                  | Docker (2-stage Node 22), Compose, ESLint 9, Prettier 3, Jest ^30 (scaffold)          |                                                                     |
| Frontend A                   | Next.js 16.1.6 (App Router), React 19.2.3, Tailwind 4, shadcn/ui (radix-ui)           | Used as a client-only SPA in practice                               |
| Frontend B                   | Vue ^3.5, Vite ^8, vue-router ^5, Tailwind ^4.2, shadcn-vue (Reka UI ^2.9)            | Type-checked build with `vue-tsc`                                   |
| Generated client             | OpenAPI Generator 7.13.0, `typescript-axios`, axios                                   | Shared contract                                                     |
| Server state                 | TanStack Query v5 (react-query / vue-query)                                           | Same cache keys and staleTime in both                               |
| Forms                        | React Hook Form + Zod ^4 (Next); VeeValidate + Zod ^3.25 (Vue)                        | Same schema rules in both                                           |
| Tables / charts              | TanStack Table v8 both; Recharts 2.15.4 (Next), Unovis (Vue)                          |                                                                     |
| Tests                        | Vitest ^4 + Testing Library (Next) / Vue Test Utils (Vue); Playwright ^1.58/1.59      | See highlight 2                                                     |
| Component catalog            | Storybook 10 + a11y addon (both)                                                      |                                                                     |
| Tooling                      | Husky 9 + lint-staged, ESLint 9 (Next) / 10 (Vue), Prettier 3; npm (Next), pnpm (Vue) |                                                                     |
| CI                           | GitHub Actions (frontends only), Node 20                                              | API-wake health poll                                                |
| Hosting (inferred from URLs) | Render (API), Vercel (frontends)                                                      |                                                                     |

## Architecture &amp; code practices

Structure

- API (`API-HS-2026/src`): one folder per domain with `*.module.ts`, `*.controller.ts`, `*.service.ts`, `dto/` (create, update, response), `entities/`. Shared `common/` (message DTO, `CrudRepository`), `config/` (per-concern config through `@nestjs/config`), `database/` (data source, migrations). Barrel `index.ts` files. Controllers are thin; services own the rules; responses are mapped through response DTOs, never raw entities.
- Next.js: `app/<module>/{_components,_logic,*-page.tsx,page.tsx}`. `_logic/index.ts` holds the view-model type, mapper, query key, API calls and the Zod schema; `page.tsx` is a server wrapper for metadata, `*-page.tsx` is the client page.
- Vue: `views/<module>/{components,composables}` with `useX.ts` playing the role of `_logic`. Same layers, different folder names.
- Pattern shared by both: generated client, then a view-model mapper (API DTO to UI type, for example turning `deletedAt` into an Active/Inactive status), then TanStack Query, then components. Errors are normalised in an axios interceptor plus `throwError`, so the UI shows the API's own message in a toast.

Present

- Strict DTO validation and typed domain errors (400 for duplicates, 404 for invalid or deleted IDs, `ParseIntPipe`).
- Soft deletes plus unique constraints plus `withDeleted` duplicate checks.
- Response DTOs, password excluded at the entity level.
- OpenAPI contract and generated client.
- Seed migrations with reversible `down`, Docker, Compose with health check.
- Frontend unit, component, e2e tests, Storybook, CI, Husky, branch plus PR workflow.
- Comments and JSDoc (some in Spanish, some in English).

Missing (R = relevant to mention per the author's rules, N = not relevant)

- N (out of scope by design): authentication and authorization. Present it as out of scope for a 3-week project, never as planned.
- R (state honestly if tests come up): API behaviour tests; only scaffold specs exist. The real testing is on the frontends, which is the author's main lesson.
- N: CI on the API repo, pagination (all list routes return everything; tables paginate on the client), rate limiting and helmet, global exception filter, schema migrations instead of `synchronize: true`, CORS default `*`, API README (still the Nest starter text). These are acceptable for an academic scope; mention only if asked.
- R (lesson learned): choosing Next.js for a client-only app; the generated client is copied by hand rather than regenerated in CI.
- N: transactions around multi-step writes.

## Next.js vs Vue, what the code shows

Same app, same API, same UI kit, same test tooling. What actually differed:

- Data fetching and state: identical on purpose. TanStack Query in both with the same keys (`['assets']`) and `staleTime` of 5 minutes, and the same optimistic cache update after create/update (`queryClient.setQueryData`). The Next app has no server-side fetching at all; each route is `page.tsx` (server, only sets `metadata.title`) wrapping a `'use client'` page. Vue does the same job with `useHead({ title })` from `@unhead/vue`, with less ceremony. No global store in either; server state is the only state.
- Reactivity and forms: React Hook Form with `Controller` and `zodResolver` versus VeeValidate with `toTypedSchema` and `v-slot` fields. Same Zod rules. Vue forms are plain `<script setup>` with `computed` and `watch`; the React side needs `useEffect` for the same "toast when loaded" behaviour.
- Routing: Next file-based routes (6 route folders) versus an explicit vue-router table of 7 lines in `src/router/index.ts`. Both are easy at this size.
- Tooling and dev experience: Next 16 (React 19) ships its own compiler/server; Vue runs on Vite 8 with `vue-tsc` type-checking in the build. Next uses npm, Vue pnpm (the author switched Next from pnpm to npm on 2026-03-20; he asked not to mention the reason). Dependency counts are similar (about 25 runtime dependencies each, counted from `package.json`).
- Ecosystem maturity: the Vue drag-and-drop uses `dnd-kit-vue` ^0.0.2 and `@dnd-kit/abstract` ^0.1.21, pre-1.0 packages, while the React side uses stable `@dnd-kit/core`/`sortable`. Charts are Recharts (React) versus Unovis (Vue). Both UI kits (shadcn/ui and shadcn-vue) expose the same components.
- Author's verdict (his words, backed by the above): Vue felt smoother because all backend logic lives in NestJS, so a framework with server rendering, routing conventions and server components added nothing. With a separate API, a plain SPA is the better fit, and the author would choose React + Vite over Next.js next time.
- Timeline caveat: the Vue app was built second (its real scaffold is from 2026-04-02), reusing the data layer and rules from the Next app, so the Vue experience benefited from a finished design. Say this when comparing, to stay fair. Vue also ended with more unit tests (93 versus 77) because its composables test more of the form schemas.

## Timeline &amp; effort

Git facts (author dates, UTC days):

| Repo        | Commits | Active days | Sessions | Estimated effort | First      | Last       |
| ----------- | ------- | ----------- | -------- | ---------------- | ---------- | ---------- |
| API-HS-2026 | 16      | 9           | 10       | about 11.8 h     | 2026-03-16 | 2026-04-03 |
| NextJS-HS   | 74      | 9           | 11       | about 30.3 h     | 2026-03-16 | 2026-04-03 |
| VueJS-HS    | 49      | 5           | 6        | about 9.7 h      | 2026-03-19 | 2026-04-03 |
| Combined    | 139     | 10          | 15       | about 51 h       | 2026-03-16 | 2026-04-03 |

- Method: commits less than 3 h apart form a session; each session counts last minus first commit plus 30 minutes. It is an estimate, not tracked time; research, lectures and offline thinking are not counted, and long overnight stretches may be overestimated.
- The author states "about 3 weeks"; git shows 19 calendar days with work on 10 of them. They reconcile: three course weeks, with the work concentrated in a few intense days.
- Story in the history: API CRUDs on 03-16 to 03-19, statistics module and time series on 03-25, seeds and fixes on 04-01 to 04-03. Next.js: UI and testing foundations first (03-16 to 03-23), Playwright on 03-30, a big finishing push on 04-02/03 (unit tests, Storybook, README). Vue: a counter demo with the tooling set up on 03-19 to 03-23, then the whole app ported on 04-02 and tested and documented on 04-03.
- Unfinished direction that was dropped: a "register form" was added in Next.js on 03-25 and reverted on 03-30, consistent with the author's decision to leave authentication out of scope.

## Lessons learned (the author's words, refined)

- "Frontend testing was the biggest lesson. Unit tests on schemas and mappers, component tests with mocked dependencies, and end-to-end tests with Playwright each catch different problems, and I would plan for them from day one next time."
- "Next.js was the wrong choice for this project. When the whole backend lives in NestJS, Next's server features add complexity without benefit. I should have used React with Vite."
- "A generated OpenAPI client was the best decision on the API side. It let the frontends call the API very easily and caught contract changes at compile time. Next time I would automate the regeneration instead of copying files."
- "Structure pays off: modules with the same layout, DTO validation, shared interfaces and soft deletes made each new endpoint fast to add."
- "End-to-end tests that depend on a live, free-tier API are slow and fragile (cold starts of 60 seconds and shared data). With more time I would run them against a local, seeded test database."
- "I deliberately left authentication out to finish in three weeks; scoping is also an engineering skill."

## Portfolio material

Exists

- `NextJS-HS/next-dashboard.png`, `VueJS-HS/vue-dashboard.png`: dashboard screenshots embedded in each README.
- Live demos and Swagger UI (to re-check, see At a glance), `API-HS-2026/swagger.json`.
- Generated per-endpoint docs: `NextJS-HS/api-client/docs/*.md`, `VueJS-HS/src/api-client/docs/*.md` (generated, not authored).
- Frontend READMEs with overview, tech table and scripts; Storybook stories in `NextJS-HS/stories/` and `VueJS-HS/src/stories/`.

Hero image: the dashboard with its charts (the author's pick), followed by the forms showing validation errors. Still to capture (the author will run the app locally; all data is fake, confirmed by the author, and comes from the seed migrations):

1. Dashboard, Next.js, light and dark: five metric cards plus area chart on the "year" range, current seeded data (500 assets).
2. Dashboard, Vue, same state, to show side-by-side parity.
3. Assets list with the filter box containing "LPT" (laptop SKUs) and the row action menu open ("Edit", "Unassign Employee", "Delete").
4. Asset edit form with a validation error visible (type a SKU with a space, or equal model and brand).
5. Employees list with the "Create Employee" dialog open and an invalid code (fewer than 10 characters) to show inline errors.
6. Categories list with a failed delete toast on a category that still has assets ("Cannot delete this category because it has N active asset(s)").
7. Swagger UI at `/api` with the assets section expanded, and one operation's schema showing examples.
8. Terminal capture of the CI run (both jobs green) or the GitHub Actions page for either frontend, including the "Wait for API" step.
9. Playwright HTML report with the passing tests (run `test:e2e` locally against a local API).
10. Storybook: DataTable and Colors stories.
11. Diagrams to draw (not in repos): (a) pipeline "NestJS entities and DTOs, swagger.json, generated client, Next and Vue apps"; (b) the test pyramid with counts per layer; (c) simple ER diagram of Role, Employee, Asset, Category (derivable from the entities).
12. Optional short GIF: create an asset, see the toast, see the table update.

## Not for the portfolio (author's instructions)

- Do not mention the `.claude` folder or any AI-assisted workflow.
- Authentication and roles: present as deliberately out of scope for a 3-week project, never as planned or unfinished.
- Do not say the API is tested; say the real tests are on the frontends.
- Do not present the live URLs as working until the author verifies them.
- No secrets or credentials are included in this document; seed users and the dataset are fake.

## Draft portfolio copy

English

- Kind label: Academic project · 2026 · Harbour.Space
- Name: IT Assets Tracker
- One-liner (118 characters): IT inventory app: a NestJS API and the same frontend built twice, in Next.js and Vue, to compare frameworks.
- Tags: NestJS, PostgreSQL, Next.js, Vue 3, OpenAPI, Playwright, Storybook
- Case study outline
  - The problem: For the Modern Frontend Frameworks course at Harbour.Space, we had to build the same frontend twice with different frameworks. I chose a small IT inventory (assets, categories, employees) so the focus could stay on engineering quality and on comparing the frameworks, not on the domain.
  - My role: Solo project, about three weeks. I designed and built the API, both frontends, the tests and the CI pipelines. Authentication was deliberately out of scope to keep the project on time.
  - What I built: A NestJS and PostgreSQL REST API with 23 routes, strict DTO validation, soft deletes, seed migrations and Docker. From its OpenAPI spec I generated a typed client used by a Next.js app and a Vue 3 app that offer the same dashboard, tables and forms. Each frontend has unit, component and end-to-end tests, Storybook and CI.
  - Key decisions: One OpenAPI contract and a generated client so both apps stay in sync with the API. Rules enforced in layers: DTO validation at the edge, business rules in services, unique constraints in the database, and soft deletes that keep those checks consistent. A frontend test pyramid with about 170 unit and component tests plus Playwright flows. The same data layer in both apps, so the comparison measured the frameworks and not the code.
  - What I learned: Frontend testing in layers was the biggest lesson. With a separate NestJS backend, Next.js added server features I did not use; React with Vite would have been the better fit, and Vue felt smoother. I also learned that scoping, such as leaving authentication out, is part of delivering on time.

Spanish

- Etiqueta: Proyecto académico · 2026 · Harbour.Space
- Nombre: IT Assets Tracker
- Descripción corta (127 caracteres): App de inventario de TI: una API en NestJS y el mismo frontend hecho dos veces, en Next.js y Vue, para comparar frameworks.
- Tags: NestJS, PostgreSQL, Next.js, Vue 3, OpenAPI, Playwright, Storybook
- Esquema del caso de estudio
  - El problema: En el curso Modern Frontend Frameworks de Harbour.Space había que construir el mismo frontend dos veces con frameworks distintos. Elegí un inventario de TI sencillo (activos, categorías, empleados) para centrarme en la calidad de la ingeniería y en la comparación, no en el dominio.
  - Mi rol: Proyecto individual de unas tres semanas. Diseñé y construí la API, los dos frontends, las pruebas y los pipelines de CI. La autenticación quedó fuera del alcance a propósito para llegar a tiempo.
  - Qué construí: Una API REST en NestJS y PostgreSQL con 23 rutas, validación estricta con DTOs, borrado lógico, migraciones de datos de ejemplo y Docker. A partir de su especificación OpenAPI generé un cliente tipado que usan una app en Next.js y otra en Vue 3, con el mismo panel, tablas y formularios. Cada frontend tiene pruebas unitarias, de componentes y end-to-end, Storybook y CI.
  - Decisiones clave: Un único contrato OpenAPI y un cliente generado para que ambas apps sigan sincronizadas con la API. Reglas aplicadas por capas: validación de DTOs en el borde, reglas de negocio en los servicios, restricciones únicas en la base de datos y un borrado lógico que mantiene coherentes esas comprobaciones. Una pirámide de pruebas en el frontend con unas 170 pruebas unitarias y de componentes más flujos con Playwright. La misma capa de datos en ambas apps, de modo que la comparación midiera los frameworks y no el código.
  - Qué aprendí: Probar el frontend por capas fue la mayor lección. Con un backend NestJS separado, Next.js añadía funciones de servidor que no usé; React con Vite habría encajado mejor y Vue resultó más fluido. También aprendí que acotar el alcance, como dejar fuera la autenticación, forma parte de entregar a tiempo.
