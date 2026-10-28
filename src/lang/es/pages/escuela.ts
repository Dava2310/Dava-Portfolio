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
    label: "Captura · aplicación web de Escuela",
    caption: "Escuela, de la inscripción al certificado",
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
      title: "Un flujo de inscripción completo entre tres roles",
      what: "Está implementado todo el ciclo de la academia: el estudiante reporta un pago, el administrador lo aprueba o rechaza, la aprobación crea el cupo, el profesor sigue la lista, el administrador marca aprobado o reprobado y emite un certificado, y el estudiante descarga el PDF.",
      why: "Es un dominio real con estado y varias entidades relacionadas, no solo CRUD.",
    },
    {
      title: "Un backend que valida por capas",
      what: "Cada escritura pasa por el mismo flujo: ruta, middleware de ids, esquema Joi, chequeos de duplicados, llamada a Prisma y un único helper de respuesta con códigos HTTP consistentes. Los formularios repiten las mismas reglas con zod.",
      why: "El usuario recibe mensajes claros antes de enviar la petición y la base de datos se mantiene limpia.",
    },
    {
      title: "Certificados PDF dibujados en código",
      what: "La API genera un certificado A4 horizontal con PDFKit, maquetando el borde, el logo, los nombres, el curso y las líneas de firma, y combinando datos del estudiante, el curso y el profesor en una sola consulta.",
      why: "Produce un documento imprimible real, y la maquetación vive en el código y no en una plantilla.",
    },
    {
      title: "Un panel de profesor armado con una consulta",
      what: "El profesor se identifica por el token de sesión, y una consulta anidada de Prisma devuelve sus secciones con curso, horario y estudiantes inscritos, listas para la pantalla.",
      why: "La interfaz recibe justo los datos que muestra, sin viajes extra al servidor.",
    },
    {
      title: "Manejo cuidadoso de los datos",
      what: "El registro y la aprobación de inscripciones se ejecutan en transacciones, los borrados son lógicos y el vínculo estudiante-sección usa una clave compuesta. Las pruebas de integración cubren las rutas de autenticación, usuarios, estudiantes, profesores y cursos.",
      why: "Un fallo no puede dejar registros a medio crear.",
    },
  ],
  architecture: {
    layersTitle: "Tres capas, empezando por el backend",
    layers: [
      {
        name: "Interfaz en Next.js",
        detail:
          "Un árbol de carpetas por rol, cada uno con su barra lateral y sus guardas de ruta",
      },
      {
        name: "API en Express",
        detail:
          "Rutas, controladores, validaciones Joi y middleware, con un único helper de respuesta",
      },
      {
        name: "Base de datos MySQL",
        detail:
          "13 modelos de Prisma, borrado lógico y migraciones incrementales",
      },
    ],
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
    { label: "Inicio de sesión y registro", caption: "las entradas públicas" },
    {
      label: "Estadísticas del administrador",
      caption: "estudiantes y cursos en gráficos",
    },
    { label: "Cursos y secciones", caption: "editando un curso en un modal" },
    {
      label: "Formulario de horario",
      caption: "fechas, horas y días de la semana",
    },
    {
      label: "Cursos del estudiante",
      caption: "no inscrito, en espera, aprobada",
    },
    {
      label: "Formulario de inscripción",
      caption: "reportando un pago bancario",
    },
    {
      label: "Revisión de inscripciones",
      caption: "aprobar o rechazar cada pago",
    },
    { label: "Panel del profesor", caption: "horario, capacidad y lista" },
    { label: "Certificados", caption: "emitiendo uno para un estudiante" },
    { label: "Certificado PDF", caption: "generado en el servidor" },
  ],
  links: {},
};
