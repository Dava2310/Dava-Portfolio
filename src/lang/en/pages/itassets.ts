import type { SideProjectText } from "../../sideProject";

export const itassets: SideProjectText = {
  kind: "Academic project · 2026",
  kicker: "the same app, built twice",
  name: "IT Assets Tracker",
  oneLiner:
    "IT inventory app: a NestJS API and the same frontend built twice, in Next.js and Vue, to compare frameworks.",
  facts: {
    role: "Built everything: the API, both frontends, the tests and the CI",
    context: "Academic · Harbour.Space, Barcelona, Modern Frontend Frameworks",
    period: "About 3 weeks · Mar–Apr 2026",
    team: "Solo project",
    status: "Finished course project",
  },
  hero: {
    label: "Screenshot · dashboard with charts",
    caption: "the dashboard: metric cards and assets created per month",
  },
  numbers: [
    { label: "repositories, one project" },
    { label: "unit and component tests" },
    { label: "API routes" },
  ],
  problem: [
    "For the Modern Frontend Frameworks course, we had to build the same frontend twice with different frameworks. I chose a small IT inventory (assets, categories and the employees who hold them) so the focus could stay on engineering quality and on comparing the frameworks, not on the domain.",
    "A NestJS and PostgreSQL API serves the data and publishes an OpenAPI contract. From it I generated a typed client, and a Next.js app and a Vue 3 app use it to offer the same dashboard, tables and forms. All data is fake, and authentication was deliberately left out of scope to finish in three weeks.",
  ],
  features: [
    {
      title: "",
      bullets: [
        "A REST API in NestJS and PostgreSQL, documented with Swagger (OpenAPI)",
        "Strict validation and soft deletes on every entity",
        "The same frontend built twice, in Next.js and in Vue, sharing one generated API client",
        "A dashboard, paginated tables with filters and row actions, and validated forms",
        "More than 170 unit, component and end-to-end tests, with CI on both frontends",
      ],
    },
  ],
  highlights: [
    {
      title: "One API contract, two frontends",
      what: "A typed client is generated from the API’s OpenAPI spec, and both frontends use it.",
      why: "A wrong API call fails when compiling, not in the browser.",
    },
    {
      title: "Tests in three layers",
      what: "More than 170 unit and component tests, plus Playwright flows against the real API, in both apps.",
      why: "Each layer catches a different kind of bug. It was my biggest lesson.",
    },
    {
      title: "The same app, twice",
      what: "The data layer and the validation rules are shared between the Next.js and Vue versions.",
      why: "It shows what the frameworks really change: with a separate API, Next.js added server features I did not use.",
    },
    {
      title: "API rules in one place",
      what: "The same module layout everywhere, strict DTO validation and soft deletes that keep constraints consistent.",
      why: "New endpoints were quick to add, and edge cases give clear errors.",
    },
  ],
  comparison: {
    title: "Next.js vs Vue 3",
    left: "Next.js",
    right: "Vue 3",
    rows: [
      {
        topic: "Data fetching",
        left: "TanStack Query only: no page fetches data on the server",
        right: "The same TanStack Query setup, with the same cache keys",
      },
      {
        topic: "Forms",
        left: "React Hook Form and Zod",
        right: "VeeValidate and Zod, with the same rules and less ceremony",
      },
      {
        topic: "Server features",
        left: "A server and client split that added nothing here",
        right: "A plain SPA on Vite, with nothing unused",
      },
    ],
    verdict:
      "With a separate API, a plain SPA fits better: Vue felt smoother, and next time I would pick React with Vite.",
  },
  architecture: {
    diagram: {
      title: "Database schema",
      label: "Diagram · database schema",
      caption:
        "four tables with soft deletes: roles, employees, categories and assets",
    },
  },
  team: {
    mine: [
      "The NestJS API, with Docker and the seed data",
      "Both frontends: Next.js and Vue 3",
      "The tests and the CI pipelines",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "API, both frontends, tests and CI",
        me: true,
      },
    ],
  },
  lessons: [
    "Frontend testing was the biggest lesson: unit, component and end-to-end tests each catch different problems, and next time I would plan for them from day one.",
    "Next.js was the wrong choice here. When the whole backend lives in NestJS, its server features add complexity without benefit, and I should have used React with Vite.",
    "A generated OpenAPI client was the best decision on the API side. Next time I would automate the regeneration instead of copying files.",
    "I left authentication out on purpose to finish in three weeks: scoping is also an engineering skill.",
  ],
  gallery: [
    { label: "API documentation", caption: "Swagger OpenAPI documentation" },
    {
      label: "Assets list",
      caption:
        "a paginated table with filters and edit and delete actions on each row",
    },
    { label: "Employees list", caption: "the employees, filterable by email" },
    {
      label: "New employee",
      caption:
        "creating an employee in a modal, with its role and employee code",
    },
    {
      label: "New asset",
      caption: "a complex, validated form to create an asset",
    },
    {
      label: "Form validation",
      caption: "a modal with inline validation errors",
    },
  ],
};
