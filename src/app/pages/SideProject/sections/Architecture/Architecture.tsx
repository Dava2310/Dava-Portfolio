import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";
import { Tape } from "@/shared/ui/atoms/Tape";

import { Shot } from "../../components/Shot";
import type { StackLayer } from "../../types";
import type { SectionProps } from "../props";

import "./styles.css";

const STACK_ORDER: readonly StackLayer[] = [
  "frontend",
  "backend",
  "database",
  "auth",
  "infra",
  "testing",
  "tooling",
];

export function Architecture({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const { diagram, layers, layersTitle } = text.architecture;
  const stack = STACK_ORDER.flatMap((layer) => {
    const tools = data.stack[layer];
    return tools ? [{ layer, tools }] : [];
  });

  return (
    <section
      className="side-architecture"
      aria-labelledby="side-architecture-title"
    >
      <h2 id="side-architecture-title">
        {t("_pages:sideProject.architecture")}
      </h2>
      {diagram ? (
        <figure className="side-diagram">
          <Shot
            image={data.diagram}
            label={diagram.label}
            alt={`${diagram.title}: ${diagram.caption}`}
            ratio="2/1"
          />
          <figcaption>
            <span>
              <strong>{diagram.title}</strong> — {diagram.caption}
            </span>
            <span className="side-zoom">
              {t("_pages:sideProject.zoomHint")}
            </span>
          </figcaption>
        </figure>
      ) : null}
      {layers && layers.length > 0 ? (
        <div className="side-layers">
          <Tape top="-12px" left="40px" rotate={-3} width={90} />
          {layersTitle ? <p>{layersTitle}</p> : null}
          <ol>
            {layers.map((layer, index) => (
              <li key={layer.name}>
                <div>
                  <span className="side-layer-name">{layer.name}</span>
                  <span className="side-layer-detail">{layer.detail}</span>
                  {data.layerPaths[index] ? (
                    <code>{data.layerPaths[index]}</code>
                  ) : null}
                </div>
                {index < layers.length - 1 ? (
                  <Icon name="arrowDown" size={20} />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      <div className="side-stack">
        <h3>{t("_pages:sideProject.stack")}</h3>
        <dl>
          <div data-head>
            <dt>{t("_pages:sideProject.layer")}</dt>
            <dd>{t("_pages:sideProject.tools")}</dd>
          </div>
          {stack.map(({ layer, tools }) => (
            <div key={layer}>
              <dt>{t(`_pages:sideProject.layers.${layer}`)}</dt>
              <dd>{tools}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
