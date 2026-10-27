import { useTranslation } from "@/features/i18n";

import "./styles.css";

const STEPS = ["fundamentals", "building", "fly"] as const;

export function Method() {
  const { t } = useTranslation();

  return (
    <section className="method" aria-labelledby="method-title">
      <h2 id="method-title">{t("_pages:teaching.method.title")}</h2>
      <ol>
        {STEPS.map((key, index) => (
          <li key={key}>
            <span className="method-dot" aria-hidden="true" />
            <span className="method-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{t(`_pages:teaching.method.${key}.title`)}</h3>
            <p>{t(`_pages:teaching.method.${key}.body`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
