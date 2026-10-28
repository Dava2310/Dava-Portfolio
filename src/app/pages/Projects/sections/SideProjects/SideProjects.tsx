import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import type { TapeProps } from "@/shared/ui/atoms/Tape";
import { SIDE_PROJECT_IDS, SIDE_PROJECTS } from "@/app/pages/SideProject";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { ProjectCard } from "@/shared/ui/molecules/ProjectCard";

import "./styles.css";

const TAPES: readonly TapeProps[] = [
  { left: "24px", rotate: -4 },
  { left: "auto", right: "28px", rotate: 3 },
  { left: "40%", rotate: -2 },
];

const tapeProps = (index: number) => {
  const tape = TAPES[index % TAPES.length];
  return tape ? { tape } : {};
};

export function SideProjects() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="side-projects" aria-labelledby="side-projects-title">
      <div className="side-projects-header">
        <h2 id="side-projects-title">{t("_pages:projects.side.title")}</h2>
        <span>{t("_pages:projects.side.note")}</span>
      </div>
      <div className="side-projects-grid">
        {SIDE_PROJECT_IDS.map((id, index) => {
          const text = t(`_pages:${id}`, { returnObjects: true });
          const data = SIDE_PROJECTS[id];
          const repo = data.repos.find((r) => r.url && !r.private);
          return (
            <ProjectCard
              key={id}
              media={
                <ImagePlaceholder
                  label={text.hero.label}
                  ratio="16/10"
                  tone="tint"
                />
              }
              kind={text.kind}
              title={text.name}
              description={text.oneLiner}
              tags={data.tags.slice(0, 5)}
              tagsLabel={t("_common:aria.builtWith")}
              link={{
                href: pageUrl(lang, id),
                label: t("_pages:projects.side.story"),
              }}
              {...tapeProps(index)}
              actions={
                <>
                  {repo?.url ? (
                    <a
                      className="side-projects-action"
                      href={repo.url}
                      aria-label={t("_pages:projects.side.code")}
                    >
                      <Icon name="github" strokeWidth={1.8} />
                    </a>
                  ) : null}
                  {data.live ? (
                    <a
                      className="side-projects-action"
                      href={data.live.url}
                      aria-label={t("_pages:projects.side.demo")}
                    >
                      <Icon name="external" strokeWidth={1.8} />
                    </a>
                  ) : null}
                </>
              }
            />
          );
        })}
      </div>
    </section>
  );
}
