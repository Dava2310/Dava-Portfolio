import "./styles.css";

type NumberedTitleProps = {
  id: string;
  /** Section number shown above the title, e.g. `01`. */
  number: string;
  title: string;
};

/** Case-study section heading: small accent number over a big title. */
export function NumberedTitle({ id, number, title }: NumberedTitleProps) {
  return (
    <div className="numbered-title">
      <span aria-hidden="true">{number}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
