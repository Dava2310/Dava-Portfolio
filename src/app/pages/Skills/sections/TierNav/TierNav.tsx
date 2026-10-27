import { useTranslation } from "@/features/i18n";

import "./styles.css";

const LINKS = ["daily", "comfortable", "learning", "human"] as const;

export function TierNav() {
  const { t } = useTranslation();

  return (
    <nav className="tier-nav" aria-label={t("_pages:skills.nav.label")}>
      {LINKS.map((id) => (
        <a key={id} href={`#${id}`}>
          {t(`_pages:skills.nav.${id}`)}
        </a>
      ))}
    </nav>
  );
}
