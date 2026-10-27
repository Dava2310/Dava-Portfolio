import { useState } from "react";

import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Tape } from "@/shared/ui/atoms/Tape";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";

import "./styles.css";

const FILTERS = ["all", "competition", "university", "feria"] as const;
type Filter = (typeof FILTERS)[number];
type Kind = Exclude<Filter, "all">;

const EVENTS: readonly {
  id: "e1" | "e2" | "e3" | "e4" | "e5" | "e6";
  kind: Kind;
  badge: boolean;
}[] = [
  { id: "e1", kind: "competition", badge: true },
  { id: "e2", kind: "competition", badge: true },
  { id: "e3", kind: "competition", badge: true },
  { id: "e4", kind: "university", badge: false },
  { id: "e5", kind: "feria", badge: false },
  { id: "e6", kind: "feria", badge: false },
];

export function Events() {
  const { t } = useTranslation();
  const lang = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = EVENTS.filter(
    (event) => filter === "all" || event.kind === filter,
  );

  return (
    <>
      <div className="events-filters">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {t(`_pages:activities.filters.${key}`)}
          </button>
        ))}
      </div>
      <section
        className="events"
        aria-label={t("_pages:activities.eventsLabel")}
      >
        <div className="events-grid">
          {visible.map(({ id, kind, badge }) => (
            <a
              key={id}
              className="event-card"
              href={pageUrl(lang, "petrobowl")}
            >
              <Tape top="-12px" left="50%" rotate={-3} width={90} height={26} />
              <span className="event-card-photos">
                <ImagePlaceholder
                  label={t(`_pages:activities.events.${id}.photo`)}
                />
                <span className="event-card-shade" />
                <span className="event-card-count">
                  {t("_pages:activities.more")}
                </span>
              </span>
              <span className="event-card-body">
                <span className="event-card-head">
                  <span className="event-card-type">
                    {t(`_pages:activities.filters.${kind}`)}
                  </span>
                  {badge ? (
                    <span className="event-card-badge">
                      {t(`_pages:activities.events.${id}.badge`)}
                    </span>
                  ) : null}
                </span>
                <span className="event-card-title">
                  {t(`_pages:activities.events.${id}.title`)}
                </span>
                <span className="event-card-meta">
                  {t(`_pages:activities.events.${id}.meta`)}
                </span>
                <span className="event-card-note">
                  {t(`_pages:activities.events.${id}.note`)}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
