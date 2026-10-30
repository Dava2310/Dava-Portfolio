import type { SideProjectText } from "../../sideProject";

export const escuela: SideProjectText = {
  kind: "Proyecto real · 2025",
  kicker: "del reporte de pago al certificado",
  name: "Escuela",
  oneLiner:
    "Sistema de gestión de academia con portales de administrador, profesor y estudiante: inscripciones, pagos, horarios y certificados PDF.",
  facts: {
    role: "Único desarrollador: requisitos, base de datos, backend, frontend y certificados PDF",
    context: "Proyecto real · hecho para una academia real en Venezuela",
    period: "Unos 2 meses · dic. 2024 – feb. 2025",
    team: "Solo",
    status: "Fuera de servicio por ahora · código público",
  },
  hero: {
    label: "Gestión de cursos",
    caption: "gestión de cursos y secciones",
  },
  numbers: [
    { label: "roles de usuario, una interfaz cada uno" },
    { label: "endpoints REST" },
    { label: "modelos de base de datos" },
    { label: "pruebas de integración" },
  ],
  problem: [
    "Las academias pequeñas en Venezuela suelen gestionar a mano las inscripciones, la verificación de transferencias, los horarios y los certificados.",
    "Escuela centraliza ese proceso. El estudiante elige una sección y reporta su transferencia bancaria; el administrador la revisa y la aprueba o rechaza; la aprobación coloca al estudiante en la sección. Los profesores ven sus secciones y listas, y el administrador marca a los estudiantes como aprobados y emite un certificado PDF. Lo construí yo solo para una academia real, empezando por el backend, con interfaz en español y detalles venezolanos como la cédula y los bancos locales.",
  ],
  features: [
    {
      title: "Administrador",
      bullets: [
        "Gestionar cursos, secciones, profesores y estudiantes",
        "Definir un horario por sección: fechas, horas y días",
        "Revisar los reportes de pago y aprobarlos o rechazarlos",
        "Marcar a los estudiantes como aprobados o reprobados",
        "Emitir y descargar certificados PDF",
        "Ver estadísticas: estudiantes por rango de edad, cursos por categoría",
      ],
      shot: {
        label: "Captura · vista del administrador",
        caption: "revisando inscripciones",
      },
    },
    {
      title: "Profesor",
      bullets: [
        "Ver solo sus propias secciones",
        "Consultar el horario, con los días en etiquetas",
        "Seguir inscritos frente a capacidad en un gráfico",
        "Leer la lista con el estado de aprobado o reprobado de cada estudiante",
      ],
      shot: {
        label: "Captura · panel del profesor",
        caption: "una sección de un vistazo",
      },
    },
    {
      title: "Estudiante",
      bullets: [
        "Explorar los cursos con su estado de inscripción",
        "Inscribirse reportando un pago bancario (referencia, fecha, banco, monto)",
        "Seguir cada inscripción: en espera, aprobada o no aprobada",
        "Descargar sus certificados",
      ],
      shot: {
        label: "Captura · vista del estudiante",
        caption: "los cursos y sus estados",
      },
    },
  ],
  highlights: [
    {
      title: "Del pago al certificado",
      what: "Un estudiante reporta una transferencia y el administrador la aprueba. Eso abre el cupo, el profesor ve la lista y quien aprueba recibe su certificado.",
      why: "Un solo flujo para tres roles, con la aprobación hecha en una transacción.",
    },
    {
      title: "Validado dos veces",
      what: "Joi revisa las peticiones en el servidor y zod aplica las mismas reglas en los formularios.",
      why: "El usuario ve errores claros antes de enviar y los datos malos no llegan a la base de datos.",
    },
    {
      title: "Certificados hechos en código",
      what: "La API dibuja el certificado PDF con PDFKit: borde, logo, nombres, curso y firmas.",
      why: "Un documento imprimible, sin depender de una herramienta de plantillas.",
    },
    {
      title: "Panel del profesor con una sola consulta",
      what: "El profesor se identifica por el token de sesión y una consulta devuelve sus secciones, horarios y estudiantes.",
      why: "La pantalla recibe justo lo que muestra, en una sola petición.",
    },
  ],
  architecture: {
    diagram: {
      title: "Arquitectura del sistema",
      label: "Diagrama · arquitectura del sistema",
      caption:
        "quién lo usa, la app Next.js, la API Express y la base de datos MySQL",
    },
  },
  team: {
    mine: [
      "Requisitos y diseño de la base de datos",
      "La API REST: Express, Prisma y MySQL",
      "Las tres interfaces web en Next.js",
      "El generador de certificados PDF",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Todo, de punta a punta",
        me: true,
      },
    ],
  },
  lessons: [
    "Empecé por el backend porque es donde soy más fuerte, y tener primero una API validada y probada hizo mucho más rápido construir el frontend.",
    "Validar por capas dio resultado: Joi en el servidor y zod en los formularios hicieron que los usuarios recibieran mensajes claros y que la base de datos se mantuviera limpia.",
    "Separé la experiencia por rol sobre todo con interfaces distintas. Mirando atrás, también aplicaría los permisos en el servidor con middleware de roles en cada ruta, y no solo ocultaría pantallas.",
    "Las reglas de negocio deben vivir en el flujo, no solo en la pantalla: mostré la capacidad de la sección en todas partes, y el siguiente paso sería hacerla cumplir al aprobar una inscripción.",
  ],
  gallery: [
    {
      label: "Lista de estudiantes",
      caption:
        "todos los estudiantes, con filtros por cédula, nombre y apellido",
    },
    {
      label: "Lista de profesores",
      caption: "los profesores, con su profesión",
    },
    {
      label: "Estadísticas de estudiantes",
      caption: "distribución de edades de los estudiantes",
    },
    { label: "Estadísticas de cursos", caption: "cursos por categoría" },
    { label: "Certificados", caption: "generación de certificados" },
    {
      label: "Certificado en PDF",
      caption: "certificado del curso en formato PDF",
    },
  ],
  links: {},
};
