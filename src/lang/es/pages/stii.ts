import type { SideProjectText } from "../../sideProject";

export const stii: SideProjectText = {
  kind: "Proyecto académico · 2021",
  kicker: "¡adiós, hojas de cálculo!",
  name: "Proyecto STII / SARP",
  oneLiner:
    "Aplicación de escritorio en Java que centraliza los datos de proveedores y genera órdenes de pago semanales, con reportes PDF.",
  facts: {
    role: "Desarrollador principal: requisitos, modelo de base de datos, diseño de la app y casi todo el código",
    context:
      "Académico · para el equipo contable de una empresa agroindustrial (Agroindustrial Mandioca C.A.)",
    period: "2021",
    team: "4 personas",
    status: "Completado",
    outcome: "Puntaje perfecto en la tesis",
  },
  hero: {
    label: "Captura · pantalla principal de SARP",
    caption: "La pantalla principal de SARP",
  },
  numbers: [{ label: "pantallas" }, { label: "tablas de base de datos" }],
  problem: [
    "El equipo contable llevaba los datos de sus proveedores en hojas de cálculo, sin una base de datos central, y el mismo archivo se enviaba una y otra vez cada vez que alguien más tenía que trabajar en él. Cada semana debía convertir boletos de pesaje, anticipos y tasas de cambio en una orden de pago para cada proveedor.",
    "SARP guarda todo en una sola base de datos MySQL y genera las órdenes de pago de la semana en bolívares y dólares, con reportes PDF, desde una aplicación de escritorio. Fue mi primer proyecto grande y se presentó como tesis académica.",
  ],
  features: [
    {
      title: "Proveedores y beneficiarios",
      bullets: [
        "Registrar, buscar, modificar, desactivar y reactivar proveedores",
        "Guardar los datos bancarios de cada beneficiario y una persona autorizada opcional",
        "Vincular cada proveedor con sus beneficiarios",
        "Mantener el historial de tarifas estándar y aplicar las nuevas a los proveedores que la siguen",
      ],
      shot: {
        label: "Captura · tabla de proveedores",
        caption: "la tabla de proveedores",
      },
    },
    {
      title: "Boletos y transacciones",
      bullets: [
        "Registrar boletos de pesaje: kg brutos y netos, materia seca, impurezas",
        "Registrar las transacciones de cada proveedor, hasta 4 por boleto",
        "Buscar y corregir boletos y transacciones existentes",
      ],
      shot: {
        label: "Captura · nuevo boleto de pesaje",
        caption: "un nuevo boleto de pesaje",
      },
    },
    {
      title: "Pagos semanales",
      bullets: [
        "Fijar la tasa de cambio en USD de la semana y la tabla de precios por materia seca",
        "Registrar anticipos y elegir si se descuentan",
        "Generar todas las órdenes de pago de la semana",
        "Exportar las órdenes de pago y otros 7 reportes en PDF",
      ],
    },
  ],
  highlights: [
    {
      title: "Una corrida semanal de pagos en una sola acción",
      what: "Para cada proveedor, la app calcula la orden de pago de la semana en bolívares y dólares, con la tasa de cambio de esa semana.",
      why: "Reemplaza un trabajo de hojas de cálculo con las reglas reales del equipo contable.",
    },
    {
      title: "Un modelo de 12 tablas del negocio",
      what: "Proveedores, beneficiarios, boletos de pesaje, tasas y anticipos viven en un solo esquema MySQL, y las tarifas y tasas conservan su historial.",
      why: "Una sola fuente de verdad en lugar de hojas de cálculo dispersas.",
    },
    {
      title: "Un cierre de semana seguro",
      what: "Al generar las órdenes de una semana, primero se comprueba que no existan y luego se marcan como procesadas las transacciones de esa semana.",
      why: "Una misma transacción no se puede pagar dos veces.",
    },
    {
      title: "Órdenes de pago en PDF",
      what: "Las órdenes y reportes se exportan en PDF con iText.",
      why: "El equipo recibe documentos que puede imprimir y archivar.",
    },
  ],
  architecture: {
    layersTitle: "cómo está organizado el código (estilo MVC)",
    layers: [
      {
        name: "Vista",
        detail: "20 pantallas Swing creadas con el diseñador de NetBeans",
      },
      {
        name: "Modelo y acceso a datos",
        detail: "Una clase por entidad, más la conexión JDBC",
      },
      { name: "Base de datos", detail: "MySQL, 12 tablas" },
    ],
  },
  team: {
    mine: [
      "Levantar los requisitos con el equipo contable",
      "El modelo de la base de datos y el diseño de la aplicación",
      "Casi todo el código: capa lógica, órdenes de pago, validación y reportes PDF",
    ],
    theirs: [
      "Gabriel Antuarez: ajustes en la pantalla de anticipos y algunos campos",
      "Virginia Sarah y Jennifer Sucre: la tesis, incluida su parte teórica",
    ],
    people: [
      { name: "Daniel Vetencourt", role: "Desarrollador principal", me: true },
      {
        name: "Gabriel Antuarez",
        role: "Ajustes de la pantalla de anticipos y campos",
      },
      { name: "Virginia Sarah", role: "Borrador de la interfaz y tesis" },
      { name: "Jennifer Sucre", role: "Teoría de la tesis" },
    ],
  },
  lessons: [
    "Fue mi primer proyecto grande: obtuve los requisitos reales del equipo contable y tuve que convertirlos en una base de datos y una aplicación.",
    "Aprendí a modelar un proceso real de forma relacional y a rehacer el modelo cuando entendí mejor los requisitos.",
    "Aprendí a mantener la interfaz separada de la lógica de datos y a validar las entradas antes de que lleguen a la base de datos.",
    "La próxima vez agregaría pruebas automáticas de los cálculos de pago, envolvería la generación de cada semana en una transacción de base de datos y usaría tipos decimales para el dinero.",
  ],
  gallery: [
    {
      label: "Pantalla principal",
      caption: "la ventana principal y sus menús",
    },
    { label: "Inicio de sesión", caption: "la puerta de entrada" },
    {
      label: "Tabla de proveedores",
      caption: "todos los proveedores en un solo lugar",
    },
    { label: "Nuevo boleto de pesaje", caption: "registrando una entrega" },
    {
      label: "Órdenes de pago semanales",
      caption: "las órdenes de la semana, por proveedor",
    },
    {
      label: "Orden de pago en PDF",
      caption: "lista para imprimir y archivar",
    },
  ],
  links: {
    noLive:
      "Aplicación de escritorio: se ejecuta en local con Java y MySQL, así que no hay demo en vivo.",
  },
};
