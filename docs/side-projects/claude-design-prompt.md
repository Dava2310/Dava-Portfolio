# Prompt for Claude Design: side project case-study page

Paste everything below the line into Claude Design.

---

Design ONE reusable page template, "Side project case study", for my personal portfolio. It must fit six different side projects with the same layout (a web platform, an API with two frontends, a desktop app, a private repo, a team project, a solo project), so every part of the page is driven by generic fields and most blocks are optional. Show it filled with two real projects so I can see the range, plus a small "variants" board.

## Look and feel: match my existing portfolio

Reuse the visual language of my current canvas "Daniel Vetencourt — Portfolio" (same system, do not invent a new one):

- Warm cream paper background `#F3ECE0`, ink text `#1F2533`, soft ink `#3C4252`, muted `#575C6B`, one blue accent `#2A4D9B` (hover `#1E3A78`), cards `#FFFDF8`, lines `#D5C8B0`, accent tint `#E3E9F5`.
- Type: Bricolage Grotesque (headings, 800, tight tracking), Figtree (body 17px/1.6), Caveat (handwritten notes, kickers, captions).
- Cards look like taped paper: soft shadow, 8px radius, translucent masking-tape strips, slightly tilted polaroid-style photos. Rounded buttons (14px), pill tags.
- Page width max 1200px with fluid side padding. Header: logo `daniel.v`, nav, language switch (EN / ES) and a "Say hola" button. The header is sticky. There is a round "back to top" button at the bottom right after scrolling.
- Interactions to show or annotate: every button and link shrinks slightly while pressed; images open in a zoom viewer on click; keyboard focus is clearly visible.
- No emoji, no gradients washes, no left-border cards, no filler or lorem ipsum. Real accessible HTML semantics, contrast 4.5:1, works at 390px phone width.
- Bilingual (English and Spanish): leave room, Spanish runs about 25% longer. No text inside images.

## Page structure (top to bottom)

1. **Back link** to the projects list, and breadcrumb-style kind label (e.g. "Academic project · 2026").
2. **Intro**: handwritten kicker, project name (H1), one-line description, and a **facts card** (role, context, period, team, status). Optional chips: live demo, repo links.
3. **Hero image** (taped, 16:9) with a handwritten caption. Zoomable.
4. **Key numbers strip** (optional, 0–4 items): evidence-backed counts such as "123 routes", "3 roles", "16 tables", "170+ tests". Hide the strip when there are none.
5. **The problem and the idea**: short two-column block (title left, 1–2 paragraphs right).
6. **What I built**: features grouped by actor or module (2–4 groups). Each group is a card with a title, 3–6 short bullets and an optional screenshot slot.
7. **Impact highlights** (the star of the page): 4–6 ranked cards. Each has a number, a title, "What it is", "Why it matters", and small mono "evidence" chips (file or module names). Make the top 3 visually stronger than the rest.
8. **Architecture**: an optional diagram figure (zoomable; state machine, ER diagram or deployment diagram) with a caption, plus a **stack table by layer** (Frontend, Backend, Database, Auth, Infra, Testing, Tooling; rows can be missing).
9. **My role and team**: what I owned vs what teammates or designers owned, with credited names. Variants: solo, or a team of 2–6.
10. **Lessons learned**: a handwritten-style note card in first person (2–5 short lessons).
11. **Gallery**: 3–12 screenshots in a masonry or uneven polaroid grid with captions; each opens the zoom viewer. Include a graceful empty state: labelled placeholders when images are still missing.
12. **Links**: repositories (1–4; a private repo shows a "private repository" label with no link), live demo (optional, with a note that the server may take a while to wake up), documentation (optional).
13. **Pager**: previous and next project cards.

## Generic content model (what every project provides)

kind label, name, one-liner (max ~140 chars), tags (3–7), context (academic, real-world, personal), period, effort note (optional), status, outcome (optional, only if stated), team members with roles, my role, problem paragraph(s), feature groups, highlights (4–6), key numbers (0–4), architecture diagram (optional), stack by layer, lessons (2–5), screenshots (0–12) with captions, repo links (0–4, some private), live URL (optional), docs links (optional).

## Show it filled with these two (and sketch the others as variants)

**A. Spira (richest case)**: "Academic project · 2026". Food-surplus platform: shops list expiring stock, NGOs claim it and collect it with a QR/PIN pass. Team of 6 at Harbour.Space; I built the whole API and the web app, the UI design came from two teammates (Elena Paoli, Ecem Gonul), three more worked on the business side. Period: about 3 weeks. Highlights: (1) found and fixed a cross-tenant data leak with a repeatable probe, (2) race-safe claiming with a transaction and row locks, (3) a donation state machine with a single-use QR/PIN pass, (4) immutable custody certificates, (5) an OpenAPI-generated client keeping front and back in sync. Numbers: about 120 routes, 16 tables, 3 roles. Stack: NestJS, PostgreSQL, TypeORM, React 19, Vite, Tailwind, Leaflet. Live demo and two public repos. Diagram: the donation state machine. Lessons: test the rules not only the happy path; locks and constraints, not UI checks, prevent double claims.

**B. Proyecto STII / SARP (the smallest, different kind)**: "Academic project · 2021". Java Swing desktop app with MySQL for an agro-industrial company's accounting team: centralises supplier data (they used spreadsheets) and generates weekly payment orders with PDF reports. Team of 4 (me as main developer, Gabriel Antuarez, Virginia Sarah, Jennifer Sucre). Perfect score on the thesis. Numbers: 20 screens, 12 tables. No live demo, one public repo, no architecture diagram (use the stack table and an MVC layering note instead), 6 screenshots to come. This proves the template works for a desktop app without a URL.

**Variants board (small thumbnails, not full pages)**: (C) IT Assets Tracker: one project with three repos (API, Next.js app, Vue app) and a "Next vs Vue" comparison block as an extra highlight; (D) Sistema Conejos: private repo, ER diagram as the architecture figure, PDF report in the gallery; (E) Escuela: three roles (admin, teacher, student), no live demo, 8–10 screenshots. Show only what changes in each variant (links block, diagram, team block, gallery size).

## Output I want

- One desktop artboard (1280, fluid) and one phone artboard (390) of page A, one desktop artboard of page B, and the variants board.
- Name the reusable blocks (facts card, highlight card, evidence chip, feature group card, stack table, team credit row, lesson note, gallery tile, link row, pager) and mark which are optional.
- Show the three states for images (loaded, placeholder, zoom viewer open) and the pressed state of a button.
- Keep copy realistic, short and honest. Do not add claims, metrics or logos that are not given here.
