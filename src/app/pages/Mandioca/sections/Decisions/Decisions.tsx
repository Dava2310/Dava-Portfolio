import { useTranslation } from "@/features/i18n";

import { NumberedTitle } from "../../components/NumberedTitle";

import "./styles.css";

const DECISIONS = ["nest", "alerts", "scale", "hosting"] as const;

export function Decisions() {
  const { t } = useTranslation();

  return (
    <section
      className="mandioca-decisions"
      id="decisions"
      aria-labelledby="decisions-title"
    >
      <NumberedTitle
        id="decisions-title"
        number="04"
        title={t("_pages:mandioca.decisions.title")}
      />
      <div className="mandioca-decisions-grid">
        {DECISIONS.map((id) => (
          <article key={id}>
            <h3>{t(`_pages:mandioca.decisions.${id}.title`)}</h3>
            <p>{t(`_pages:mandioca.decisions.${id}.body`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
