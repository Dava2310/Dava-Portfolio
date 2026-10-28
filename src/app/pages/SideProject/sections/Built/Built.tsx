import { useTranslation } from "@/features/i18n";

import { Shot } from "../../components/Shot";
import type { SectionProps } from "../props";

import "./styles.css";

export function Built({ text, data }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="side-built" aria-labelledby="side-built-title">
      <h2 id="side-built-title">{t("_pages:sideProject.built")}</h2>
      <div className="side-built-grid">
        {text.features.map((group, index) => (
          <article key={group.title}>
            {group.shot ? (
              <Shot
                image={data.featureShots[index]}
                label={group.shot.label}
                alt={group.shot.caption}
                ratio="16/10"
              />
            ) : null}
            <div className="side-built-body">
              <h3>{group.title}</h3>
              <ul>
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
