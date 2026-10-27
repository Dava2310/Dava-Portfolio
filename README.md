# dava-portfolio

Bilingual (EN/ES) multipage portfolio for Daniel Vetencourt. React 19 + Vite 8 + TypeScript, Tailwind v4, i18next. Deployed to Firebase Hosting.

## Commands

| Command        | What it does                                              |
| -------------- | --------------------------------------------------------- |
| `pnpm dev`     | Dev server on http://localhost:3002 (redirects to `/en/`) |
| `pnpm build`   | Type-check, then build all pages × languages into `dist/` |
| `pnpm preview` | Serve `dist/`                                             |
| `pnpm format`  | Prettier                                                  |
| `pnpm lint`    | oxlint (type-aware, zero warnings)                        |
| `pnpm deploy`  | `firebase deploy --only hosting`                          |

Definition of done: `pnpm format && pnpm lint && pnpm build`.

## How the multipage build works

- `src/shared/config/pages.ts` lists every page (`id` + public `path`).
- `pages/<id>.html` is the HTML entry of each page; it loads `src/app/entries/<id>.tsx`, which mounts `src/app/pages/<Name>/`.
- `vite.config.ts` feeds the list to `build.rollupOptions.input`, so Rollup builds one entry per page and splits shared code (`vendor-react`, `vendor-i18n`, shared UI) into common chunks. Each page loads only its own chunk.
- `plugins/langPages.ts` emits each page once per language at its public URL (`/en/projects/index.html`, `/es/projects/index.html`) with translated `<title>`, description, canonical, `hreflang` and Open Graph tags. It also emits `/index.html` (language redirect), `sitemap.xml` and `robots.txt`.

## Translations

- Dictionaries are TypeScript in `src/lang/<lng>/` (`_common.ts`, `pages/<id>.ts`, `meta.ts`). English is the source of truth: `Dict = typeof en`, so a missing Spanish key fails `tsc`.
- Use `useTranslation` from `@/features/i18n` and namespaced keys: `t("_pages:projects.title")`.
- To add a language: add it to `LANGS` and `Lang` in `src/lang`, create `src/lang/<lng>/`. Pages, sitemap and hreflang follow automatically.
- To add a page: add it to `PAGES`, create `pages/<id>.html`, `src/app/entries/<id>.tsx`, the page view, its dictionaries and its `meta` entries.

## Styling

Tailwind v4 is used only through `@apply` in co-located `styles.css` files with semantic class names; tokens live in `src/shared/ui/styles/tailwind.css`. Global entry (`styles.css`) holds fonts, tokens and base; component styles are imported by their own TSX so each page ships only the CSS it uses.

## Configuration

Copy `.env.example` to `.env`. `SITE_URL` is the public origin used in canonical, hreflang and sitemap URLs.

## Deploy (Firebase Hosting)

1. Put the project ID in `.firebaserc` and in the GitHub repository variable `FIREBASE_PROJECT_ID`.
2. Add repository variable `SITE_URL` and secret `FIREBASE_SERVICE_ACCOUNT`.
3. Push to `main`: CI runs format check, lint and build, then deploys.
