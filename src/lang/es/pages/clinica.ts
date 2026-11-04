import type { SideProjectText } from "../../sideProject";

export const clinica: SideProjectText = {
  kind: "Proyecto académico · 2025",
  kicker: "una cita, paso a paso",
  name: "Clinica",
  oneLiner:
    "App web de gestión de clínicas donde pacientes, doctores y administradores gestionan citas y resúmenes médicos.",
  facts: {
    role: "Líder del proyecto, backend y diseño de la base de datos",
    context:
      "Académico · planteado a partir de una clínica real de Maturín, Venezuela, Clínica INMECA",
    period: "Unos 7 meses · 2024–2025",
    team: "2 personas",
    status: "Prototipo funcional · presentado en local",
    effort: "Unas 60 horas de trabajo propio, incluido el diseño",
  },
  hero: {
    label: "Captura · app web de Clinica",
    caption: "la cola del administrador con las citas solicitadas, por estado",
  },
  numbers: [
    { label: "endpoints de la API" },
    { label: "modelos de datos" },
    { label: "migraciones" },
    { label: "roles de usuario" },
  ],
  problem: [
    "Una clínica necesita un lugar donde organizar quién atiende a quién y cuándo, y guardar el registro de cada consulta.",
    "Clinica lo resuelve con una cita negociada: el paciente la solicita, un administrador propone opciones de doctor y fecha, el paciente elige una y, tras la consulta, el doctor la cierra con un resumen médico que queda en el historial del paciente. Lo planteamos a partir de las necesidades de una clínica real de Maturín, Venezuela, con vistas separadas para pacientes, doctores y administradores.",
  ],
  features: [
    {
      title: "Para pacientes",
      bullets: [
        "Solicitar una cita según tipo de servicio y especialidad",
        "Seguir cada cita según su estado",
        "Revisar las opciones propuestas y aprobar una",
        "Consultar sus propios resúmenes médicos",
      ],
      shot: {
        label: "Captura · vista del paciente",
        caption: "solicitar una cita por servicio y especialidad",
      },
    },
    {
      title: "Para doctores",
      bullets: [
        "Ver sus citas programadas",
        "Cerrar una consulta con un resumen: diagnóstico, tratamiento, observaciones",
        "Consultar historiales y resúmenes de pacientes",
      ],
      shot: {
        label: "Captura · vista del doctor",
        caption: "cerrar una consulta con diagnóstico y tratamiento",
      },
    },
    {
      title: "Para administradores",
      bullets: [
        "Crear, editar y eliminar doctores, pacientes y otros administradores",
        "Listar las citas por estado",
        "Proponer un doctor y una o más fechas para cada solicitud",
      ],
      shot: {
        label: "Captura · vista del administrador",
        caption: "programar una cita con un doctor y fechas",
      },
    },
  ],
  highlights: [
    {
      title: "Un modelo de toda la clínica",
      what: "Un esquema de 10 modelos en Prisma a lo largo de 8 migraciones, con las opciones propuestas en su propia tabla.",
      why: "Esa separación hace posible el flujo de citas. Fue la parte que construí de principio a fin.",
    },
    {
      title: "Las citas como una negociación",
      what: "Una solicitud pasa a opciones propuestas, programada y finalizada. Proponer opciones y cambiar el estado ocurre en una transacción.",
      why: "Sigue el flujo real de una recepción, no un simple formulario de reserva.",
    },
    {
      title: "Cuentas creadas en un solo paso",
      what: "Un endpoint crea el usuario, el perfil de su rol y, si es paciente, su historial médico, todo en una transacción.",
      why: "No quedan cuentas a medio crear.",
    },
    {
      title: "Sesiones que de verdad terminan",
      what: "Tokens de acceso de corta duración, refresh tokens rotativos y una lista negra al cerrar sesión. Los pacientes se desactivan, nunca se borran.",
      why: "El historial de un paciente siempre se conserva.",
    },
  ],
  architecture: {
    diagram: {
      title: "Esquema de base de datos",
      label: "Diagrama · modelo de base de datos",
      caption:
        "las 10 tablas: usuarios y roles, citas, opciones propuestas y resúmenes médicos",
    },
  },
  team: {
    mine: [
      "Arquitectura del backend y API: Node.js, Express y Prisma",
      "Diseño de la base de datos y del sistema",
      "Adaptar los endpoints a lo que necesitaba el frontend",
    ],
    theirs: ["El frontend en React: Manuel Blanco"],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Líder del proyecto, backend y diseño de la base de datos",
        me: true,
      },
      { name: "Manuel Blanco", role: "Frontend" },
    ],
  },
  lessons: [
    "Diseñar primero la base de datos y el sistema hizo que el resto del backend fuera mucho más sencillo: una vez claras las entidades y el ciclo de vida de la cita, los endpoints salieron solos.",
    "Al liderar un equipo pequeño, la API es un contrato: ajusté los endpoints según aparecían las necesidades reales del frontend, en vez de defender el primer diseño.",
    "El frontend fue la mitad más difícil del proyecto, y verlo desde el backend me enseñó a diseñar las respuestas pensando en lo que necesita una pantalla.",
    "El flujo de citas me mostró hasta dónde llega una primera versión: planeé una validación de choques de horario de los doctores y transiciones de estado más estrictas, pero no las terminé, y los reportes PDF quedaron pendientes.",
  ],
  gallery: [
    { label: "Doctores", caption: "la lista de doctores del administrador" },
    {
      label: "Registrar un paciente",
      caption: "un formulario crea la cuenta y el perfil del paciente",
    },
    {
      label: "Agenda del doctor",
      caption: "citas programadas, listas para atender",
    },
    {
      label: "Resumen médico",
      caption: "diagnóstico, tratamiento y observaciones de una consulta",
    },
    {
      label: "Mis citas",
      caption: "el paciente sigue cada solicitud según su estado",
    },
    {
      label: "Resúmenes médicos",
      caption: "el historial del paciente, consulta por consulta",
    },
  ],
  links: {},
};
