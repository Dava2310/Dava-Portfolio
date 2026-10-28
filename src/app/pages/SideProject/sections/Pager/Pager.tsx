import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";

import { projectCard } from "../../projectOrder";
import type { SectionProps } from "../props";

import "./styles.css";

export function Pager({ id }: SectionProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const { previous, next } = projectCard.neighbours(id);
  const prevCard = previous ? projectCard.read(t, previous) : undefined;
  const nextCard = next ? projectCard.read(t, next) : undefined;

  return (
    <nav
      className="side-pager"
      aria-label={t("_pages:sideProject.pager.label")}
    >
      {previous && prevCard ? (
        <a className="side-pager-prev" href={pageUrl(lang, previous)}>
          <span>
            <Icon name="arrowLeft" size={16} />
            {t("_pages:sideProject.pager.prev")}
          </span>
          <strong>{prevCard.name}</strong>
          <small>{prevCard.kind}</small>
        </a>
      ) : null}
      <a className="side-pager-next" href={pageUrl(lang, next ?? "projects")}>
        <span>
          {next
            ? t("_pages:sideProject.pager.next")
            : t("_pages:sideProject.pager.all")}
          <Icon name="arrow" size={16} />
        </span>
        <strong>
          {nextCard ? nextCard.name : t("_pages:projects.intro.title")}
        </strong>
        <small>{nextCard ? nextCard.kind : ""}</small>
      </a>
    </nav>
  );
}
