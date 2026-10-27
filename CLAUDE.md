# Project rules

- Stack: React 19, Vite 8 (multipage), TypeScript strict, Tailwind v4 via `@apply`, i18next. Package manager: pnpm. Node 22.
- Layers: `app → features → shared, lang`. `shared` never imports from `app`/`features`; shared UI gets text as props.
- One folder per unit: `Name/Name.tsx`, `styles.css`, `index.ts`. No inline styles or utility strings in TSX.
- All copy lives in `src/lang/<lng>/`; English is the source of truth, Spanish must match its shape.
- Definition of done: `pnpm format && pnpm lint && pnpm build`.
- See README.md for the multipage build and how to add pages or languages.
