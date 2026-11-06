import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import { TOOLBOX, type Category, type Tool } from "./tools";

import "./styles.css";

/** Tape positions cycle so the cards don't look stamped out. */
const TAPES = [
  { left: "28px", rotate: -3 },
  { left: "auto", right: "32px", rotate: 3 },
  { left: "45%", rotate: -2 },
] as const;

/** Tools grouped by what they're for: one card per group, one tile per tool. */
export function Toolbox() {
  const { t } = useTranslation();
  const toolName = (tool: Tool) =>
    "name" in tool ? tool.name : t(`_pages:skills.tools.${tool.nameKey}`);

  return (
    <div className="toolbox" data-reveal-group>
      {(Object.keys(TOOLBOX) as Category[]).map((category, index) => {
        const tools = TOOLBOX[category];
        return (
          <section
            key={category}
            className="toolbox-card"
            aria-labelledby={`toolbox-${category}`}
          >
            <Tape
              top="-12px"
              width={84}
              height={26}
              {...TAPES[index % TAPES.length]}
            />
            <div className="toolbox-card-header">
              <h2 id={`toolbox-${category}`}>
                {t(`_pages:skills.categories.${category}`)}
              </h2>
              <span>({tools.length})</span>
            </div>
            <ul>
              {tools.map((tool) => (
                <li key={toolName(tool)} data-tier={tool.tier}>
                  <span className="toolbox-dot" aria-hidden="true" />
                  <span className="toolbox-icon" aria-hidden="true">
                    <img src={tool.icon} alt="" width={28} height={28} />
                  </span>
                  <span className="toolbox-name">{toolName(tool)}</span>
                  <span className="toolbox-tier">
                    ({t(`_pages:skills.tiers.${tool.tier}`)})
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
