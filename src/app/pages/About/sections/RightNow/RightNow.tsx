import type { ReactNode } from "react";

import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";

import "./styles.css";

type RowProps = { label: string; children: ReactNode };

function Row({ label, children }: RowProps) {
  return (
    <li>
      <span>{label}</span>
      <span>{children}</span>
    </li>
  );
}

export function RightNow() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="right-now" aria-labelledby="right-now-title">
      <div className="right-now-title">
        <h2 id="right-now-title">{t("_pages:about.rightNow.title")}</h2>
        <span>{t("_pages:about.rightNow.updated")}</span>
      </div>
      <ul>
        <Row label={t("_pages:about.rightNow.working.label")}>
          {t("_pages:about.rightNow.working.before")}
          <a href={pageUrl(lang, "experience")}>
            {t("_pages:about.rightNow.working.link")}
          </a>
          {t("_pages:about.rightNow.working.after")}
        </Row>
        <Row label={t("_pages:about.rightNow.studying.label")}>
          {t("_pages:about.rightNow.studying.before")}
          <a href={pageUrl(lang, "education")}>
            {t("_pages:about.rightNow.studying.link")}
          </a>
          {t("_pages:about.rightNow.studying.after")}
        </Row>
        <Row label={t("_pages:about.rightNow.building.label")}>
          {t("_pages:about.rightNow.building.text")}
        </Row>
        <Row label={t("_pages:about.rightNow.living.label")}>
          {t("_pages:about.rightNow.living.text")}
        </Row>
      </ul>
    </section>
  );
}
