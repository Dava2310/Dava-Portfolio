import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Events } from "./sections/Events";
import { Intro } from "./sections/Intro";
import { TeachingCta } from "./sections/TeachingCta";

export function ActivitiesPage() {
  return (
    <PageLayout page="activities">
      <Intro />
      <Events />
      <TeachingCta />
    </PageLayout>
  );
}
