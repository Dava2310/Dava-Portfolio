import { useTranslation } from "@/features/i18n";
import { SOCIALS } from "@/shared/config/socials";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="experience-intro">
      <div className="experience-intro-copy">
        <p className="experience-intro-kicker">
          {t("_pages:experience.intro.kicker")}
        </p>
        <h1>{t("_pages:experience.intro.title")}</h1>
        <p className="experience-intro-lead">
          {t("_pages:experience.intro.lead")}
        </p>
      </div>
      <a className="experience-intro-resume" href={SOCIALS.resume}>
        <Icon name="download" />
        {t("_common:social.resume")}
      </a>
    </section>
  );
}
