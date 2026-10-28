# Side projects: source notes

Facts gathered from each project's repos (code and git history) and from the author's own answers, used to write the portfolio entries. This is version 3: every open question has been answered and folded into the documents, so the six files have no "Open questions" left. Each one holds the ranked **Impact highlights**, the author's role, features, stack, timeline, lessons, portfolio material and draft English/Spanish copy.

Nothing in the repos was executed. No secrets or third-party personal data were copied. Effort figures marked "estimate" come from commit clustering, not tracked time.

For the generic page design brief (one page template for all six projects), see [claude-design-prompt.md](claude-design-prompt.md). The pages built from it live at `/en/projects/<slug>/` and `/es/projects/<slug>/` (`spira`, `it-assets-tracker`, `clinica`, `escuela`, `sistema-conejos`, `proyecto-stii`).

## Overview

| #   | Project                                           | File                               | Type                                                          | Card label (EN)                         | Context and role (author)                                                                                   | Period (git)        | Effort                          | Stack                                                                       |
| --- | ------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------- | --------------------------------------------------------------------------- |
| 1   | Spira                                             | [spira.md](spira.md)               | Two-sided food-surplus donation platform (MVP)                | Academic project · 2026                 | Harbour.Space "From Zero to Hero", team of 6. Built the whole API and the portal; UI design by teammates    | Sep 2026            | ~3 weeks incl. design (author)  | NestJS, TypeORM, PostgreSQL, React 19, Vite, Tailwind, OpenAPI client       |
| 2   | IT Assets Tracker (API-HS + NextJS-HS + VueJS-HS) | [hs-inventory.md](hs-inventory.md) | Inventory API + two frontends                                 | Academic project · 2026 · Harbour.Space | Solo, "Modern Frontend Frameworks" course. Everything                                                       | Mar–Apr 2026        | ~3 weeks; git ~51 h             | NestJS, TypeORM, PostgreSQL, Next.js + shadcn/ui, Vue 3, Vitest, Playwright |
| 3   | Clinica                                           | [clinica.md](clinica.md)           | Clinic appointments platform (patient, doctor, admin)         | Academic project · 2025                 | Team of 2, case study of a real clinic (Clínica INMECA, Maturín). Project lead, backend, database           | Nov 2024 – Jun 2025 | ~60 h (author); git ~38 h (all) | React, Express, Prisma, MySQL, Joi, Jest                                    |
| 4   | Escuela                                           | [escuela.md](escuela.md)           | Academy management platform (admin, teacher, student)         | Real-world project · 2025               | Built alone for a real academy (name withheld). Everything                                                  | Dec 2024 – Feb 2025 | git: 21 commits, ~12 sessions   | Next.js 15, shadcn/ui, Express, Prisma, MySQL, PDFKit                       |
| 5   | Sistema Conejos                                   | [conejos.md](conejos.md)           | Rabbit farm management, native PHP                            | Academic project · 2023                 | Thesis-level, real farm (Agro Granja San Jose). Project leader, ~77% of the code; teammate Gabriel Antuarez | Jun–Aug 2023        | git ~13 h (lower bound)         | PHP (classes), MySQL, vanilla JS, FPDF                                      |
| 6   | Proyecto STII (SARP)                              | [stii.md](stii.md)                 | Java desktop app: supplier registry and weekly payment orders | Academic project · 2021                 | For Agroindustrial Mandioca's accounting team; perfect score. Main developer (68 of 73 commits)             | May–Aug 2021        | git 32–56 h                     | Java 8 Swing, MySQL, iText                                                  |

## Headline highlights per project

- **Spira:** a cross-tenant data leak found with a repeatable probe and fixed; race-safe claiming of shelf items (transaction with row lock); a donation state machine with a single-use QR/PIN pickup pass; immutable custody certificates; an OpenAPI-generated client.
- **IT Assets Tracker:** one OpenAPI contract and generated client shared by two frontends; a real frontend test pyramid (more than 170 unit and component tests plus e2e); an evidence-backed Next vs Vue comparison; DTO validation and safe soft deletes.
- **Clinica:** a relational model of the whole clinic workflow evolved over 8 migrations (ER diagram included); a negotiated appointment lifecycle with a proposal step; atomic registration with role profiles and medical history; token rotation and logout blacklist.
- **Escuela:** an end-to-end enrollment, payment-review and certificate workflow across three roles; a layered, consistently validated backend with 53 integration tests; server-side PDF certificates; a teacher dashboard scoped from the token.
- **Sistema Conejos:** a class-per-entity PHP data layer (63 prepared statements); a relational model with lineage and crossings (ER diagram included); a branded PDF production report.
- **Proyecto STII:** real accounting requirements turned into a weekly payment-order engine; a relational model that enforces business rules; a safe week-closing flow with tariff propagation; an MVC-style layering.

## Final decisions from the author's answers

- **Spira:** designers are Elena Paoli and Ecem Gonul; three other teammates worked on the business side (market segmentation, shaping the idea). Both live URLs are confirmed and may be linked (`spira-portal.vercel.app`, `spiraapi.onrender.com`). The "about 3 weeks" covers design, planning, implementation and testing. The idea was well received, mostly for its business case. The 188-check and 22/10 probe numbers are not important: keep them out of the copy.
- **IT Assets Tracker:** CI and Husky exist on the frontends only. Say "more than 170 tests". The shadcn dashboard block was the starting layout of both UIs. Hero screenshot: the dashboard charts, then the form validations. Name Harbour.Space, city included. Links may be shown, but the API is not working right now, so re-check them before publishing.
- **Clinica:** the clinic name (Clínica INMECA, Maturín) may be shown. Do not mention that it was a thesis. No landing page exists. The ER diagram is generated from the Prisma schema (Mermaid, in the doc). The TODO about doctor time compatibility is "planned", intent not recorded.
- **Escuela:** do not name the academy, do not mention a thesis, grade or usage. Repos stay public as they are. Do not present the admin-registration behaviour or the default teacher password as a lesson. The author may restore a live demo himself later.
- **Sistema Conejos:** call it a thesis-level academic project without naming the university or a grade. Credit Gabriel Antuarez. The breed table comes from the farm owner's advice and may be cited as domain input. Screenshots only, no demo link. The ER diagram is in the doc.
- **Proyecto STII:** do not state the payment formulas, the jar name, the hardcoded credentials or the ACORDADO supplier mode. The 4-transactions-per-ticket limit is a real business rule. Teammates: Gabriel Antuarez, Virginia Sarah and Jennifer Sucre. The PowerPoint UI draft no longer exists, so it cannot be shown.

## Editorial rules (apply to all copy)

- Never present security limitations (MD5, hardcoded credentials, missing endpoint authorization, default passwords) as features or lessons, except Escuela's modest "role permissions rest on separate UIs" lesson.
- Do not claim deployment, users, grades or results that the author did not state.
- `SistemaConejos` is a private repo: no repo link on its page.
- Do not mention the `.claude` folder or the AI-assisted workflow, except Spira, where the author wants it described candidly and modestly.
- Spira: do not mention the early per-side portal repos or the fake AI features in the prototypes.

## Next steps (needs the author)

1. **Run the apps and capture screenshots.** Each doc has a "Portfolio material" section with the exact screens to capture. Clinica, Escuela, Conejos and STII also have a draft local-setup guide. The author asked for help setting up Clinica's database and for running Escuela, Conejos and STII locally.
2. **Check the live URLs** of Spira (confirmed) and the IT Assets Tracker (API currently down).
3. **Add images to the pages (done: the pages exist).** The six case-study pages are built from one template (`src/app/pages/SideProject/`). Each project has its text in `src/lang/<lng>/pages/<id>.ts` and its language-neutral data in `src/app/pages/SideProject/projects/<id>.ts`. Until real screenshots exist, every image slot shows a labelled placeholder. To add one, copy the file into `src/assets/<project>/`, import it in the project's data file and set `hero`, `featureShots[i]`, `diagram` or `gallery[i].image` (with its width and height): the slot becomes zoomable automatically.

## Note on visibility

This `docs/` folder is inside the public portfolio repo. Review the files before committing them: they name real teammates and, for Conejos, a real farm (with the author's consent).
