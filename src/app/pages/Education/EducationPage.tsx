import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Certifications } from "./sections/Certifications";
import { Degrees } from "./sections/Degrees";
import { Graduation } from "./sections/Graduation";
import { Highlight } from "./sections/Highlight";
import { Honors } from "./sections/Honors";
import { Intro } from "./sections/Intro";

export function EducationPage() {
  return (
    <PageLayout page="education">
      <Intro />
      <Highlight />
      <Degrees />
      <Graduation />
      <Honors />
      <Certifications />
    </PageLayout>
  );
}
