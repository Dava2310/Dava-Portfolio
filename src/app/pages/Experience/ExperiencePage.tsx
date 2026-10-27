import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Cta } from "./sections/Cta";
import { Intro } from "./sections/Intro";
import { Timeline } from "./sections/Timeline";

export function ExperiencePage() {
  return (
    <PageLayout page="experience">
      <Intro />
      <Timeline />
      <Cta />
    </PageLayout>
  );
}
