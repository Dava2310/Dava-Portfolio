import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p className="site-footer-note">{t("_common:footer.madeWith")}</p>
      <p className="site-footer-rights">{t("_common:footer.rights")}</p>
    </footer>
  );
}
