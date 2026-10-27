export const mandioca = {
  back: "All projects",
  kind: "Client project · Oct 2024 – Jan 2026",
  title: "Mandioca Platform",
  lead: "From the farm to the truck scale: a web platform, QR traceability with a Telegram bot, and a desktop weighbridge app for an agro-industrial company in Maturín.",
  facts: {
    role: { label: "Role", value: "Software Engineer" },
    where: { label: "Where", value: "Maturín, Venezuela" },
    company: { label: "Company", value: "Agroindustrial Mandioca C.A." },
    timeline: { label: "Timeline", value: "15 months" },
  },
  jump: {
    label: "On this page",
    intro: "jump to:",
    problem: "The problem",
    built: "What I built",
    architecture: "Architecture",
    decisions: "Key decisions",
    learned: "What I learned",
  },
  hero: {
    shot: "Hero screenshot · main dashboard",
    caption: "the main dashboard",
  },
  results: {
    label: "Results",
    speed:
      "faster loading after re-architecting the API, with a codebase that's far easier to maintain.",
    uptime:
      "uptime on AWS, with secure hosting I deployed and operated myself.",
    support:
      "faster internal communication and support replies, thanks to real-time Telegram alerts.",
  },
  problem: {
    title: "The problem",
    p1: "Agroindustrial Mandioca needed to follow its product from the farm to delivery. Truck weights were written down by hand at the scale, updates about each load were slow to reach the right people, and different roles in the company needed different levels of access.",
    p2: "I designed and developed the platform across the stack — frontend, API, database, cloud hosting, and the small desktop app that sits next to the scale.",
  },
  built: {
    title: "What I built",
    web: {
      shot: "Screenshot · web platform",
      title: "Web platform",
      description:
        "A Next.js frontend and a NestJS API with JWT authentication and dynamic roles and permissions.",
    },
    qr: {
      shot: "Photo · QR label on a load",
      title: "QR traceability",
      description:
        "Every load gets a dynamic QR code, so the product can be followed end to end — from the field to delivery.",
    },
    bot: {
      shot: "Screenshot · Telegram alerts",
      title: "Telegram bot",
      description:
        "Real-time notifications for the team whenever a load is registered, weighed or moved.",
    },
    scale: {
      shot: "Screenshot · weighbridge app",
      title: "Weighbridge app",
      description:
        "A Python desktop app that reads the scale over serial and records each truck's weight the moment it's measured.",
    },
  },
  architecture: {
    title: "Architecture",
    lead: "How the pieces fit together, straight from my UML diagrams: where everything runs, the domain model, and what happens when a truck is weighed.",
    zoom: "click to zoom",
    deployment: {
      shot: "UML · Deployment diagram",
      name: "Deployment",
      caption: "EC2, RDS, S3 and the weighbridge PC",
    },
    domain: {
      shot: "UML · Class diagram",
      name: "Domain model",
      caption: "loads, trucks, weighings, users and roles",
    },
    sequence: {
      shot: "UML · Sequence diagram",
      name: "Weighing a truck",
      caption: "scale → desktop app → API → Telegram",
    },
    stack: {
      title: "The stack, layer by layer",
      layer: "Layer",
      tools: "Tools",
      frontend: { name: "Frontend", tools: "Next.js · shadcn/ui" },
      api: {
        name: "API",
        tools:
          "NestJS (migrated from Express) · Prisma ORM · JWT with dynamic roles",
      },
      database: { name: "Database", tools: "MySQL on Amazon RDS" },
      hosting: {
        name: "Hosting",
        tools: "EC2 with Caddy · S3 · Route 53 · VPC",
      },
      scale: {
        name: "At the scale",
        tools: "Python · Tkinter · serial communication",
      },
      notifications: { name: "Notifications", tools: "Telegram Bot API" },
    },
  },
  decisions: {
    title: "Key decisions",
    nest: {
      title: "Moving the API from Express to NestJS",
      body: "As roles and permissions grew, NestJS modules and guards gave the API a structure that was easier to reason about — and helped cut loading times by 60%.",
    },
    alerts: {
      title: "Alerts in real time, through Telegram",
      body: "Tracking events are pushed to the team by a Telegram bot, so updates arrive the moment they happen — support response times dropped by 75%.",
    },
    scale: {
      title: "Reading the scale directly",
      body: "A small Python app talks to the scale over serial, so every weight lands in the system automatically instead of being copied by hand.",
    },
    hosting: {
      title: "Simple, sturdy hosting",
      body: "EC2 behind Caddy for HTTPS, MySQL on RDS and files on S3, all inside a VPC — enough to keep the platform at 99.9% uptime.",
    },
  },
  learned: {
    title: "what I learned",
    body: "[Two or three sentences in your own words — what surprised you, what you'd do differently, and what you're proudest of.]",
  },
  pager: {
    label: "More projects",
    backLabel: "Back to",
    back: "All projects",
    nextLabel: "Next project",
    next: "[Side project name]",
  },
};
