import type { SideProjectText } from "../../sideProject";

export const clinica: SideProjectText = {
  kind: "Academic project · 2025",
  kicker: "una cita, paso a paso",
  name: "Clinica",
  oneLiner:
    "A clinic management web app where patients, doctors and admins handle appointments and medical summaries.",
  facts: {
    role: "Project lead, backend and database design",
    context:
      "Academic · built around a real clinic in Maturín, Venezuela, Clínica INMECA",
    period: "About 7 months · 2024–2025",
    team: "2 people",
    status: "Functional prototype · demoed locally",
    effort: "About 60 hours of my own time, including design",
  },
  hero: {
    label: "Screenshot · Clinica web app",
    caption: "Clinica, from request to medical summary",
  },
  numbers: [
    { label: "API endpoints" },
    { label: "data models" },
    { label: "migrations" },
    { label: "user roles" },
  ],
  problem: [
    "A clinic needs one place to organise who sees which doctor and when, and to keep a record of every visit.",
    "Clinica does that with a negotiated appointment: the patient requests one, an administrator proposes doctor and date options, the patient picks one, and after the visit the doctor closes it with a medical summary stored in the patient’s history. We built it around the needs of a real clinic in Maturín, Venezuela, with separate views for patients, doctors and administrators.",
  ],
  features: [
    {
      title: "For patients",
      bullets: [
        "Request an appointment by service type and specialty",
        "Follow each appointment by state",
        "Review the proposed options and approve one",
        "Read their own medical summaries",
      ],
      shot: {
        label: "Screenshot · patient view",
        caption: "the patient side",
      },
    },
    {
      title: "For doctors",
      bullets: [
        "See their scheduled appointments",
        "Close a visit with a summary: diagnosis, treatment, observations",
        "Browse patient histories and summaries",
      ],
      shot: {
        label: "Screenshot · doctor view",
        caption: "closing a visit",
      },
    },
    {
      title: "For administrators",
      bullets: [
        "Create, edit and delete doctors, patients and other administrators",
        "List appointments by state",
        "Propose a doctor and one or more dates for each request",
      ],
      shot: {
        label: "Screenshot · administrator view",
        caption: "proposing options",
      },
    },
  ],
  highlights: [
    {
      title: "A relational model of the whole clinic workflow",
      what: "A 10-model MySQL schema in Prisma, evolved through 8 migrations. Identity is separate from the three role profiles, and the proposed options are their own table instead of columns on the appointment.",
      why: "That split is what makes the propose-then-choose flow possible, and every medical summary links to its appointment, patient, doctor and history. It is the part I owned end to end.",
    },
    {
      title: "A negotiated appointment lifecycle",
      what: "An appointment moves from requested to options proposed, scheduled and finished, with cancelled as an exit. Proposing options writes all the option rows and changes the state in one database transaction.",
      why: "It models a real reception workflow rather than a simple booking form, and finishing a visit is tied to its medical summary.",
    },
    {
      title: "Atomic registration with role profiles",
      what: "One endpoint creates the user, the matching role profile and, for patients, an empty medical history, all in one transaction. Validation depends on the role, and passwords are hashed.",
      why: "No half-created accounts: if the profile or the history fails, the user is rolled back.",
    },
    {
      title: "Revocable sessions and soft-deleted patients",
      what: "Short-lived access tokens, rotating refresh tokens and a logout blacklist. Patients are deactivated, never hard-deleted.",
      why: "Sessions can be ended for real, and a patient’s clinical history survives, which is the right call for medical records.",
    },
    {
      title: "Leading the API as the front end took shape",
      what: "About 45 REST endpoints behind a React front end with separate modules per role. I adapted endpoints and routes to what the screens needed.",
      why: "In a team of two the API is a contract, so it had to change with the real needs of the front end.",
    },
  ],
  architecture: {
    diagram: {
      title: "ER diagram",
      label: "Diagram · database model",
      caption: "the 10 models and how users, appointments and summaries relate",
    },
  },
  team: {
    mine: [
      "Backend architecture and API: Node.js, Express and Prisma",
      "Database and system design",
      "Adapting endpoints to what the front end needed",
    ],
    theirs: ["The React frontend: Manuel Blanco"],
    people: [
      {
        name: "Daniel Vetencourt",
        role: "Project lead, backend and database design",
        me: true,
      },
      { name: "Manuel Blanco", role: "Frontend" },
    ],
  },
  lessons: [
    "Designing the database and the system first made the rest of the backend straightforward: once the entities and the appointment lifecycle were clear, the endpoints followed.",
    "When you lead a small team, the API is a contract: I adjusted endpoints as the frontend’s real needs appeared instead of defending the first design.",
    "The frontend was the harder half of the project, and seeing that from the backend side taught me to design responses around what a screen needs.",
    "The appointment flow showed me where a first version stops: I planned a doctor time-conflict check and stricter state transitions but did not finish them, and the PDF reports stayed planned.",
  ],
  gallery: [
    { label: "Login", caption: "one entry point for the three roles" },
    {
      label: "Requesting an appointment",
      caption: "the patient’s request form",
    },
    {
      label: "Requested appointments",
      caption: "the administrator’s queue by state",
    },
    {
      label: "Proposing options",
      caption: "doctor and dates for one request",
    },
    {
      label: "Approving an option",
      caption: "the patient picks one of the proposals",
    },
    { label: "Pending appointments", caption: "the doctor’s list" },
    {
      label: "Medical summary",
      caption: "closing a visit with diagnosis and treatment",
    },
    { label: "Patient history", caption: "summaries kept per patient" },
  ],
  links: {},
};
