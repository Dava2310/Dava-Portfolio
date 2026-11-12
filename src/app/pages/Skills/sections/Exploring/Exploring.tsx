import { useTranslation } from "@/features/i18n";

import { EXPLORING, useToolName } from "../../tools";

import "./styles.css";

/** Tools I'm learning now, during my MSc. */
export function Exploring() {
  const { t } = useTranslation();
  const toolName = useToolName();

  return (
    <section
      className="exploring"
      data-reveal-section
      aria-labelledby="exploring-title"
    >
      <div className="exploring-box" data-reveal>
        <div className="exploring-title">
          <h2 id="exploring-title">{t("_pages:skills.exploring.title")}</h2>
          <span>{t("_pages:skills.exploring.note")}</span>
        </div>
        <ul>
          {EXPLORING.map((tool) => (
            <li key={toolName(tool)}>
              <span className="exploring-icon" aria-hidden="true">
                <img src={tool.icon} alt="" width={18} height={18} />
              </span>
              {toolName(tool)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
