import landing from "@/assets/mandioca-system/mandioca-landing.png";
import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { Tape } from "@/shared/ui/atoms/Tape";
import { TagList } from "@/shared/ui/molecules/TagList";

import "./styles.css";

const TAGS = [
  "Next.js",
  "NestJS",
  "Prisma",
  "MySQL",
  "Python",
  "AWS",
  "Telegram API",
];

const STATS = [
  { id: "speed", value: "60%" },
  { id: "uptime", value: "99.9%" },
  { id: "support", value: "75%" },
] as const;

export function Featured() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <article className="featured">
      <Tape top="-14px" left="48px" rotate={-3} width={110} height={30} />
      <div className="featured-media">
        <img
          src={landing}
          alt={t("_pages:projects.featured.alt")}
          width={1920}
          height={1080}
        />
      </div>
      <div className="featured-body">
        <span className="featured-badge">
          {t("_pages:projects.featured.badge")}
        </span>
        <h2>{t("_pages:projects.featured.title")}</h2>
        <p>{t("_pages:projects.featured.description")}</p>
        <dl className="featured-stats">
          {STATS.map(({ id, value }) => (
            <div key={id}>
              <dt>{value}</dt>
              <dd>{t(`_pages:projects.featured.stats.${id}`)}</dd>
            </div>
          ))}
        </dl>
        <TagList label={t("_common:aria.builtWith")} tags={TAGS} />
        <a className="featured-cta" href={pageUrl(lang, "mandioca")}>
          {t("_pages:projects.featured.cta")}
          <Icon name="arrow" />
        </a>
      </div>
    </article>
  );
}
