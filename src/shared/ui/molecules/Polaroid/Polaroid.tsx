import type { CSSProperties, ReactNode } from "react";

import { Tape } from "@/shared/ui/atoms/Tape";

import "./styles.css";

type PolaroidProps = {
  children: ReactNode;
  caption: string;
  /** Tilt in degrees. */
  rotate?: number;
  /** `lg` is the hero photo, `md` the default snapshot. */
  size?: "md" | "lg";
  /** Adds a strip of tape on top (hero photo style). */
  taped?: boolean;
  /** Turns the whole card into a link. */
  href?: string;
  className?: string;
  style?: CSSProperties;
};

/** Photo card: white border, handwritten caption, slight tilt. */
export function Polaroid({
  children,
  caption,
  rotate = 0,
  size = "md",
  taped = false,
  href,
  className,
  style,
}: PolaroidProps) {
  const shared = {
    className: ["polaroid", className].filter(Boolean).join(" "),
    "data-size": size,
    style: { "--polaroid-rotate": `${rotate}deg`, ...style } as CSSProperties,
  };
  const inner = (
    <>
      {taped ? (
        <Tape top="-14px" left="50%" rotate={2} width={110} height={30} />
      ) : null}
      {children}
      <span className="polaroid-caption">{caption}</span>
    </>
  );
  return href ? (
    <a href={href} {...shared}>
      {inner}
    </a>
  ) : (
    <figure {...shared}>{inner}</figure>
  );
}
