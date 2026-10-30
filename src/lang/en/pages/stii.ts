import type { SideProjectText } from "../../sideProject";

export const stii: SideProjectText = {
  kind: "Academic project · 2021",
  kicker: "¡adiós, hojas de cálculo!",
  name: "Proyecto STII / SARP",
  oneLiner:
    "A Java desktop app that centralises supplier data and generates weekly payment orders, with PDF reports, for an accounting team.",
  facts: {
    role: "Main developer: requirements, database model, app design and almost all the code",
    context:
      "Academic · for the accounting team of an agro-industrial company (Agroindustrial Mandioca C.A.)",
    period: "2021",
    team: "4 people",
    status: "Completed",
    outcome: "Perfect score on the thesis",
  },
  hero: {
    label: "Screenshot · SARP main screen",
    caption: "SARP’s main screen",
  },
  numbers: [{ label: "screens" }, { label: "database tables" }],
  problem: [
    "The accounting team kept its supplier data in spreadsheets with no central database, and the same file was passed around whenever someone else had to work on it. Every week it had to turn weigh tickets, advances and exchange rates into a payment order for each supplier.",
    "SARP keeps all of it in one MySQL database and generates the week’s payment orders in bolivars and dollars, with PDF reports, from a desktop app. It was my first large project, and it was presented as an academic thesis.",
  ],
  features: [
    {
      title: "Suppliers & beneficiaries",
      bullets: [
        "Register, search, edit, deactivate and reactivate suppliers",
        "Store each beneficiary’s bank details and an optional authorised person",
        "Link every supplier to their beneficiaries",
        "Keep a standard tariff history and push new rates to the suppliers that follow it",
      ],
      shot: {
        label: "Screenshot · supplier table",
        caption: "the supplier table",
      },
    },
    {
      title: "Weigh tickets & transactions",
      bullets: [
        "Record weigh tickets: gross and net kg, dry matter, impurities",
        "Register each supplier’s transactions, up to 4 per ticket",
        "Search and correct existing tickets and transactions",
      ],
      shot: {
        label: "Screenshot · new weigh ticket",
        caption: "a new weigh ticket",
      },
    },
    {
      title: "Weekly payments",
      bullets: [
        "Set the week’s USD exchange rate and the price table by dry matter",
        "Register advances and choose whether to deduct them",
        "Generate every payment order for the week",
        "Export payment orders and 7 other reports as PDF",
      ],
    },
  ],
  highlights: [
    {
      title: "A weekly payment run in one action",
      what: "For each supplier, the app works out the week’s payment order in bolivars and dollars, using the week’s exchange rate.",
      why: "It replaces a spreadsheet job with the accounting team’s real rules.",
    },
    {
      title: "A 12-table model of the business",
      what: "Suppliers, beneficiaries, weigh tickets, rates and advances live in one MySQL schema, with tariffs and rates keeping their history.",
      why: "One source of truth instead of scattered spreadsheets.",
    },
    {
      title: "A safe week closing",
      what: "Generating a week’s orders first checks they don’t already exist, then marks the week’s transactions as processed.",
      why: "The same transaction can’t be paid twice.",
    },
    {
      title: "Payment orders as PDF",
      what: "Orders and reports are exported as PDF with iText.",
      why: "The team gets documents it can print and file.",
    },
  ],
  architecture: {
    layersTitle: "how the code is layered (MVC-style)",
    layers: [
      {
        name: "View",
        detail: "20 Swing screens built with the NetBeans GUI builder",
      },
      {
        name: "Model & data access",
        detail: "One class per entity, plus the JDBC connection",
      },
      { name: "Database", detail: "MySQL, 12 tables" },
    ],
  },
  team: {
    mine: [
      "Gathering the requirements with the accounting team",
      "The database model and the application design",
      "Almost all the code: logic layer, payment orders, validation and PDF reports",
    ],
    theirs: [
      "Gabriel Antuarez: tweaks to the advance screen and some fields",
      "Virginia Sarah and Jennifer Sucre: the thesis, including its theory",
    ],
    people: [
      { name: "Daniel Vetencourt", role: "Main developer", me: true },
      { name: "Gabriel Antuarez", role: "Advance screen tweaks and fields" },
      { name: "Virginia Sarah", role: "UI draft and thesis" },
      { name: "Jennifer Sucre", role: "Thesis theory" },
    ],
  },
  lessons: [
    "It was my first big project: I got the real requirements from the accounting team and had to turn them into a database and an application.",
    "I learned to model a real process relationally, and to redo the model when I understood the requirements better.",
    "I learned to keep the interface apart from the data logic and to validate input before it reaches the database.",
    "Next time I would add automated tests for the payment calculations, wrap each week’s generation in a database transaction, and use decimal types for money.",
  ],
  gallery: [
    { label: "Main screen", caption: "the main window and its menus" },
    { label: "Login", caption: "the way in" },
    { label: "Supplier table", caption: "every supplier in one place" },
    { label: "New weigh ticket", caption: "recording a delivery" },
    {
      label: "Weekly payment orders",
      caption: "the week’s orders, per supplier",
    },
    { label: "PDF payment order", caption: "ready to print and file" },
  ],
  links: {
    noLive:
      "Desktop app: it runs locally with Java and MySQL, so there is no live demo.",
  },
};
