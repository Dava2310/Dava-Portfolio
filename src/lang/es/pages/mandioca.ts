import type { Dict } from "../../types";

export const mandioca: Dict["_pages"]["mandioca"] = {
  back: "Todos los proyectos",
  kind: "Proyecto para cliente · Oct 2024 – Ene 2026",
  title: "Plataforma Mandioca",
  lead: "Del campo a la báscula del camión: una plataforma web, trazabilidad con QR y un bot de Telegram, y una app de escritorio para la báscula de una empresa agroindustrial en Maturín.",
  facts: {
    role: { label: "Rol", value: "Ingeniero de software" },
    where: { label: "Lugar", value: "Maturín, Venezuela" },
    company: { label: "Empresa", value: "Agroindustrial Mandioca C.A." },
    timeline: { label: "Duración", value: "15 meses" },
  },
  jump: {
    label: "En esta página",
    intro: "ir a:",
    problem: "El problema",
    built: "Lo que construí",
    architecture: "Arquitectura",
    decisions: "Decisiones clave",
    learned: "Lo que aprendí",
  },
  hero: {
    shot: "Captura principal · panel de control",
    caption: "el panel principal",
  },
  results: {
    label: "Resultados",
    speed:
      "más rápida la carga tras rediseñar la arquitectura de la API, con un código mucho más fácil de mantener.",
    uptime:
      "de disponibilidad en AWS, con un alojamiento seguro que desplegué y operé yo mismo.",
    support:
      "más rápida la comunicación interna y las respuestas de soporte, gracias a las alertas de Telegram en tiempo real.",
  },
  problem: {
    title: "El problema",
    p1: "Agroindustrial Mandioca necesitaba seguir su producto desde el campo hasta la entrega. El peso de los camiones se anotaba a mano en la báscula, las novedades de cada carga tardaban en llegar a las personas indicadas, y los distintos roles de la empresa necesitaban distintos niveles de acceso.",
    p2: "Diseñé y desarrollé la plataforma en todo el stack: frontend, API, base de datos, alojamiento en la nube y la pequeña app de escritorio que está junto a la báscula.",
  },
  built: {
    title: "Lo que construí",
    web: {
      shot: "Captura · plataforma web",
      title: "Plataforma web",
      description:
        "Un frontend en Next.js y una API en NestJS con autenticación JWT y roles y permisos dinámicos.",
    },
    qr: {
      shot: "Foto · etiqueta QR en una carga",
      title: "Trazabilidad con QR",
      description:
        "Cada carga recibe un código QR dinámico, de modo que el producto se puede seguir de principio a fin: del campo a la entrega.",
    },
    bot: {
      shot: "Captura · alertas de Telegram",
      title: "Bot de Telegram",
      description:
        "Notificaciones en tiempo real para el equipo cada vez que una carga se registra, se pesa o se mueve.",
    },
    scale: {
      shot: "Captura · app de la báscula",
      title: "App de la báscula",
      description:
        "Una app de escritorio en Python que lee la báscula por puerto serial y registra el peso de cada camión en el momento en que se mide.",
    },
  },
  architecture: {
    title: "Arquitectura",
    lead: "Cómo encajan las piezas, directamente de mis diagramas UML: dónde corre cada cosa, el modelo de dominio y qué ocurre cuando se pesa un camión.",
    zoom: "clic para ampliar",
    deployment: {
      shot: "UML · Diagrama de despliegue",
      name: "Despliegue",
      caption: "EC2, RDS, S3 y el PC de la báscula",
    },
    domain: {
      shot: "UML · Diagrama de clases",
      name: "Modelo de dominio",
      caption: "cargas, camiones, pesajes, usuarios y roles",
    },
    sequence: {
      shot: "UML · Diagrama de secuencia",
      name: "Pesar un camión",
      caption: "báscula → app de escritorio → API → Telegram",
    },
    stack: {
      title: "El stack, capa por capa",
      layer: "Capa",
      tools: "Herramientas",
      frontend: { name: "Frontend", tools: "Next.js · shadcn/ui" },
      api: {
        name: "API",
        tools:
          "NestJS (migrado desde Express) · Prisma ORM · JWT con roles dinámicos",
      },
      database: { name: "Base de datos", tools: "MySQL en Amazon RDS" },
      hosting: {
        name: "Alojamiento",
        tools: "EC2 con Caddy · S3 · Route 53 · VPC",
      },
      scale: {
        name: "En la báscula",
        tools: "Python · Tkinter · comunicación serial",
      },
      notifications: { name: "Notificaciones", tools: "Telegram Bot API" },
    },
  },
  decisions: {
    title: "Decisiones clave",
    nest: {
      title: "Migrar la API de Express a NestJS",
      body: "A medida que crecían los roles y permisos, los módulos y guards de NestJS dieron a la API una estructura más fácil de razonar, y ayudaron a reducir los tiempos de carga en un 60%.",
    },
    alerts: {
      title: "Alertas en tiempo real, por Telegram",
      body: "Los eventos de seguimiento llegan al equipo mediante un bot de Telegram, así que las novedades aparecen en el momento en que ocurren: los tiempos de respuesta de soporte bajaron un 75%.",
    },
    scale: {
      title: "Leer la báscula directamente",
      body: "Una pequeña app en Python se comunica con la báscula por puerto serial, así que cada peso entra al sistema automáticamente en lugar de copiarse a mano.",
    },
    hosting: {
      title: "Alojamiento simple y sólido",
      body: "EC2 detrás de Caddy para HTTPS, MySQL en RDS y archivos en S3, todo dentro de una VPC: suficiente para mantener la plataforma con 99,9% de disponibilidad.",
    },
  },
  learned: {
    title: "lo que aprendí",
    body: "[Dos o tres frases con tus propias palabras: qué te sorprendió, qué harías distinto y de qué estás más orgulloso.]",
  },
  pager: {
    label: "Más proyectos",
    backLabel: "Volver a",
    back: "Todos los proyectos",
    nextLabel: "Siguiente proyecto",
    next: "[Nombre del proyecto personal]",
  },
};
