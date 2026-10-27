import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Moments } from "./sections/Moments";
import { Projects } from "./sections/Projects";
import { Story } from "./sections/Story";

export function HomePage() {
  return (
    <PageLayout page="home">
      <Hero />
      <Story />
      <Projects />
      <Moments />
      <Contact />
    </PageLayout>
  );
}
