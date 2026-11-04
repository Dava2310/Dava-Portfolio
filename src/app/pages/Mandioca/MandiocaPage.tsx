import { useTranslation } from "@/features/i18n";
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
  const { t } = useTranslation();
  const dots = [
    { id: "top", label: t("_pages:sideProject.nav.overview") },
    { id: "problem", label: t("_pages:sideProject.nav.problem") },
    { id: "built", label: t("_pages:sideProject.nav.built") },
    { id: "architecture", label: t("_pages:sideProject.nav.architecture") },
    { id: "decisions", label: t("_pages:mandioca.decisions.title") },
    { id: "learned", label: t("_pages:sideProject.nav.lessons") },
  ];

  return (
    <PageLayout page="mandioca" sections={dots}>
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
