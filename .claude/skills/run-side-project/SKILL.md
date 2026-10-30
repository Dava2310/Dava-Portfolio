---
name: run-side-project
description: Run one of the portfolio's side projects end to end on this machine (Spira, IT Assets Tracker, Clinica, Escuela, Sistema Conejos, Proyecto STII). Clones the repos, pins dependencies, sets up the database in Docker, fills it with realistic themed data, builds the app and starts it in production mode, then hands over URLs and one login per user role. Use when the user asks to run, start, set up locally or populate a side project, usually to take screenshots for its portfolio page.
---

# Run a side project

Goal: leave one side project fully running, in build-and-start mode, with realistic data and a login for every kind of user, so the author can take screenshots. Do all of it yourself, report only when it is up.

Always follow every rule below. They come from the author's instructions.

## 0. Before starting

1. Read `docs/side-projects/<doc>.md` for the project (see the table at the end): its stack, features per role, the draft local-setup guide, and the "Not for the portfolio" list. Read `docs/side-projects/README.md` for the final editorial rules.
2. Work in `/home/daniel/side-projects/<slug>/` (create it). Clone each repo there with `gh repo clone Dava2310/<repo> <dir>` (the repos are the author's own, some private). Never work inside `/home/daniel/dava-portfolio`, never commit or push to the side-project repos: every change you make to a clone is local only.
3. Check the tools you need (`docker --version`, `node -v`, `npm -v`, `pnpm -v`, `java -version`, `mvn`/`gradle`/`ant`, `php -v`). If a tool is missing, say exactly what is needed and how to install it; do not silently switch approach.
4. Pick host ports that do not clash with the other projects (check with `ss -ltnp`): database containers get their own port and name. Convention: Escuela 3306, Clinica 3307, Conejos 3308, STII 3309, Spira 5432, IT Assets Tracker 5433. Bind databases to `127.0.0.1` only.

## 1. Pin the dependencies (Node.js projects)

Every `package.json` in every repo must have exact versions, no `^`, `~`, ranges or bare majors, so the code keeps working (for example Prisma 5 must not jump to 7).

- If a lockfile exists, set each dependency and devDependency to the version the lockfile resolved. For `package-lock.json` read `packages["node_modules/<name>"].version`. For `pnpm-lock.yaml` / `yarn.lock` read the resolved version of the direct dependency.
- Use a small script run outside the repo with `python3 -I`, then run the package manager's install so the lockfile root stays in sync (`npm install --no-audit --no-fund`; keep the existing manager: npm, pnpm or yarn).
- If there is no lockfile, install once, then read each direct dependency's version from `node_modules/<name>/package.json` and pin to that.
- Add `.npmrc` with `save-exact=true` to each repo.
- Respect `engines` and `.nvmrc`; if the Node major differs, say so and fix it (nvm/fnm) before installing.
- Print what changed (name, old range, pinned version).

Non-Node projects: pin what can be pinned (Maven/Gradle versions, Docker image tags). Never use `latest` for images.

## 2. Database in Docker

- One container per project, with a `docker-compose.yml` in `/home/daniel/side-projects/<slug>/`: pinned image tag (e.g. `mysql:8.0`, `postgres:16`), a named volume, `127.0.0.1:<port>:<port>`, UTF-8 settings (MySQL `utf8mb4`), and the database created at start through the image's env variables.
- The healthcheck must run a real authenticated query (for MySQL `mysql -uroot -p… -e "SELECT 1"`), not `mysqladmin ping`: ping reports healthy while the image's init server is still running. After `up -d`, wait until a real login works before continuing.
- If `docker pull` fails with "error getting credentials" (Docker Desktop helper under WSL), use a throwaway config: `DOCKER_CONFIG=<scratchpad>/dockercfg docker pull <image>` where that folder holds `{}` in `config.json`, then run compose normally.
- Create the schema the way the project does it: Prisma `migrate deploy`, TypeORM/Nest migrations, or the project's SQL script (import in the right order). Do not invent a different schema.
- Write the app's `.env` (git-ignored) with the local connection string and freshly generated secrets (`openssl rand -hex 32`). Document variable names, never reuse real secrets.

## 3. Populate the database realistically

Study the project first: the schema (Prisma schema, entities, SQL), the validators (formats, regexes, enums, allowed states), the controllers/services (state transitions, defaults, rules such as capacity or unique pairs), and the UI (labels, option lists, banks, categories). The data must pass the app's own validation and look like the real domain.

Rules:
- Theme and locale: use the project's real context (Venezuelan names, cédulas, phones, addresses in Maturín/Monagas for Escuela, Clinica, Conejos, STII; the right language of the UI). Realistic names, institutions, products, prices, dates. Fictional people only: use `@example.com` for emails and invented names; never real people or real personal data.
- Coverage: every role, every state of every workflow (for example pending, approved, rejected, finished), every category, empty and full cases, a few rows that show edge cases the UI handles. Enough volume for lists, charts and statistics to look alive (tens of people, a few hundred rows of transactional data, not three).
- Consistency: respect capacity, foreign keys, unique constraints, date order (relative to today's date), and derived data (counters, totals, certificates only for passed students, and so on).
- Passwords: hash them exactly as the app does (bcrypt cost, argon2, etc.) and satisfy the app's password policy. Use one memorable password per role, plus any default password the app itself assigns.
- Write a deterministic, idempotent seed script (seeded PRNG, wipes then refills) in the project, local only, e.g. `prisma/seed-demo.mjs`, run it, and print the counts per table.
- Never put secrets or real personal data in the seed.

## 4. Build and run in production mode

Never leave an app in dev or watch mode. Build it, then start the built output, in the background, with logs.

| Kind | Build | Run |
|---|---|---|
| Next.js | `npm run build` | `npm start` (`next start`) |
| NestJS | `npm run build` | `npm run start:prod` or `node dist/main` |
| Vite / React / Vue SPA | `npm run build` | `npm run preview` (or serve `dist` with a static server) |
| Plain Express / Node without a build step | none | `npm start` (`node`, never `nodemon`) |
| Java (Maven) | `mvn -q package` | `java -jar target/<name>.jar` |
| Java (Gradle) | `gradle build` | `java -jar build/libs/<name>.jar` |
| Java (Ant / NetBeans) | `ant clean jar` | `java -jar dist/<name>.jar` |
| PHP | none | a `php:apache` container with the project mounted, next to the database (document its port) |

- Set the production environment (`NODE_ENV=production`) when the framework expects it.
- If the build fails, fix the cause with the smallest local change and record it. Do not hide real errors; if a build only fails on lint/type rules that dev mode ignores, say so before relaxing them.
- Point the frontend to the local API (many repos hardcode a hosted URL or a commented localhost line). Prefer an env variable; otherwise edit the constant locally and record it. Make sure CORS allows the frontend origin.
- Start with `setsid nohup <command> > <log> 2>&1 &` from the project folder so the services survive the session. Wait until each port answers (`curl`), then check the log for errors.
- Java desktop apps (Swing): build the jar, point its database settings to the Docker database (env or a local edit of the connection class, recorded), then launch with `java -jar` in the background. WSL2 shows GUI windows through WSLg; check `echo $DISPLAY`/`echo $WAYLAND_DISPLAY`. If there is no display, say so instead of pretending it runs.
- One process per service, list the PIDs or how to stop them.

## 5. Verify before reporting

- API: log in as every role with the credentials you will hand over, and call at least one data endpoint per role; check the counts match the seed.
- UI: log in through the real web UI for every role and confirm the first screen renders (use browser automation if available, with generous waits on the first load). In production mode pages should be fast on the first click.
- Fix anything broken before telling the user it is up.

## 6. Report

Short and in the user's language. Include:
1. Where to open it (URLs) and that it is running in build+start mode.
2. A credentials table: one row per role (email or user, password), plus which account has the richest data for screenshots.
3. What the data contains (counts, states covered).
4. What you changed in the clones (pinned versions, `.env`, seed script, API URL edits, build fixes), all local.
5. Screenshot cautions from the docs' "Not for the portfolio" rules (names, logos or data that must not appear).
6. How to start/stop/reseed. Write the same in `/home/daniel/side-projects/<slug>/README.md`.

## Projects

| Slug | Repos | Stack | Doc | Notes |
|---|---|---|---|---|
| `escuela` | Escuela-Backend, Escuela-Frontend | Express + Prisma 5.22 + MySQL, Next.js 15 | `escuela.md` | Roles: administrador, profesor, estudiante. Backend port 4000, frontend 3000, DB 3306. Frontend API URL is in `src/app/constants/constants.js` (hardcoded Render URL). The app assigns `Pr12345678*` to every teacher it registers. Admin logo shows the real academy name (EDUCA): warn about screenshots. No seed script exists: use the Prisma migration and a seed. Already set up once in `/home/daniel/side-projects/escuela/`. |
| `spira` | SpiraAPI, Spira-Portal | NestJS 12 + TypeORM + PostgreSQL 16, React 19 + Vite | `spira.md` | Roles: ADMIN, RETAILER, RECIPIENT (NGO). Seed two retailers with branches and pinned coordinates, two NGOs, lots in varied categories (one use-by past its date), one donation per status. Tenant isolation: use two orgs per side. |
| `it-assets-tracker` | API-HS-2026, NextJS-HS, VueJS-HS | NestJS 11 + TypeORM + PostgreSQL, Next.js 16, Vue 3 | `hs-inventory.md` | No auth, no roles. Migrations seed some data: extend it. Run both frontends against the one API. |
| `clinica` | Clinica-Backend, Clinica-Frontend | Express + Prisma 5 + MySQL, React 18 + Vite | `clinica.md` | Roles: paciente, doctor, administrador (register accepts `tipoUsuario`). `npm test` runs `prisma migrate reset` and wipes the DB: never run it against the demo database. Appointment states: Solicitada, Opciones, Programada, Finalizada, Cancelada. |
| `conejos` | SistemaConejos (private) | Native PHP + MySQL, FPDF | `conejos.md` | Roles: Administrador, Gerente, Jornalero, Veterinario. Import `baseDatos.sql`; DB credentials are hardcoded in `controllers/conexion.php` (adjust locally). Run PHP in a container. |
| `stii` | Proyecto-STII | Java 8 Swing (NetBeans/Ant) + MySQL, iText | `stii.md` | Build with Ant to a jar; DB script `TABLA SQL PROVEEDOR.sql`; connection and login are hardcoded in `src/logica/conectate.java` and `src/clases/InicioUsuario.java` (adjust locally). Seed suppliers, tickets, transactions, rates and advances for several weeks. |
