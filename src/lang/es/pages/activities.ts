import type { Dict } from "../../types";

export const activities: Dict["_pages"]["activities"] = {
  intro: {
    kicker: "¡vamos, equipo!",
    title: "Actividades y eventos",
    lead: "Competencias, representaciones de mi universidad y las ferias donde mostré a los nuevos estudiantes lo que habíamos construido. Cada evento tiene su propia página con las fotos y la historia detrás.",
  },
  filters: {
    all: "Todo",
    competition: "Competencias",
    university: "En representación de mi universidad",
    feria: "Ferias",
  },
  eventsLabel: "Eventos",
  more: "+[n]",
  events: {
    e1: {
      title: "SPE Petrobowl Nacional 2025",
      meta: "[Mes] 2025 · [Ciudad], Venezuela",
      badge: "2.º lugar",
      note: "¡tan cerca del título!",
      photo: "Foto del equipo",
    },
    e2: {
      title: "SPE Petrobowl Nacional 2024",
      meta: "[Mes] 2024 · [Ciudad], Venezuela",
      badge: "3.er lugar",
      note: "mi año como capitán del equipo",
      photo: "Foto del equipo",
    },
    e3: {
      title: "SPE Petrobowl 2023",
      meta: "[Mes] 2023 · [Ciudad], Venezuela",
      badge: "Clasificatoria",
      note: "donde todo empezó",
      photo: "Foto del equipo",
    },
    e4: {
      title: "[Nombre del evento]",
      meta: "[Mes · año] · [Lugar]",
      badge: "",
      note: "[una breve nota a mano]",
      photo: "Foto del evento",
    },
    e5: {
      title: "[Nombre de la feria]",
      meta: "[Mes · año] · [Universidad]",
      badge: "",
      note: "mostrando a los nuevos estudiantes lo que construimos",
      photo: "Foto de la demo",
    },
    e6: {
      title: "[Nombre de la feria]",
      meta: "[Mes · año] · [Universidad]",
      badge: "",
      note: "[lo que presentaste]",
      photo: "Foto de la demo",
    },
  },
  teachingCta: {
    kicker: "¿y las clases?",
    title: "La docencia tiene su propia página.",
    link: "Visitar el aula",
  },
};
