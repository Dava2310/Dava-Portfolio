import anavin from "@/assets/team/anavin-sakusalcha.jpg";
import daniel from "@/assets/team/daniel-vetencourt.jpg";
import ecem from "@/assets/team/ecem-gonul.jpg";
import gabriel from "@/assets/team/gabriel-antuarez.jpg";

/** A teammate's photo and public profile, shown wherever their name appears in a case study. */
export type Member = {
  photo?: string;
  url?: string;
};

/** Teammates by the exact name used in the copy (the same in every language). */
export const MEMBERS: Readonly<Record<string, Member>> = {
  "Daniel Vetencourt": { photo: daniel },
  "Gabriel Antuarez": { photo: gabriel, url: "https://github.com/GABB1t0" },
  "Ecem Gonul": { photo: ecem, url: "https://ecemgonul.framer.website/" },
  "Anavin Sakusalcha": { photo: anavin },
};
