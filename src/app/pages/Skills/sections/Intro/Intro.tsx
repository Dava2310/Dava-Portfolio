import { useTranslation } from "@/features/i18n";

import "./styles.css";

const TIERS = ["daily", "comfortable", "learning"] as const;

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="skills-intro">
      <div className="skills-intro-copy" data-intro-group>
        <p className="skills-intro-kicker">{t("_pages:skills.intro.kicker")}</p>
        <h1>{t("_pages:skills.intro.title")}</h1>
        <p className="skills-intro-lead">{t("_pages:skills.intro.lead")}</p>
      </div>
      <ul
        className="skills-legend"
        aria-label={t("_pages:skills.intro.legend")}
        data-intro
      >
        {TIERS.map((tier) => (
          <li key={tier}>
            <span data-tier={tier} aria-hidden="true" />
            {t(`_pages:skills.tiers.${tier}`)}
          </li>
        ))}
      </ul>
    </section>
  );
}
