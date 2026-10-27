import landing from "@/assets/mandioca-system/mandioca-landing.png";
import qrTickets from "@/assets/mandioca-system/qr-tickets.png";
import romana from "@/assets/mandioca-system/romana-system.png";
import telegram from "@/assets/mandioca-system/telegram-bot-comandos.png";
import { useTranslation } from "@/features/i18n";
import { TagList } from "@/shared/ui/molecules/TagList";

import { NumberedTitle } from "../../components/NumberedTitle";

import "./styles.css";

const ITEMS = [
  {
    id: "web",
    image: landing,
    size: [1920, 1080],
    tags: ["Next.js", "shadcn/ui", "NestJS", "Prisma", "JWT"],
  },
  {
    id: "qr",
    image: qrTickets,
    size: [572, 849],
    tags: ["QR codes", "NestJS", "MySQL"],
  },
  {
    id: "bot",
    image: telegram,
    size: [962, 854],
    tags: ["Telegram Bot API", "NestJS"],
  },
  {
    id: "scale",
    image: romana,
    size: [1379, 796],
    tags: ["Python", "Tkinter", "Serial"],
  },
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
        {ITEMS.map(({ id, image, size, tags }) => (
          <article key={id}>
            <div className="mandioca-built-media">
              <img
                src={image}
                alt={t(`_pages:mandioca.built.${id}.alt`)}
                width={size[0]}
                height={size[1]}
                loading="lazy"
              />
            </div>
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
