/** Translatable text of a side-project case-study page. Language-neutral data (tags, links, evidence, images) lives in `app/pages/SideProject/projects/`. Arrays are matched to that data by position. */
export type SideProjectText = {
  /** Card label, e.g. "Academic project · 2026". */
  kind: string;
  /** Handwritten line above the title. */
  kicker: string;
  name: string;
  /** One line, about 140 characters at most. */
  oneLiner: string;
  facts: {
    role: string;
    context: string;
    period: string;
    team: string;
    status: string;
    effort?: string;
    outcome?: string;
  };
  hero: { label: string; caption: string };
  /** Labels of the key numbers (values are in the data file, same order). 0 to 4 items. */
  numbers: readonly { label: string }[];
  problem: readonly string[];
  features: readonly {
    title: string;
    bullets: readonly string[];
    /** Present when the group has a screenshot slot (image in the data file, same position). */
    shot?: { label: string; caption: string };
  }[];
  /** Ranked, most important first. Evidence chips are in the data file, same order. */
  highlights: readonly { title: string; what: string; why: string }[];
  /** Optional side-by-side comparison block (used by the IT Assets Tracker). */
  comparison?: {
    title: string;
    left: string;
    right: string;
    rows: readonly { topic: string; left: string; right: string }[];
    verdict: string;
  };
  architecture: {
    diagram?: { title: string; label: string; caption: string };
    /** Layering note, shown when the project has no diagram. */
    layersTitle?: string;
    layers?: readonly { name: string; detail: string }[];
  };
  team: {
    mine: readonly string[];
    theirs?: readonly string[];
    people: readonly { name: string; role: string; me?: boolean }[];
  };
  lessons: readonly string[];
  /** Captions of the gallery tiles (images and aspect ratios are in the data file, same order). */
  gallery: readonly { label: string; caption: string }[];
  links: {
    /** Shown instead of a live-demo card when there is no demo, e.g. desktop apps. */
    noLive?: string;
  };
};
