import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import "./styles.css";

export function Quote() {
  const { t } = useTranslation();

  return (
    <section className="teaching-quote">
      <figure>
        <Tape top="-14px" left="50%" rotate={-2} width={120} height={30} />
        <blockquote>{t("_pages:teaching.quote.text")}</blockquote>
        <figcaption>{t("_pages:teaching.quote.author")}</figcaption>
      </figure>
    </section>
  );
}
