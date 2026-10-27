import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl, type PageId } from "@/shared/config/pages";
import { LANGS } from "@/lang";
import { LangSwitch } from "@/shared/ui/molecules/LangSwitch";

import "./styles.css";

type HeaderProps = {
  /** Page being shown; its nav link gets `aria-current`. Nested pages mark their parent. */
  current: PageId;
};

const NAV: readonly {
  id: PageId;
  key:
    | "about"
    | "projects"
    | "experience"
    | "education"
    | "teaching"
    | "activities"
    | "skills";
  parentOf?: PageId;
}[] = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects", parentOf: "mandioca" },
  { id: "experience", key: "experience" },
  { id: "education", key: "education" },
  { id: "teaching", key: "teaching" },
  { id: "activities", key: "activities", parentOf: "petrobowl" },
  { id: "skills", key: "skills" },
];

export function Header({ current }: HeaderProps) {
  const { t } = useTranslation();
  const lang = useLang();

  const hrefs = Object.fromEntries(
    LANGS.map((l) => [l, pageUrl(l, current)]),
  ) as Record<(typeof LANGS)[number], string>;
  const names = {
    en: t("_common:lang.en"),
    es: t("_common:lang.es"),
  };

  return (
    <header className="site-header">
      <a
        className="site-logo"
        href={pageUrl(lang, "home")}
        aria-current={current === "home" ? "page" : undefined}
      >
        daniel<span>.</span>v
      </a>
      <nav className="site-nav" aria-label={t("_common:nav.label")}>
        {NAV.map(({ id, key, parentOf }) => (
          <a
            key={id}
            href={pageUrl(lang, id)}
            aria-current={
              current === id
                ? "page"
                : current === parentOf
                  ? "true"
                  : undefined
            }
          >
            {t(`_common:nav.${key}`)}
          </a>
        ))}
        <LangSwitch
          label={t("_common:lang.label")}
          current={lang}
          hrefs={hrefs}
          names={names}
        />
        <a className="site-cta" href={`${pageUrl(lang, "home")}#contact`}>
          {t("_common:nav.cta")}
        </a>
      </nav>
    </header>
  );
}
