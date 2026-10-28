import { useEffect, useState } from "react";

import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

/** Scroll distance (px) after which the button appears. */
const SHOW_AFTER = 400;

type ToTopProps = {
  label: string;
};

/** Floating arrow that scrolls back to the top; appears once the page has been scrolled. */
export function ToTop({ label }: ToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      className="to-top"
      type="button"
      aria-label={label}
      title={label}
      data-visible={visible}
      inert={!visible}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <Icon name="arrowUp" size={22} />
    </button>
  );
}
