import courses from "@/assets/escuela/admin-courses-management.png";
import certificatePdf from "@/assets/escuela/certificate-pdf.png";
import certificates from "@/assets/escuela/admin-certificates-uxd-220.png";
import enrollments from "@/assets/escuela/admin-enrollments-review.png";
import architecture from "@/assets/escuela/system-architecture-diagram.png";
import statistics from "@/assets/escuela/admin-statistics-age-distribution.png";
import statisticsCourses from "@/assets/escuela/admin-statistics-courses-by-category.png";
import students from "@/assets/escuela/admin-students-list.png";
import teachers from "@/assets/escuela/admin-teachers-list.png";
import studentCourses from "@/assets/escuela/student-courses-catalog.png";
import teacherDashboard from "@/assets/escuela/teacher-dashboard-section-capacity.png";

import type { SideProjectData } from "../types";

/** The screenshots are 1920 x 1080 PNG files, copied unchanged. */
const shot = (src: string) => ({ src, width: 1920, height: 1080 });

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
  hero: shot(courses),
  diagram: { src: architecture, width: 3600, height: 1560 },
  featureShots: [
    shot(enrollments),
    shot(teacherDashboard),
    shot(studentCourses),
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
    { ratio: "16/9", image: shot(students) },
    { ratio: "16/9", image: shot(teachers) },
    { ratio: "16/9", image: shot(statistics) },
    { ratio: "16/9", image: shot(statisticsCourses) },
    { ratio: "16/9", image: shot(certificates) },
    { ratio: "16/9", image: shot(certificatePdf) },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/Escuela-Backend" },
    { label: "Web app", url: "https://github.com/Dava2310/Escuela-Frontend" },
  ],
};
