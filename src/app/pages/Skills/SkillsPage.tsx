import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Intro } from "./sections/Intro";
import { People } from "./sections/People";
import { Toolbox } from "./sections/Toolbox";

export function SkillsPage() {
  return (
    <PageLayout page="skills">
      <Intro />
      <Toolbox />
      <People />
    </PageLayout>
  );
}
