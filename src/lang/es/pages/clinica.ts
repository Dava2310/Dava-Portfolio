import type { SideProjectText } from "../../sideProject";

export const clinica: SideProjectText = {
  kind: "Proyecto académico · 2025",
  kicker: "una cita, paso a paso",
  name: "Clinica",
  oneLiner:
    "App web de gestión de clínicas donde pacientes, doctores y administradores manejan citas y resúmenes médicos.",
  facts: {
    role: "Líder del proyecto, backend y diseño de la base de datos",
    context:
      "Académico · planteado a partir de una clínica real de Maturín, Venezuela, Clínica INMECA",
    period: "Unos 7 meses · 2024–2025",
    team: "2 personas",
    status: "Prototipo funcional · mostrado en local",
    effort: "Unas 60 horas de mi propio tiempo, incluido el diseño",
  },
  hero: {
    label: "Captura · app web de Clinica",
    caption: "Clinica, de la solicitud al resumen médico",
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
        caption: "el lado del paciente",
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
        caption: "cerrando una consulta",
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
        caption: "proponiendo opciones",
      },
    },
  ],
  highlights: [
    {
      title: "Un modelo relacional de todo el flujo de la clínica",
      what: "Un esquema de 10 modelos en MySQL con Prisma, que fue creciendo a lo largo de 8 migraciones. La identidad está separada de los tres perfiles por rol, y las opciones propuestas tienen su propia tabla en lugar de columnas en la cita.",
      why: "Esa separación hace posible el flujo de proponer y elegir, y cada resumen médico queda enlazado a su cita, paciente, doctor e historial. Es la parte que diseñé de principio a fin.",
    },
    {
      title: "Un ciclo de vida de cita negociado",
      what: "Una cita pasa de solicitada a con opciones, programada y finalizada, con cancelada como salida. Proponer opciones guarda todas las filas de opciones y cambia el estado en una sola transacción de base de datos.",
      why: "Modela un flujo real de recepción y no un simple formulario de reserva, y finalizar una consulta va ligado a su resumen médico.",
    },
    {
      title: "Registro atómico con perfiles por rol",
      what: "Un solo endpoint crea el usuario, el perfil del rol y, para pacientes, un historial médico vacío, todo en una transacción. La validación depende del rol y las contraseñas se guardan con hash.",
      why: "No quedan cuentas a medio crear: si falla el perfil o el historial, se revierte el usuario.",
    },
    {
      title: "Sesiones revocables y pacientes con baja lógica",
      what: "Tokens de acceso de corta duración, refresh tokens rotativos y lista negra al cerrar sesión. A los pacientes se les desactiva, nunca se eliminan de verdad.",
      why: "Las sesiones se pueden cerrar de verdad y el historial clínico del paciente se conserva, lo correcto para registros médicos.",
    },
    {
      title: "Liderar la API mientras el frontend tomaba forma",
      what: "Unos 45 endpoints REST detrás de un frontend en React con módulos separados por rol. Adapté endpoints y rutas a lo que necesitaban las pantallas.",
      why: "En un equipo de dos la API es un contrato, así que tuvo que cambiar con las necesidades reales del frontend.",
    },
  ],
  architecture: {
    diagram: {
      title: "Diagrama ER",
      label: "Diagrama · modelo de base de datos",
      caption:
        "los 10 modelos y cómo se relacionan usuarios, citas y resúmenes",
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
    "Diseñar primero la base de datos y el sistema hizo que el resto del backend fuera directo: una vez claras las entidades y el ciclo de vida de la cita, los endpoints salieron solos.",
    "Al liderar un equipo pequeño, la API es un contrato: ajusté los endpoints según aparecían las necesidades reales del frontend, en vez de defender el primer diseño.",
    "El frontend fue la mitad más difícil del proyecto, y verlo desde el backend me enseñó a diseñar las respuestas pensando en lo que necesita una pantalla.",
    "El flujo de citas me mostró hasta dónde llega una primera versión: planeé una validación de choques de horario de los doctores y transiciones de estado más estrictas, pero no las terminé, y los reportes PDF quedaron como plan.",
  ],
  gallery: [
    {
      label: "Inicio de sesión",
      caption: "una sola entrada para los tres roles",
    },
    {
      label: "Solicitar una cita",
      caption: "el formulario de solicitud del paciente",
    },
    {
      label: "Citas solicitadas",
      caption: "la cola del administrador por estado",
    },
    {
      label: "Proponer opciones",
      caption: "doctor y fechas para una solicitud",
    },
    {
      label: "Aprobar una opción",
      caption: "el paciente elige una de las propuestas",
    },
    { label: "Citas pendientes", caption: "la lista del doctor" },
    {
      label: "Resumen médico",
      caption: "cerrar una consulta con diagnóstico y tratamiento",
    },
    {
      label: "Historial del paciente",
      caption: "resúmenes guardados por paciente",
    },
  ],
  links: {},
};
