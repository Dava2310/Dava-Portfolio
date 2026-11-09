import { useLang, useTranslation } from "@/features/i18n";
import { LANGS } from "@/lang";
import { pageUrl, parentOf, type PageId } from "@/shared/config/pages";
import { SOCIALS } from "@/shared/config/socials";
import { Icon } from "@/shared/ui/atoms/Icon";
import { LangSwitch } from "@/shared/ui/molecules/LangSwitch";

import "./styles.css";

type HeaderProps = {
  /** Page being shown; its nav link gets `aria-current`. Nested pages mark their parent. */
  current: PageId;
};

const NAV: readonly {
  id: PageId;
  key:
    | "projects"
    | "experience"
    | "education"
    | "teaching"
    | "activities"
    | "skills";
}[] = [
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "education", key: "education" },
  { id: "teaching", key: "teaching" },
  { id: "activities", key: "activities" },
  { id: "skills", key: "skills" },
];

/** Downloads the CV in a new tab. Shown on every page, in the nav on desktop and beside the logo on phones. */
function CvLink({ className }: { className: string }) {
  const { t } = useTranslation();
  return (
    <a
      className={`site-cv ${className}`}
      href={SOCIALS.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="download" />
      {t("_common:social.resume")}
    </a>
  );
}

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
      {/* Phones: the CV button sits beside the logo, because the nav row scrolls sideways. */}
      <CvLink className="site-cv-top" />
      <nav className="site-nav" aria-label={t("_common:nav.label")}>
        {NAV.map(({ id, key }) => (
          <a
            key={id}
            href={pageUrl(lang, id)}
            aria-current={
              current === id
                ? "page"
                : parentOf(current) === id
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
        <CvLink className="site-cv-nav" />
        <a className="site-cta" href={`${pageUrl(lang, "home")}#contact`}>
          {t("_common:nav.cta")}
        </a>
      </nav>
    </header>
  );
}
