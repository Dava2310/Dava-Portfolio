import type { Dict } from "../../types";

export const projects: Dict["_pages"]["projects"] = {
  intro: {
    kicker: "¡manos a la obra!",
    title: "Lo que he construido",
    lead: "Trabajo para clientes y proyectos personales. Cada tarjeta abre su propia página: el problema, cómo lo construí, la arquitectura y lo que aprendí.",
  },
  filters: {
    all: "Todos",
    web: "Apps web",
    backend: "Backend y APIs",
    desktop: "Escritorio",
    data: "Datos e IA",
    tools: "Herramientas para devs",
  },
  featured: {
    badge: "Destacado · Proyecto para cliente",
    alt: "Página de inicio de la plataforma web de Mandioca",
    title: "Plataforma Mandioca",
    description:
      "Del campo a la báscula del camión: una plataforma web, trazabilidad con QR y un bot de Telegram, y una app de escritorio para la báscula de una empresa agroindustrial en Maturín.",
    stats: {
      speed: "carga de páginas más rápida",
      uptime: "disponibilidad en AWS",
      support: "respuestas de soporte más rápidas",
    },
    cta: "Leer el caso de estudio",
  },
  side: {
    title: "Proyectos personales",
    note: "(hechos por diversión y para aprender)",
    story: "Leer la historia",
    code: "Código en GitHub",
    demo: "Demo en vivo",
  },
};
