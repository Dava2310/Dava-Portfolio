export const experience = {
  intro: {
    kicker: "paso a paso",
    title: "Where I've worked",
    lead: "From building a full platform for a company back home, to teaching robotics, to AI agent infrastructure in Barcelona.",
  },
  now: "Now",
  technologies: "Technologies",
  jobs: {
    toloka: {
      range: "Dec 2025 – Present",
      place: "Barcelona, Spain",
      company: "Toloka AI",
      role: "Python Engineer · AI Agent Infrastructure & DevTools",
      bullets: {
        b1: "Redesigned CI for agent calibration pipelines to run only the workflows a commit actually affects, cutting runtime and compute spend.",
        b2: "Rebuilt a test-fairness tool with score-based sampling across several agent attempts, surfacing flaky and borderline-unfair tests.",
        b3: "Built an end-to-end validation layer for task context files — CLI validator, GitHub workflow and in-container MCP server changes.",
        b4: "Authored and calibrated 10+ realistic engineering tasks with automated verification suites.",
      },
    },
    mandioca: {
      range: "Oct 2024 – Jan 2026",
      place: "Maturín, Venezuela",
      company: "Agroindustrial Mandioca C.A.",
      role: "Software Engineer",
      bullets: {
        b1: "Designed and built a full web platform with Next.js and NestJS, with JWT auth and dynamic roles — 60% faster loading.",
        b2: "Deployed and ran the AWS infrastructure (EC2 with Caddy, RDS, S3, Route 53, VPC) at 99.9% uptime.",
        b3: "Built QR-based traceability with a Telegram bot, and a Python app that reads truck weights straight from the scale.",
      },
      link: "Read the case study",
    },
    academos: {
      range: "Oct 2024 – Oct 2025",
      place: "Maturín, Venezuela",
      company: "Academos",
      role: "Programming Instructor · Robotics, Electronics, Backend",
      bullets: {
        b1: "Taught Python, programming logic and databases to teenagers and adults, with hands-on exercises and project-based challenges.",
        b2: "Built robotics and electronics projects with students — servo-driven cranes, ultrasonic sensors, automated doors.",
      },
      photos: {
        class: "Photo · class",
        crane: "Photo · robot crane",
        students: "Photo · students",
      },
      link: "See the classroom",
    },
  },
  cta: {
    kicker: "¿hablamos?",
    title: "Have a role in mind? Let's talk.",
    link: "Get in touch",
  },
};
