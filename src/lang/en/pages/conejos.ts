import type { SideProjectText } from "../../sideProject";

export const conejos: SideProjectText = {
  kind: "Academic project · 2023",
  kicker: "from paper records to one shared database",
  name: "Sistema Conejos",
  oneLiner:
    "A role-based PHP and MySQL system for a real rabbit farm: parentage, crossings, feeding, sales and PDF production reports.",
  facts: {
    role: "Project leader; wrote most of the code",
    context:
      "Thesis-level academic project, based on a real farm in Venezuela (Agro Granja San Jose)",
    period: "Jun–Aug 2023",
    team: "2 people",
    status: "Finished · deployed for demo only",
  },
  hero: {
    label: "Screenshot · Sistema Conejos",
    caption: "Sistema Conejos, the rabbit records screen",
  },
  numbers: [
    { label: "user roles" },
    { label: "database tables" },
    { label: "prepared statements" },
    { label: "JSON endpoint scripts" },
  ],
  problem: [
    "A real rabbit farm in Venezuela kept its animal records by hand, so parentage, crossings, pregnancies, feeding, treatments and sales were hard to follow.",
    "We built one shared database where each type of worker (manager, farm hand, veterinarian, administrator) sees the screens for their job. The owner also gets a production report as a PDF. The system records and organises; it does not schedule or recommend anything on its own.",
  ],
  features: [
    {
      title: "Rabbits and health",
      bullets: [
        "Create, edit and search rabbits by name or ID",
        "See the parents of any rabbit, with breed and data",
        "Medical records per rabbit: description, date, treatment",
        "Feeding plans: feed type and required quantity",
      ],
      shot: {
        label: "Screenshot · rabbit records",
        caption: "rabbits and their parents",
      },
    },
    {
      title: "Breeding",
      bullets: [
        "Cross one living breeding male with one living female",
        "Crossing list with litter counts and a parents detail view",
        "Pregnancies with start date, expected birth date and notes",
        "A list of preferred breeds, from the farm owner’s advice",
      ],
      shot: {
        label: "Screenshot · crossing screen",
        caption: "choosing the parents of a crossing",
      },
    },
    {
      title: "Sales and administration",
      bullets: [
        "Sell a rabbit with live kilos, meat kilos and date",
        "Sales list and a printable production report in PDF",
        "Four roles, each with its own menu over shared screens",
        "User management: create and edit users with their role",
      ],
    },
  ],
  highlights: [
    {
      title: "A clean class-based data layer in plain PHP",
      what: "Every table has its own PHP class that owns all of its SQL, plus a singleton connection class. Small endpoint scripts read the request, call a class and answer JSON with an HTTP status, and pages only render.",
      why: "Data access, endpoints and views stay separate, built by hand without a framework, with every query a prepared statement.",
    },
    {
      title: "A relational model of a breeding farm",
      what: "An 8-table MySQL schema stores each rabbit’s parents through its crossing. Creating a rabbit from a crossing updates the litter count, and each crossing updates both parents’ crossing counters.",
      why: "Parentage, crossings, pregnancies, medical records, feeding and sales all hang from one rabbit table, and a “see parents” screen follows the link.",
    },
    {
      title: "A production report as a PDF",
      what: "A “Reporte de Producción” built with FPDF: farm logo and header, a styled table with one row per sale, page numbers and the print date.",
      why: "A real deliverable for the farm owner: the header and footer repeat on every page and each row shows the rabbit’s name.",
    },
    {
      title: "Business rules that keep herd data consistent",
      what: "Only living breeding males and living females can be crossed, only living rabbits can be sold, and a sale creates a production record and marks the rabbit as sold. A pregnancy cannot start before the female’s birth date.",
      why: "A rabbit’s status and role act as a small state machine that decides what each screen offers.",
    },
    {
      title: "Shared screens with a menu per role",
      what: "Early versions had separate pages per role. We merged them into one set of shared screens with one menu per role.",
      why: "It removed about 1,800 duplicated lines in a single commit and left one screen set to maintain.",
    },
    {
      title: "Validation in the browser and on the server",
      what: "Client-side validators check Venezuelan phone and ID formats, names and dates (leap years included) before any request. The server checks that email and ID number are unique.",
      why: "Bad data is caught early, with clear messages in the forms.",
    },
  ],
  architecture: {
    diagram: {
      title: "ER diagram",
      label: "Diagram · database model",
      caption:
        "the 8 tables, with rabbits linked to their parents by crossings",
    },
  },
  team: {
    mine: [
      "Project lead and coordination",
      "The PHP class layer and the database",
      "The rabbit, crossing, sales and medical modules",
      "Validations and the PDF production report",
    ],
    theirs: [
      "Styling of the login, home and user screens",
      "The feeding and gestation modules",
      "Reorganising the per-role pages into shared screens",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Project leader, backend and database",
        me: true,
      },
      {
        name: "Gabriel Antuarez",
        role: "Styling, feeding and gestation modules",
      },
    ],
  },
  lessons: [
    "As project leader I learned to split the work with a teammate, styling and some modules on one side and core data and logic on the other, and to merge often.",
    "Building for a real farm taught me to start from the real process and model it in tables before writing any screen.",
    "One class per entity made the system much easier to extend, and I would keep that structure in any language.",
    "It was written before I knew REST APIs, so moving to proper API design later was a natural next step.",
  ],
  gallery: [
    {
      label: "Rabbit records",
      caption: "the list, with search by name or ID",
    },
    { label: "Crossing screen", caption: "pick a male and a female" },
    { label: "Parents detail", caption: "breed and data of both parents" },
    { label: "Medical records", caption: "treatments for each rabbit" },
    { label: "Feeding plans", caption: "feed type and quantity" },
    { label: "Sales data", caption: "kilos and date for each sale" },
    { label: "Menu per role", caption: "the same screens, a different menu" },
    {
      label: "Production report (PDF)",
      caption: "the report the owner prints",
    },
  ],
  links: {},
};
