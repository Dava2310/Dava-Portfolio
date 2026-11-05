import users from "@/assets/conejos/admin-users-management.png";
import crossings from "@/assets/conejos/crossings-list-parents-detail.png";
import login from "@/assets/conejos/login.png";
import pregnancies from "@/assets/conejos/pregnancy-tracking.png";
import report from "@/assets/conejos/production-report-pdf.png";
import rabbits from "@/assets/conejos/rabbit-management-with-parents.png";
import sales from "@/assets/conejos/sales-data-and-report-button.png";

import type { SideProjectData } from "../types";

/** The screenshots are 1920 x 1080 PNG files (the report is a rendered PDF page on that canvas). */
const shot = (src: string) => ({ src, width: 1920, height: 1080 });

export const conejos: SideProjectData = {
  tags: ["PHP", "MySQL", "JavaScript", "FPDF", "HTML/CSS", "Sessions"],
  numbers: ["4", "8", "63", "23"],
  hero: shot(login),
  featureShots: [shot(rabbits), shot(crossings), shot(sales)],
  stack: {
    frontend: "HTML rendered by PHP · vanilla JS (fetch) · jQuery · custom CSS",
    backend: "Native PHP · mysqli · one class per entity · JSON endpoints",
    database: "MySQL / MariaDB · 8 tables with foreign keys",
    auth: "PHP sessions · menu per role",
    tooling: "FPDF for the PDF report",
  },
  solo: false,
  gallery: [
    { ratio: "16/9", image: shot(pregnancies) },
    { ratio: "16/9", image: shot(users) },
    { ratio: "16/9", image: shot(report) },
  ],
  repos: [{ label: "Conejera", url: "https://github.com/Dava2310/Conejera" }],
};
