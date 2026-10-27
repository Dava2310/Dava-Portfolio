import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon } from "@/shared/ui/atoms/Icon";
import { Tape } from "@/shared/ui/atoms/Tape";

import "./styles.css";

const SKILLS = ["lead", "teaching", "captain", "writing", "remote"] as const;

export function People() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="people" id="human">
      <div className="people-card">
        <Tape top="-14px" left="56px" rotate={-3} width={110} height={30} />
        <div className="people-languages">
          <h2>{t("_pages:skills.languages.title")}</h2>
          <dl>
            <div>
              <dt>{t("_pages:skills.languages.spanish")}</dt>
              <dd data-style="hand">
                {t("_pages:skills.languages.spanishLevel")}
              </dd>
            </div>
            <div>
              <dt>{t("_pages:skills.languages.english")}</dt>
              <dd>{t("_pages:skills.languages.englishLevel")}</dd>
            </div>
          </dl>
        </div>
        <div className="people-skills">
          <h2>{t("_pages:skills.people.title")}</h2>
          <ul>
            {SKILLS.map((id) => {
              const rest = t(`_pages:skills.people.${id}.rest`);
              return (
                <li key={id}>
                  <Icon name="check" size={20} strokeWidth={2.2} />
                  <span>
                    <strong>{t(`_pages:skills.people.${id}.strong`)}</strong>
                    {rest.startsWith(",") ? "" : " "}
                    {rest}
                    {id === "teaching" ? (
                      <>
                        {" "}
                        <a href={pageUrl(lang, "teaching")}>
                          {t("_pages:skills.people.teaching.link")}
                        </a>
                      </>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
