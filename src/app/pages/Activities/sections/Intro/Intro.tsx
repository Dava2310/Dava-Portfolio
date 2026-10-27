import { useTranslation } from "@/features/i18n";

import "./styles.css";

export function Intro() {
  const { t } = useTranslation();

  return (
    <section className="activities-intro">
      <p className="activities-intro-kicker">
        {t("_pages:activities.intro.kicker")}
      </p>
      <h1>{t("_pages:activities.intro.title")}</h1>
      <p className="activities-intro-lead">
        {t("_pages:activities.intro.lead")}
      </p>
    </section>
  );
}
