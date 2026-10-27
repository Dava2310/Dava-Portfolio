import { LANGS, type Lang } from "@/lang";

import "./styles.css";

type LangSwitchProps = {
  label: string;
  current: Lang;
  /** Same page in each language. */
  hrefs: Record<Lang, string>;
  names: Record<Lang, string>;
};

/** Plain links to the same page in the other languages; the choice is remembered by i18next. */
export function LangSwitch({ label, current, hrefs, names }: LangSwitchProps) {
  return (
    <nav className="lang-switch" aria-label={label}>
      {LANGS.map((lang) => (
        <a
          key={lang}
          href={hrefs[lang]}
          lang={lang}
          hrefLang={lang}
          aria-current={lang === current ? "true" : undefined}
          title={names[lang]}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
