import { useTranslation } from "@/features/i18n";

import "./styles.css";

const ITEMS = ["ml", "stats", "pandas", "data"] as const;

export function Learning() {
  const { t } = useTranslation();

  return (
    <section
      className="learning"
      id="learning"
      aria-labelledby="learning-title"
    >
      <div className="learning-header">
        <h2 id="learning-title">
          <span aria-hidden="true" />
          {t("_pages:skills.tiers.learning.title")}
        </h2>
        <span>{t("_pages:skills.tiers.learning.note")}</span>
      </div>
      <div className="learning-grid">
        {ITEMS.map((id) => (
          <article key={id}>
            <h3>{t(`_pages:skills.learning.${id}.name`)}</h3>
            <p>{t(`_pages:skills.learning.${id}.note`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
