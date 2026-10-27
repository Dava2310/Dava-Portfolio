import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function Cta() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="experience-cta" aria-labelledby="experience-cta-title">
      <div>
        <p className="experience-cta-kicker">
          {t("_pages:experience.cta.kicker")}
        </p>
        <h2 id="experience-cta-title">{t("_pages:experience.cta.title")}</h2>
      </div>
      <a
        className="experience-cta-link"
        href={`${pageUrl(lang, "home")}#contact`}
      >
        {t("_pages:experience.cta.link")}
        <Icon name="arrow" />
      </a>
    </section>
  );
}
