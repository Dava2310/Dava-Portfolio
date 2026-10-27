/** Every page of the site. One HTML entry per page, built once and emitted once per language. */
export const PAGES = [
  { id: "home", path: "" },
  { id: "projects", path: "projects" },
  { id: "mandioca", path: "projects/mandioca" },
  { id: "experience", path: "experience" },
  { id: "education", path: "education" },
  { id: "skills", path: "skills" },
  { id: "about", path: "about" },
  { id: "activities", path: "activities" },
  { id: "petrobowl", path: "activities/petrobowl-2025" },
  { id: "teaching", path: "teaching" },
] as const;

export type PageId = (typeof PAGES)[number]["id"];

/** Public URL of a page in a language, always with a trailing slash (`/es/projects/`). */
export const pageUrl = (lang: string, id: PageId): string => {
  const page = PAGES.find((p) => p.id === id);
  const path = page?.path ?? "";
  return `/${lang}/${path}${path ? "/" : ""}`;
};

/** Page whose public path (without language) matches, e.g. `projects/mandioca`. */
export const pageByPath = (path: string) =>
  PAGES.find((p) => p.path === path.replace(/^\/|\/$/g, ""));
