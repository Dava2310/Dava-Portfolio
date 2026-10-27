/** Contact and profile links. Values come from env (see `.env.example`) with hardcoded fallbacks. */
const env = import.meta.env;

export const SOCIALS = {
  github: env["VITE_LINK_GITHUB"] || "https://github.com/Dava2310",
  linkedin:
    env["VITE_LINK_LINKEDIN"] ||
    "https://www.linkedin.com/in/daniel-vetencourt",
  email: `mailto:${env["VITE_CONTACT_EMAIL"] || "dvetencourt23@gmail.com"}`,
  resume: env["VITE_LINK_RESUME"] || "#",
} as const;

export const CONTACT_EMAIL =
  env["VITE_CONTACT_EMAIL"] || "dvetencourt23@gmail.com";
