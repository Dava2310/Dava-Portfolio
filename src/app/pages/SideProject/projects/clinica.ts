import schema from "@/assets/clinica/database-schema-diagram.png";
import adminDoctors from "@/assets/clinica/admin-doctors-list.png";
import adminQueue from "@/assets/clinica/admin-appointment-requests-queue.png";
import adminRegisterPatient from "@/assets/clinica/admin-register-patient-form.png";
import adminSchedule from "@/assets/clinica/admin-schedule-appointment.png";
import doctorAgenda from "@/assets/clinica/doctor-scheduled-appointments.png";
import doctorCloseVisit from "@/assets/clinica/doctor-close-visit-form.png";
import doctorSummary from "@/assets/clinica/doctor-medical-summary-detail.png";
import patientAppointments from "@/assets/clinica/patient-my-appointments.png";
import patientRequest from "@/assets/clinica/patient-request-appointment.png";
import patientSummaries from "@/assets/clinica/patient-medical-summaries.png";

import type { SideProjectData } from "../types";

/** The screenshots are 1920 x 1080 PNG files, copied unchanged. */
const shot = (src: string) => ({ src, width: 1920, height: 1080 });

export const clinica: SideProjectData = {
  tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "JWT"],
  numbers: ["~45", "10", "8", "3"],
  hero: shot(adminQueue),
  diagram: { src: schema, width: 3400, height: 1980 },
  featureShots: [
    shot(patientRequest),
    shot(doctorCloseVisit),
    shot(adminSchedule),
  ],
  stack: {
    frontend:
      "React 18 · TypeScript · Vite · React Router · Tailwind · Flowbite · react-hook-form · axios",
    backend: "Node.js · Express 4 · Joi · Swagger (auth) · multer",
    database: "MySQL · Prisma 5 · migrations",
    auth: "JWT · bcrypt · refresh rotation · logout blacklist",
    testing: "Jest · supertest (integration, real database)",
  },
  solo: false,
  gallery: [
    { ratio: "16/9", image: shot(adminDoctors) },
    { ratio: "16/9", image: shot(adminRegisterPatient) },
    { ratio: "16/9", image: shot(doctorAgenda) },
    { ratio: "16/9", image: shot(doctorSummary) },
    { ratio: "16/9", image: shot(patientAppointments) },
    { ratio: "16/9", image: shot(patientSummaries) },
  ],
  repos: [
    { label: "API", url: "https://github.com/Dava2310/Clinica-Backend" },
    { label: "Web app", url: "https://github.com/Dava2310/Clinica-Frontend" },
  ],
};
