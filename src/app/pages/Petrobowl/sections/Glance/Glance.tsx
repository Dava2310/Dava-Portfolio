import { useTranslation } from "@/features/i18n";

import "./styles.css";

const FACTS = ["result", "representing", "role", "record"] as const;

export function Glance() {
  const { t } = useTranslation();

  return (
    <dl className="glance" aria-label={t("_pages:petrobowl.glance.label")}>
      {FACTS.map((key) => (
        <div key={key} data-featured={key === "result"}>
          <dt>{t(`_pages:petrobowl.glance.${key}.term`)}</dt>
          <dd>{t(`_pages:petrobowl.glance.${key}.value`)}</dd>
        </div>
      ))}
    </dl>
  );
}
