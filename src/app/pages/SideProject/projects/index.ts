import { clinica } from "./clinica";
import { conejos } from "./conejos";
import { escuela } from "./escuela";
import { itassets } from "./itassets";
import { spira } from "./spira";
import { stii } from "./stii";
import type { SideProjectData, SideProjectId } from "../types";

export const SIDE_PROJECTS: Record<SideProjectId, SideProjectData> = {
  spira,
  itassets,
  clinica,
  escuela,
  conejos,
  stii,
};
