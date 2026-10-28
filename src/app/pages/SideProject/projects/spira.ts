import type { SideProjectData } from "../types";

export const spira: SideProjectData = {
  tags: [
    "NestJS",
    "PostgreSQL",
    "TypeORM",
    "React 19",
    "Vite",
    "Tailwind",
    "Leaflet",
  ],
  numbers: ["~120", "16", "3"],
  featureShots: [undefined, undefined, undefined],
  evidence: [
    ["common/scoping/org-scope.ts", "scripts/tenant-isolation-probe.sh"],
    ["recipient-portal/reservations.service.ts"],
    [
      "donations/donations.service.ts",
      "donations/entities/pickup-token.entity.ts",
    ],
    ["donation-receipts/donation-receipts.service.ts"],
    ["src/generate-swagger.ts", "Spira-Portal/src/api-client/"],
  ],
  layerPaths: [],
  stack: {
    frontend: "React 19 · Vite 8 · Tailwind 4 · TanStack Query · Leaflet",
    backend: "NestJS 12 · TypeScript · class-validator · Swagger · pdfkit",
    database: "PostgreSQL 16 · TypeORM · migrations",
    auth: "JWT · bcrypt · token revocation · role guard",
    infra: "Render · Supabase · Vercel",
    tooling: "pnpm · oxlint · Prettier · API client generated from OpenAPI",
  },
  solo: false,
  gallery: [
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "3/4" },
    { ratio: "3/4" },
    { ratio: "4/3" },
    { ratio: "16/10" },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/SpiraAPI" },
    { label: "Web app", url: "https://github.com/Dava2310/Spira-Portal" },
  ],
  live: {
    url: "https://spira-portal.vercel.app",
    display: "spira-portal.vercel.app",
  },
};
