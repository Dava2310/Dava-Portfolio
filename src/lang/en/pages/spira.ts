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
      title: "Found and fixed a cross-tenant data leak",
      what: "Testing with two shops and two NGOs showed that any logged-in user could reach another organisation’s data. I fixed it with one scoping layer and kept the check as a repeatable probe script.",
      why: "Each shop and NGO must only ever see its own data, and the probe keeps checking that the fix holds.",
    },
    {
      title: "Race-safe claiming",
      what: "Claims run inside a database transaction with row locks, and the loser gets a clear conflict message.",
      why: "Two NGOs claiming the same donation at the same moment can’t both get it.",
    },
    {
      title: "A donation state machine with a single-use pass",
      what: "Every donation moves through defined states, and pickup needs a QR or PIN pass that works only once, enforced in the database.",
      why: "No skipped steps, and a pass can’t be used twice.",
    },
    {
      title: "Immutable custody certificates",
      what: "Each handover produces a numbered certificate that freezes both parties and the impact figures.",
      why: "A record of who held the food, and when, that can’t be quietly changed.",
    },
    {
      title: "One API contract for front and back",
      what: "The web app’s API client is generated from the backend’s OpenAPI spec.",
      why: "Front end and back end stay in sync as the API changes, and one person could build both sides.",
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
