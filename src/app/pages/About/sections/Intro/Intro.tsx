import portrait from "@/assets/daniel.jpg";
import { useTranslation } from "@/features/i18n";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="about-intro">
      <Polaroid
        className="about-intro-photo"
        caption={t("_pages:about.intro.caption")}
        rotate={-2.5}
        size="lg"
        taped
      >
        <img
          src={portrait}
          alt={t("_pages:about.intro.photoAlt")}
          width={600}
          height={800}
        />
      </Polaroid>
      <div className="about-intro-copy">
        <p className="about-intro-kicker">{t("_pages:about.intro.kicker")}</p>
        <h1>{t("_pages:about.intro.title")}</h1>
        <p>{t("_pages:about.intro.p1")}</p>
        <p>{t("_pages:about.intro.p2")}</p>
        <p>{t("_pages:about.intro.p3")}</p>
      </div>
    </section>
  );
}
