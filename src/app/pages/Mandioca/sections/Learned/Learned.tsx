import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import "./styles.css";

export function Learned() {
  const { t } = useTranslation();

  return (
    <section
      className="mandioca-learned"
      id="learned"
      aria-labelledby="learned-title"
    >
      <div className="mandioca-learned-note">
        <Tape top="-14px" left="50%" rotate={2} width={120} height={30} />
        <span aria-hidden="true">05</span>
        <h2 id="learned-title">{t("_pages:mandioca.learned.title")}</h2>
        <p>{t("_pages:mandioca.learned.body")}</p>
      </div>
    </section>
  );
}
