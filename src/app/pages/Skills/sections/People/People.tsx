import { useTranslation } from "@/features/i18n";

import "./styles.css";

const SKILLS = ["lead", "teaching", "captain", "writing", "remote"] as const;

export function People() {
  const { t } = useTranslation();

  return (
    <section className="people" data-reveal-section>
      <div className="people-grid" data-reveal-group>
        <article className="people-card">
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
        </article>
        <article className="people-card">
          <h2>{t("_pages:skills.people.title")}</h2>
          <ul>
            {SKILLS.map((id) => (
              <li key={id}>{t(`_pages:skills.people.${id}`)}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
