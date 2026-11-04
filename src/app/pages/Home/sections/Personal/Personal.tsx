import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const PHOTOS = [
  { id: "hobby", rotate: -2 },
  { id: "maturin", rotate: 1.5 },
  { id: "barcelona", rotate: -1 },
] as const;

export function Personal() {
  const { t } = useTranslation();

  return (
    <section className="personal" aria-labelledby="personal-title">
      <SectionHeader
        id="personal-title"
        title={t("_pages:home.personal.title")}
        note={t("_pages:home.personal.note")}
      />
      <div className="personal-grid">
        {PHOTOS.map(({ id, rotate }) => (
          <Polaroid
            key={id}
            caption={t(`_pages:home.personal.${id}.caption`)}
            rotate={rotate}
          >
            <ImagePlaceholder
              label={t(`_pages:home.personal.${id}.photo`)}
              ratio="4/3"
            />
          </Polaroid>
        ))}
      </div>
    </section>
  );
}
