import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import type { SectionProps } from "../props";

import "./styles.css";

export function Links({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const { live } = data;
  const { noLive } = text.links;

  return (
    <section className="side-links" aria-labelledby="side-links-title">
      <h2 id="side-links-title">{t("_pages:sideProject.links")}</h2>
      <div className="side-links-grid">
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
        <div className="side-links-side">
          {live ? (
            <div className="side-links-card">
              <h3>{t("_pages:sideProject.liveDemo")}</h3>
              <a className="side-link" href={live.url}>
                <Icon name="globe" size={22} strokeWidth={1.8} />
                <span>
                  <strong>{live.display}</strong>
                </span>
                <Icon name="external" size={18} strokeWidth={1.8} />
              </a>
              <p className="side-links-wake">
                <Icon name="clock" size={18} strokeWidth={1.8} />
                <span>{t("_pages:sideProject.wake")}</span>
              </p>
            </div>
          ) : noLive ? (
            <p className="side-links-nolive">
              <Icon name="monitor" size={22} strokeWidth={1.8} />
              <span>{noLive}</span>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
