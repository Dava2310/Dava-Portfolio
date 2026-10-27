import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";

import "./styles.css";

export function Photos() {
  const { t } = useTranslation();

  return (
    <section
      className="teaching-photos"
      aria-label={t("_pages:teaching.photos.label")}
    >
      <Polaroid
        className="teaching-photos-main"
        size="lg"
        rotate={-1}
        caption={t("_pages:teaching.photos.mainCaption")}
      >
        <Tape top="-14px" left="64px" rotate={-3} width={120} height={30} />
        <ImagePlaceholder
          label={t("_pages:teaching.photos.main")}
          ratio="3/2"
        />
      </Polaroid>
      <div className="teaching-photos-side">
        <Polaroid rotate={2} caption={t("_pages:teaching.photos.caption")}>
          <ImagePlaceholder label={t("_pages:teaching.photos.work")} />
        </Polaroid>
        <Polaroid rotate={-1.5} caption={t("_pages:teaching.photos.caption")}>
          <ImagePlaceholder label={t("_pages:teaching.photos.group")} />
        </Polaroid>
      </div>
    </section>
  );
}
