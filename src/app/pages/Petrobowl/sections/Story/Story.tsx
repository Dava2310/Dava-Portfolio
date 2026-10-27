import { useTranslation } from "@/features/i18n";

import "./styles.css";

const CHAPTERS = ["how", "final", "takeaway"] as const;

export function Story() {
  const { t } = useTranslation();

  return (
    <section className="event-story" aria-labelledby="event-story-title">
      <div className="event-story-title">
        <h2 id="event-story-title">{t("_pages:petrobowl.story.title")}</h2>
      </div>
      <div className="event-story-body">
        {CHAPTERS.map((key) => (
          <div key={key}>
            <h3>{t(`_pages:petrobowl.story.${key}.title`)}</h3>
            <p>{t(`_pages:petrobowl.story.${key}.body`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
