import { useRef, type CSSProperties, type MouseEvent } from "react";

import "./styles.css";

type ZoomableImageProps = {
  src: string;
  alt: string;
  /** Natural size in px: reserves the space and caps how far the zoomed view upscales. */
  width: number;
  height: number;
  /** Accessible name of the button that opens the zoomed view, e.g. "Enlarge image: …". */
  zoomLabel: string;
  closeLabel: string;
  /** Extra class for the clickable image (to size or crop it in its context). */
  className?: string;
};

/** Image that opens full-size in a modal `<dialog>` on click (Esc, the close button or a click outside closes it). */
export function ZoomableImage({
  src,
  alt,
  width,
  height,
  zoomLabel,
  closeLabel,
  className,
}: ZoomableImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialog.current?.close();
  };

  return (
    <>
      <button
        className={className ? `zoomable ${className}` : "zoomable"}
        type="button"
        aria-label={zoomLabel}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <img src={src} alt={alt} width={width} height={height} />
      </button>
      <dialog
        className="zoom-dialog"
        ref={dialog}
        aria-label={alt}
        onClick={closeOnBackdrop}
      >
        <button
          className="zoom-dialog-close"
          type="button"
          aria-label={closeLabel}
          onClick={() => dialog.current?.close()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          style={{ "--zoom-max": `${width * 2.5}px` } as CSSProperties}
        />
      </dialog>
    </>
  );
}
