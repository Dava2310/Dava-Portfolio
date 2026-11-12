import { useTranslation } from "@/features/i18n";

import { TOOLBOX, useToolName, type ToolboxCategory } from "../../tools";

import "./styles.css";

/** Everything outside the main stack, one row per group. */
export function Toolbox() {
  const { t } = useTranslation();
  const toolName = useToolName();

  return (
    <section
      className="toolbox"
      data-reveal-section
      aria-labelledby="toolbox-title"
    >
      <div className="toolbox-header">
        <h2 id="toolbox-title">{t("_pages:skills.toolbox.title")}</h2>
        <span>{t("_pages:skills.toolbox.note")}</span>
      </div>
      <div className="toolbox-panel" data-reveal>
        {(Object.keys(TOOLBOX) as ToolboxCategory[]).map((category) => (
          <div key={category} className="toolbox-row">
            <h3>{t(`_pages:skills.categories.${category}`)}</h3>
            <ul>
              {TOOLBOX[category].map((tool) => (
                <li key={toolName(tool)}>
                  <span className="toolbox-icon" aria-hidden="true">
                    <img src={tool.icon} alt="" width={22} height={22} />
                  </span>
                  <span>{toolName(tool)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
