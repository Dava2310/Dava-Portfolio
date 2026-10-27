import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { Icon, type IconName } from "@/shared/ui/atoms/Icon";

import "./styles.css";

const HONORS = [
  { id: "outstanding", icon: "award" },
  { id: "magna", icon: "cap" },
  { id: "merit", icon: "star" },
  { id: "petrobowl", icon: "trophy" },
] as const satisfies readonly { id: string; icon: IconName }[];

export function Honors() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="honors" aria-labelledby="honors-title">
      <h2 id="honors-title">{t("_pages:education.honors.title")}</h2>
      <ul>
        {HONORS.map(({ id, icon }) => (
          <li key={id}>
            <span className="honor-icon" aria-hidden="true">
              <Icon name={icon} size={24} strokeWidth={1.8} />
            </span>
            <div>
              <h3>{t(`_pages:education.honors.${id}.title`)}</h3>
              <p>
                {t(`_pages:education.honors.${id}.detail`)}
                {id === "petrobowl" ? (
                  <>
                    {" · "}
                    <a href={pageUrl(lang, "petrobowl")}>
                      {t("_pages:education.honors.petrobowl.link")}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
