# Escuela (Academy Management Platform)

## At a glance

| Field                    | Value                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Full-stack web application: management system for an academy (not an online-learning platform)                                                                                                                                |
| Context (author's words) | Built for a REAL academy in Venezuela. Do not name the institution (even if it appears in screenshots), do not say whether it was used, and do not mention that it was a thesis                                               |
| Author's role            | Sole developer: requirements, database design, backend, frontend, PDF certificates. Backend first (stronger side), frontend a month later                                                                                     |
| Status                   | Not running any more. Repos are public. A hosted backend on Render was referenced at the last deploy (Feb 2025); the author may restore a live demo himself later. To be run locally for screenshots (see Portfolio material) |
| Repos                    | [Escuela-Backend](https://github.com/Dava2310/Escuela-Backend), [Escuela-Frontend](https://github.com/Dava2310/Escuela-Frontend) (both public, checked in v1)                                                                 |
| Period                   | Git: 2024-12-17 to 2025-02-17 (62 calendar days). Author gives no hours                                                                                                                                                       |
| Effort estimate          | 21 commits over 10 active days (about 12 sessions). Hours cannot be derived from git; see Timeline                                                                                                                            |
| Contributors/team        | One author (Dava2310) in both repos, confirmed by the author                                                                                                                                                                  |
| Outcome                  | Nothing to cite (author: do not mention grades or thesis). No quantified results, no real usage                                                                                                                               |

## Summary

Escuela is a web system that runs an academy end to end: courses, sections with teacher and schedule, student enrollment by reporting a bank payment, admin payment review, pass/fail marking and printable PDF certificates. It has three separate interfaces (administrator, teacher, student), a Node/Express + Prisma + MySQL REST API and a Next.js dashboard in Spanish with Venezuelan specifics (national ID "cedula", Venezuelan banks). It was built alone, backend first, for a real academy at thesis level.

## The problem and the idea

Small academies in Venezuela often handle enrollment, bank-transfer checking, class schedules and certificates by hand. Escuela centralises that: the student picks a section and reports the transfer (reference, date, bank, amount); the admin reviews it and approves or rejects; approval places the student in the section; teachers see their sections, schedules and rosters; the admin marks students passed and issues a PDF certificate. Author's framing: a real academy as the client, and a focus on clean validation, architecture and a smooth UI.

## Impact highlights

Ranked by how impressive and credible they are. Counts were made on the cloned repos (see "How I counted" at the end of Timeline).

### 1. A complete, end-to-end business workflow across three roles

- What it is: the whole academy lifecycle is implemented from the student's payment report to a downloadable certificate, with each step handled by the right actor: student reports payment, admin approves/rejects, approval creates the seat, teacher follows the roster, admin marks pass/fail, admin issues a certificate, student downloads the PDF.
- Why it matters: it is a real domain with state (`En Espera` / `Aprobada` / `No Aprobada`, `aprobado` flag per student-section), several linked entities and four UIs wired to one API. It is much more than CRUD.
- Evidence: `Escuela-Backend/src/controllers/inscripciones.controller.js` (`createInscripcion`, `aprobarInscripcion`, `noAprobarInscripcion`); `secciones.controller.js` (`aprobarEstudiante`, `reprobarEstudiante`, `getTeacherSections`); `certificates.controller.js`; frontend `src/app/{admin,teacher,student}` (34 `page.tsx`). Schema: 13 Prisma models in `prisma/schema.prisma`. About 52 endpoints (grep of `router.*` in `src/routes`).
- How to say it (EN): "I built the full enrollment lifecycle of an academy, from a student's bank-payment report to admin approval, teacher roster and a PDF certificate."
- ES: "Construí el ciclo completo de inscripción de una academia, desde el reporte de pago del estudiante hasta la aprobación del administrador, el listado del profesor y el certificado en PDF."

### 2. Layered, consistently validated backend

- What it is: every write goes through the same pipeline: route, id-parameter middleware, Joi schema, existence/uniqueness checks, Prisma call, standard response helper with proper HTTP codes (422 validation, 409 duplicates, 404, 401/403).
- Why it matters: this is the author's stated proudest point ("very well validated and architected") and the code supports it. Details are specific, not generic: password policy regex with Spanish messages (`userValidation.js`), `HH:MM` 24h regex and "end date after start date" via `Joi.ref` (`scheduleValidation.js`), day-of-week whitelist, one-schedule-per-section rule (`seccionId` is `@unique` on `Horario` and the controller returns an error if one exists), unique email and cedula pre-checks returning 409, per-role registration schemas (`estudianteRegister`, `profesorRegister`), `validateAndConvertId` middleware that rejects non-numeric ids.
- Evidence: `src/validations/*.js` (6 files, 340 lines), `src/middleware/validate.js`, `src/red/responds.js`, `src/controllers/*` (10 files, about 3,000 lines), `src/routes/*` (11 files). Frontend repeats the rules with zod (`formSchema` in `student/inscripcion/[cursoId]/page.tsx`, `schedules/register-schedule-form.tsx`), so users get the message before the request.
- How to say it (EN): "The API validates every input in layers (Joi schemas, id middleware, duplicate checks, consistent HTTP error codes), and the forms repeat the same rules with zod on the client."
- ES: "La API valida cada entrada por capas (esquemas Joi, middleware de ids, chequeos de duplicados y códigos HTTP consistentes), y los formularios repiten las reglas con zod en el cliente."

### 3. PDF certificates generated on the server

- What it is: the admin issues a certificate for a student and section; the API then streams a landscape A4 PDF built with PDFKit: border, academy logo, student name, course, custom title and description, signature lines (assigned teacher, student, director), a link and a QR image, using bundled Noto Sans JP fonts. Students and admins download it from the UI (blob download).
- Why it matters: author calls it "really useful"; it is the one feature that produces a real-world artifact. Layout is drawn programmatically (coordinates, fonts, lines), not a template. Teacher name and course are joined in from the database in one query.
- Evidence: `src/reports/reportCertificate.js` (`createReport`, about 260 lines), `certificates.controller.js` (`reportCertificado`, `createCertificado`), `src/routes/reportCertificate.routes.js`; assets `src/reports/logo.jpeg`, `qr.png`, `fonts/`. Frontend: `admin/certificates/page.tsx` (`handleImprimirCertificado`), `student/certificates/page.tsx`, and the issue form `admin/certificates/new/[estudianteId]/[seccionId]/page.tsx`.
- Honest limits (do not oversell): the QR image and the "validation link" are static placeholders (the link text is a dummy URL, not a real verification endpoint); the director's name and the academy name are hard-coded in the template; the certificate is not blocked by a failed grade (the admin picks the student from a list that shows pass/fail, but `createCertificado` does not check `aprobado`); the controller has an odd `res.send("invoice")` after `doc.end()`.
- How to say it (EN): "I generated printable PDF certificates on the server with PDFKit, joining student, course and teacher data and laying out the page in code."
- ES: "Generé certificados PDF imprimibles en el servidor con PDFKit, combinando datos del estudiante, el curso y el profesor y maquetando la página en código."

### 4. Teacher dashboard scoped on the server

- What it is: a teacher logs in and sees only their own sections. They pick a section and get its details, schedule (day badges), a capacity donut chart (enrolled vs capacity) and the roster in a data table with pass/fail status.
- Why it matters: the author rates it "very good". It is also one of the few endpoints that is correctly scoped by identity on the server: `getTeacherSections` derives the teacher from the JWT user (`req.user.id`), never from a client-sent id, and returns a single nested Prisma query already shaped for the UI (course, schedule with days, enrolled students with user data) with a computed `estudiantesInscritos`.
- Evidence: `src/controllers/secciones.controller.js` (`getTeacherSections`, lines 216-290); `Escuela-Frontend/src/app/teacher/dashboard/page.tsx` (`useMemo` for chart data, Recharts `PieChart` with centre label), `StudentsContext.tsx`, `data-table.tsx`, `columns.tsx` (TanStack Table).
- How to say it (EN): "The teacher dashboard shows only that teacher's sections, resolved from the login token, with schedule, a capacity chart and the student roster."
- ES: "El panel del profesor muestra solo las secciones de ese profesor, resueltas desde el token de sesión, con horario, un gráfico de capacidad y la lista de estudiantes."

### 5. Role-separated UIs and a smooth, consistent interface

- What it is: three separate interface trees (`app/admin`, `app/teacher`, `app/student`) each with its own sidebar, route guards (`useAuthCheck`, `useIsAdmin/Teacher/Student`), login redirect by role, toasts for every action, breadcrumb headers, data tables with search/actions and charts for the admin (students by age range, courses by category).
- Why it matters: author says the UI is "very smooth and understandable". Evidence of consistency: the same pattern repeats on every list screen (page + React context + `data-table.tsx` + `columns.tsx`); forms use react-hook-form + zod + shadcn/ui; Spanish copy and `date-fns` Spanish locale; the student payment form shows the chosen section's schedule next to the form, and course cards show per-course enrollment state ("No Inscrito" / "En Espera" / "Aprobada") with the enroll button only when not enrolled.
- Evidence: `src/components/app-sidebar-*.tsx`, `src/app/hooks/*`, `src/app/admin/statistics/page.tsx` (265 lines, 3 chart types), `src/components/ui/` (shadcn). About 11,800 lines of non-generated TS/JS in `src/` (14,600 including shadcn `ui/`).
- Honest limit: role separation is mainly in the UI (see "Missing" and Lessons learned).
- How to say it (EN): "Each role gets its own interface with a consistent pattern (tables, forms with inline validation, toasts and charts), so the three user types only see what is relevant to them."
- ES: "Cada rol tiene su propia interfaz con un patrón consistente (tablas, formularios con validación en línea, avisos y gráficos), de modo que cada tipo de usuario ve solo lo que le corresponde."

### 6. Careful data model and engineering details (supporting)

- What it is: soft deletes (`deletedAt`) on users, courses and enrollments; composite primary key for student-section; one-to-one section-schedule; a transaction around registration (user plus student/teacher/admin row) and around enrollment approval (status change plus creating the student-section link); token blacklist on logout plus refresh-token rotation; incremental Prisma migrations during development.
- Why it matters: shows judgement about integrity. Registration and approval are atomic, so a failure cannot leave half-created records. Deleting an enrollment is blocked once approved, and removes the student-section link otherwise.
- Evidence: `auth.controller.js` (`registerUser` uses `prisma.$transaction`), `inscripciones.controller.js` (`aprobarEstudiante` transaction in `aprobarInscripcion`, `deleteInscripcion`), `prisma/schema.prisma` (`@@id([idEstudiante, idSeccion])`, `deletedAt`), `refreshToken` function (deletes the old token, issues a new pair). Git: 13 migrations were created during development (Jan 18-28) and squashed into the single `20250214155854_init` for the deploy (12 earlier migration files deleted in commit `6cf5ce7`).
- Also: 53 Jest + supertest integration cases (about 1,060 lines) hitting the real Express app for auth, users, recovery, students, teachers and courses, run in file order by a custom sequencer (`test/testSequencer.cjs`). Real but limited: nothing for enrollments, sections, schedules, certificates or statistics.
- How to say it (EN): "Critical writes are transactional, deletes are soft, and the auth module has an integration test suite of 53 cases."
- ES: "Las escrituras críticas son transaccionales, los borrados son lógicos y el módulo de autenticación tiene 53 pruebas de integración."

Things that sound impressive but are thin (do not feature): the Swagger setup (see Architecture), the "Gestión de Pruebas" commit message (no exam feature exists), and the statistics page (3 simple queries; the age range is computed as year minus birth year, in JavaScript, not SQL).

## What the author built (role and ownership)

Everything, per the author: requirements, database, backend, frontend, PDF layout and deployment. Git agrees: one identity in both repos (10 backend commits, 11 frontend commits, 0 by others). UI scaffolding used shadcn/ui and `create-next-app` (about 2,800 lines in `components/ui` are generated component code). No evidence of design files or teammates. AI assistance is not mentioned by the author; do not claim or deny it. Size, authored code only: backend about 4,430 lines of JS in `src/` plus 1,060 in `test/`; frontend about 11,800 lines (excluding shadcn `ui/`).

## Features

Counted from route files and `page.tsx` files.

**Everyone**

- Register (the UI always registers a student), login, logout, token check every 15 minutes in the frontend.
- Password change, personal data edit, security question and answer (set in "change data").
- Account recovery in two steps by security question (`/recover`, `/recover/step2`; API `PATCH /api/users/recover`, `GET /api/users/recover/:id`, `PUT /api/users/recover`).

**Admin**

- Dashboard and statistics (total students, active courses, student age ranges, courses per category): bar and pie charts (Recharts). `GET /api/statistics`.
- Students and teachers: list, view, edit, delete; teacher registration.
- Courses (name, code, description, category): create, edit in a modal, soft delete. Sections per course (code, capacity, classroom, teacher), edit, list of students per section.
- Schedules per section (dates, hours, days of week, Presencial/Virtual) with creation and edit forms and a viewer component.
- Enrollment review table (reference, bank, amount, date, status) with approve/reject.
- Per-section pass/fail marking; certificates: list, issue, delete, download PDF.

**Teacher**: dashboard (section picker, details, schedule, capacity chart, roster), change data/password.

**Student**: browse courses with enrollment state, enroll by submitting a payment report (reference must start with `#`, date, bank among Banco Mercantil, Banco de Venezuela, Banesco, amount), "my courses", "my enrollments" with status, "my certificates" with download.

**Enrollment workflow, traced end to end (verified in code)**

1. Student opens `student/inscripcion/[cursoId]`, picks a section (the dropdown shows capacity and classroom), fills the payment form (zod).
2. `POST /api/inscripciones` (`createInscripcion`): Joi checks fields, finds the student from the JWT user, creates an `Inscripcion` with status `En Espera`. No other check.
3. Admin table: `GET /api/inscripciones/:id/aprobar` (`aprobarInscripcion`): rejects if already `Aprobada` (400), then in a transaction sets `Aprobada` and creates `Estudiante_Seccion` (`aprobado=false`). `GET .../no_aprobar` sets `No Aprobada` (no state check; it can also be applied to an approved enrollment without removing the seat).
4. Admin or teacher view shows the student in the section; admin marks `aprobar`/`reprobar` (`aprobado` true/false; requires the student-section link to exist).
5. Admin issues a certificate (`POST /api/certificates/student/:studentId/seccion/:seccionId`) and the PDF is generated on demand.

**Capacity: the truth.** `Seccion.capacidad` is validated (`Joi.number().min(1)`, note: not marked required) and stored, and shown in three places (student section dropdown, teacher capacity chart, admin section views). It is NOT enforced anywhere: `createInscripcion` and `aprobarInscripcion` never count existing `Estudiante_Seccion` rows against it (grep of `capacidad` in `src/controllers` hits only create/update/list of sections). Over-enrollment is therefore possible, and the teacher chart would show a negative "available" slice. The only incidental protection: the composite key blocks approving two enrollments of the same student in the same section (the second approval fails inside the transaction), and the course list hides the enroll button once an enrollment exists. The API itself accepts duplicate pending enrollments.

## Tech stack

| Layer              | Technology (version)                                                                          | Why it is notable                                             |
| ------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Frontend framework | Next.js 15.1.4 (App Router), React 18, TypeScript 5                                           | Modern App Router with one folder tree per role               |
| UI                 | Tailwind CSS 3.4.1, shadcn/ui (Radix UI), lucide-react, sonner, next-themes                   | Accessible primitives, consistent look                        |
| Forms/data         | react-hook-form 7.54, zod 3.24, axios 1.7.9, TanStack Table 8.20, Recharts 2.15, date-fns 3.6 | Client validation mirrors the API                             |
| Backend            | Node.js ES modules, Express 4.19                                                              | Controllers / routes / validations / middleware               |
| Database           | MySQL (mysql2 3.11) with Prisma 5.22                                                          | Relational model with composite key, soft deletes, migrations |
| Auth               | jsonwebtoken 9 (access 1h, refresh 1 week), bcrypt 5.1 (cost 10)                              | Refresh rotation and logout blacklist                         |
| Validation         | Joi 17                                                                                        | Per-entity schemas with Spanish messages                      |
| Reports            | PDFKit 0.15 plus Noto Sans JP fonts                                                           | Server-side certificates                                      |
| Testing            | Jest 29, supertest 7                                                                          | 53 integration cases (5 files)                                |
| Hosting            | Render (backend, at last deploy)                                                              | No Docker, no CI                                              |

## Architecture &amp; code practices

Backend (`src/`): `routes/` (11) call `controllers/` (10), `validations/` (Joi), `middleware/auth.js` (`ensureAuthenticated`, `authorize`) and `validate.js`, `red/responds.js` (uniform response shape `{error, status, body}`), `reports/` + `libs/` for PDF, `prisma/schema.prisma` (13 models). Frontend: `app/{admin,teacher,student}` plus public `login/register/recover`; shared `components/` (sidebars per role, forms, shadcn `ui/`); hooks for auth and role; list screens use a context + data-table + columns trio.

Present:

- Layered backend and a single response helper; ids parsed by middleware
- Joi validation everywhere, uniqueness checks with 409, per-role registration rules
- bcrypt, JWT access/refresh with rotation, logout blacklist
- Transactions on registration and enrollment approval; soft deletes; composite key
- Integration tests (auth, users, recovery, students, teachers, courses)
- zod on forms, TypeScript on the frontend, Spanish UI copy and date locale

Missing, and whether to mention it (author's rules: role permissions are a modest lesson learned; do not hide the truth):

- Server-side authorization: only `GET /api/users/` uses `authorize('administrador')`. Every other route needs only a valid login. Any logged-in student could call admin endpoints (approve payments, issue certificates, list all students) directly. Roles are enforced by separating the UIs and by frontend guards (`useIsAdmin` reads the role from `localStorage`). Mention: YES, as a lesson learned, phrased modestly.
- Administrator registration through the API: CORRECTING the author's belief. It IS possible. `POST /api/auth/register` is public and the Joi schema accepts `tipoUsuario: 'administrador'`; the controller then creates the `Administrador` row in the transaction. The test suite itself registers an admin this way (`test/auth/01_auth.spec.js`, `newAdmin`). The UI only offers student registration, which is why it looked blocked. Mention: NO. The author decided to leave it as is and not use it as the lesson. Related: a teacher created via registration receives a fixed default password set in the controller. Not for the portfolio copy.
- Over-enrollment not blocked (see Features). Mention: optional, as "what I would add next".
- Recovery by security question: the answer is stored and compared in plain text, step 1 reveals whether an email exists and returns the user id. Not for the portfolio copy; fine as a lesson learned if asked.
- State-changing actions use GET (`aprobar`, `no_aprobar`, `reprobar`, `logout`). Not for the portfolio copy.
- JWT secrets fall back to the literal defaults `secret` / `refresh` when env vars are missing (`src/config.js`). Not for the copy.
- The frontend does not use `/api/auth/refresh-token` (the access token expires in 1 hour and the user is sent to login). Not for the copy.
- No Swagger content: `src/swagger.js` scans `./src/modules/**/*.js`, a folder that does not exist, and there are no `@swagger` annotations, so `/api-docs` loads an empty spec (verified; author's guess was right). Do not feature API docs.
- No exam feature: "Gestión de Pruebas" in commit `bf66c33` has no model, route or UI. The schema has no exam entity (author's guess confirmed). Do not mention exams.
- Tests do not cover enrollments, sections, schedules, certificates, statistics; `npm test` begins with `prisma migrate reset` (destructive). No CI, Docker, lint on the backend; frontend README is the unchanged create-next-app text and `/` is the default Next.js page; leftovers: `test.html`, legacy raw-mysql `src/models` and `src/DB/DB.sql` (template origin), `libs/pdfKit.js` "Hello World" stub; package names `rest_api_auth_nodejs` and `frontend2`.

## Timeline &amp; effort

Git facts (author dates, timezone -0400, committer dates equal): backend 2024-12-17 to 2025-02-14 (10 commits, 8 active days); frontend 2025-01-16 to 2025-02-17 (11 commits, 9 active days). Combined: 21 commits, 10 distinct active days, 12 sessions (commits grouped when under 3 hours apart, across both repos). Backend commit times include late-night hours (01:40, 01:49), so some sessions were long.

Milestones: access module and auth (Dec 17), students/teachers/recovery (Jan 18), courses/sections/schedules (Jan 18-20), enrollments (Jan 21), statistics, teachers, section management, enrollment validation, pass marking (Jan 28), certificates (Feb 3), bug fixes (Feb 12), deploy (Feb 14), frontend fixes (Feb 17).

Reconciliation with the author: the author says backend first, frontend about a month later. Git matches: the frontend repo starts Jan 16, a month after the backend's Dec 17 start, with feature days then moving together. Commits are few and large (the frontend "Initial components" commit adds about 7,700 lines, most of it shadcn scaffolding), so they are batches of local work and no hours can be claimed. Safe wording: "built solo over about two months".

How I counted: `git log` on both clones; lines via `git ls-files` + `wc -l` on `.js/.ts/.tsx` excluding lock files; endpoints via grep of `router.get|post|patch|put|delete` in `src/routes` (about 52); tests via grep of `it(` (53); pages via `git ls-files | grep page.tsx` (34).

## Lessons learned (the author's words, refined)

- "I started with the backend because it is where I am strongest, and having a validated, tested API first made the frontend much faster to build."
- "I separated the experience by role (admin, teacher, student) mostly through different UIs. Looking back, I would also enforce permissions on the server with role middleware on every route, not just hide screens."
- "Validation in layers paid off: Joi on the server and zod in the forms meant users got clear messages and the database stayed clean."
- "I learned that business rules need to live in the workflow, not just in the display: I showed section capacity everywhere, and the next step would have been to enforce it when approving an enrollment."
- "Generating the PDF certificates taught me to lay out a document in code and join data from several tables."
- "Working for a real academy, with its bank-transfer payment process, taught me to model the real process, not a textbook one."

## Portfolio material

Existing in the repos:

- Logo: `Escuela-Frontend/public/images/logo.jpeg`; certificate assets `Escuela-Backend/src/reports/logo.jpeg`, `qr.png`, `fonts/`.
- Schema: `Escuela-Backend/prisma/schema.prisma` (13 models) for an ER diagram; migration `prisma/migrations/20250214155854_init/migration.sql`.
- No screenshots, demo URL or live deployment; the repos contain no README of value.

### Draft local-setup guide (derived read-only; nothing was run)

Prerequisites: Node.js (version not pinned; Prisma 5.22 and Next 15 work with Node 18.18+ or 20), npm (both repos have `package-lock.json`), a local MySQL server. Avoid `npm test` in the backend: it runs `prisma migrate reset`, which wipes the database.

Backend `.env` (names only, in `Escuela-Backend/`): `PORT` (set to 4000, because the frontend's commented local URL uses 4000 and the default is 5000), `DATABASE_URL` (MySQL connection string for Prisma), `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET` (pick any long random strings), and the legacy `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DB` (only read by `src/config.js`/`src/DB/mysql.js`; likely not needed).

Order of commands:

1. Create an empty MySQL database (name of your choice, referenced by `DATABASE_URL`).
2. In `Escuela-Backend`: `npm install`, then `npx prisma migrate deploy` (applies the single `init` migration; safer than `migrate dev`), then `npx prisma generate` if the client is missing, then `npm run dev` (nodemon on `src/index.js`). Check `GET http://localhost:4000/` returns "Hello World".
3. In `Escuela-Frontend`: edit `src/app/constants/constants.js` to use the commented `http://localhost:4000` line instead of the hosted URL (do not commit this change), `npm install`, `npm run dev` (port 3000). Open `/login` (the `/` page is the unchanged Next.js template).

Seed needs: there is NO seed script and no default admin. Create the first administrator by calling `POST /api/auth/register` once (JSON body: nombre, apellido, email, cedula, password with upper, lower, digit and one of `@$!%*?&.`, `tipoUsuario: "administrador"`; works with any HTTP client, as the API accepts it). Then log in as admin at `/login` and create data in this order: teacher(s) (admin teacher form; the backend sets the teacher password, so you may need to read it from the code `registerUser` or change it by recovery), courses, sections (with teacher, capacity, classroom), schedules (one per section), then register a student from `/register` (a student's cedula and email must be unique), log in as the student and enroll.

Screens and states to capture (use fake names, fake cedulas like "V-12.345.678", fake payment references like "#483920"; the payment-page bank-detail text is not real data per the author, but crop or avoid it anyway):

1. Login page and the register page (student).
2. Admin statistics page with about 8-10 students of varied ages and 3-4 course categories (shows bar, bar and pie charts).
3. Admin courses list with the edit modal open, and a section list for one course.
4. Schedule form (calendar popover open, days checked) and the schedule viewer for a section.
5. Student course list showing the three states: "No Inscrito", "En Espera", "Aprobada".
6. Student enrollment form with a section selected, so the schedule panel is filled (fake payment data).
7. Admin enrollment review table with at least one of each status and the approve/reject actions visible.
8. Teacher dashboard with a section selected: details, schedule badges, capacity donut (for example 6 of 15) and roster table with a mix of Aprobado/Reprobado.
9. Admin certificates page with section selected and the certificate issue form.
10. A downloaded certificate PDF (open it and take a full-page capture; real names removed). The sample teacher, student and director names printed on it come from data you enter and the hard-coded director; use a neutral fake.
11. Optional diagrams to draw (not in repos): ER diagram from `schema.prisma`, and the enrollment status flow (En Espera to Aprobada or No Aprobada; then pass/fail; then certificate).

## Draft portfolio copy

### English

- Kind label: Real-world project · 2025 (built for a real academy, name withheld)
- Name: Escuela
- One-liner (&lt;=140): Academy management system with admin, teacher and student portals: enrollments, payment review, schedules and PDF certificates. (about 135)
- Tags: Next.js, React, TypeScript, Express, Prisma, MySQL, Tailwind CSS
- Case study outline and draft paragraphs:
  - The problem: A real academy in Venezuela handled enrollment, bank-transfer checking, schedules and certificates by hand. I built a system to centralise that process.
  - My role: I built it alone: requirements, database design, REST API, the three web interfaces and the certificate generator. I started with the backend, where I am strongest, and built the frontend a month later.
  - What I built: Students report their bank payment when they enroll; the administrator reviews it and approves or rejects it; approval places the student in a section with its teacher and schedule. Teachers get a dashboard with their sections, a capacity chart and student rosters. Admins manage courses, sections, schedules and people, see statistics, mark students as passed and issue PDF certificates generated on the server.
  - Key decisions: Layered API with Joi validation on every input and the same rules in zod on the forms; transactions for registration and enrollment approval; soft deletes; one interface per role with its own navigation; certificates drawn in code with PDFKit.
  - What I learned: Validate in layers and model the real workflow, but also enforce permissions on the server instead of relying mainly on separate interfaces, and enforce business rules such as section capacity in the workflow, not just show them.

### Español

- Etiqueta: Proyecto real · 2025 (hecho para una academia, nombre reservado)
- Nombre: Escuela
- Descripción (&lt;=140): Sistema de gestión de academia con portales de administrador, profesor y estudiante: inscripciones, pagos, horarios y certificados PDF.
- Tags: Next.js, React, TypeScript, Express, Prisma, MySQL, Tailwind CSS
- Caso de estudio:
  - El problema: Una academia real en Venezuela gestionaba a mano las inscripciones, la verificación de transferencias, los horarios y los certificados. Construí un sistema para centralizar ese proceso.
  - Mi rol: Lo construí yo solo: requisitos, diseño de la base de datos, API REST, las tres interfaces web y el generador de certificados. Empecé por el backend, donde soy más fuerte, y hice el frontend un mes después.
  - Qué construí: Los estudiantes reportan su pago bancario al inscribirse; el administrador lo revisa y lo aprueba o rechaza; la aprobación coloca al estudiante en una sección con su profesor y horario. Los profesores tienen un panel con sus secciones, un gráfico de capacidad y la lista de estudiantes. Los administradores gestionan cursos, secciones, horarios y personas, ven estadísticas, marcan estudiantes como aprobados y emiten certificados PDF generados en el servidor.
  - Decisiones clave: API en capas con validación Joi en cada entrada y las mismas reglas con zod en los formularios; transacciones en el registro y en la aprobación de inscripciones; borrado lógico; una interfaz por rol con su propia navegación; certificados dibujados en código con PDFKit.
  - Qué aprendí: Validar por capas y modelar el flujo real, pero también aplicar los permisos en el servidor en lugar de apoyarme sobre todo en interfaces separadas, y hacer cumplir reglas de negocio como la capacidad de la sección en el flujo, no solo mostrarlas.

## Not for the portfolio (author's instructions)

- Do not mention that it was a thesis, any grade, or whether the system was used.
- Do not name the academy, even though it may appear in screenshots.
- Do not present the administrator-registration behaviour or the fixed default teacher password as a lesson (the author accepted both for the original scope). The repos stay public as they are; no clean-up needed.
