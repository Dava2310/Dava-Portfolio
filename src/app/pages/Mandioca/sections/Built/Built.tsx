import { useTranslation } from "@/features/i18n";
import { ImagePlaceholder } from "@/shared/ui/molecules/ImagePlaceholder";
import { TagList } from "@/shared/ui/molecules/TagList";

import { NumberedTitle } from "../../components/NumberedTitle";

import "./styles.css";

const ITEMS = [
  { id: "web", tags: ["Next.js", "shadcn/ui", "NestJS", "Prisma", "JWT"] },
  { id: "qr", tags: ["QR codes", "NestJS", "MySQL"] },
  { id: "bot", tags: ["Telegram Bot API", "NestJS"] },
  { id: "scale", tags: ["Python", "Tkinter", "Serial"] },
] as const;

export function Built() {
  const { t } = useTranslation();

  return (
    <section
      className="mandioca-built"
      id="built"
      aria-labelledby="built-title"
    >
      <NumberedTitle
        id="built-title"
        number="02"
        title={t("_pages:mandioca.built.title")}
      />
      <div className="mandioca-built-grid">
        {ITEMS.map(({ id, tags }) => (
          <article key={id}>
            <ImagePlaceholder
              label={t(`_pages:mandioca.built.${id}.shot`)}
              ratio="16/10"
              tone="tint"
            />
            <div className="mandioca-built-body">
              <h3>{t(`_pages:mandioca.built.${id}.title`)}</h3>
              <p>{t(`_pages:mandioca.built.${id}.description`)}</p>
              <TagList label={t("_common:aria.builtWith")} tags={tags} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
