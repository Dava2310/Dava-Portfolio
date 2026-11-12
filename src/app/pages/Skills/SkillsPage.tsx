import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Exploring } from "./sections/Exploring";
import { Intro } from "./sections/Intro";
import { MainStack } from "./sections/MainStack";
import { People } from "./sections/People";
import { Toolbox } from "./sections/Toolbox";

export function SkillsPage() {
  return (
    <PageLayout page="skills">
      <Intro />
      <MainStack />
      <Toolbox />
      <Exploring />
      <People />
    </PageLayout>
  );
}
