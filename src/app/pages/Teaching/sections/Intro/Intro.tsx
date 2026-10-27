import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="teaching-intro">
      <div className="teaching-intro-copy">
        <p className="teaching-intro-kicker">
          {t("_pages:teaching.intro.kicker")}
        </p>
        <h1>{t("_pages:teaching.intro.title")}</h1>
        <p className="teaching-intro-lead">{t("_pages:teaching.intro.lead")}</p>
      </div>
      <dl className="teaching-intro-facts">
        <div>
          <dt>{t("_pages:teaching.intro.whereTerm")}</dt>
          <dd>{t("_pages:teaching.intro.whereValue")}</dd>
        </div>
        <div>
          <dt>{t("_pages:teaching.intro.whenTerm")}</dt>
          <dd>{t("_pages:teaching.intro.whenValue")}</dd>
        </div>
      </dl>
    </section>
  );
}
