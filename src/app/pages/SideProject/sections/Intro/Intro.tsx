import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { Tape } from "@/shared/ui/atoms/Tape";
import { TagList } from "@/shared/ui/molecules/TagList";

import type { SectionProps } from "../props";

import "./styles.css";

const FACT_ORDER = [
  "role",
  "context",
  "period",
  "team",
  "status",
  "effort",
  "outcome",
] as const;

export function Intro({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const publicRepos = data.repos.filter((repo) => repo.url && !repo.private);

  return (
    <>
      <div className="side-back">
        <a href={pageUrl(lang, "projects")}>
          <Icon name="arrowLeft" />
          {t("_pages:sideProject.back")}
        </a>
        <span aria-hidden="true">/</span>
        <span className="side-back-kind">{text.kind}</span>
      </div>
      <section className="side-intro">
        <div className="side-intro-copy" data-intro-group>
          <p className="side-intro-kicker">{text.kicker}</p>
          <h1>{text.name}</h1>
          <p className="side-intro-lead">{text.oneLiner}</p>
          <TagList label={t("_pages:sideProject.tags")} tags={data.tags} />
          {publicRepos.length > 0 ? (
            <div className="side-intro-chips">
              {publicRepos.map((repo) => (
                <a key={repo.label} className="side-chip" href={repo.url}>
                  <Icon name="github" strokeWidth={1.8} />
                  {repo.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <dl className="side-facts" data-intro>
          <Tape top="-12px" left="auto" right="36px" rotate={4} />
          {FACT_ORDER.map((key) => {
            const value = text.facts[key];
            return value ? (
              <div key={key}>
                <dt>{t(`_pages:sideProject.facts.${key}`)}</dt>
                <dd>{value}</dd>
              </div>
            ) : null;
          })}
        </dl>
      </section>
    </>
  );
}
