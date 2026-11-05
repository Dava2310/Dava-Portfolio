import type { SideProjectText } from "../../sideProject";

export const spira: SideProjectText = {
  kind: "Proyecto académico · 2026",
  kicker: "¡que nada se desperdicie!",
  name: "Spira",
  oneLiner:
    "Plataforma de excedentes de alimentos: los comercios publican productos a punto de vencer y las ONG los reservan y los recogen con un pase QR o PIN de un solo uso.",
  facts: {
    role: "Construí toda la API y la aplicación web",
    context: "Académico · Harbour.Space",
    period: "Unas 3 semanas · 2026",
    team: "6 personas",
    status: "MVP · desplegado",
    outcome: "Muy bien recibido, sobre todo por su propuesta de negocio",
  },
  hero: {
    label: "Captura · Spira en sus dos lados",
    caption:
      "los dos lados en una app: el inicio del comercio, los excedentes disponibles para las ONG y un pase de recogida",
  },
  numbers: [
    { label: "rutas de la API" },
    { label: "tablas de base de datos" },
    { label: "roles de usuario" },
  ],
  problem: [
    "Los comercios desechan alimentos cercanos a su fecha de vencimiento, mientras que las ONG necesitan una forma fiable de encontrarlos y recogerlos a tiempo.",
    "Spira conecta a ambos: los comercios publican sus excedentes a punto de vencer, las ONG reservan lo que necesitan y lo recogen con un pase QR o PIN de un solo uso, y cada entrega deja un registro de custodia. Lo planteamos como una posible iniciativa real, no solo como un ejercicio del curso.",
  ],
  features: [
    {
      title: "Para los comercios",
      bullets: [
        "Publicar excedentes antes de que venzan",
        "Seguir cada donación por sus estados",
        "Confirmar cada recogida con un QR o PIN",
      ],
      shot: {
        label: "Captura · inventario del comercio",
        caption:
          "el inventario con filtros de urgencia y el registro de un lote",
      },
    },
    {
      title: "Para las ONG",
      bullets: [
        "Encontrar donaciones disponibles en un mapa",
        "Reservar productos sin que dos ONG se queden con lo mismo",
        "Recogerlo con un pase QR o PIN de un solo uso",
      ],
      shot: {
        label: "Captura · reservas de la ONG",
        caption: "aceptar una oferta y el historial de recogidas",
      },
    },
    {
      title: "La parte técnica",
      bullets: [
        "Unas 120 rutas REST en NestJS",
        "Un esquema PostgreSQL de 16 tablas con TypeORM",
        "Un certificado de custodia inmutable por cada entrega",
        "Un cliente tipado generado desde la especificación OpenAPI",
      ],
      shot: {
        label: "Captura · documentación de la API",
        caption: "la API documentada con Swagger (OpenAPI)",
      },
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
      what: "Las reservas se ejecutan en una transacción con bloqueo de filas. La segunda ONG recibe un aviso claro de conflicto.",
      why: "Una misma donación no se puede reservar dos veces.",
    },
    {
      title: "Un pase de recogida que sirve una sola vez",
      what: "Cada donación pasa por estados fijos, y la recogida exige un QR o PIN que la base de datos acepta una sola vez.",
      why: "No se saltan pasos y no se reutilizan pases.",
    },
    {
      title: "Un único contrato entre frontend y backend",
      what: "El cliente de la API de la aplicación web se genera desde la especificación OpenAPI del backend.",
      why: "Ambos lados se mantienen sincronizados y una sola persona pudo construir los dos.",
    },
  ],
  architecture: {
    diagram: {
      title: "Despliegue",
      label: "Diagrama · despliegue",
      caption:
        "la app web en Vercel, la API en Render y la base de datos en Supabase, y cómo se comunican",
    },
  },
  team: {
    mine: [
      "Toda la API: NestJS, PostgreSQL y TypeORM",
      "La aplicación web: React 19, Vite y Tailwind",
    ],
    theirs: [
      "Diseño de producto: Ecem Gonul (líder) y Elena Elizabeth Paoli",
      "El negocio: Iker Arnábar (CEO), Anavin Sakusalcha (responsable comercial) y Alejandro Lamelas (ciencia de datos)",
    ],
    people: [
      { name: "Daniel Vetencourt", role: "API y aplicación web", me: true },
      { name: "Iker Arnábar", role: "CEO · líder del proyecto" },
      { name: "Ecem Gonul", role: "Diseñadora de producto principal" },
      { name: "Elena Elizabeth Paoli", role: "Diseñadora de producto" },
      {
        name: "Anavin Sakusalcha",
        role: "Responsable comercial",
      },
      { name: "Alejandro Lamelas", role: "Científico de datos principal" },
    ],
  },
  lessons: [
    "Un MVP hecho rápido con asistentes de IA deja vacíos que no se ven: mi propia prueba mostró que la primera versión filtraba datos entre organizaciones, así que aprendí a probar las reglas y no solo el caso ideal.",
    "Las reservas dobles se evitan con bloqueos y restricciones en la base de datos, no con comprobaciones en la interfaz.",
    "Generar el cliente desde la especificación de la API fue lo que hizo posible que una sola persona construyera ambos lados.",
  ],
  gallery: [
    {
      label: "Dos lados, un registro",
      caption: "comercios y ONG se registran en la misma app",
    },
    {
      label: "Cola de donaciones",
      caption: "cada donación y el estado en que está",
    },
    {
      label: "Certificado de custodia",
      caption: "un PDF numerado por cada entrega",
    },
    {
      label: "Impacto y socios",
      caption: "comida rescatada este año y quién la recoge",
    },
    {
      label: "Pase de verificación",
      caption: "un QR permanente para presentarse en un comercio nuevo",
    },
  ],
};
