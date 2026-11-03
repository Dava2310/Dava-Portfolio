import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";

import "./styles.css";

export type SectionDot = {
  /** Id of the element to scroll to (`top` scrolls to the start of the page). */
  id: string;
  label: string;
};

type SectionDotsProps = {
  /** Accessible name of the navigation, e.g. "Page sections". */
  label: string;
  items: readonly SectionDot[];
};

/** Share of the viewport height where a section counts as "current" once its top crosses it. */
const REFERENCE_LINE = 0.35;
/** How long the label of a newly reached section stays visible (ms). */
const PEEK_MS = 1400;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Index of the section being read: the last one whose top is above the reference line. */
const currentIndex = (items: readonly SectionDot[]) => {
  const atBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 4;
  if (atBottom) return items.length - 1;
  const line = window.innerHeight * REFERENCE_LINE;
  let current = 0;
  items.forEach((item, index) => {
    if (index === 0) return;
    const top = document.getElementById(item.id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= line) current = index;
  });
  return current;
};

/**
 * Sticky rail of dots at the right edge, one per section. The dot of the section being read grows
 * and pulses, the ones already read stay tinted, a line fills as the page advances, and clicking a
 * dot scrolls to its section. Hidden on narrow screens, where it would cover the content.
 */
export function SectionDots({ label, items }: SectionDotsProps) {
  const [active, setActive] = useState(0);
  const [peek, setPeek] = useState<number | null>(null);
  const previous = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const next = currentIndex(items);
      if (next === previous.current) return;
      previous.current = next;
      setActive(next);
      setPeek(next);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setPeek(null), PEEK_MS);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const initial = currentIndex(items);
    previous.current = initial;
    setActive(initial);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer.current);
    };
  }, [items]);

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    if (id === "top") window.scrollTo({ top: 0, behavior });
    else
      document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  };

  const progress = items.length > 1 ? active / (items.length - 1) : 0;

  return (
    <nav className="section-dots" aria-label={label}>
      <ol style={{ "--progress": progress } as CSSProperties}>
        <li className="section-dots-track" aria-hidden="true">
          <span />
        </li>
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={index === active ? "location" : undefined}
              data-state={
                index === active ? "active" : index < active ? "past" : "next"
              }
              data-peek={peek === index ? "true" : undefined}
              onClick={(event) => go(event, item.id)}
            >
              <span className="section-dots-dot" aria-hidden="true" />
              <span
                className="section-dots-label"
                aria-hidden="true"
                style={{ "--i": index } as CSSProperties}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
