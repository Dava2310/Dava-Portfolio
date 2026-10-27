import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Gallery } from "./sections/Gallery";
import { Glance } from "./sections/Glance";
import { Hero } from "./sections/Hero";
import { MoreEvents } from "./sections/MoreEvents";
import { Story } from "./sections/Story";

export function PetrobowlPage() {
  return (
    <PageLayout page="petrobowl">
      <Hero />
      <Glance />
      <Story />
      <Gallery />
      <MoreEvents />
    </PageLayout>
  );
}
