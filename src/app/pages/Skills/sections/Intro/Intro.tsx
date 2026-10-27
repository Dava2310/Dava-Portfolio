import { useTranslation } from "@/features/i18n";

import "./styles.css";

const LEVELS = ["daily", "comfortable", "learning"] as const;

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="skills-intro">
      <div className="skills-intro-copy">
        <p className="skills-intro-kicker">{t("_pages:skills.intro.kicker")}</p>
        <h1>{t("_pages:skills.intro.title")}</h1>
        <p className="skills-intro-lead">{t("_pages:skills.intro.lead")}</p>
      </div>
      <ul
        className="skills-legend"
        aria-label={t("_pages:skills.intro.legend")}
      >
        {LEVELS.map((level) => (
          <li key={level}>
            <span data-level={level} aria-hidden="true" />
            {t(`_pages:skills.tiers.${level}.title`)}
          </li>
        ))}
      </ul>
    </section>
  );
}
