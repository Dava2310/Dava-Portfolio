import type { MouseEvent } from "react";

import "./styles.css";

type ZoomHintProps = {
  label: string;
  className?: string;
};

const openZoom = (event: MouseEvent<HTMLButtonElement>) => {
  event.currentTarget
    .closest("figure")
    ?.querySelector<HTMLButtonElement>("button.zoomable")
    ?.click();
};

/** "Click to zoom" note under a figure: clicking it opens the figure's zoomable image, like clicking the image. */
export function ZoomHint({ label, className }: ZoomHintProps) {
  return (
    // The image itself is the keyboard-accessible zoom button; this is a mouse shortcut to it.
    <button
      type="button"
      className={className ? `zoom-hint ${className}` : "zoom-hint"}
      tabIndex={-1}
      aria-hidden="true"
      onClick={openZoom}
    >
      {label}
    </button>
  );
}
