import assetsCreate from "@/assets/it-assets-tracker/assets-create-form.png";
import assetsList from "@/assets/it-assets-tracker/assets-list-with-filters.png";
import validation from "@/assets/it-assets-tracker/categories-create-modal-validation-errors.png";
import dashboard from "@/assets/it-assets-tracker/dashboard-metrics-and-asset-creations-chart.png";
import schema from "@/assets/it-assets-tracker/database-schema-diagram.png";
import employeesCreate from "@/assets/it-assets-tracker/employees-create-modal.png";
import employeesList from "@/assets/it-assets-tracker/employees-list.png";
import swagger from "@/assets/it-assets-tracker/api-swagger-ui-endpoints.png";

import type { SideProjectData } from "../types";

/** The screenshots are 1920 x 1080 PNG files, copied unchanged. */
const shot = (src: string) => ({ src, width: 1920, height: 1080 });

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
  hero: shot(dashboard),
  diagram: { src: schema, width: 3960, height: 1120 },
  featureShots: [undefined],
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
    { ratio: "16/9", image: shot(swagger) },
    { ratio: "16/9", image: shot(assetsList) },
    { ratio: "16/9", image: shot(employeesList) },
    { ratio: "16/9", image: shot(employeesCreate) },
    { ratio: "16/9", image: shot(assetsCreate) },
    { ratio: "16/9", image: shot(validation) },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/API-HS-2026" },
    { label: "Next.js app", url: "https://github.com/Dava2310/NextJS-HS" },
    { label: "Vue app", url: "https://github.com/Dava2310/VueJS-HS" },
  ],
};
