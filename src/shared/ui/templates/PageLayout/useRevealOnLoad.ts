import { useLayoutEffect } from "react";

/** Elements that normally rise in while scrolling (see `motion.css`). */
const SCROLL_REVEALED =
  "[data-reveal-section] > :not([data-reveal-group], [data-reveal-section]), [data-reveal-group] > *, [data-reveal]";

/** Last value of `data-reveal-on-load`: later elements share its delay. */
const MAX_ORDER = 5;

/**
 * Scroll reveals follow the scroll position, so whatever is already on screen when the page opens
 * would show up at once, before the intro finishes. This marks those elements, numbered in reading
 * order, so they rise in on a timer right after the intro instead (`motion.css`). Runs before the
 * first paint, so nothing flashes.
 */
export function useRevealOnLoad() {
  useLayoutEffect(() => {
    let order = 0;
    for (const element of document.querySelectorAll<HTMLElement>(
      SCROLL_REVEALED,
    )) {
      const { top, bottom } = element.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        element.setAttribute(
          "data-reveal-on-load",
          String(Math.min(order, MAX_ORDER)),
        );
        order += 1;
      }
    }
  }, []);
}
