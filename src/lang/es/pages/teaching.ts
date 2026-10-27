import type { Dict } from "../../types";

export const teaching: Dict["_pages"]["teaching"] = {
  intro: {
    kicker: "“¡profe Daniel!”",
    title: "En el aula",
    lead: "Durante un año enseñé Python, lógica de programación y bases de datos a adolescentes y adultos en Academos, en Maturín, y de paso construimos robots juntos.",
    whereTerm: "Dónde",
    whereValue: "Academos, Maturín",
    whenTerm: "Cuándo",
    whenValue: "Oct 2024 – Oct 2025",
  },
  photos: {
    label: "Fotos del aula",
    main: "Foto · dando una clase",
    mainCaption: "[leyenda · qué estaba pasando]",
    work: "Foto · estudiantes trabajando",
    group: "Foto · todo el grupo",
    caption: "[leyenda]",
  },
  taught: {
    title: "Lo que enseñé",
    python: {
      title: "Python y lógica de programación",
      body: "Desde la primera variable hasta escribir pequeños programas por su cuenta.",
    },
    databases: {
      title: "Bases de datos",
      body: "Cómo modelar datos, escribir consultas y mantener la información organizada.",
    },
    robotics: {
      title: "Robótica y electrónica",
      body: "Convertir el código en cosas que se mueven, sienten y reaccionan en el mundo real.",
    },
  },
  built: {
    title: "Construido con mis estudiantes",
    note: "(sus momentos de mayor orgullo)",
    crane: {
      photo: "Foto · grúa con servomotores",
      name: "grúa con servomotores",
      description:
        "Una pequeña grúa que levanta y gira, controlada por código que los propios estudiantes escribieron.",
    },
    sensor: {
      photo: "Foto · sensor ultrasónico",
      name: "sensor ultrasónico",
      description:
        "Dispositivos que miden distancia y reaccionan cuando algo se acerca.",
    },
    door: {
      photo: "Foto · puerta automática",
      name: "puerta automática",
      description:
        "Una puerta que se abre sola: sensores, motores y lógica trabajando juntos.",
    },
  },
  method: {
    title: "Cómo enseño",
    fundamentals: {
      title: "Empezar por los fundamentos",
      body: "Primero la lógica, después la sintaxis, para que las ideas se queden sin importar el lenguaje.",
    },
    building: {
      title: "Aprender construyendo",
      body: "Ejercicios prácticos y retos basados en proyectos en cada clase.",
    },
    fly: {
      title: "Y luego, a volar",
      body: "La meta es siempre la misma: estudiantes capaces de seguir construyendo por su cuenta.",
    },
  },
  quote: {
    text: "“[Una cita breve de un estudiante o de un padre, si tienes alguna.]”",
    author: "— [Nombre], [estudiante en Academos]",
  },
};
