import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";

import "./styles.css";

const PROJECTS = ["crane", "sensor", "door"] as const;

export function Built() {
  const { t } = useTranslation();

  return (
    <section className="built" aria-labelledby="built-title">
      <div className="built-head">
        <h2 id="built-title">{t("_pages:teaching.built.title")}</h2>
        <span>{t("_pages:teaching.built.note")}</span>
      </div>
      <div className="built-grid">
        {PROJECTS.map((key) => (
          <figure key={key}>
            <ImagePlaceholder
              label={t(`_pages:teaching.built.${key}.photo`)}
              ratio="1/1"
            />
            <figcaption>
              <span>{t(`_pages:teaching.built.${key}.name`)}</span>
              <span>{t(`_pages:teaching.built.${key}.description`)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
