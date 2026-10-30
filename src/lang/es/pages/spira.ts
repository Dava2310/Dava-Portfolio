import type { SideProjectText } from "../../sideProject";

export const spira: SideProjectText = {
  kind: "Proyecto académico · 2026",
  kicker: "¡que nada se desperdicie!",
  name: "Spira",
  oneLiner:
    "Plataforma de excedentes: los comercios publican productos por caducar y las ONG los reclaman y recogen con un pase QR o PIN de un solo uso.",
  facts: {
    role: "Construí toda la API y la aplicación web",
    context: "Académico · Harbour.Space, “From Zero to Hero”",
    period: "Unas 3 semanas · 2026",
    team: "6 personas",
    status: "MVP · demo en vivo disponible",
    outcome: "Muy bien recibido, sobre todo por su propuesta de negocio",
  },
  hero: {
    label: "Captura · aplicación web de Spira",
    caption: "Spira, del listado a la recogida",
  },
  numbers: [
    { label: "rutas de la API" },
    { label: "tablas de base de datos" },
    { label: "roles de usuario" },
  ],
  problem: [
    "Los comercios tiran comida que está cerca de su fecha de caducidad, mientras las ONG necesitan una forma fiable de encontrarla y recogerla a tiempo.",
    "Spira conecta a ambos: los comercios publican su stock por caducar, las ONG reclaman lo que necesitan y lo recogen con un pase QR o PIN de un solo uso, y cada entrega deja un registro de custodia. Lo planteamos como una posible iniciativa real, no solo como un ejercicio del curso.",
  ],
  features: [
    {
      title: "Para los comercios",
      bullets: [
        "Publicar excedentes antes de que caduquen",
        "Seguir cada donación por sus estados",
        "Confirmar cada recogida con un QR o PIN",
      ],
      shot: {
        label: "Captura · vista del comercio",
        caption: "el lado del comercio",
      },
    },
    {
      title: "Para las ONG",
      bullets: [
        "Encontrar donaciones disponibles en un mapa",
        "Reclamar stock sin conflictos de doble reclamo",
        "Recogerlo con un pase QR o PIN de un solo uso",
      ],
      shot: {
        label: "Captura · mapa de la ONG",
        caption: "las donaciones en el mapa",
      },
    },
    {
      title: "Bajo el capó",
      bullets: [
        "Unas 120 rutas REST en NestJS",
        "Un esquema PostgreSQL de 16 tablas con TypeORM",
        "Un certificado de custodia inmutable por cada entrega",
        "Un cliente tipado generado desde la especificación OpenAPI",
      ],
    },
  ],
  highlights: [
    {
      title: "Una fuga de datos que encontré y corregí",
      what: "Al probar con dos comercios y dos ONG vi que un usuario autenticado podía acceder a datos de otra organización. Lo corregí con una capa de aislamiento y dejé un script que lo comprueba.",
      why: "Cada organización ve solo sus propios datos.",
    },
    {
      title: "Dos ONG, una donación",
      what: "Los reclamos se ejecutan en una transacción con bloqueo de filas. La segunda ONG recibe un aviso claro de conflicto.",
      why: "Una misma donación no se puede reclamar dos veces.",
    },
    {
      title: "Un pase de recogida que sirve una sola vez",
      what: "Cada donación pasa por estados fijos, y la recogida exige un QR o PIN que la base de datos acepta una sola vez.",
      why: "No se saltan pasos y no se reutilizan pases.",
    },
    {
      title: "Un contrato único entre front y back",
      what: "El cliente de la API de la aplicación web se genera desde la especificación OpenAPI del backend.",
      why: "Ambos lados se mantienen sincronizados y una sola persona pudo construir los dos.",
    },
  ],
  architecture: {
    diagram: {
      title: "Máquina de estados de la donación",
      label: "Diagrama · máquina de estados de la donación",
      caption: "todos los estados de una donación y qué la hace avanzar",
    },
  },
  team: {
    mine: [
      "Toda la API: NestJS, PostgreSQL y TypeORM",
      "La aplicación web: React 19, Vite y Tailwind",
    ],
    theirs: [
      "Diseño de la interfaz: Elena Paoli y Ecem Gonul",
      "La parte de negocio: tres compañeros (segmentación de mercado, definición de la idea)",
    ],
    people: [
      { name: "Daniel Vetencourt", role: "API y aplicación web", me: true },
      { name: "Elena Paoli", role: "Diseño de la interfaz" },
      { name: "Ecem Gonul", role: "Diseño de la interfaz" },
      { name: "Tres compañeros", role: "Parte de negocio" },
    ],
  },
  lessons: [
    "Un MVP rápido hecho con asistentes de IA esconde huecos: mi propia prueba mostró que la primera versión filtraba datos entre organizaciones, así que aprendí a probar las reglas y no solo el caso feliz.",
    "Los reclamos dobles los evitan los bloqueos y las restricciones de la base de datos, no las comprobaciones de la interfaz.",
    "Generar el cliente desde la especificación de la API fue lo que hizo realista que una sola persona construyera ambos lados.",
  ],
  gallery: [
    {
      label: "Publicar stock por caducar",
      caption: "un comercio publica su excedente",
    },
    { label: "Donaciones en el mapa", caption: "lo que ven las ONG" },
    {
      label: "Reclamar una donación",
      caption: "reclámala antes que nadie",
    },
    { label: "Pase de recogida QR / PIN", caption: "el pase de un solo uso" },
    {
      label: "Certificado de custodia",
      caption: "prueba de cada entrega",
    },
    {
      label: "Pantalla de entrega del comercio",
      caption: "verificando una recogida",
    },
  ],
  links: {},
};
