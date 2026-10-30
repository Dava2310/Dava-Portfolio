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
      title: "A model of the whole clinic",
      what: "A 10-model Prisma schema over 8 migrations, with the proposed options in their own table.",
      why: "That split makes the appointment flow possible. It was the part I owned end to end.",
    },
    {
      title: "Appointments as a negotiation",
      what: "A request moves to options proposed, scheduled and finished. Proposing options and the state change happen in one transaction.",
      why: "It follows a real reception workflow, not a simple booking form.",
    },
    {
      title: "Accounts created in one step",
      what: "One endpoint creates the user, the role profile and a patient’s medical history in a single transaction.",
      why: "No half-created accounts.",
    },
    {
      title: "Sessions that can really end",
      what: "Short-lived access tokens, rotating refresh tokens and a logout blacklist. Patients are deactivated, never deleted.",
      why: "A patient’s history always survives.",
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
