import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Built } from "./sections/Built";
import { Intro } from "./sections/Intro";
import { Method } from "./sections/Method";
import { Photos } from "./sections/Photos";
import { Quote } from "./sections/Quote";
import { Taught } from "./sections/Taught";

export function TeachingPage() {
  return (
    <PageLayout page="teaching">
      <Intro />
      <Photos />
      <Taught />
      <Built />
      <Method />
      <Quote />
    </PageLayout>
  );
}
