import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { ZoomableImage } from "@/shared/ui/molecules/ZoomableImage";

import type { Shot as ShotImage } from "../../types";

type ShotProps = {
  image?: ShotImage | undefined;
  /** Placeholder label while the image is missing. */
  label: string;
  /** Alt text of the image, also used to name the zoom button. */
  alt: string;
  /** Aspect ratio of the placeholder, e.g. `16/10`. */
  ratio: string;
  tone?: "photo" | "tint";
};

/** A screenshot that opens zoomed when it exists, or a labelled placeholder until then. */
export function Shot({ image, label, alt, ratio, tone = "tint" }: ShotProps) {
  const { t } = useTranslation();

  if (!image)
    return <ImagePlaceholder label={label} ratio={ratio} tone={tone} />;

  return (
    <ZoomableImage
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      zoomLabel={`${t("_common:aria.zoomIn")}: ${alt}`}
      closeLabel={t("_common:aria.close")}
    />
  );
}
