import type { SideProjectText } from "@/lang/sideProject";

import type { SideProjectData, SideProjectId } from "../types";

/** What every section receives: the translated text and the language-neutral data of one project. */
export type SectionProps = {
  id: SideProjectId;
  text: SideProjectText;
  data: SideProjectData;
};
