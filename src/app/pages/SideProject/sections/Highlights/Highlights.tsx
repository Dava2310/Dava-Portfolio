import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";

import type { SectionProps } from "../props";

import "./styles.css";

const TOP = 3;
const rank = (index: number) => String(index + 1).padStart(2, "0");

type EvidenceProps = { label: string; items: readonly string[] };

function Evidence({ label, items }: EvidenceProps) {
  return (
    <ul aria-label={label} className="side-evidence">
      {items.map((item) => (
        <li key={item}>
          <code>{item}</code>
        </li>
      ))}
    </ul>
  );
}

export function Highlights({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const top = text.highlights.slice(0, TOP);
  const rest = text.highlights.slice(TOP);
  const evidenceLabel = t("_pages:sideProject.evidence");

  return (
    <section
      className="side-highlights"
      aria-labelledby="side-highlights-title"
    >
      <div className="side-highlights-header">
        <h2 id="side-highlights-title">{t("_pages:sideProject.highlights")}</h2>
        <span>({t("_pages:sideProject.highlightsNote")})</span>
      </div>
      <ol className="side-highlights-top">
        {top.map((item, index) => (
          <li key={item.title}>
            <Tape top="-12px" left="26px" rotate={-3} />
            <span className="side-rank">{rank(index)}</span>
            <h3>{item.title}</h3>
            <div>
              <p className="side-label">{t("_pages:sideProject.what")}</p>
              <p>{item.what}</p>
            </div>
            <div>
              <p className="side-label">{t("_pages:sideProject.why")}</p>
              <p>{item.why}</p>
            </div>
            <div className="side-highlights-evidence">
              <p className="side-label">{evidenceLabel}</p>
              <Evidence
                label={evidenceLabel}
                items={data.evidence[index] ?? []}
              />
            </div>
          </li>
        ))}
      </ol>
      {rest.length > 0 ? (
        <ol className="side-highlights-rest">
          {rest.map((item, index) => (
            <li key={item.title}>
              <span className="side-rank">{rank(index + TOP)}</span>
              <div className="side-highlights-rest-main">
                <h3>{item.title}</h3>
                <Evidence
                  label={evidenceLabel}
                  items={data.evidence[index + TOP] ?? []}
                />
              </div>
              <div>
                <p className="side-label">{t("_pages:sideProject.what")}</p>
                <p>{item.what}</p>
              </div>
              <div>
                <p className="side-label">{t("_pages:sideProject.why")}</p>
                <p>{item.why}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
