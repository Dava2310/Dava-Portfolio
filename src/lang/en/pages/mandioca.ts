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
    alt: "Mandioca dashboard showing the main overview screen",
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
      alt: "Landing page of the Mandioca web platform",
      title: "Web platform",
      description:
        "A Next.js frontend and a NestJS API with JWT authentication and dynamic roles and permissions.",
    },
    qr: {
      alt: "QR code tickets generated for each load",
      title: "QR traceability",
      description:
        "Every load gets a dynamic QR code, so the product can be followed end to end — from the field to delivery.",
    },
    bot: {
      alt: "Telegram bot listing its available commands",
      title: "Telegram bot",
      description:
        "Real-time notifications for the team whenever a load is registered, weighed or moved.",
    },
    scale: {
      alt: "Weighbridge desktop app reading a truck weight from the scale",
      title: "Weighbridge app",
      description:
        "A Python desktop app that reads the scale over serial and records each truck's weight the moment it's measured.",
    },
  },
  architecture: {
    title: "Architecture",
    lead: "How the pieces fit together, straight from my UML diagrams: where everything runs, how the applications and services talk to each other, and the data model behind the raw-material intake process. (The diagrams are labelled in Spanish.)",
    zoom: "click to zoom",
    deployment: {
      alt: "UML deployment diagram: an AWS server running Caddy, the Next.js frontend and the NestJS backend on EC2, next to RDS with MySQL and an S3 bucket, plus the client PC with a browser and the Python app connected to the scale over USB serial, and the Telegram API",
      name: "Deployment",
      caption: "EC2, RDS, S3 and the weighbridge PC",
    },
    components: {
      alt: "UML component diagram: the Next.js frontend and NestJS backend of the web system behind a Caddy HTTP server, connected to MySQL and S3 on AWS and to the Telegram API, and the Python automation app that talks to the scale over serial",
      name: "Components",
      caption: "the applications and services, and how they talk to each other",
    },
    intake: {
      alt: "Entity-relationship diagram of the raw-material intake process, with producers, drivers, trucks, operators, planning, weigh records, weigh tickets, quality analyses and audit tables",
      name: "Raw-material intake",
      caption:
        "data model: producers, drivers, trucks, weigh tickets and quality analysis",
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
