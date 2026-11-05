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
};

/** Project card: the whole card, image included, opens the project page. */

export function ProjectCard({
  media,
  kind,
  title,
  description,
  tags,
  tagsLabel,
  link,
  tape,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <Tape {...tape} />
      <div className="project-card-media">{media}</div>
      <div className="project-card-body">
        <span className="project-card-kind">{kind}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList label={tagsLabel} tags={tags} />
        <a className="project-card-link" href={link.href}>
          {link.label}
        </a>
      </div>
    </article>
  );
}
