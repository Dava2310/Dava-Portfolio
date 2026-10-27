import { PageLayout } from "@/shared/ui/templates/PageLayout";

import { Beyond } from "./sections/Beyond";
import { Chat } from "./sections/Chat";
import { Intro } from "./sections/Intro";
import { Journey } from "./sections/Journey";
import { RightNow } from "./sections/RightNow";

export function AboutPage() {
  return (
    <PageLayout page="about">
      <Intro />
      <Journey />
      <RightNow />
      <Beyond />
      <Chat />
    </PageLayout>
  );
}
