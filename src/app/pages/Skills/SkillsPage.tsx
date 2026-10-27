import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Intro } from "./sections/Intro";
import { Learning } from "./sections/Learning";
import { People } from "./sections/People";
import { SkillTier } from "./sections/SkillTier";
import { TierNav } from "./sections/TierNav";

export function SkillsPage() {
  return (
    <PageLayout page="skills">
      <Intro />
      <TierNav />
      <SkillTier tier="daily" />
      <SkillTier tier="comfortable" />
      <Learning />
      <People />
    </PageLayout>
  );
}
