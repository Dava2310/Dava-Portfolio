import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function MoreEvents() {
  const { t } = useTranslation();
  const lang = useLang();
  const href = pageUrl(lang, "activities");

  return (
    <nav className="more-events" aria-label={t("_pages:petrobowl.more.label")}>
      <a href={href} data-direction="prev">
        <span>
          <Icon name="arrowLeft" size={16} />
          {t("_pages:petrobowl.more.prev")}
        </span>
        <strong>{t("_pages:petrobowl.more.prevTitle")}</strong>
      </a>
      <a href={href} data-direction="next">
        <span>
          {t("_pages:petrobowl.more.next")}
          <Icon name="arrow" size={16} />
        </span>
        <strong>{t("_pages:petrobowl.more.nextTitle")}</strong>
      </a>
    </nav>
  );
}
