import type { PageId } from "@/shared/config/pages";

/** Pages rendered with the side-project template. */
export const SIDE_PROJECT_IDS = [
  "spira",
  "itassets",
  "clinica",
  "escuela",
  "conejos",
  "stii",
] as const satisfies readonly PageId[];

export type SideProjectId = (typeof SIDE_PROJECT_IDS)[number];

/** An image, once the author adds the file. Without it the template shows a labelled placeholder. */
export type Shot = {
  src: string;
  width: number;
  height: number;
};

export type StackLayer =
  | "frontend"
  | "backend"
  | "database"
  | "auth"
  | "infra"
  | "testing"
  | "tooling";

/** Language-neutral data of a side project. Text lives in `src/lang/<lng>/pages/<id>.ts`, matched by position. */
export type SideProjectData = {
  tags: readonly string[];
  hero?: Shot;
  /** One value per key number (e.g. "~120"), same order as `text.numbers`. */
  numbers: readonly string[];
  /** One entry per feature group, same order as `text.features` (undefined = no image yet). */
  featureShots: readonly (Shot | undefined)[];
  diagram?: Shot;
  stack: Partial<Record<StackLayer, string>>;
  solo: boolean;
  /** One entry per gallery tile, same order as `text.gallery`. */
  gallery: readonly { ratio: string; image?: Shot }[];
  repos: readonly { label: string; url?: string; private?: boolean }[];
  live?: { url: string; display: string };
};
