import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl, type PageId } from "@/shared/config/pages";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { Polaroid } from "@/shared/ui/molecules/Polaroid";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";

import "./styles.css";

const MOMENTS: readonly {
  key: "petrobowl" | "university" | "feria" | "teaching";
  page: PageId;
  rotate: number;
}[] = [
  { key: "petrobowl", page: "petrobowl", rotate: -2 },
  { key: "university", page: "activities", rotate: 1.5 },
  { key: "feria", page: "activities", rotate: -1 },
  { key: "teaching", page: "teaching", rotate: 2.5 },
];

export function Moments() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="moments" aria-labelledby="moments-title">
      <SectionHeader
        id="moments-title"
        title={t("_pages:home.moments.title")}
        link={{
          href: pageUrl(lang, "activities"),
          label: t("_pages:home.moments.link"),
        }}
      />
      <div className="moments-grid">
        {MOMENTS.map(({ key, page, rotate }) => (
          <Polaroid
            key={key}
            href={pageUrl(lang, page)}
            rotate={rotate}
            caption={t(`_pages:home.moments.${key}Caption`)}
          >
            <ImagePlaceholder
              label={t(`_pages:home.moments.${key}Photo`)}
              ratio="1/1"
            />
          </Polaroid>
        ))}
      </div>
    </section>
  );
}
