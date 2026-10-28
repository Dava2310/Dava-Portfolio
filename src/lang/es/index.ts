import { _common } from "./_common";
import { meta } from "./meta";
import { home } from "./pages/home";
import { projects } from "./pages/projects";
import { mandioca } from "./pages/mandioca";
import { experience } from "./pages/experience";
import { education } from "./pages/education";
import { skills } from "./pages/skills";
import { about } from "./pages/about";
import { activities } from "./pages/activities";
import { petrobowl } from "./pages/petrobowl";
import { teaching } from "./pages/teaching";
import { spira } from "./pages/spira";
import { itassets } from "./pages/itassets";
import { clinica } from "./pages/clinica";
import { escuela } from "./pages/escuela";
import { conejos } from "./pages/conejos";
import { stii } from "./pages/stii";
import { sideProject } from "./pages/side-project";
import type { Dict } from "../types";

export const es: Dict = {
  _common,
  _pages: {
    home,
    projects,
    mandioca,
    experience,
    education,
    skills,
    about,
    activities,
    petrobowl,
    teaching,
    spira,
    itassets,
    clinica,
    escuela,
    conejos,
    stii,
    sideProject,
  },
  meta,
};
