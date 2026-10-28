# SARP (Proyecto STII)

## At a glance

| Field             | Value                                                                                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type              | Desktop application (Java Swing + MySQL), internal accounting back-office tool                                                                                                                                                                                                |
| Context           | Academic project, Socio-Tecnologico II (associate degree in informatics, 2021), built for the accounting team of Agroindustrial Mandioca C.A. Presented only academically; never used by the company                                                                          |
| Author's role     | Main developer; collected the real requirements from the accounting team, modelled them into the database, designed how the app solves them, and built it                                                                                                                     |
| Status            | Delivered and presented (thesis passed). No later maintenance. Repo stays public                                                                                                                                                                                              |
| Repos             | [Dava2310/Proyecto-STII](https://github.com/Dava2310/Proyecto-STII) (public)                                                                                                                                                                                                  |
| Period            | Git: 2021-05-21 to 2021-08-18 (88 days, 33 active days). Author: does not recall whether work began before the first commit; the 2021-07-18 to 2021-08-10 gap was probably a coding break                                                                                     |
| Effort estimate   | About 32 h (sum of session lengths) to about 56 h (30 min added per session), 48 sessions. Estimate only                                                                                                                                                                      |
| Contributors/team | Daniel (68 commits, 93%), Gabriel Antuarez, shown as "gabo" (5 commits, 2021-05-24 to 05-26). "gabo" is Gabriel Antuarez. Virginia Sarah and Jennifer Sucre worked on the academic side (thesis theory); Virginia also drafted the UI (the PowerPoint draft no longer exists) |
| Outcome           | Thesis passed with a perfect score (author's statement)                                                                                                                                                                                                                       |

## Summary

SARP (Sistema Automatizado de Registro de Proveedores) is a Java desktop app that replaces a spreadsheet process at a cassava-processing company. It centralises suppliers, delivery tickets, transactions, advances and weekly exchange rates in one MySQL database. From that data it calculates each supplier's weekly payment order (ODP) in bolivars and dollars and exports PDF reports. It was the author's first large project as a student.

## The problem and the idea

Before, all the data lived in spreadsheets: no real database, and the same file had to be sent around again and again whenever someone else needed to work on it. There was no central place for the data. The idea: collect the real requirements from the accounting team, model them in a relational database, and build an MVC-style app that holds the data in one place and generates the ODP so the team knows how much to pay each supplier ("proveedor").

## Impact highlights

### 1. Real requirements turned into a working weekly payment-order engine

- What it is: for every supplier active in a week, the app computes four payment concepts (raw material, labour crew, freight, toll), subtracts advances, and stores one payment order per supplier, in both BS and USD.
- Why it matters: the rules come from a real accounting process, not a textbook example. Each concept has its own basis and its own unit, and two currencies must stay consistent through a weekly exchange rate. The author prefers NOT to state the formulas in the portfolio, so the page describes the process (concepts, advances, price table by dry-matter percentage, BS/USD by weekly rate) and never the arithmetic. The formulas stay documented in the code (`ODP.java`) only.
- Evidence: `src/logica/ODP.java` (896 lines): `generar_ODP_Completa`, `generarODP_Materia_Prima`, `ODP_Cuadrilla`, `ODP_Flete`, `ODP_Peaje`; `src/logica/anticipos.java` `anticipos_Proveedor_Semana`; `src/logica/Tasa_USD.java` `tasaSemana`; table `Tasa_Precios` seeded with dry-matter 21 to 42. Commits 2021-06-30 and 2021-07-01 ("formulas buenas de ODP").
- How to say it (EN): "I implemented the weekly payment-order calculation from the accounting team's real rules: four concepts with different bases, a dry-matter price table, advances and BS/USD conversion by weekly rate."
- Cómo decirlo (ES): "Implementé el cálculo semanal de la orden de pago con las reglas reales del equipo contable: cuatro conceptos con bases distintas, tabla de precios por materia seca, anticipos y conversión BS/USD según la tasa semanal."

### 2. Relational model that captures the business, with business rules enforced

- What it is: a 12-table MySQL schema (11 active; `reportes` is commented out) with keys, unique constraints and status columns that mirror the real process.
- Why it matters: modelling choices carry the domain.
  - A ticket (`boleto`) can back up to 4 transactions (`Cantidad_Transacciones`, enforced in the UI: a fifth is rejected with an error).
  - A transaction is a supplier + ticket + Yes/No flags for each concept, with a "No Procesada"/"Procesada" state.
  - Beneficiaries are separate from suppliers and linked through `Relacion_Proveedor_Beneficiario`, with an optional authorised person.
  - Tariff history with `VIGENTE`/`NO VIGENTE` and an end date. Suppliers can follow the standard tariff (`Cod_Tarifa`, 0 = custom) or have their own rates.
  - Weekly exchange rates in their own table, and each advance keeps a FK to the rate used (`Codigo_Tasa`).
  - ODP rows store a full breakdown per concept and currency.
- Evidence: `TABLA SQL PROVEEDOR.sql` (`create table` x12, FKs on `proveedor`, `anticipos`, `transacciones`, `ODP`, `Pago_Transaccion`; UNIQUE on `Identificacion` and `ID_Beneficiario`); commit 2021-06-14 "nuevo diseno de la base de datos" and 2021-06-08 move to separate tickets and transactions show the model was redesigned when requirements became clearer.
- How to say it (EN): "I designed a relational schema from the accounting team's requirements: tickets, transactions, advances, rates and payment orders, with foreign keys, unique constraints and status tracking."
- Cómo decirlo (ES): "Disene un esquema relacional a partir de los requisitos del equipo contable: boletos, transacciones, anticipos, tasas y ordenes de pago, con llaves foraneas, restricciones de unicidad y control de estados."

### 3. Safe week-closing flow and automatic tariff propagation

- What it is: generating the ODP for a week first checks whether it already exists (so it is shown, not duplicated); otherwise it creates one order per supplier and then marks that week's transactions as "Procesada", which keeps them out of later calculations. Updating the standard tariff closes the old one with an end date and pushes the new crew and freight rates to every supplier that follows it.
- Why it matters: it protects against double payment and keeps rates consistent without manual edits to each supplier.
- Evidence: `ODP.verificarODP`, `transacciones.cerrarTransacciones`, `PlantillaPago.mostrarODP`; `Tarifa_Estandar.deshacerVigencia`, `actualizarTarifas_Proveedores`; commit 2021-06-22. The calculation queries only select `Estado_Transaccion = 'No Procesada'`.
- How to say it (EN): "Generating a week's payment orders is idempotent, and closing the week marks its transactions as processed so they cannot be paid twice."
- Cómo decirlo (ES): "Generar las ordenes de una semana es idempotente, y al cerrarla sus transacciones quedan marcadas como procesadas para que no se paguen dos veces."

### 4. Layered MVC-style structure, separate screens per module

- What it is: 20 Swing screens (`src/clases`, 12.8k lines incl. generated GUI code) grouped by module, kept apart from 13 data/business classes (`src/logica`, 3.9k lines) with one class per entity and one JDBC connection class.
- Why it matters: the UI never builds SQL; every query is a `PreparedStatement` in the logic layer. This was the author's first time applying that separation. History shows a deliberate reorganisation into more specific packages (commits 2021-06-08) and a change so logic methods throw `SQLException` and the UI shows real success or error messages (2021-06-09, 2021-08-10).
- Evidence: package layout, `src/logica/*.java`, `grep PreparedStatement`; windows are laid out with the NetBeans GUI builder (20 `.form` files).
- How to say it (EN): "I split the app into windows and data-logic classes by module, with parameterised SQL in the logic layer and errors reported back to the user."
- Cómo decirlo (ES): "Separe la aplicacion en ventanas y clases de logica de datos por modulo, con SQL parametrizado en la capa logica y errores informados al usuario."

### 5. Input validation and PDF reporting as far as possible

- What it is: every form has a `verificacionCompleta()` check that highlights bad fields with a red border; key-typed filters on numeric fields; ID/phone/email/bank-account rules; date input as DD/MM/YYYY converted for MySQL. PDF reports (iText) for suppliers, advances, transactions, tickets, tariffs, price rates, USD rates, and the weekly payment template in BS or USD (A1 landscape, 17 columns).
- Why it matters: the accounting team can print and share the output, and bad data is stopped at entry.
- Evidence: `verificacionCompleta` in 10 screens (e.g. `CreacionProveedor.java:705`: phone digits 4+7, email, 20-digit account, authorised person); `ODP.CrearPDF_PlantillaPagoBS/DS`; 8 PDF report handlers in `PantallaPrincipal.java`; commits 2021-07-13 to 07-15 (validation pass).
- How to say it (EN): "Forms validate input before saving and the app exports PDF reports, including the weekly payment template."
- Honest note: validation is hand-written and repetitive (no shared validator, a simple email check), and the PDF code is mostly table dumps. Feature it as supporting evidence, not as a headline.

## What the author built (role and ownership)

- Daniel: requirements gathering with the accounting team, database model, application design and almost all the code (68 of 73 commits; about 46.7k lines added over history, mostly GUI-builder output). Logic layer, ODP formulas, validation and PDF reports are his.
- Gabriel Antuarez / "gabo" (5 commits, 3 days in May): advance screen tweaks (system date, locked fields), authorised-person ID type, phone fields.
- Virginia Sarah and Jennifer Sucre: academic work (thesis theory); Virginia drafted the UI in PowerPoint (the draft is lost, so it cannot be shown).
- AI assistance: none stated; the project predates AI coding tools (2021).

## Features

Single role: a login window opens a main window with menus (Archivo, Proveedor, Transaccion, ODP, Anticipos, Valores, Boletos, Tarifa Estandar, Reportes). UI text is Spanish.

- Suppliers: create, search by ID or code, table view, modify, deactivate/reactivate; per-supplier crew, freight, toll; raw-material mode TABLA (price table) or ACORDADO (agreed price); optional beneficiary with bank data and authorised person.
- Standard tariffs: create (validity dates, status), search/modify, propagate to suppliers.
- Tickets (boletos): create/search/modify with gross and net kg, dry matter, impurities, up to 4 transactions each (a real business rule, confirmed by the author).
- Transactions: supplier + ticket + chosen concepts; consult and modify; processed state.
- Advances: for active suppliers, reason, system date, BS/USD amount converted by the chosen weekly rate, flag to deduct from the ODP.
- Values: weekly USD rate table; price table by dry matter.
- Payment orders: choose week, view/generate ODP, payment template in BS or USD, PDF export.
- Reports: 8 PDF reports.

Screens by module (20 `.form` files): Login and Main (2); Proveedores (3: identification, creation, table); Boletos (3); Transacciones (3); Anticipos (3); Tarifa estandar (2); Tasas USD (1); Tasa de precios (1); ODP (2: week selector, payment template). Main class `clases.InicioUsuario`.

## Tech stack

| Layer    | Technology                                            | Notable                                         |
| -------- | ----------------------------------------------------- | ----------------------------------------------- |
| UI       | Java Swing, GroupLayout, Nimbus, NetBeans GUI builder | 20 screens                                      |
| Logic    | Java 8, plain classes                                 | Layered, no framework                           |
| Database | MySQL 8 via JDBC, mysql-connector-java 8.0.23         | 12-table schema, `PreparedStatement` everywhere |
| PDF      | iText 5.5.12                                          | Report generation                               |
| Build    | NetBeans Ant project, libraries committed as jars     |                                                 |
| Tests    | None                                                  |                                                 |

## Architecture &amp; code practices

Structure: `src/clases/<module>` (windows), `src/logica` (one class per entity plus `conectate` for the JDBC connection and `ConversionesVerificaciones` for helpers). No ORM.

Present:

- UI and logic split; parameterised SQL; per-form validation; Javadoc comments on logic classes (documentation commits July and August 2021); FKs and unique constraints; issue-driven work ("ISSUE 1").

Missing:

- Automated tests, CI (not relevant to mention; 2021 student project).
- Transactions and pooling: ODP generation inserts one row at a time with no DB transaction; a failure midway could leave a week partly generated. Money is `double`/`float`. Relevant to mention only as a lesson.
- `ACORDADO` raw-material suppliers: `MP_acordado` is stored but the ODP raw-material query filters on `TABLA`, so agreed-price suppliers get 0 raw material. Not for the portfolio (author: not visible in the repo, so do not mention it).
- `Pago_Transaccion` (ODP to transaction link) exists in the schema but its use is commented out; not featured.
- Very long GUI classes, procedural methods, lowercase class names.
- Credentials handling (author asked not to mention it, see below).

Not for the portfolio (author's instructions): do not mention the name of the compiled jar; do not mention hardcoded credentials (no values recorded here).

## Timeline &amp; effort

Git: 73 commits, 2021-05-21 15:48 to 2021-08-18 04:19; 33 active days; 48 sessions (a session ends after a 3 h gap). Estimate 32 to 56 h, not real hours. Heaviest weeks: 06-05 to 07-18. Story: May, suppliers and first transactions; June, redesign into tickets, tariffs and beneficiaries, advances, rates; 06-30 to 07-02, ODP formulas and reports; 07-13 to 07-16, validation and bug fixes; August, documentation and presentation fixes. The author does not recall pre-git work; the gap to 08-10 was probably a coding break.

## Lessons learned (the author's words, refined)

- "It was my first big project: I got the real requirements from the accounting team and had to turn them into a database and an application."
- "I learned to model a real process relationally and to redo the model when I understood the requirements better (the move to separate tickets and transactions)."
- "I learned to keep the interface apart from the data logic, and to validate input as much as possible before it reaches the database."
- "Next time I would add automated tests for the payment formulas, wrap each week's generation in a database transaction, and use decimal types for money."

## Portfolio material

Existing in repo: `TABLA SQL PROVEEDOR.sql` (source for an ER diagram); `src/imagenes/` has 15 icons and backgrounds (`ICONO SARP.png` can be a logo); no screenshots, PDFs or slides.

Still to capture (author runs it locally, fake data only):

1. ER diagram from the SQL script.
2. Login and main window with the menu bar.
3. Supplier creation with beneficiary and authorised person filled in (fake names and IDs).
4. Supplier table with one deactivated supplier.
5. Ticket creation (gross/net kg, dry matter) and the "4 transactions covered" error.
6. Transaction creation with the four concept toggles.
7. Advance creation showing BS/USD conversion with a chosen rate.
8. Price table (dry matter) and weekly USD rate table.
9. Week selector and the generated payment template table (BS and USD).
10. Sample PDF of the payment template (A1 landscape) and one other report, with fake data.

Draft local setup (inferred, not run): install a JDK 8+ and NetBeans (Ant project, main class `clases.InicioUsuario`); install MySQL 8 locally; run `TABLA SQL PROVEEDOR.sql` once (it drops and recreates the `proveedor` database, creates the tables and seeds the price table and a sample tariff); the connection settings are in class `conectate` and the login check is in `InicioUsuario`, so set them to match your local MySQL; libraries are in `Driver DataBase/` and `Driver PDF/` (add to the project classpath if missing); run from NetBeans, then enter an exchange rate for the week before creating advances or payment orders (the rate lookup returns 0 if the week has none).

## Draft portfolio copy

English

- Kind label: Academic project · 2021
- Name: SARP (Proyecto STII)
- One-liner: Java desktop app that centralises supplier data and generates weekly payment orders for an accounting team.
- Tags: Java, Swing, MySQL, JDBC, iText, MVC
- The problem: An accounting team managed supplier payments in spreadsheets with no central database, passing the same file around. Payment amounts depend on kilos delivered, tariffs and a weekly exchange rate.
- My role: Main developer in a student team with Gabriel Antuarez, Virginia Sarah and Jennifer Sucre. I gathered the requirements with the accounting team, modelled the database, designed the solution and wrote almost all the code.
- What I built: A Swing and MySQL app for suppliers, delivery tickets, transactions, advances, tariffs and rates, 20 screens, and PDF reports. It generates a weekly payment order per supplier in bolivars and dollars.
- Key decisions: Separate tickets from transactions (a ticket can back up to four); keep tariff and rate history; close a week's transactions after generating its orders; keep UI and data logic apart with parameterised SQL.
- What I learned: Modelling a real process, redesigning the schema as requirements clarify, validating input, and what I would add today: tests for the formulas and database transactions. The thesis passed with a perfect score.

Español

- Etiqueta: Proyecto académico · 2021
- Nombre: SARP (Proyecto STII)
- Descripción: Aplicación de escritorio en Java que centraliza datos de proveedores y genera órdenes de pago semanales para un equipo contable.
- Tags: Java, Swing, MySQL, JDBC, iText, MVC
- El problema: Un equipo contable gestionaba los pagos a proveedores en hojas de cálculo, sin base de datos central y enviando el mismo archivo una y otra vez. Los montos dependen de los kilos entregados, las tarifas y una tasa de cambio semanal.
- Mi rol: Desarrollador principal en un equipo estudiantil con Gabriel Antuarez, Virginia Sarah y Jennifer Sucre. Levanté los requisitos con el equipo contable, modelé la base de datos, diseñé la solución y escribí casi todo el código.
- Lo que construí: Una app Swing y MySQL para proveedores, boletos, transacciones, anticipos, tarifas y tasas, con 20 pantallas y reportes PDF. Genera una orden de pago semanal por proveedor en bolívares y dólares.
- Decisiones clave: Separar boletos de transacciones (un boleto puede respaldar hasta cuatro, regla de negocio real); conservar historial de tarifas y tasas; cerrar las transacciones de la semana tras generar sus órdenes; separar interfaz y lógica con SQL parametrizado.
- Lo que aprendí: Modelar un proceso real, rediseñar el esquema al aclararse los requisitos, validar entradas, y lo que agregaría hoy: pruebas de los cálculos y transacciones de base de datos. La tesis se aprobó con puntaje perfecto.

## Not for the portfolio (author's instructions)

- Do not state the payment formulas.
- Do not mention the compiled jar name or the hardcoded credentials.
- Do not mention supplier raw-material mode "ACORDADO" (it is not clearly implemented in the repo).
