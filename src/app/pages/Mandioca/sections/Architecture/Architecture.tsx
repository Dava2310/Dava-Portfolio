import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

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

type DiagramProps = {
  label: string;
  size?: "lg" | "sm";
};

function DiagramPlaceholder({ label, size = "sm" }: DiagramProps) {
  return (
    <span className="diagram-placeholder" data-size={size}>
      <Icon name="diagram" size={size === "lg" ? 30 : 24} strokeWidth={1.5} />
      <span>{label}</span>
    </span>
  );
}

export function Architecture() {
  const { t } = useTranslation();

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
          <DiagramPlaceholder
            size="lg"
            label={t("_pages:mandioca.architecture.deployment.shot")}
          />
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
            <DiagramPlaceholder
              label={t("_pages:mandioca.architecture.domain.shot")}
            />
            <figcaption>
              <strong>{t("_pages:mandioca.architecture.domain.name")}</strong> —{" "}
              {t("_pages:mandioca.architecture.domain.caption")}
            </figcaption>
          </figure>
          <figure data-tilt="left">
            <DiagramPlaceholder
              label={t("_pages:mandioca.architecture.sequence.shot")}
            />
            <figcaption>
              <strong>{t("_pages:mandioca.architecture.sequence.name")}</strong>{" "}
              — {t("_pages:mandioca.architecture.sequence.caption")}
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
