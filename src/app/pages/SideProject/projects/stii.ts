import type { SideProjectData } from "../types";

export const stii: SideProjectData = {
  tags: ["Java", "Swing", "MySQL", "JDBC", "iText", "NetBeans", "MVC"],
  numbers: ["20", "12"],
  featureShots: [undefined, undefined, undefined],
  evidence: [
    ["src/logica/ODP.java", "generar_ODP_Completa", "Tasa_USD.java"],
    ["TABLA SQL PROVEEDOR.sql", "Relacion_Proveedor_Beneficiario"],
    ["ODP.verificarODP", "transacciones.cerrarTransacciones"],
    ["src/clases/", "src/logica/", "PreparedStatement"],
    ["verificacionCompleta", "ODP.CrearPDF_PlantillaPagoBS"],
  ],
  layerPaths: ["src/clases/", "src/logica/", "TABLA SQL PROVEEDOR.sql"],
  stack: {
    frontend: "Java Swing · GroupLayout · NetBeans GUI builder",
    backend: "Java 8 · plain classes · JDBC with prepared statements",
    database: "MySQL 8 · Connector/J 8.0.23",
    tooling: "iText 5.5.12 for PDF · Ant build via NetBeans",
  },
  solo: false,
  gallery: [
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "4/3" },
    { ratio: "16/10" },
    { ratio: "3/4" },
  ],
  repos: [
    {
      label: "Proyecto-STII",
      url: "https://github.com/Dava2310/Proyecto-STII",
    },
  ],
};
