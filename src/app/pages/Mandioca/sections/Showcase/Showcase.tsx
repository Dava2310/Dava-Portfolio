import { useTranslation } from "@/features/i18n";
import { Tape } from "@/shared/ui/atoms/Tape";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";

import "./styles.css";

const RESULTS = [
  { id: "speed", value: "60%" },
  { id: "uptime", value: "99.9%" },
  { id: "support", value: "75%" },
] as const;

export function Showcase() {
  const { t } = useTranslation();

  return (
    <>
      <figure className="mandioca-hero">
        <Tape top="-14px" left="60px" rotate={-3} width={120} height={30} />
        <Tape
          top="-14px"
          left="auto"
          right="60px"
          rotate={4}
          width={120}
          height={30}
        />
        <ImagePlaceholder
          label={t("_pages:mandioca.hero.shot")}
          ratio="16/9"
          tone="tint"
        />
        <figcaption>{t("_pages:mandioca.hero.caption")}</figcaption>
      </figure>
      <section
        className="mandioca-results"
        aria-label={t("_pages:mandioca.results.label")}
      >
        {RESULTS.map(({ id, value }) => (
          <div key={id}>
            <p className="mandioca-results-value">{value}</p>
            <p>{t(`_pages:mandioca.results.${id}`)}</p>
          </div>
        ))}
      </section>
    </>
  );
}
