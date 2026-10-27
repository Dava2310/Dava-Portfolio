import { useTranslation } from "@/features/i18n";

import "./styles.css";

const DEGREES = [
  { id: "msc", badge: "outline" },
  { id: "systems", badge: "tint" },
  { id: "informatics", badge: "solid" },
  { id: "tsu", badge: "solid" },
] as const;

export function Degrees() {
  const { t } = useTranslation();

  return (
    <section className="degrees" aria-labelledby="degrees-title">
      <h2 id="degrees-title">{t("_pages:education.degrees.title")}</h2>
      <ol>
        {DEGREES.map(({ id, badge }) => (
          <li key={id}>
            <div className="degree-when">
              <span>{t(`_pages:education.degrees.${id}.year`)}</span>
              <span>{t(`_pages:education.degrees.${id}.period`)}</span>
            </div>
            <div className="degree-what">
              <h3>{t(`_pages:education.degrees.${id}.title`)}</h3>
              <p>{t(`_pages:education.degrees.${id}.school`)}</p>
              <p>{t(`_pages:education.degrees.${id}.detail`)}</p>
            </div>
            <span className="degree-badge" data-variant={badge}>
              {t(`_pages:education.degrees.${id}.badge`)}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
