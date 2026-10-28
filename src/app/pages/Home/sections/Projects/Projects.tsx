import landing from "@/assets/mandioca-system/mandioca-landing.png";
import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import type { TapeProps } from "@/shared/ui/atoms/Tape";
import { SIDE_PROJECTS, type SideProjectId } from "@/app/pages/SideProject";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { ProjectCard } from "@/shared/ui/molecules/ProjectCard";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const MANDIOCA_TAGS = ["Next.js", "NestJS", "Python", "MySQL", "AWS"];

const SIDE_CARDS = [
  { id: "spira", tape: { left: "auto", right: "28px", rotate: 3 } },
  { id: "itassets", tape: { left: "40%", rotate: -2 } },
] as const satisfies readonly { id: SideProjectId; tape: TapeProps }[];

export function Projects() {
  const { t } = useTranslation();
  const lang = useLang();
  const projectsUrl = pageUrl(lang, "projects");
  const tagsLabel = t("_common:aria.builtWith");
  const readStory = t("_pages:home.projects.readStory");

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
            <img
              className="home-projects-shot"
              src={landing}
              alt={t("_pages:home.projects.mandioca.alt")}
              width={1920}
              height={1080}
            />
          }
          kind={t("_pages:home.projects.mandioca.kind")}
          title={t("_pages:home.projects.mandioca.name")}
          description={t("_pages:home.projects.mandioca.description")}
          tags={MANDIOCA_TAGS}
          tagsLabel={tagsLabel}
          link={{ href: pageUrl(lang, "mandioca"), label: readStory }}
        />
        {SIDE_CARDS.map(({ id, tape }) => {
          const text = t(`_pages:${id}`, { returnObjects: true });
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
              tags={SIDE_PROJECTS[id].tags.slice(0, 5)}
              tagsLabel={tagsLabel}
              link={{ href: pageUrl(lang, id), label: readStory }}
              tape={tape}
            />
          );
        })}
      </div>
    </section>
  );
}
