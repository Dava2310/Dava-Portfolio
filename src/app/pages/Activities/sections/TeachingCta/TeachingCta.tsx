import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function TeachingCta() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="teaching-cta" aria-labelledby="teaching-cta-title">
      <div className="teaching-cta-box">
        <div className="teaching-cta-copy">
          <p>{t("_pages:activities.teachingCta.kicker")}</p>
          <h2 id="teaching-cta-title">
            {t("_pages:activities.teachingCta.title")}
          </h2>
        </div>
        <a className="teaching-cta-link" href={pageUrl(lang, "teaching")}>
          {t("_pages:activities.teachingCta.link")}
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
