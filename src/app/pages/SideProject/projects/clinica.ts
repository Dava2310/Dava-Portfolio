import type { SideProjectData } from "../types";

export const clinica: SideProjectData = {
  tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "JWT"],
  numbers: ["~45", "10", "8", "3"],
  featureShots: [undefined, undefined, undefined],
  stack: {
    frontend:
      "React 18 · TypeScript · Vite · React Router · Tailwind · Flowbite · react-hook-form · axios",
    backend: "Node.js · Express 4 · Joi · Swagger (auth) · multer",
    database: "MySQL · Prisma 5 · migrations",
    auth: "JWT · bcrypt · refresh rotation · logout blacklist",
    testing: "Jest · supertest (integration, real database)",
  },
  solo: false,
  gallery: [
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "3/4" },
    { ratio: "16/10" },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/Clinica-Backend" },
    { label: "Web app", url: "https://github.com/Dava2310/Clinica-Frontend" },
  ],
};
