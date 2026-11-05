import advances from "@/assets/stii/advances.png";
import login from "@/assets/stii/login.png";
import main from "@/assets/stii/main-window-reports-menu.png";
import prices from "@/assets/stii/price-table-by-dry-matter.png";
import suppliers from "@/assets/stii/suppliers-table-selected-supplier.png";
import tickets from "@/assets/stii/weigh-tickets.png";
import transactions from "@/assets/stii/transactions-split-ticket.png";

import type { SideProjectData } from "../types";

/** Desktop windows, cropped to the window itself (size in px). */
const win = (src: string, width: number, height: number) => ({
  src,
  width,
  height,
});

export const stii: SideProjectData = {
  tags: ["Java", "Swing", "MySQL", "JDBC", "iText", "NetBeans", "MVC"],
  numbers: ["20", "12"],
  hero: win(main, 1136, 586),
  featureShots: [
    win(suppliers, 1920, 1020),
    win(transactions, 834, 755),
    win(advances, 841, 583),
  ],
  stack: {
    frontend: "Java Swing · GroupLayout · NetBeans GUI builder",
    backend: "Java 8 · plain classes · JDBC with prepared statements",
    database: "MySQL 8 · Connector/J 8.0.23",
    tooling: "iText 5.5.12 for PDF · Ant build via NetBeans",
  },
  solo: false,
  gallery: [
    { ratio: "409/519", image: win(login, 409, 519) },
    { ratio: "793/680", image: win(tickets, 793, 680) },
    { ratio: "603/614", image: win(prices, 603, 614) },
  ],
  repos: [
    {
      label: "Proyecto-STII",
      url: "https://github.com/Dava2310/Proyecto-STII",
    },
  ],
};
