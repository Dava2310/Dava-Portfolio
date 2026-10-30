import type { SideProjectData } from "../types";

export const conejos: SideProjectData = {
  tags: ["PHP", "MySQL", "JavaScript", "FPDF", "HTML/CSS", "Sessions"],
  numbers: ["4", "8", "63", "23"],
  featureShots: [undefined, undefined, undefined],
  stack: {
    frontend: "HTML rendered by PHP · vanilla JS (fetch) · jQuery · custom CSS",
    backend: "Native PHP · mysqli · one class per entity · JSON endpoints",
    database: "MySQL / MariaDB · 8 tables with foreign keys",
    auth: "PHP sessions · menu per role",
    tooling: "FPDF for the PDF report",
  },
  solo: false,
  gallery: [
    { ratio: "16/10" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "3/4" },
  ],
  repos: [{ label: "Sistema Conejos", private: true }],
};
