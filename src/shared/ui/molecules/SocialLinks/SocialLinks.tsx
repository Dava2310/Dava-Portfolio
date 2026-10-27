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

export function SocialLinks({ items, labels }: SocialLinksProps) {
  return (
    <div className="social-links">
      {items.map((id) => (
        <a key={id} href={SOCIALS[id]} aria-label={labels[id]}>
          <Icon name={ICONS[id]} size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
