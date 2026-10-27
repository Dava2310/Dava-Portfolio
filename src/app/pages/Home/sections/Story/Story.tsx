import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const YEARS = ["y2022", "y2023", "y2024", "y2025", "y2026"] as const;

export function Story() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="story" aria-labelledby="story-title">
      <SectionHeader
        id="story-title"
        title={t("_pages:home.story.title")}
        note={t("_pages:home.story.note")}
        noteTone="muted"
        link={{
          href: pageUrl(lang, "about"),
          label: t("_pages:home.story.link"),
        }}
      />
      <ol className="story-timeline">
        {YEARS.map((key) => (
          <li key={key}>
            <span className="story-dot" aria-hidden="true" />
            <span className="story-year">{key.slice(1)}</span>
            <p>{t(`_pages:home.story.${key}`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
