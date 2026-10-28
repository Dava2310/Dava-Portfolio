import type { SideProjectData } from "../types";

export const escuela: SideProjectData = {
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Express",
    "Prisma",
    "MySQL",
    "Tailwind CSS",
  ],
  numbers: ["3", "~52", "13", "53"],
  featureShots: [undefined, undefined, undefined],
  evidence: [
    [
      "inscripciones.controller.js",
      "secciones.controller.js",
      "certificates.controller.js",
    ],
    ["src/validations/", "middleware/validate.js", "red/responds.js"],
    ["reports/reportCertificate.js", "reportCertificate.routes.js"],
    ["getTeacherSections", "teacher/dashboard/page.tsx"],
    ["prisma/schema.prisma", "auth.controller.js", "test/"],
  ],
  layerPaths: [
    "Escuela-Frontend/src/app/{admin,teacher,student}",
    "Escuela-Backend/src/{routes,controllers,validations}",
    "Escuela-Backend/prisma/schema.prisma",
  ],
  stack: {
    frontend:
      "Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS · shadcn/ui · react-hook-form · zod · TanStack Table · Recharts",
    backend: "Node.js · Express 4 · Joi · PDFKit",
    database: "MySQL · Prisma 5 · migrations",
    auth: "JWT access and refresh tokens · bcrypt",
    infra: "Render (backend, at the last deploy)",
    testing: "Jest · supertest",
  },
  solo: true,
  gallery: [
    { ratio: "16/10" },
    { ratio: "16/10" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "16/10" },
    { ratio: "16/10" },
    { ratio: "3/4" },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/Escuela-Backend" },
    { label: "Web app", url: "https://github.com/Dava2310/Escuela-Frontend" },
  ],
};
