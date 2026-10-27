import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

const FACTS = ["role", "where", "company", "timeline"] as const;
const SECTIONS = [
  "problem",
  "built",
  "architecture",
  "decisions",
  "learned",
] as const;

export function Intro() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <a className="mandioca-back" href={pageUrl(lang, "projects")}>
        <Icon name="arrowLeft" />
        {t("_pages:mandioca.back")}
      </a>
      <section className="mandioca-intro">
        <div className="mandioca-intro-copy">
          <span className="mandioca-intro-kind">
            {t("_pages:mandioca.kind")}
          </span>
          <h1>{t("_pages:mandioca.title")}</h1>
          <p>{t("_pages:mandioca.lead")}</p>
        </div>
        <dl className="mandioca-facts">
          {FACTS.map((fact) => (
            <div key={fact}>
              <dt>{t(`_pages:mandioca.facts.${fact}.label`)}</dt>
              <dd>{t(`_pages:mandioca.facts.${fact}.value`)}</dd>
            </div>
          ))}
        </dl>
      </section>
      <nav
        className="mandioca-jump"
        aria-label={t("_pages:mandioca.jump.label")}
      >
        <span>{t("_pages:mandioca.jump.intro")}</span>
        {SECTIONS.map((id) => (
          <a key={id} href={`#${id}`}>
            {t(`_pages:mandioca.jump.${id}`)}
          </a>
        ))}
      </nav>
    </>
  );
}
