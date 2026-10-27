import portrait from "@/assets/daniel.jpg";
import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";
import { SocialLinks } from "@/shared/ui/molecules/SocialLinks";

import "./styles.css";

export function Hero() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">{t("_pages:home.hero.kicker")}</p>
        <h1>
          {t("_pages:home.hero.titleStart")}
          <span className="hero-highlight">
            {t("_pages:home.hero.titleHighlight")}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M4 13 C 70 4, 160 3, 296 9"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
          {t("_pages:home.hero.titleEnd")}
        </h1>
        <p className="hero-lead">{t("_pages:home.hero.lead")}</p>
        <div className="hero-actions">
          <a className="hero-cta" href={pageUrl(lang, "projects")}>
            {t("_pages:home.hero.cta")}
            <Icon name="arrow" />
          </a>
          <SocialLinks
            items={["github", "linkedin", "email", "resume"]}
            labels={{
              github: t("_common:social.github"),
              linkedin: t("_common:social.linkedin"),
              email: t("_common:social.email"),
              resume: t("_common:social.resume"),
            }}
          />
        </div>
      </div>
      <div className="hero-photos">
        <Polaroid
          className="hero-photo-team"
          caption={t("_pages:home.hero.teamCaption")}
          rotate={6}
        >
          <ImagePlaceholder
            label={t("_pages:home.hero.teamPhoto")}
            ratio="4/5"
          />
        </Polaroid>
        <Polaroid
          className="hero-photo-me"
          caption={t("_pages:home.hero.photoCaption")}
          rotate={-3}
          size="lg"
          taped
        >
          <img
            src={portrait}
            alt={t("_pages:home.hero.photoAlt")}
            width={600}
            height={800}
          />
        </Polaroid>
      </div>
    </section>
  );
}
