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

export function Beyond() {
  const { t } = useTranslation();

  return (
    <section className="beyond" aria-labelledby="beyond-title">
      <SectionHeader
        id="beyond-title"
        title={t("_pages:about.beyond.title")}
        note={t("_pages:about.beyond.note")}
        noteTone="muted"
      />
      <div className="beyond-grid">
        {PHOTOS.map(({ id, rotate }) => (
          <Polaroid
            key={id}
            caption={t(`_pages:about.beyond.${id}.caption`)}
            rotate={rotate}
          >
            <ImagePlaceholder
              label={t(`_pages:about.beyond.${id}.photo`)}
              ratio="4/3"
            />
          </Polaroid>
        ))}
      </div>
    </section>
  );
}
