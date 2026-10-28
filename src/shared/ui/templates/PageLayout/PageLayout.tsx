import type { ReactNode } from "react";

import { useTranslation } from "@/features/i18n";
import type { PageId } from "@/shared/config/pages";
import { ToTop } from "@/shared/ui/molecules/ToTop";
import { Footer } from "@/shared/ui/templates/Footer";
import { Header } from "@/shared/ui/templates/Header";

import "./styles.css";

type PageLayoutProps = {
  page: PageId;
  children: ReactNode;
};

/** Shared frame: skip link, header, centered 1200px column, footer. Page content goes in `children`. */
export function PageLayout({ page, children }: PageLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="page" id="top">
      <div className="page-column">
        <a className="skip-link" href="#main">
          {t("_common:skipToContent")}
        </a>
        <Header current={page} />
        <main id="main">{children}</main>
        <Footer />
      </div>
      <ToTop label={t("_common:aria.toTop")} />
    </div>
  );
}
