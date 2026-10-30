import type { SideProjectText } from "../../sideProject";

export const escuela: SideProjectText = {
  kind: "Real-world project · 2025",
  kicker: "from payment report to certificate",
  name: "Escuela",
  oneLiner:
    "Academy management system with admin, teacher and student portals: enrollments, payment review, schedules and PDF certificates.",
  facts: {
    role: "Sole developer: requirements, database, backend, frontend and PDF certificates",
    context: "Real-world project · built for a real academy in Venezuela",
    period: "About 2 months · Dec 2024 – Feb 2025",
    team: "Solo",
    status: "Not running now · code is public",
  },
  hero: {
    label: "Course management",
    caption: "managing courses and sections",
  },
  numbers: [
    { label: "user roles, one interface each" },
    { label: "REST endpoints" },
    { label: "database models" },
    { label: "integration tests" },
  ],
  problem: [
    "Small academies in Venezuela often handle enrollment, bank-transfer checking, class schedules and certificates by hand.",
    "Escuela centralises that process. A student picks a section and reports their bank transfer; the administrator reviews it and approves or rejects it; approval places the student in the section. Teachers see their sections and rosters, and the administrator marks students as passed and issues a PDF certificate. I built it alone for a real academy, backend first, with a Spanish interface and Venezuelan details such as the national ID (cédula) and local banks.",
  ],
  features: [
    {
      title: "Administrator",
      bullets: [
        "Manage courses, sections, teachers and students",
        "Set one schedule per section: dates, hours and days",
        "Review payment reports and approve or reject them",
        "Mark students as passed or failed",
        "Issue and download PDF certificates",
        "See statistics: students by age range, courses by category",
      ],
      shot: {
        label: "Screenshot · administrator view",
        caption: "reviewing enrollments",
      },
    },
    {
      title: "Teacher",
      bullets: [
        "See only their own sections",
        "Check the schedule, shown as day badges",
        "Follow enrolled versus capacity in a chart",
        "Read the roster with each student’s pass or fail status",
      ],
      shot: {
        label: "Screenshot · teacher dashboard",
        caption: "a section at a glance",
      },
    },
    {
      title: "Student",
      bullets: [
        "Browse courses with their enrollment state",
        "Enroll by reporting a bank payment (reference, date, bank, amount)",
        "Follow each enrollment: waiting, approved or not approved",
        "Download their certificates",
      ],
      shot: {
        label: "Screenshot · student view",
        caption: "courses and their states",
      },
    },
  ],
  highlights: [
    {
      title: "From payment to certificate",
      what: "A student reports a bank transfer and the admin approves it. That opens the seat, the teacher sees the roster, and a student who passes gets a certificate.",
      why: "One flow across three roles, with the approval done in a single transaction.",
    },
    {
      title: "Validated twice",
      what: "Joi checks the requests on the server, and zod applies the same rules in the forms.",
      why: "Users see clear errors before sending, and bad data never reaches the database.",
    },
    {
      title: "Certificates made in code",
      what: "The API draws the PDF certificate itself with PDFKit: border, logo, names, course and signatures.",
      why: "A printable document, with no template tool involved.",
    },
    {
      title: "A teacher dashboard from one query",
      what: "The teacher is read from the login token, and a single query returns their sections, schedules and students.",
      why: "The screen gets exactly what it shows, in one request.",
    },
  ],
  architecture: {
    diagram: {
      title: "System architecture",
      label: "Diagram · system architecture",
      caption:
        "who uses it, the Next.js app, the Express API and the MySQL database",
    },
  },
  team: {
    mine: [
      "Requirements and database design",
      "The REST API: Express, Prisma and MySQL",
      "The three web interfaces in Next.js",
      "The PDF certificate generator",
    ],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Everything, end to end",
        me: true,
      },
    ],
  },
  lessons: [
    "I started with the backend because it is where I am strongest, and having a validated, tested API first made the frontend much faster to build.",
    "Validation in layers paid off: Joi on the server and zod in the forms meant users got clear messages and the database stayed clean.",
    "I separated the experience by role mostly through different interfaces. Looking back, I would also enforce permissions on the server with role middleware on every route, not just hide screens.",
    "Business rules need to live in the workflow, not just in the display: I showed section capacity everywhere, and the next step would be to enforce it when approving an enrollment.",
  ],
  gallery: [
    {
      label: "Student list",
      caption: "every student, searchable by cédula, name and last name",
    },
    { label: "Teacher list", caption: "the teachers, with their professions" },
    {
      label: "Student statistics",
      caption: "age distribution of the students",
    },
    { label: "Course statistics", caption: "courses by category" },
    { label: "Certificates", caption: "certificates generation" },
    { label: "PDF certificate", caption: "course certificate in PDF format" },
  ],
  links: {},
};
