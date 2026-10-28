import { useTranslation } from "@/features/i18n";
import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { SIDE_PROJECTS } from "./projects";
import { Architecture } from "./sections/Architecture";
import { Built } from "./sections/Built";
import { Comparison } from "./sections/Comparison";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Highlights } from "./sections/Highlights";
import { Intro } from "./sections/Intro";
import { Lessons } from "./sections/Lessons";
import { Links } from "./sections/Links";
import { Numbers } from "./sections/Numbers";
import { Pager } from "./sections/Pager";
import { Problem } from "./sections/Problem";
import { Team } from "./sections/Team";
import type { SideProjectId } from "./types";

type SideProjectPageProps = {
  id: SideProjectId;
};

/** One case-study page for a side project. Every project uses this template; only text and data differ. */
export function SideProjectPage({ id }: SideProjectPageProps) {
  const { t } = useTranslation();
  const text = t(`_pages:${id}`, { returnObjects: true });
  const props = { id, text, data: SIDE_PROJECTS[id] };

  return (
    <PageLayout page={id}>
      <Intro {...props} />
      <Hero {...props} />
      <Numbers {...props} />
      <Problem {...props} />
      <Built {...props} />
      <Highlights {...props} />
      <Comparison {...props} />
      <Architecture {...props} />
      <Team {...props} />
      <Lessons {...props} />
      <Gallery {...props} />
      <Links {...props} />
      <Pager {...props} />
    </PageLayout>
  );
}
