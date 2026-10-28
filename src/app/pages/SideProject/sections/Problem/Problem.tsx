import { useTranslation } from "@/features/i18n";

import type { SectionProps } from "../props";

import "./styles.css";

export function Problem({ text }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="side-problem" aria-labelledby="side-problem-title">
      <h2 id="side-problem-title">{t("_pages:sideProject.problem")}</h2>
      <div>
        {text.problem.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
