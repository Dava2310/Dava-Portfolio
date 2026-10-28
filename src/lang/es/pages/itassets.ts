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
      title: "Panel",
      bullets: [
        "Cinco tarjetas de métricas: total, asignados, disponibles, disponibilidad y categoría más popular",
        "Gráfico de área de activos creados por mes, con rangos de 3 meses, 6 meses y año completo",
        "Tabla de activos con reordenación de filas por arrastre",
        "El mismo panel en Next.js y en Vue",
      ],
      shot: {
        label: "Captura · panel",
        caption: "tarjetas de métricas y el gráfico mensual",
      },
    },
    {
      title: "Activos, empleados y categorías",
      bullets: [
        "Listas con filtro, orden y paginación",
        "Crear, ver, editar y borrado lógico",
        "Validación de formularios sobre las reglas de la API, con errores claros en cada campo",
        "Una categoría en uso no se puede borrar, y al borrar un empleado se liberan sus activos",
        "Un aviso con el mensaje de la propia API en cada operación",
      ],
      shot: {
        label: "Captura · validación de formularios",
        caption: "errores en línea en el formulario de activos",
      },
    },
    {
      title: "Bajo el capó",
      bullets: [
        "23 rutas REST en NestJS, con documentación Swagger",
        "Un esquema PostgreSQL con TypeORM y borrado lógico",
        "Migraciones con 500 activos de ejemplo, y Docker Compose",
        "Pruebas unitarias, de componentes y end-to-end, Storybook y CI en ambos frontends",
      ],
    },
  ],
  highlights: [
    {
      title: "Un solo contrato de API para los dos frontends",
      what: "La API publica una especificación OpenAPI y un generador la convierte en un cliente TypeScript tipado. Ambos frontends usan ese cliente, así que llamar a la API es una llamada a un método tipado y no código fetch escrito a mano.",
      why: "Cada llamada a la API se verifica al compilar y las apps no se desvían del backend. Fue la mejor decisión del lado de la API.",
    },
    {
      title: "Pruebas del frontend en tres niveles, en ambas apps",
      what: "Más de 170 pruebas unitarias y de componentes, flujos end-to-end con Playwright contra la API real y un catálogo en Storybook, todo ejecutándose en CI.",
      why: "Esquemas y mapeadores, componentes con dependencias simuladas y flujos reales en el navegador detectan cada uno un tipo distinto de error. Fue mi mayor lección.",
    },
    {
      title: "La misma app dos veces, una comparación justa",
      what: "La capa de datos, las reglas de validación e incluso una especificación end-to-end son iguales en Next.js y en Vue, de modo que la comparación aísla lo que de verdad cambian los frameworks.",
      why: "Me dio una conclusión basada en evidencia: con una API separada, Next.js añadía funciones de servidor que no usé.",
    },
    {
      title: "Las reglas de la API en un solo lugar",
      what: "Módulos por funcionalidad con la misma estructura, validación estricta de DTOs que rechaza campos desconocidos, una interfaz de repositorio compartida y un borrado lógico que mantiene coherentes las restricciones únicas y las relaciones.",
      why: "Cada endpoint nuevo se añadía rápido, y los casos límite devuelven un error claro en vez de un fallo de la base de datos.",
    },
    {
      title: "Controles de calidad en los frontends",
      what: "Ambos frontends ejecutan lint, formato y pruebas en cada pull request. Un segundo job ejecuta Playwright y antes espera a que la API dormida despierte. Un hook de pre-commit revisa los archivos en staging.",
      why: "Un flujo de trabajo de equipo aplicado por una sola persona. Incluso rompí pruebas a propósito para comprobar que el CI falla de verdad.",
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
        right: "VeeValidate y Zod, con las mismas reglas y menos ceremonia",
      },
      {
        topic: "Funciones de servidor",
        left: "Una separación servidor/cliente que aquí no aportó nada",
        right: "Una SPA simple sobre Vite, sin nada sin usar",
      },
    ],
    verdict:
      "Con una API separada, una SPA simple encaja mejor: Vue resultó más fluido y la próxima vez elegiría React con Vite.",
  },
  architecture: {
    layersTitle: "Tres capas",
    layers: [
      {
        name: "Frontends",
        detail:
          "Una app en Next.js y otra en Vue, con las mismas páginas, capa de datos y cliente generado",
      },
      {
        name: "API",
        detail:
          "Módulos de NestJS con controladores delgados, reglas de negocio en los servicios y un contrato OpenAPI",
      },
      {
        name: "Base de datos",
        detail:
          "PostgreSQL con TypeORM, con borrado lógico y datos de ejemplo cargados",
      },
    ],
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
      label: "Panel con gráficos",
      caption: "tarjetas de métricas y el gráfico mensual",
    },
    {
      label: "Validación de formularios",
      caption: "errores en línea en el formulario de activos",
    },
    {
      label: "Lista de activos",
      caption: "filtrando portátiles por SKU",
    },
    {
      label: "Diálogo de empleado",
      caption: "validación de un código de empleado demasiado corto",
    },
    {
      label: "Borrado de categoría bloqueado",
      caption: "una categoría con activos activos no se puede borrar",
    },
    {
      label: "Swagger UI",
      caption: "la API documentada desde su especificación OpenAPI",
    },
    {
      label: "Ejecución del CI",
      caption: "lint, pruebas y Playwright, todo en verde",
    },
  ],
  links: {},
};
