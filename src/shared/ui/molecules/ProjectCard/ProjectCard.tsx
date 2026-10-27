import type { ReactNode } from "react";

import { Tape, type TapeProps } from "@/shared/ui/atoms/Tape";
import { TagList } from "@/shared/ui/molecules/TagList";

import "./styles.css";

type ProjectCardProps = {
  /** Image or placeholder shown on top. */
  media: ReactNode;
  kind: string;
  title: string;
  description: string;
  tags: readonly string[];
  tagsLabel: string;
  link: { href: string; label: string };
  /** Position and tilt of the tape strip. */
  tape?: TapeProps;
  /** Extra controls (icon links) shown at the right of the link row. */
  actions?: ReactNode;
};

export function ProjectCard({
  media,
  kind,
  title,
  description,
  tags,
  tagsLabel,
  link,
  tape,
  actions,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <Tape {...tape} />
      {media}
      <div className="project-card-body">
        <span className="project-card-kind">{kind}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList label={tagsLabel} tags={tags} />
        {actions ? (
          <div className="project-card-footer">
            <a className="project-card-link" href={link.href}>
              {link.label}
            </a>
            <div className="project-card-actions">{actions}</div>
          </div>
        ) : (
          <a className="project-card-link" href={link.href}>
            {link.label}
          </a>
        )}
      </div>
    </article>
  );
}
