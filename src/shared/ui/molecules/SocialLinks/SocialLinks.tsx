import { Icon, type IconName } from "@/shared/ui/atoms/Icon";
import { SOCIALS } from "@/shared/config/socials";

import "./styles.css";

type SocialLinksProps = {
  /** Which links to show, in order. */
  items: readonly (keyof typeof SOCIALS)[];
  /** Accessible names, one per social id. */
  labels: Record<keyof typeof SOCIALS, string>;
};

const ICONS: Record<keyof typeof SOCIALS, IconName> = {
  github: "github",
  linkedin: "linkedin",
  email: "mail",
  resume: "download",
};

/** Links that open in a new tab, so the visitor keeps their place on the site. */
const NEW_TAB: ReadonlySet<keyof typeof SOCIALS> = new Set([
  "github",
  "linkedin",
  "resume",
]);

export function SocialLinks({ items, labels }: SocialLinksProps) {
  return (
    <div className="social-links">
      {items.map((id) => (
        <a
          key={id}
          href={SOCIALS[id]}
          aria-label={labels[id]}
          {...(NEW_TAB.has(id)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon name={ICONS[id]} size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
