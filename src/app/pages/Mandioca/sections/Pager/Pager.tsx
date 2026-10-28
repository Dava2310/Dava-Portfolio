import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { projectCard } from "@/app/pages/SideProject";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function Pager() {
  const { t } = useTranslation();
  const lang = useLang();
  const projectsUrl = pageUrl(lang, "projects");
  const next = projectCard.read(t, "spira");

  return (
    <nav
      className="mandioca-pager"
      aria-label={t("_pages:mandioca.pager.label")}
    >
      <a className="mandioca-pager-back" href={projectsUrl}>
        <span>
          <Icon name="arrowLeft" size={16} />
          {t("_pages:mandioca.pager.backLabel")}
        </span>
        <strong>{t("_pages:mandioca.pager.back")}</strong>
      </a>
      <a className="mandioca-pager-next" href={pageUrl(lang, "spira")}>
        <span>
          {t("_pages:mandioca.pager.nextLabel")}
          <Icon name="arrow" size={16} />
        </span>
        <strong>{next.name}</strong>
      </a>
    </nav>
  );
}
