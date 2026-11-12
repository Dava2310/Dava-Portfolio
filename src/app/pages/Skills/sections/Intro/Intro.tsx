import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="skills-intro">
      <div className="skills-intro-copy" data-intro-group>
        <p className="skills-intro-kicker">{t("_pages:skills.intro.kicker")}</p>
        <h1>{t("_pages:skills.intro.title")}</h1>
        <p className="skills-intro-lead">{t("_pages:skills.intro.lead")}</p>
      </div>
    </section>
  );
}
