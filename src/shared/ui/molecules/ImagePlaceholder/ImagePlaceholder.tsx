import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

type ImagePlaceholderProps = {
  label: string;
  /** CSS aspect-ratio, e.g. `4/5`. */
  ratio?: string;
  /** `photo` is warm paper, `tint` is the blue project tint. */
  tone?: "photo" | "tint";
};

/** Labelled stand-in for an image that has not been provided yet. */
export function ImagePlaceholder({
  label,
  ratio = "4/3",
  tone = "photo",
}: ImagePlaceholderProps) {
  return (
    <span
      className="image-placeholder"
      data-tone={tone}
      style={{ aspectRatio: ratio }}
    >
      <Icon name="image" size={tone === "tint" ? 24 : 22} strokeWidth={1.6} />
      <span>{label}</span>
    </span>
  );
}
