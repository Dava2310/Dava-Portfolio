import { useTranslation } from "@/features/i18n";

import { NumberedTitle } from "../../components/NumberedTitle";

import "./styles.css";

export function Problem() {
  const { t } = useTranslation();

  return (
    <section
      className="mandioca-problem"
      id="problem"
      aria-labelledby="problem-title"
    >
      <div className="mandioca-problem-title">
        <NumberedTitle
          id="problem-title"
          number="01"
          title={t("_pages:mandioca.problem.title")}
        />
      </div>
      <div className="mandioca-problem-body">
        <p>{t("_pages:mandioca.problem.p1")}</p>
        <p>{t("_pages:mandioca.problem.p2")}</p>
      </div>
    </section>
  );
}
