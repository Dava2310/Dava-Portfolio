import type { SideProjectText } from "../../sideProject";

export const spira: SideProjectText = {
  kind: "Academic project · 2026",
  kicker: "¡que nada se desperdicie!",
  name: "Spira",
  oneLiner:
    "A food-surplus platform: shops list expiring stock, NGOs claim it and collect it with a single-use QR or PIN pass.",
  facts: {
    role: "Built the whole API and the web app",
    context: "Academic · Harbour.Space, “From Zero to Hero”",
    period: "About 3 weeks · 2026",
    team: "6 people",
    status: "MVP · live demo available",
    outcome: "Well received, mostly for its business case",
  },
  hero: {
    label: "Screenshot · Spira web app",
    caption: "Spira, from listing to pickup",
  },
  numbers: [
    { label: "API routes" },
    { label: "database tables" },
    { label: "user roles" },
  ],
  problem: [
    "Shops throw away food that is close to its expiry date, while NGOs need a reliable way to find it and collect it in time.",
    "Spira connects the two: shops list expiring stock, NGOs claim what they need and collect it with a single-use QR or PIN pass, and every handover leaves a custody record. We built it as a possible real initiative, not only a course exercise.",
  ],
  features: [
    {
      title: "For shops",
      bullets: [
        "List surplus stock before it expires",
        "Follow each donation through its states",
        "Confirm each pickup with a QR or PIN",
      ],
      shot: { label: "Screenshot · shop view", caption: "the shop side" },
    },
    {
      title: "For NGOs",
      bullets: [
        "Find available donations on a map",
        "Claim stock with no double-claim conflicts",
        "Collect it with a single-use QR or PIN pass",
      ],
      shot: { label: "Screenshot · NGO map", caption: "donations on the map" },
    },
    {
      title: "Under the hood",
      bullets: [
        "About 120 REST routes in NestJS",
        "A 16-table PostgreSQL schema with TypeORM",
        "An immutable custody certificate for every handover",
        "A typed client generated from the OpenAPI spec",
      ],
    },
  ],
  highlights: [
    {
      title: "A data leak I found and fixed",
      what: "Testing with two shops and two NGOs showed that a logged-in user could reach another organisation’s data. I fixed it with one scoping layer and kept a script that checks it.",
      why: "Each organisation only ever sees its own data.",
    },
    {
      title: "Two NGOs, one donation",
      what: "Claims run in a database transaction with row locks. The second NGO gets a clear conflict message.",
      why: "The same donation can’t be claimed twice.",
    },
    {
      title: "A pickup pass that works once",
      what: "Each donation moves through fixed states, and pickup needs a QR or PIN that the database only accepts once.",
      why: "No skipped steps and no reused passes.",
    },
    {
      title: "One contract for front and back",
      what: "The web app’s API client is generated from the backend’s OpenAPI spec.",
      why: "Both sides stay in sync, and one person could build both.",
    },
  ],
  architecture: {
    diagram: {
      title: "Donation state machine",
      label: "Diagram · donation state machine",
      caption: "every state a donation can be in, and what moves it forward",
    },
  },
  team: {
    mine: [
      "The whole API: NestJS, PostgreSQL and TypeORM",
      "The web app: React 19, Vite and Tailwind",
    ],
    theirs: [
      "UI design: Elena Paoli and Ecem Gonul",
      "The business side: three teammates (market segmentation, shaping the idea)",
    ],
    people: [
      { name: "Daniel Vetencourt", role: "API and web app", me: true },
      { name: "Elena Paoli", role: "UI design" },
      { name: "Ecem Gonul", role: "UI design" },
      { name: "Three teammates", role: "Business side" },
    ],
  },
  lessons: [
    "A fast MVP built with AI assistants hides gaps: my own probe showed the first version leaked data between organisations, so I learned to test the rules, not only the happy path.",
    "Double claims are stopped by locks and constraints in the database, not by checks in the UI.",
    "Generating the client from the API spec is what made it realistic for one person to build both sides.",
  ],
  gallery: [
    { label: "Listing expiring stock", caption: "a shop lists its surplus" },
    { label: "Donations on the map", caption: "what NGOs see" },
    { label: "Claiming a donation", caption: "claim it before anyone else" },
    { label: "QR / PIN pickup pass", caption: "the single-use pass" },
    { label: "Custody certificate", caption: "proof of every handover" },
    { label: "Shop handover screen", caption: "verifying a pickup" },
  ],
  links: {},
};
