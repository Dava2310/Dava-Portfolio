import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const PHOTOS = [
  { id: "ceremony", rotate: -1.5 },
  { id: "family", rotate: 1.5 },
  { id: "diploma", rotate: -0.8 },
  { id: "classmates", rotate: 2 },
] as const;

export function Graduation() {
  const { t } = useTranslation();

  return (
    <section className="graduation" aria-labelledby="graduation-title">
      <SectionHeader
        id="graduation-title"
        title={t("_pages:education.graduation.title")}
        note={t("_pages:education.graduation.note")}
        noteTone="muted"
      />
      <div className="graduation-grid">
        {PHOTOS.map(({ id, rotate }) => (
          <Polaroid
            key={id}
            caption={t(`_pages:education.graduation.${id}.caption`)}
            rotate={rotate}
          >
            <ImagePlaceholder
              label={t(`_pages:education.graduation.${id}.photo`)}
              ratio="1/1"
            />
          </Polaroid>
        ))}
      </div>
    </section>
  );
}
