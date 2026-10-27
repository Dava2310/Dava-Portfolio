import "./styles.css";

type TagListProps = {
  /** Accessible name for the list, e.g. "Built with". */
  label: string;
  tags: readonly string[];
};

export function TagList({ label, tags }: TagListProps) {
  return (
    <ul className="tag-list" aria-label={label}>
      {tags.map((tag, index) => (
        <li key={`${tag}-${index}`}>{tag}</li>
      ))}
    </ul>
  );
}
