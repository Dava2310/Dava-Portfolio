import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Architecture } from "./sections/Architecture";
import { Built } from "./sections/Built";
import { Decisions } from "./sections/Decisions";
import { Intro } from "./sections/Intro";
import { Learned } from "./sections/Learned";
import { Pager } from "./sections/Pager";
import { Problem } from "./sections/Problem";
import { Showcase } from "./sections/Showcase";

export function MandiocaPage() {
  return (
    <PageLayout page="mandioca">
      <Intro />
      <Showcase />
      <Problem />
      <Built />
      <Architecture />
      <Decisions />
      <Learned />
      <Pager />
    </PageLayout>
  );
}
