import { useTranslation } from "@/features/i18n";

import type { SectionProps } from "../props";

import "./styles.css";

export function Numbers({ text, data }: SectionProps) {
  const { t } = useTranslation();
  if (text.numbers.length === 0) return null;

  return (
    <section
      className="side-numbers"
      aria-label={t("_pages:sideProject.keyNumbers")}
    >
      <dl>
        {text.numbers.map(({ label }, index) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{data.numbers[index]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
