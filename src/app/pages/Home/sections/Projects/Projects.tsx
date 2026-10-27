import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import type { TapeProps } from "@/shared/ui/atoms/Tape";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { ProjectCard } from "@/shared/ui/molecules/ProjectCard";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const MANDIOCA_TAGS = ["Next.js", "NestJS", "Python", "MySQL", "AWS"];

const SIDE_TAPES: readonly TapeProps[] = [
  { left: "auto", right: "28px", rotate: 3 },
  { left: "40%", rotate: -2 },
];

export function Projects() {
  const { t } = useTranslation();
  const lang = useLang();
  const projectsUrl = pageUrl(lang, "projects");
  const tagsLabel = t("_common:aria.builtWith");
  const readStory = t("_pages:home.projects.readStory");
  const tool = t("_pages:home.projects.side.tool");

  return (
    <section className="home-projects" aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        title={t("_pages:home.projects.title")}
        note={t("_pages:home.projects.note")}
        link={{ href: projectsUrl, label: t("_pages:home.projects.link") }}
      />
      <div className="home-projects-grid">
        <ProjectCard
          media={
            <ImagePlaceholder
              label={t("_pages:home.projects.mandioca.shot")}
              ratio="16/10"
              tone="tint"
            />
          }
          kind={t("_pages:home.projects.mandioca.kind")}
          title={t("_pages:home.projects.mandioca.name")}
          description={t("_pages:home.projects.mandioca.description")}
          tags={MANDIOCA_TAGS}
          tagsLabel={tagsLabel}
          link={{ href: pageUrl(lang, "mandioca"), label: readStory }}
        />
        {SIDE_TAPES.map((tape, index) => (
          <ProjectCard
            key={index}
            media={
              <ImagePlaceholder
                label={t("_pages:home.projects.side.shot")}
                ratio="16/10"
                tone="tint"
              />
            }
            kind={t("_pages:home.projects.side.kind")}
            title={t("_pages:home.projects.side.name")}
            description={t("_pages:home.projects.side.description")}
            tags={[tool, tool, tool]}
            tagsLabel={tagsLabel}
            link={{ href: projectsUrl, label: readStory }}
            tape={tape}
          />
        ))}
      </div>
    </section>
  );
}
