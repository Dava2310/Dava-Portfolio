import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import { Shot } from "../../components/Shot";
import type { SectionProps } from "../props";

import "./styles.css";

const TILTS = [-1.2, 0.9, -0.6, 1.3, -0.9, 0.7];

export function Gallery({ text, data }: SectionProps) {
  const { t } = useTranslation();
  if (text.gallery.length === 0) return null;
  const pending = data.gallery.every((tile) => !tile.image);

  return (
    <section className="side-gallery" aria-labelledby="side-gallery-title">
      <div className="side-gallery-header">
        <h2 id="side-gallery-title">{t("_pages:sideProject.gallery")}</h2>
        <span>
          {text.gallery.length} {t("_pages:sideProject.galleryCount")}
        </span>
      </div>
      {pending ? (
        <p className="side-gallery-note">
          <Icon name="camera" size={18} strokeWidth={1.8} />
          {t("_pages:sideProject.galleryEmpty")}
        </p>
      ) : null}
      <div className="side-gallery-grid" data-pending={pending}>
        {text.gallery.map((tile, index) => (
          <figure
            key={tile.label}
            style={{ rotate: `${TILTS[index % TILTS.length] ?? 0}deg` }}
          >
            <Shot
              image={data.gallery[index]?.image}
              label={tile.label}
              alt={tile.caption}
              ratio={data.gallery[index]?.ratio ?? "4/3"}
              tone="photo"
            />
            <figcaption>{tile.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
