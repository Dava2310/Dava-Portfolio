import { useState } from "react";

import { useTranslation } from "@/features/i18n";

import "./styles.css";

const FILTERS = ["all", "web", "backend", "desktop", "data", "tools"] as const;

type Filter = (typeof FILTERS)[number];

export function Filters() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Filter>("all");

  return (
    <div className="projects-filters">
      {FILTERS.map((id) => (
        <button
          key={id}
          type="button"
          aria-pressed={active === id}
          onClick={() => setActive(id)}
        >
          {t(`_pages:projects.filters.${id}`)}
        </button>
      ))}
    </div>
  );
}
