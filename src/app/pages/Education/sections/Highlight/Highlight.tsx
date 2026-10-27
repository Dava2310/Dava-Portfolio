import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";

import "./styles.css";

export function Highlight() {
  const { t } = useTranslation();

  return (
    <section className="highlight" aria-labelledby="highlight-title">
      <Polaroid
        className="highlight-photo"
        caption={t("_pages:education.highlight.caption")}
        rotate={-2.5}
        taped
      >
        <ImagePlaceholder
          label={t("_pages:education.highlight.photo")}
          ratio="4/5"
        />
      </Polaroid>
      <div className="highlight-copy">
        <span className="highlight-badge">
          {t("_pages:education.highlight.badge")}
        </span>
        <h2 id="highlight-title">{t("_pages:education.highlight.title")}</h2>
        <p>{t("_pages:education.highlight.body")}</p>
        <p className="highlight-score">
          <span>19.663</span>
          <span>{t("_pages:education.highlight.outOf")}</span>
        </p>
      </div>
    </section>
  );
}
