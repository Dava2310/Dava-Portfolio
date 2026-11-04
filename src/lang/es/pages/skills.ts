import type { Dict } from "../../types";

export const skills: Dict["_pages"]["skills"] = {
  intro: {
    kicker: "mi caja de herramientas",
    title: "Habilidades y dónde las he usado",
    lead: "Lo que uso a diario, lo que domino y lo que estoy aprendiendo, cada habilidad enlazada al trabajo donde la usé de verdad.",
  },
  tiers: {
    daily: {
      title: "A diario",
      note: "(la base de mi trabajo actual)",
    },
    comfortable: {
      title: "Domino",
      note: "(con ellas he entregado proyectos reales)",
    },
    learning: {
      title: "Aprendiendo ahora",
      note: "(gracias a mi maestría en Barcelona)",
    },
  },
  usedIn: "Usado en",
  proof: {
    toloka: "Toloka AI",
    mandioca: "Mandioca",
    academos: "Docencia en Academos",
    side: "[Proyecto personal]",
    cs50p: "CS50P",
    meta: "Meta",
  },
  learning: {
    ml: {
      name: "Aprendizaje automático",
      note: "Modelos, evaluación y scikit-learn.",
    },
    stats: {
      name: "Estadística y probabilidad",
      note: "Las matemáticas detrás de los modelos.",
    },
    pandas: {
      name: "pandas y NumPy",
      note: "Limpiar y explorar datos.",
    },
    data: {
      name: "Ingeniería de datos",
      note: "Pipelines que mueven y dan forma a los datos.",
    },
  },
  languages: {
    title: "Idiomas",
    spanish: "Español",
    spanishLevel: "nativo",
    english: "Inglés",
    englishLevel: "C1 · profesional",
  },
  people: {
    title: "Habilidades interpersonales",
    lead: {
      strong: "Líder técnico",
      rest: "de equipos de proyecto de 4 a 10 personas",
    },
    teaching: {
      strong: "Enseñanza",
      rest: "a principiantes —",
      link: "mira el aula",
    },
    captain: {
      strong: "Capitán de equipo",
      rest: "en la final nacional de SPE Petrobowl",
    },
    writing: {
      strong: "Redacción técnica",
      rest: ", documentación y modelado UML",
    },
    remote: {
      strong: "Colaboración remota",
      rest: "en equipos distribuidos",
    },
  },
};
