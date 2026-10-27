import { useTranslation } from "@/features/i18n";
import components from "@/assets/mandioca-system/component-diagram.png";
import intake from "@/assets/mandioca-system/datamodel-arrime.png";
import deployment from "@/assets/mandioca-system/deployment-diagram.png";
import { ZoomableImage } from "@/shared/ui/molecules/ZoomableImage";

import { NumberedTitle } from "../../components/NumberedTitle";

import "./styles.css";

const LAYERS = [
  "frontend",
  "api",
  "database",
  "hosting",
  "scale",
  "notifications",
] as const;

const DIAGRAMS = {
  deployment: { image: deployment, size: [542, 387] },
  components: { image: components, size: [544, 395] },
  intake: { image: intake, size: [727, 530] },
} as const;

type DiagramId = keyof typeof DIAGRAMS;

export function Architecture() {
  const { t } = useTranslation();

  const diagram = (id: DiagramId) => {
    const { image, size } = DIAGRAMS[id];
    const alt = t(`_pages:mandioca.architecture.${id}.alt`);
    return (
      <ZoomableImage
        src={image}
        alt={alt}
        width={size[0]}
        height={size[1]}
        zoomLabel={`${t("_common:aria.zoomIn")}: ${alt}`}
        closeLabel={t("_common:aria.close")}
      />
    );
  };

  return (
    <section
      className="mandioca-architecture"
      id="architecture"
      aria-labelledby="architecture-title"
    >
      <div className="mandioca-architecture-header">
        <NumberedTitle
          id="architecture-title"
          number="03"
          title={t("_pages:mandioca.architecture.title")}
        />
        <p>{t("_pages:mandioca.architecture.lead")}</p>
      </div>
      <div className="mandioca-diagrams">
        <figure className="mandioca-diagram-main">
          {diagram("deployment")}
          <figcaption>
            <span>
              <strong>
                {t("_pages:mandioca.architecture.deployment.name")}
              </strong>{" "}
              — {t("_pages:mandioca.architecture.deployment.caption")}
            </span>
            <span className="mandioca-zoom">
              {t("_pages:mandioca.architecture.zoom")}
            </span>
          </figcaption>
        </figure>
        <div className="mandioca-diagram-side">
          <figure data-tilt="right">
            {diagram("intake")}
            <figcaption>
              <strong>{t("_pages:mandioca.architecture.intake.name")}</strong> —{" "}
              {t("_pages:mandioca.architecture.intake.caption")}
              <span className="mandioca-zoom">
                {t("_pages:mandioca.architecture.zoom")}
              </span>
            </figcaption>
          </figure>
          <figure data-tilt="left">
            {diagram("components")}
            <figcaption>
              <strong>
                {t("_pages:mandioca.architecture.components.name")}
              </strong>{" "}
              — {t("_pages:mandioca.architecture.components.caption")}
              <span className="mandioca-zoom">
                {t("_pages:mandioca.architecture.zoom")}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="mandioca-stack">
        <table>
          <caption>{t("_pages:mandioca.architecture.stack.title")}</caption>
          <thead>
            <tr>
              <th scope="col">
                {t("_pages:mandioca.architecture.stack.layer")}
              </th>
              <th scope="col">
                {t("_pages:mandioca.architecture.stack.tools")}
              </th>
            </tr>
          </thead>
          <tbody>
            {LAYERS.map((layer) => (
              <tr key={layer}>
                <th scope="row">
                  {t(`_pages:mandioca.architecture.stack.${layer}.name`)}
                </th>
                <td>
                  {t(`_pages:mandioca.architecture.stack.${layer}.tools`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
