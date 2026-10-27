import { useTranslation } from "@/features/i18n";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

export function Journey() {
  const { t } = useTranslation();

  return (
    <section className="journey" aria-labelledby="journey-title">
      <SectionHeader
        id="journey-title"
        title={t("_pages:about.journey.title")}
        note={t("_pages:about.journey.note")}
        noteTone="muted"
      />
      <div className="journey-card">
        <p className="journey-distance">{t("_pages:about.journey.distance")}</p>
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M24 128 C 260 -20, 740 -20, 976 128"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="24" cy="128" r="10" fill="currentColor" />
          <circle cx="976" cy="128" r="10" fill="currentColor" />
        </svg>
        <div className="journey-places">
          <div>
            <h3>{t("_pages:about.journey.fromTitle")}</h3>
            <p>{t("_pages:about.journey.fromBody")}</p>
          </div>
          <div data-side="end">
            <h3>{t("_pages:about.journey.toTitle")}</h3>
            <p>{t("_pages:about.journey.toBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
