import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Featured } from "./sections/Featured";
import { Filters } from "./sections/Filters";
import { Intro } from "./sections/Intro";
import { SideProjects } from "./sections/SideProjects";

export function ProjectsPage() {
  return (
    <PageLayout page="projects">
      <Intro />
      <Filters />
      <Featured />
      <SideProjects />
    </PageLayout>
  );
}
