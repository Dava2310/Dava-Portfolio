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
    label: "Screenshot · Escuela web app",
    caption: "Escuela, from enrollment to certificate",
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
      title: "A full enrollment workflow across three roles",
      what: "The whole academy lifecycle is implemented: the student reports a payment, the administrator approves or rejects it, approval creates the seat, the teacher follows the roster, the administrator marks pass or fail and issues a certificate, and the student downloads the PDF.",
      why: "It is a real domain with state and several linked entities, not just CRUD.",
    },
    {
      title: "A backend that validates in layers",
      what: "Every write goes through the same pipeline: route, id middleware, Joi schema, duplicate checks, Prisma call and one response helper with consistent HTTP codes. The forms repeat the same rules with zod.",
      why: "Users get clear messages before the request is even sent, and the database stays clean.",
    },
    {
      title: "PDF certificates drawn in code",
      what: "The API builds a landscape A4 certificate with PDFKit, laying out the border, logo, names, course and signature lines, and joining student, course and teacher data in one query.",
      why: "It produces a real printable document, and the layout lives in code rather than in a template.",
    },
    {
      title: "A teacher dashboard shaped by one query",
      what: "The teacher is identified from the login token, and one nested Prisma query returns their sections with course, schedule and enrolled students, ready for the screen.",
      why: "The UI gets exactly the data it shows, without extra round trips.",
    },
    {
      title: "Careful data handling",
      what: "Registration and enrollment approval run in transactions, deletes are soft, and a student-section link uses a composite key. Integration tests cover the auth, user, student, teacher and course routes.",
      why: "A failure can’t leave half-created records behind.",
    },
  ],
  architecture: {
    layersTitle: "Three layers, backend first",
    layers: [
      {
        name: "Next.js interface",
        detail:
          "One folder tree per role, each with its own sidebar and route guards",
      },
      {
        name: "Express API",
        detail:
          "Routes, controllers, Joi validations and middleware, with one response helper",
      },
      {
        name: "MySQL database",
        detail: "13 Prisma models, soft deletes and incremental migrations",
      },
    ],
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
    { label: "Login and register", caption: "the public entry points" },
    {
      label: "Administrator statistics",
      caption: "students and courses in charts",
    },
    { label: "Courses and sections", caption: "editing a course in a modal" },
    { label: "Schedule form", caption: "dates, hours and days of the week" },
    { label: "Student courses", caption: "not enrolled, waiting, approved" },
    { label: "Enrollment form", caption: "reporting a bank payment" },
    { label: "Enrollment review", caption: "approve or reject each payment" },
    { label: "Teacher dashboard", caption: "schedule, capacity and roster" },
    { label: "Certificates", caption: "issuing one for a student" },
    { label: "PDF certificate", caption: "generated on the server" },
  ],
  links: {},
};
