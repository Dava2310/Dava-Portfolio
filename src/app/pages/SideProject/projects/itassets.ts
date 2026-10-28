import type { SideProjectData } from "../types";

export const itassets: SideProjectData = {
  tags: [
    "NestJS",
    "PostgreSQL",
    "Next.js",
    "Vue 3",
    "OpenAPI",
    "Playwright",
    "Storybook",
  ],
  numbers: ["3", "170+", "23"],
  featureShots: [undefined, undefined, undefined],
  evidence: [
    ["src/generate-swagger.ts", "openapitools.json", "api-client/"],
    ["app/employees/_logic/index.test.ts", "e2e/assets.spec.ts", "stories/"],
    ["app/assets/_logic/index.ts", "views/assets/composables/useAsset.ts"],
    [
      "src/main.ts",
      "common/use-case/crud-repository.ts",
      "categories.service.ts",
    ],
    [".github/workflows/ci.yml", ".husky/pre-commit"],
  ],
  layerPaths: [
    "NextJS-HS · VueJS-HS",
    "API-HS-2026/src",
    "API-HS-2026/src/database",
  ],
  stack: {
    frontend:
      "Next.js 16 · Vue 3 · Vite 8 · Tailwind 4 · shadcn/ui · TanStack Query · Zod · Recharts · Unovis",
    backend: "NestJS 11 · TypeScript · class-validator · Swagger / OpenAPI",
    database: "PostgreSQL 16 · TypeORM · seed migrations",
    infra: "Docker · Docker Compose · GitHub Actions",
    testing:
      "Vitest · Testing Library · Vue Test Utils · Playwright · Storybook",
    tooling: "OpenAPI Generator · ESLint · Prettier · Husky",
  },
  solo: true,
  gallery: [
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/API-HS-2026" },
    { label: "Next.js app", url: "https://github.com/Dava2310/NextJS-HS" },
    { label: "Vue app", url: "https://github.com/Dava2310/VueJS-HS" },
  ],
};
