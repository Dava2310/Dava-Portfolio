import type { useTranslation } from "@/features/i18n";

import { SIDE_PROJECT_IDS, type SideProjectId } from "./types";

/** Every project with its own page, in the order of the pager. */
export const PROJECT_ORDER = ["mandioca", ...SIDE_PROJECT_IDS] as const;

export type ProjectId = (typeof PROJECT_ORDER)[number];

type T = ReturnType<typeof useTranslation>["t"];

export const projectCard = {
  /** Previous and next project in the pager (undefined at the ends). */
  neighbours(id: SideProjectId): {
    previous: ProjectId | undefined;
    next: ProjectId | undefined;
  } {
    const index = PROJECT_ORDER.indexOf(id);
    return {
      previous: PROJECT_ORDER[index - 1],
      next: PROJECT_ORDER[index + 1],
    };
  },
  /** Name and card label of a project page, in the current language. */
  read(t: T, id: ProjectId): { name: string; kind: string } {
    if (id === "mandioca") {
      return {
        name: t("_pages:mandioca.title"),
        kind: t("_pages:mandioca.kind"),
      };
    }
    const text = t(`_pages:${id}`, { returnObjects: true });
    return { name: text.name, kind: text.kind };
  },
};
