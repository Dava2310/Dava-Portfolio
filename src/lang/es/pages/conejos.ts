import type { SideProjectText } from "../../sideProject";

export const conejos: SideProjectText = {
  kind: "Proyecto académico · 2023",
  kicker: "de los registros en papel a una base de datos compartida",
  name: "Sistema Conejos",
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
    label: "Captura · Sistema Conejos",
    caption: "Sistema Conejos, la pantalla de registro de conejos",
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
        caption: "los conejos y sus padres",
      },
    },
    {
      title: "Reproducción",
      bullets: [
        "Cruzar un macho apareador vivo con una hembra viva",
        "Lista de cruces con camadas y vista de detalle de los padres",
        "Gestaciones con fecha de inicio, fecha de parto esperada y notas",
        "Una lista de razas preferidas, según el consejo del dueño de la granja",
      ],
      shot: {
        label: "Captura · pantalla de cruces",
        caption: "elegir los padres de un cruce",
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
    },
  ],
  highlights: [
    {
      title: "Una capa de datos limpia, basada en clases, en PHP puro",
      what: "Cada tabla tiene su propia clase PHP que contiene todo su SQL, más una clase de conexión singleton. Pequeños scripts de endpoint leen la petición, llaman a una clase y responden JSON con un código HTTP, y las páginas solo muestran.",
      why: "El acceso a datos, los endpoints y las vistas quedan separados, hecho a mano sin framework y con todas las consultas preparadas.",
    },
    {
      title: "Un modelo relacional de una granja de cría",
      what: "Un esquema MySQL de 8 tablas guarda los padres de cada conejo mediante su cruce. Al crear un conejo desde un cruce se actualiza el contador de camadas, y cada cruce actualiza los contadores de cruces de ambos padres.",
      why: "Parentesco, cruces, gestaciones, historiales médicos, alimentación y ventas cuelgan de una sola tabla de conejos, y una pantalla “ver padres” sigue el vínculo.",
    },
    {
      title: "Un reporte de producción en PDF",
      what: "Un “Reporte de Producción” hecho con FPDF: logo y encabezado de la granja, una tabla con estilo y una fila por venta, números de página y fecha de impresión.",
      why: "Un entregable real para el dueño: el encabezado y el pie se repiten en cada página y cada fila muestra el nombre del conejo.",
    },
    {
      title: "Reglas de negocio que mantienen los datos coherentes",
      what: "Solo los machos apareadores vivos y las hembras vivas pueden cruzarse, solo los conejos vivos pueden venderse, y una venta crea un registro de producción y marca al conejo como vendido. Una gestación no puede empezar antes del nacimiento de la hembra.",
      why: "El estado y el rol de un conejo funcionan como una pequeña máquina de estados que decide qué ofrece cada pantalla.",
    },
    {
      title: "Pantallas compartidas con un menú por rol",
      what: "Las primeras versiones tenían páginas separadas por rol. Las unificamos en un solo conjunto de pantallas compartidas con un menú por rol.",
      why: "Eliminó unas 1.800 líneas duplicadas en un solo commit y dejó un único conjunto de pantallas que mantener.",
    },
    {
      title: "Validación en el navegador y en el servidor",
      what: "Los validadores del cliente revisan formatos venezolanos de teléfono y cédula, nombres y fechas (incluidos los años bisiestos) antes de cada petición. El servidor comprueba que el correo y la cédula sean únicos.",
      why: "Los datos incorrectos se detectan pronto, con mensajes claros en los formularios.",
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
      label: "Registro de conejos",
      caption: "la lista, con búsqueda por nombre o ID",
    },
    { label: "Pantalla de cruces", caption: "elegir un macho y una hembra" },
    { label: "Detalle de padres", caption: "raza y datos de ambos padres" },
    { label: "Historial médico", caption: "los tratamientos de cada conejo" },
    {
      label: "Planes de alimentación",
      caption: "tipo de alimento y cantidad",
    },
    { label: "Datos de ventas", caption: "kilos y fecha de cada venta" },
    {
      label: "Menú por rol",
      caption: "las mismas pantallas, un menú distinto",
    },
    {
      label: "Reporte de producción (PDF)",
      caption: "el reporte que imprime el dueño",
    },
  ],
  links: {},
};
