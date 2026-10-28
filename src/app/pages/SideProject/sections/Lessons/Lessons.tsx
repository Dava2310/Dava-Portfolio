import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import type { SectionProps } from "../props";

import "./styles.css";

export function Lessons({ text }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="side-lessons" aria-labelledby="side-lessons-title">
      <div>
        <Tape top="-14px" left="50%" rotate={2} width={120} height={30} />
        <h2 id="side-lessons-title">{t("_pages:sideProject.lessons")}</h2>
        <ol>
          {text.lessons.map((lesson, index) => (
            <li key={lesson}>
              <span aria-hidden="true">{index + 1}</span>
              <span>{lesson}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
