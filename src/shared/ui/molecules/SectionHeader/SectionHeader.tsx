import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

type SectionHeaderProps = {
  id?: string;
  title: string;
  /** Handwritten note beside the title. */
  note?: string;
  link?: { href: string; label: string };
};

export function SectionHeader({ id, title, note, link }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header-main">
        <h2 id={id}>{title}</h2>
        {note ? <span>{note}</span> : null}
      </div>
      {link ? (
        <a className="section-header-link" href={link.href}>
          {link.label}
          <Icon name="arrow" />
        </a>
      ) : null}
    </div>
  );
}
