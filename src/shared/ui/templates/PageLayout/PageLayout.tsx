import type { ReactNode } from "react";

import { useTranslation } from "@/features/i18n";
import type { PageId } from "@/shared/config/pages";
import {
  SectionDots,
  type SectionDot,
} from "@/shared/ui/molecules/SectionDots";
import { ToTop } from "@/shared/ui/molecules/ToTop";
import { Footer } from "@/shared/ui/templates/Footer";
import { Header } from "@/shared/ui/templates/Header";

import "./styles.css";

type PageLayoutProps = {
  page: PageId;
  /** Sections of the page: when given, a dot rail at the right edge follows the reading position. */
  sections?: readonly SectionDot[];
  children: ReactNode;
};

/** Shared frame: skip link, header, centered 1200px column, footer. Page content goes in `children`. */
export function PageLayout({ page, sections, children }: PageLayoutProps) {
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
      {sections && sections.length > 1 ? (
        <SectionDots label={t("_common:aria.sections")} items={sections} />
      ) : null}
      <ToTop label={t("_common:aria.toTop")} />
    </div>
  );
}
