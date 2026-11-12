import type { Dict } from "../../types";

export const skills: Dict["_pages"]["skills"] = {
  intro: {
    kicker: "mi día a día",
    title: "Habilidades y herramientas",
    lead: "Mi stack principal va primero: las herramientas con las que más trabajo. Lo demás de mi caja de herramientas está abajo, agrupado según para qué sirve.",
  },
  main: {
    title: "Mi stack principal",
    note: "(con lo que empiezo siempre)",
    items: {
      python:
        "Herramientas de CI, validadores y de pruebas para proyectos de agentes de IA.",
      typescript:
        "APIs tipadas y aplicaciones web, desde la base de datos hasta la pantalla.",
      nestjs: "APIs REST con roles, guards y un contrato OpenAPI.",
      react: "Aplicaciones web con React 19, construidas con Vite y Tailwind.",
      nextjs:
        "Una plataforma web en producción para una empresa agroindustrial.",
      postgresql:
        "Un esquema de 16 tablas con transacciones bloqueadas y seguras ante condiciones de carrera.",
      docker:
        "Contenedores para los entornos de los agentes de IA y sus herramientas.",
      githubactions:
        "CI que solo ejecuta los flujos de trabajo que afecta cada commit.",
    },
  },
  toolbox: {
    title: "También en mi caja de herramientas",
    note: "(usadas en trabajo real y proyectos)",
  },
  categories: {
    languages: "Lenguajes",
    backend: "Backend",
    frontend: "Frontend e interfaces",
    databases: "Bases de datos",
    infra: "Infraestructura y DevOps",
    ai: "Pruebas y herramientas de IA",
  },
  tools: {
    mcp: "Servidores MCP",
    agents: "Agentes LLM",
    statistics: "Estadística y probabilidad",
  },
  exploring: {
    title: "Explorando lo siguiente",
    note: "durante mi maestría en Harbour.Space",
  },
  languages: {
    title: "Idiomas",
    spanish: "Español",
    spanishLevel: "nativo",
    english: "Inglés",
    englishLevel: "C1 · profesional",
  },
  people: {
    title: "Habilidades interpersonales",
    lead: "Líder técnico de equipos de 4 a 10 personas",
    teaching: "Enseñanza a principiantes",
    captain: "Capitán del equipo de Petrobowl",
    writing: "Redacción técnica y UML",
    remote: "Colaboración remota",
  },
};
