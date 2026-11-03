import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import { Shot } from "../../components/Shot";
import type { SectionProps } from "../props";

import "./styles.css";

export function Built({ text, data }: SectionProps) {
  const { t } = useTranslation();
  /** A project with one feature group shows it as a single large card of checked bullets. */
  const single = text.features.length === 1 ? text.features[0] : undefined;

  return (
    <section
      id="built"
      className="side-built"
      aria-labelledby="side-built-title"
    >
      <h2 id="side-built-title">{t("_pages:sideProject.built")}</h2>
      {single ? (
        <article className="side-built-checks">
          {single.title ? <h3>{single.title}</h3> : null}
          <ul>
            {single.bullets.map((bullet) => (
              <li key={bullet}>
                <span aria-hidden="true">
                  <Icon name="check" size={18} strokeWidth={2.6} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ) : (
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
      )}
    </section>
  );
}
