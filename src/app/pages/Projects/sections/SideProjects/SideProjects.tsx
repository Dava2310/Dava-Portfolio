import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { SOCIALS } from "@/shared/config/socials";
import { Icon } from "@/shared/ui/atoms/Icon";
import type { TapeProps } from "@/shared/ui/atoms/Tape";
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

const CARDS = [0, 1, 2, 3, 4, 5];

export function SideProjects() {
  const { t } = useTranslation();
  const lang = useLang();
  const tool = t("_pages:projects.side.tool");

  return (
    <section className="side-projects" aria-labelledby="side-projects-title">
      <div className="side-projects-header">
        <h2 id="side-projects-title">{t("_pages:projects.side.title")}</h2>
        <span>{t("_pages:projects.side.note")}</span>
      </div>
      <div className="side-projects-grid">
        {CARDS.map((index) => (
          <ProjectCard
            key={index}
            media={
              <ImagePlaceholder
                label={t("_pages:projects.side.shot")}
                ratio="16/10"
                tone="tint"
              />
            }
            kind={t("_pages:projects.side.kind")}
            title={t("_pages:projects.side.name")}
            description={t("_pages:projects.side.description")}
            tags={[tool, tool, tool]}
            tagsLabel={t("_common:aria.builtWith")}
            link={{
              href: pageUrl(lang, "mandioca"),
              label: t("_pages:projects.side.story"),
            }}
            {...tapeProps(index)}
            actions={
              <>
                <a
                  className="side-projects-action"
                  href={SOCIALS.github}
                  aria-label={t("_pages:projects.side.code")}
                >
                  <Icon name="github" strokeWidth={1.8} />
                </a>
                <a
                  className="side-projects-action"
                  href="#"
                  aria-label={t("_pages:projects.side.demo")}
                >
                  <Icon name="external" strokeWidth={1.8} />
                </a>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}
