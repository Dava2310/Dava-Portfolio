import certificate from "@/assets/spira/custody-certificate-pdf.png";
import deployment from "@/assets/spira/deployment-diagram.png";
import ngoClaims from "@/assets/spira/feature-ngo-claims-and-collections.png";
import shopInventory from "@/assets/spira/feature-shop-inventory-and-logging.png";
import hero from "@/assets/spira/hero-shop-shelf-pass.png";
import verificationPass from "@/assets/spira/ngo-profile-verification-pass.png";
import register from "@/assets/spira/register-choose-side.png";
import donationQueue from "@/assets/spira/retailer-donations-queue.png";
import impact from "@/assets/spira/retailer-profile-impact-partners.png";
import swagger from "@/assets/spira/api-swagger-docs.png";

import type { SideProjectData } from "../types";

/** Phone screens composed on a cream background: wide for hero and features, 3:4 for the gallery. */
const wide = (src: string, height = 1200) => ({ src, width: 1920, height });
const tile = (src: string) => ({ src, width: 1200, height: 1600 });

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
  hero: wide(hero, 1080),
  diagram: { src: deployment, width: 3960, height: 1480 },
  featureShots: [wide(shopInventory), wide(ngoClaims), wide(swagger, 1080)],
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
    { ratio: "3/4", image: tile(register) },
    { ratio: "3/4", image: tile(donationQueue) },
    { ratio: "3/4", image: tile(certificate) },
    { ratio: "3/4", image: tile(impact) },
    { ratio: "3/4", image: tile(verificationPass) },
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
