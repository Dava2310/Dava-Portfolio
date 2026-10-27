import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl, type PageId } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { TagList } from "@/shared/ui/molecules/TagList";

import "./styles.css";

const P = "_pages:experience.jobs";

type Job = {
  id: "toloka" | "mandioca" | "academos";
  current?: boolean;
  bullets: readonly BulletKey[];
  tags: readonly string[];
  photos?: readonly PhotoKey[];
  link?: { page: PageId; label: LinkKey };
};

type BulletKey =
  | `${typeof P}.toloka.bullets.b${1 | 2 | 3 | 4}`
  | `${typeof P}.mandioca.bullets.b${1 | 2 | 3}`
  | `${typeof P}.academos.bullets.b${1 | 2}`;
type PhotoKey = `${typeof P}.academos.photos.${"class" | "crane" | "students"}`;
type LinkKey = `${typeof P}.${"mandioca" | "academos"}.link`;

const JOBS: readonly Job[] = [
  {
    id: "toloka",
    current: true,
    bullets: [
      `${P}.toloka.bullets.b1`,
      `${P}.toloka.bullets.b2`,
      `${P}.toloka.bullets.b3`,
      `${P}.toloka.bullets.b4`,
    ],
    tags: [
      "Python",
      "Bash",
      "Docker",
      "GitHub Actions",
      "MCP",
      "pytest",
      "JSON Schema",
    ],
  },
  {
    id: "mandioca",
    bullets: [
      `${P}.mandioca.bullets.b1`,
      `${P}.mandioca.bullets.b2`,
      `${P}.mandioca.bullets.b3`,
    ],
    tags: ["Next.js", "NestJS", "Prisma", "MySQL", "AWS", "Python"],
    link: { page: "mandioca", label: `${P}.mandioca.link` },
  },
  {
    id: "academos",
    bullets: [`${P}.academos.bullets.b1`, `${P}.academos.bullets.b2`],
    tags: ["Python", "Robotics", "Electronics", "Databases"],
    photos: [
      `${P}.academos.photos.class`,
      `${P}.academos.photos.crane`,
      `${P}.academos.photos.students`,
    ],
    link: { page: "teaching", label: `${P}.academos.link` },
  },
];

export function Timeline() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <ol className="timeline">
      {JOBS.map(({ id, current, bullets, tags, photos, link }) => (
        <li key={id}>
          <div className="timeline-when">
            {current ? (
              <span className="timeline-now">{t("_pages:experience.now")}</span>
            ) : null}
            <span className="timeline-range">
              {t(`_pages:experience.jobs.${id}.range`)}
            </span>
            <span className="timeline-place">
              {t(`_pages:experience.jobs.${id}.place`)}
            </span>
          </div>
          <article className="timeline-job">
            <div className="timeline-heading">
              <h2>{t(`_pages:experience.jobs.${id}.company`)}</h2>
              <p>{t(`_pages:experience.jobs.${id}.role`)}</p>
            </div>
            <ul className="timeline-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{t(bullet)}</li>
              ))}
            </ul>
            {photos ? (
              <div className="timeline-photos">
                {photos.map((photo) => (
                  <ImagePlaceholder key={photo} label={t(photo)} ratio="4/3" />
                ))}
              </div>
            ) : null}
            <div className="timeline-footer">
              <TagList
                label={t("_pages:experience.technologies")}
                tags={tags}
              />
              {link ? (
                <a className="timeline-link" href={pageUrl(lang, link.page)}>
                  {t(link.label)}
                  <Icon name="arrow" />
                </a>
              ) : null}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
