import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="education-intro">
      <p className="education-intro-kicker">
        {t("_pages:education.intro.kicker")}
      </p>
      <h1>{t("_pages:education.intro.title")}</h1>
      <p className="education-intro-lead">{t("_pages:education.intro.lead")}</p>
    </section>
  );
}
