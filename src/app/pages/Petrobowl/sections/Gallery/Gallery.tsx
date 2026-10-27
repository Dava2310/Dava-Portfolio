import { useState } from "react";

import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

const PHOTOS = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"] as const;

export function Gallery() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const total = PHOTOS.length;
  const current = PHOTOS[index] ?? PHOTOS[0];

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="gallery-head">
        <h2 id="gallery-title">{t("_pages:petrobowl.gallery.title")}</h2>
        <span>
          {t("_pages:petrobowl.gallery.position", {
            current: index + 1,
            total,
          })}
        </span>
      </div>
      <figure className="gallery-stage">
        <div className="gallery-frame">
          <div className="gallery-photo">
            <Icon name="image" size={32} strokeWidth={1.5} />
            <span>{t(`_pages:petrobowl.gallery.${current}.label`)}</span>
          </div>
          <button
            className="gallery-nav"
            data-side="prev"
            type="button"
            aria-label={t("_pages:petrobowl.gallery.prev")}
            onClick={() => setIndex((index - 1 + total) % total)}
          >
            <Icon name="chevronLeft" size={22} />
          </button>
          <button
            className="gallery-nav"
            data-side="next"
            type="button"
            aria-label={t("_pages:petrobowl.gallery.next")}
            onClick={() => setIndex((index + 1) % total)}
          >
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
        <figcaption>
          {t(`_pages:petrobowl.gallery.${current}.caption`)}
        </figcaption>
      </figure>
      <div className="gallery-thumbs">
        {PHOTOS.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-label={t("_pages:petrobowl.gallery.show", { n: i + 1 })}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
