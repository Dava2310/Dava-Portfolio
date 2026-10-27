import type { Dict } from "../../types";

export const experience: Dict["_pages"]["experience"] = {
  intro: {
    kicker: "paso a paso",
    title: "Dónde he trabajado",
    lead: "Desde construir una plataforma completa para una empresa de mi país, pasando por enseñar robótica, hasta infraestructura para agentes de IA en Barcelona.",
  },
  now: "Ahora",
  technologies: "Tecnologías",
  jobs: {
    toloka: {
      range: "Dic 2025 – Actualidad",
      place: "Barcelona, España",
      company: "Toloka AI",
      role: "Ingeniero Python · Infraestructura para agentes de IA y DevTools",
      bullets: {
        b1: "Rediseñé el CI de los pipelines de calibración de agentes para ejecutar solo los workflows que un commit realmente afecta, reduciendo el tiempo de ejecución y el gasto en cómputo.",
        b2: "Reconstruí una herramienta de equidad de tests con muestreo basado en puntuaciones sobre varios intentos del agente, que detecta tests inestables y de justicia dudosa.",
        b3: "Construí una capa de validación de extremo a extremo para los archivos de contexto de tareas: validador CLI, workflow de GitHub y cambios en el servidor MCP dentro del contenedor.",
        b4: "Redacté y calibré más de 10 tareas de ingeniería realistas con suites de verificación automatizadas.",
      },
    },
    mandioca: {
      range: "Oct 2024 – Ene 2026",
      place: "Maturín, Venezuela",
      company: "Agroindustrial Mandioca C.A.",
      role: "Ingeniero de software",
      bullets: {
        b1: "Diseñé y construí una plataforma web completa con Next.js y NestJS, con autenticación JWT y roles dinámicos: carga un 60% más rápida.",
        b2: "Desplegué y operé la infraestructura en AWS (EC2 con Caddy, RDS, S3, Route 53, VPC) con 99,9% de disponibilidad.",
        b3: "Construí trazabilidad con QR y un bot de Telegram, y una app en Python que lee el peso de los camiones directamente de la báscula.",
      },
      link: "Leer el caso de estudio",
    },
    academos: {
      range: "Oct 2024 – Oct 2025",
      place: "Maturín, Venezuela",
      company: "Academos",
      role: "Instructor de programación · Robótica, Electrónica, Backend",
      bullets: {
        b1: "Enseñé Python, lógica de programación y bases de datos a adolescentes y adultos, con ejercicios prácticos y retos basados en proyectos.",
        b2: "Construí proyectos de robótica y electrónica con los estudiantes: grúas con servomotores, sensores ultrasónicos y puertas automáticas.",
      },
      photos: {
        class: "Foto · clase",
        crane: "Foto · grúa robótica",
        students: "Foto · estudiantes",
      },
      link: "Ver el aula",
    },
  },
  cta: {
    kicker: "¿hablamos?",
    title: "¿Tienes un puesto en mente? Hablemos.",
    link: "Contáctame",
  },
};
