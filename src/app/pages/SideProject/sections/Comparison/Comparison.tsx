import type { SectionProps } from "../props";

import "./styles.css";

export function Comparison({ text }: SectionProps) {
  const comparison = text.comparison;
  if (!comparison) return null;

  return (
    <section
      className="side-comparison"
      aria-labelledby="side-comparison-title"
    >
      <h2 id="side-comparison-title">{comparison.title}</h2>
      <div className="side-comparison-table" role="table">
        <div role="row" data-head>
          <span role="columnheader" />
          <span role="columnheader">{comparison.left}</span>
          <span role="columnheader">{comparison.right}</span>
        </div>
        {comparison.rows.map((row) => (
          <div key={row.topic} role="row">
            <span role="rowheader">{row.topic}</span>
            <span role="cell">{row.left}</span>
            <span role="cell">{row.right}</span>
          </div>
        ))}
      </div>
      <p className="side-comparison-verdict">{comparison.verdict}</p>
    </section>
  );
}
