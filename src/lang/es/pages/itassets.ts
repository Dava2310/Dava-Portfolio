import type { SideProjectText } from "../../sideProject";

export const itassets: SideProjectText = {
  kind: "Proyecto académico · 2026 · Harbour.Space",
  kicker: "la misma app, hecha dos veces",
  name: "IT Assets Tracker",
  oneLiner:
    "App de inventario de TI: una API en NestJS y el mismo frontend hecho dos veces, en Next.js y Vue, para comparar frameworks.",
  facts: {
    role: "Construí todo: la API, los dos frontends, las pruebas y el CI",
    context: "Académico · Harbour.Space, Barcelona, Modern Frontend Frameworks",
    period: "Unas 3 semanas · mar–abr 2026",
    team: "Proyecto individual",
    status: "Proyecto de curso terminado",
  },
  hero: {
    label: "Captura · panel con gráficos",
    caption: "el panel: tarjetas de métricas y activos creados por mes",
  },
  numbers: [
    { label: "repositorios, un solo proyecto" },
    { label: "pruebas unitarias y de componentes" },
    { label: "rutas de la API" },
  ],
  problem: [
    "En el curso Modern Frontend Frameworks había que construir el mismo frontend dos veces con frameworks distintos. Elegí un inventario de TI sencillo (activos, categorías y los empleados que los tienen) para centrarme en la calidad de la ingeniería y en la comparación de frameworks, no en el dominio.",
    "Una API en NestJS y PostgreSQL sirve los datos y publica un contrato OpenAPI. De él generé un cliente tipado, y una app en Next.js y otra en Vue 3 lo usan para ofrecer el mismo panel, tablas y formularios. Todos los datos son ficticios, y la autenticación quedó fuera del alcance a propósito para terminar en tres semanas.",
  ],
  features: [
    {
      title: "",
      bullets: [
        "Una API REST en NestJS y PostgreSQL, documentada con Swagger (OpenAPI)",
        "Validación estricta y borrado lógico en todas las entidades",
        "El mismo frontend construido dos veces, en Next.js y en Vue, con un único cliente de API generado",
        "Un panel, tablas paginadas con filtros y acciones por fila, y formularios validados",
        "Más de 170 pruebas unitarias, de componentes y de extremo a extremo, con CI en ambos frontends",
      ],
    },
  ],
  highlights: [
    {
      title: "Un contrato de API, dos frontends",
      what: "Se genera un cliente tipado desde la especificación OpenAPI de la API, y los dos frontends lo usan.",
      why: "Una llamada incorrecta a la API falla al compilar, no en el navegador.",
    },
    {
      title: "Pruebas en tres capas",
      what: "Más de 170 pruebas unitarias y de componentes, más flujos con Playwright contra la API real, en ambas apps.",
      why: "Cada capa detecta un tipo distinto de error. Fue mi mayor aprendizaje.",
    },
    {
      title: "La misma app, dos veces",
      what: "La capa de datos y las reglas de validación se comparten entre las versiones de Next.js y Vue.",
      why: "Muestra qué cambian realmente los frameworks: con una API aparte, Next.js añadió funciones de servidor que no usé.",
    },
    {
      title: "Las reglas de la API en un solo lugar",
      what: "La misma estructura de módulos en todas partes, validación estricta de DTOs y borrados lógicos que mantienen las restricciones consistentes.",
      why: "Agregar endpoints fue rápido y los casos límite dan errores claros.",
    },
  ],
  comparison: {
    title: "Next.js vs Vue 3",
    left: "Next.js",
    right: "Vue 3",
    rows: [
      {
        topic: "Carga de datos",
        left: "Solo TanStack Query: ninguna página carga datos en el servidor",
        right:
          "La misma configuración de TanStack Query, con las mismas claves de caché",
      },
      {
        topic: "Formularios",
        left: "React Hook Form y Zod",
        right:
          "VeeValidate y Zod, con las mismas reglas y menos código repetitivo",
      },
      {
        topic: "Funciones de servidor",
        left: "Una separación servidor/cliente que aquí no aportó nada",
        right: "Una SPA simple sobre Vite, sin nada que sobre",
      },
    ],
    verdict:
      "Con una API separada, una SPA simple encaja mejor: Vue resultó más fluido y la próxima vez elegiría React con Vite.",
  },
  architecture: {
    diagram: {
      title: "Esquema de la base de datos",
      label: "Diagrama · esquema de la base de datos",
      caption:
        "cuatro tablas con borrado lógico: roles, empleados, categorías y activos",
    },
  },
  team: {
    mine: [
      "La API en NestJS, con Docker y los datos de ejemplo",
      "Los dos frontends: Next.js y Vue 3",
      "Las pruebas y los pipelines de CI",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "API, ambos frontends, pruebas y CI",
        me: true,
      },
    ],
  },
  lessons: [
    "Probar el frontend fue la mayor lección: las pruebas unitarias, de componentes y end-to-end detectan problemas distintos, y la próxima vez las planificaría desde el primer día.",
    "Next.js fue la elección equivocada. Cuando todo el backend vive en NestJS, sus funciones de servidor añaden complejidad sin beneficio, y debí usar React con Vite.",
    "Un cliente OpenAPI generado fue la mejor decisión del lado de la API. La próxima vez automatizaría la regeneración en lugar de copiar archivos.",
    "Dejé la autenticación fuera a propósito para terminar en tres semanas: acotar el alcance también es una habilidad de ingeniería.",
  ],
  gallery: [
    {
      label: "Documentación de la API",
      caption: "la documentación de la API en Swagger (OpenAPI)",
    },
    {
      label: "Lista de activos",
      caption:
        "una tabla paginada con filtros y acciones de editar y borrar en cada fila",
    },
    {
      label: "Lista de empleados",
      caption: "los empleados, filtrables por correo",
    },
    {
      label: "Nuevo empleado",
      caption:
        "crear un empleado en un modal, con su rol y su código de empleado",
    },
    {
      label: "Nuevo activo",
      caption: "un formulario complejo y validado para crear un activo",
    },
    {
      label: "Validación de formularios",
      caption: "un modal con errores de validación en línea",
    },
  ],
  links: {},
};
