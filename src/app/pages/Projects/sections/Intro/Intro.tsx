import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="projects-intro">
      <p className="projects-intro-kicker">
        {t("_pages:projects.intro.kicker")}
      </p>
      <h1>{t("_pages:projects.intro.title")}</h1>
      <p className="projects-intro-lead">{t("_pages:projects.intro.lead")}</p>
    </section>
  );
}
