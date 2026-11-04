# Project rules

- Stack: React 19, Vite 8 (multipage), TypeScript strict, Tailwind v4 via `@apply`, i18next. Package manager: pnpm. Node 22.
- Layers: `app → features → shared, lang`. `shared` never imports from `app`/`features`; shared UI gets text as props.
- One folder per unit: `Name/Name.tsx`, `styles.css`, `index.ts`. No inline styles or utility strings in TSX.
- All copy lives in `src/lang/<lng>/`; English is the source of truth, Spanish must match its shape.
- Definition of done: `pnpm format && pnpm lint && pnpm build`.
- See README.md for the multipage build and how to add pages or languages.

## Git workflow

- Never commit or push to `main`. Start every change on a feature branch cut from an up-to-date `main` (`git switch main && git pull`), named `type/short-summary` (e.g. `feat/spira-gallery`, `fix/hero-caption`).
- Push the branch and open a pull request into `main` (`gh pr create`).
- A pull request is ready only when CI passes (format check, lint, build). Watch it with `gh pr checks --watch`; if it fails, fix it on the same branch and push again.
- Never merge: no `gh pr merge`, no merging or rebasing into `main` locally. Only Daniel merges, and a merge to `main` deploys the site to Firebase Hosting.
