import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import { MAIN_STACK } from "../../tools";

import "./styles.css";

/** Tape positions alternate so the cards don't look stamped out. */
const TAPES = [
  { left: "24px", rotate: -4 },
  { left: "auto", right: "26px", rotate: 3 },
] as const;

/** The eight tools I reach for first, each with its logo and one line about what I do with it. */
export function MainStack() {
  const { t } = useTranslation();

  return (
    <section
      className="main-stack"
      data-reveal-section
      aria-labelledby="main-stack-title"
    >
      <div className="main-stack-header">
        <h2 id="main-stack-title">{t("_pages:skills.main.title")}</h2>
        <span>{t("_pages:skills.main.note")}</span>
      </div>
      <ul className="main-stack-grid" data-reveal-group>
        {MAIN_STACK.map(({ id, name, icon }, index) => (
          <li key={id} className="main-card">
            <Tape
              top="-12px"
              width={76}
              height={24}
              {...TAPES[index % TAPES.length]}
            />
            <span className="main-card-icon" aria-hidden="true">
              <img src={icon} alt="" width={40} height={40} />
            </span>
            <h3>{name}</h3>
            <p>{t(`_pages:skills.main.items.${id}`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
