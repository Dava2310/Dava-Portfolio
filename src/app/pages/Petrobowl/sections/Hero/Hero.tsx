import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";

import "./styles.css";

export function Hero() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <a className="event-back" href={pageUrl(lang, "activities")}>
        <Icon name="arrowLeft" />
        {t("_pages:petrobowl.back")}
      </a>
      <section className="event-hero">
        <div className="event-hero-copy">
          <span className="event-hero-meta">
            {t("_pages:petrobowl.hero.meta")}
          </span>
          <h1>{t("_pages:petrobowl.hero.title")}</h1>
          <p className="event-hero-kicker">
            {t("_pages:petrobowl.hero.kicker")}
          </p>
          <p className="event-hero-lead">{t("_pages:petrobowl.hero.lead")}</p>
        </div>
        <Polaroid
          className="event-hero-photo"
          size="lg"
          taped
          rotate={2}
          caption={t("_pages:petrobowl.hero.caption")}
        >
          <ImagePlaceholder
            label={t("_pages:petrobowl.hero.photo")}
            ratio="4/3"
          />
        </Polaroid>
      </section>
    </>
  );
}
