import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import "./styles.css";

const SKILLS = ["lead", "teaching", "captain", "writing", "remote"] as const;

export function People() {
  const { t } = useTranslation();

  return (
    <section className="people" data-reveal-section>
      <div className="people-card">
        <Tape top="-14px" left="56px" rotate={-3} width={110} height={30} />
        <div className="people-languages">
          <h2>{t("_pages:skills.languages.title")}</h2>
          <dl>
            <div>
              <dt>{t("_pages:skills.languages.spanish")}</dt>
              <dd data-style="hand">
                {t("_pages:skills.languages.spanishLevel")}
              </dd>
            </div>
            <div>
              <dt>{t("_pages:skills.languages.english")}</dt>
              <dd>{t("_pages:skills.languages.englishLevel")}</dd>
            </div>
          </dl>
        </div>
        <div className="people-skills">
          <h2>{t("_pages:skills.people.title")}</h2>
          <ul>
            {SKILLS.map((id) => (
              <li key={id}>{t(`_pages:skills.people.${id}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
