import type { SideProjectText } from "../../sideProject";

export const conejos: SideProjectText = {
  kind: "Proyecto académico · 2023",
  kicker: "de los registros en papel a una base de datos compartida",
  name: "Conejera",
  oneLiner:
    "Sistema en PHP y MySQL con roles para una granja real de conejos: parentesco, cruces, alimentación, ventas y reportes PDF.",
  facts: {
    role: "Líder del proyecto; escribí la mayor parte del código",
    context:
      "Proyecto académico de nivel tesis, basado en una granja real de Venezuela (Agro Granja San José)",
    period: "Jun–Ago 2023",
    team: "2 personas",
    status: "Terminado · desplegado solo como demostración",
  },
  hero: {
    label: "Captura · inicio de sesión",
    caption: "el inicio de sesión, con el logo de la granja",
  },
  numbers: [
    { label: "roles de usuario" },
    { label: "tablas en la base de datos" },
    { label: "consultas preparadas" },
    { label: "scripts de endpoints JSON" },
  ],
  problem: [
    "Una granja de conejos real en Venezuela llevaba sus registros a mano, lo que dificultaba seguir parentesco, cruces, gestaciones, alimentación, tratamientos y ventas.",
    "Construimos una base de datos compartida donde cada tipo de trabajador (gerente, jornalero, veterinario, administrador) ve las pantallas de su labor. El dueño también recibe un reporte de producción en PDF. El sistema registra y organiza; no programa ni recomienda nada por su cuenta.",
  ],
  features: [
    {
      title: "Conejos y salud",
      bullets: [
        "Crear, editar y buscar conejos por nombre o ID",
        "Ver los padres de cada conejo, con raza y datos",
        "Historial médico por conejo: descripción, fecha y tratamiento",
        "Planes de alimentación: tipo de alimento y cantidad requerida",
      ],
      shot: {
        label: "Captura · registro de conejos",
        caption:
          "la búsqueda, la lista de conejos con sus padres y el formulario de edición",
      },
    },
    {
      title: "Reproducción",
      bullets: [
        "Cruzar un macho reproductor vivo con una hembra viva",
        "Lista de cruces con camadas y vista de detalle de los padres",
        "Gestaciones con fecha de inicio, fecha de parto esperada y notas",
        "Una lista de razas preferidas, según el consejo del dueño de la granja",
      ],
      shot: {
        label: "Captura · cruces",
        caption: "la lista de cruces y los dos padres de una camada",
      },
    },
    {
      title: "Ventas y administración",
      bullets: [
        "Vender un conejo con kilos en pie, kilos de carne y fecha",
        "Lista de ventas y un reporte de producción imprimible en PDF",
        "Cuatro roles, cada uno con su menú sobre pantallas compartidas",
        "Gestión de usuarios: crear y editar usuarios con su rol",
      ],
      shot: {
        label: "Captura · ventas",
        caption:
          "la lista de ventas, con el botón que genera el reporte en PDF",
      },
    },
  ],
  highlights: [
    {
      title: "Una clase por cada tabla",
      what: "Cada tabla tiene una clase PHP que se encarga de su SQL, con consultas preparadas y una conexión compartida. Endpoints pequeños responden en JSON.",
      why: "Datos, endpoints y páginas quedan separados, sin framework.",
    },
    {
      title: "Una granja modelada con su linaje",
      what: "Un esquema de 8 tablas enlaza cada conejo con sus padres a través de los cruces y mantiene al día los conteos de camadas y cruces.",
      why: "Registros, cruces, gestaciones, alimentación y ventas se asocian a un mismo conejo.",
    },
    {
      title: "Un reporte de producción en PDF",
      what: "Un PDF con el logo de la granja, hecho con FPDF: encabezado, una fila por venta, números de página y fecha de impresión.",
      why: "Un documento real para el dueño de la granja.",
    },
    {
      title: "Reglas que mantienen coherentes los registros",
      what: "Solo los reproductores vivos se pueden cruzar, solo los conejos vivos se pueden vender y una venta crea un registro de producción.",
      why: "El estado de un conejo decide qué ofrece cada pantalla.",
    },
  ],
  architecture: {
    diagram: {
      title: "Diagrama ER",
      label: "Diagrama · modelo de base de datos",
      caption:
        "las 8 tablas, con los conejos enlazados a sus padres por cruces",
    },
  },
  team: {
    mine: [
      "Liderazgo y coordinación del proyecto",
      "La capa de clases PHP y la base de datos",
      "Los módulos de conejos, cruces, ventas e historial médico",
      "Las validaciones y el reporte de producción en PDF",
    ],
    theirs: [
      "Estilos de las pantallas de inicio de sesión, inicio y usuarios",
      "Los módulos de alimentación y gestación",
      "La reorganización de las páginas por rol en pantallas compartidas",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Líder del proyecto, backend y base de datos",
        me: true,
      },
      {
        name: "Gabriel Antuarez",
        role: "Estilos, módulos de alimentación y gestación",
      },
    ],
  },
  lessons: [
    "Como líder del proyecto aprendí a repartir el trabajo con un compañero, estilos y algunos módulos de un lado y datos y lógica centrales del otro, y a integrar los cambios con frecuencia.",
    "Construir para una granja real me enseñó a partir del proceso real y modelarlo en tablas antes de escribir cualquier pantalla.",
    "Una clase por entidad hizo el sistema mucho más fácil de ampliar, y mantendría esa estructura en cualquier lenguaje.",
    "Lo escribí antes de conocer las APIs REST, así que pasar después a un diseño de API propio fue un paso natural.",
  ],
  gallery: [
    {
      label: "Gestaciones",
      caption: "cada gestación con su fecha de inicio y de parto prevista",
    },
    {
      label: "Gestión de usuarios",
      caption: "los usuarios con su rol y el formulario de edición",
    },
    {
      label: "Reporte de producción (PDF)",
      caption: "el reporte que imprime el dueño, una fila por venta",
    },
  ],
};
