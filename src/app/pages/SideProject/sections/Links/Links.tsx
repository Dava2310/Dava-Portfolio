import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import type { SectionProps } from "../props";

import "./styles.css";

export function Links({ data }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section
      data-reveal-section
      id="links"
      className="side-links"
      aria-labelledby="side-links-title"
    >
      <h2 id="side-links-title">{t("_pages:sideProject.links")}</h2>
      <div className="side-links-grid" data-reveal-group>
        <div className="side-links-card">
          <h3>{t("_pages:sideProject.repos")}</h3>
          {data.repos.map((repo) =>
            repo.private || !repo.url ? (
              <div key={repo.label} className="side-link" data-private="true">
                <Icon name="lock" size={22} strokeWidth={1.8} />
                <span>
                  <strong>{repo.label}</strong>
                  <em>{t("_pages:sideProject.privateRepo")}</em>
                </span>
              </div>
            ) : (
              <a key={repo.label} className="side-link" href={repo.url}>
                <Icon name="github" size={22} strokeWidth={1.8} />
                <span>
                  <strong>{repo.label}</strong>
                  <small>{repo.url.replace("https://", "")}</small>
                </span>
                <Icon name="external" size={18} strokeWidth={1.8} />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
