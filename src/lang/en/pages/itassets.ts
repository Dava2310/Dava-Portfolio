import type { SideProjectText } from "../../sideProject";

export const itassets: SideProjectText = {
  kind: "Academic project · 2026 · Harbour.Space",
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
      title: "Dashboard",
      bullets: [
        "Five metric cards: total, assigned, available, availability and most popular category",
        "Area chart of assets created per month, with 3-month, 6-month and full-year ranges",
        "Assets table with drag-and-drop row ordering",
        "Same dashboard in Next.js and in Vue",
      ],
      shot: {
        label: "Screenshot · dashboard",
        caption: "metric cards and the monthly chart",
      },
    },
    {
      title: "Assets, employees and categories",
      bullets: [
        "Lists with filtering, sorting and pagination",
        "Create, view, edit and soft delete",
        "Form validation on top of the API rules, with clear inline errors",
        "A category in use cannot be deleted, and deleting an employee releases their assets",
        "A toast with the API’s own message on every operation",
      ],
      shot: {
        label: "Screenshot · form validation",
        caption: "inline errors in the asset form",
      },
    },
    {
      title: "Under the hood",
      bullets: [
        "23 REST routes in NestJS, with Swagger documentation",
        "A PostgreSQL schema with TypeORM and soft deletes",
        "Seed migrations with 500 fake assets, and Docker Compose",
        "Unit, component and end-to-end tests, Storybook and CI on both frontends",
      ],
    },
  ],
  highlights: [
    {
      title: "One API contract drives both frontends",
      what: "The API publishes an OpenAPI spec, and a generator turns it into a typed TypeScript client. Both frontends use that client, so calling the API is a typed method call instead of hand-written fetch code.",
      why: "Every API call is checked at compile time and the apps can’t drift from the backend. It was the best decision on the API side.",
    },
    {
      title: "A three-layer frontend test suite, in both apps",
      what: "More than 170 unit and component tests, Playwright end-to-end flows against the real API, and a Storybook catalog, all running in CI.",
      why: "Schemas and mappers, mocked components and real browser flows each catch a different kind of bug. It was my biggest lesson.",
    },
    {
      title: "The same app twice, a fair comparison",
      what: "The data layer, the validation rules and even one end-to-end spec are the same in Next.js and in Vue, so the comparison isolates what the frameworks really change.",
      why: "It gave me an evidence-based verdict: with a separate API, Next.js added server features I did not use.",
    },
    {
      title: "API rules kept in one place",
      what: "Feature modules with the same layout, strict DTO validation that rejects unknown fields, a shared repository interface, and soft deletes that keep unique constraints and relations consistent.",
      why: "Each new endpoint was fast to add, and edge cases give a clear error instead of a database failure.",
    },
    {
      title: "Quality gates on the frontends",
      what: "Both frontends run lint, formatting and tests on every pull request. A second job runs Playwright and waits for the sleeping API to wake up first. A pre-commit hook checks staged files.",
      why: "A team-style workflow applied by one person. I even broke tests on purpose to check that CI really fails.",
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
    layersTitle: "Three layers",
    layers: [
      {
        name: "Frontends",
        detail:
          "A Next.js app and a Vue app, with the same pages, data layer and generated client",
      },
      {
        name: "API",
        detail:
          "NestJS modules with thin controllers, business rules in services and an OpenAPI contract",
      },
      {
        name: "Database",
        detail:
          "PostgreSQL through TypeORM, with soft deletes and seeded fake data",
      },
    ],
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
    {
      label: "Dashboard with charts",
      caption: "metric cards and the monthly chart",
    },
    {
      label: "Form validation",
      caption: "inline errors in the asset form",
    },
    {
      label: "Assets list",
      caption: "filtering laptops by SKU",
    },
    {
      label: "Employee dialog",
      caption: "validation on a short employee code",
    },
    {
      label: "Blocked category delete",
      caption: "a category with active assets can’t be deleted",
    },
    {
      label: "Swagger UI",
      caption: "the API documented from its OpenAPI spec",
    },
    {
      label: "CI run",
      caption: "lint, tests and Playwright, all green",
    },
  ],
  links: {},
};
