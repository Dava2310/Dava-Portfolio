import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl } from "@/shared/config/pages";
import { SOCIALS } from "@/shared/config/socials";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

export function Chat() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="chat" aria-labelledby="chat-title">
      <div className="chat-box">
        <div className="chat-copy">
          <p>{t("_pages:about.chat.kicker")}</p>
          <h2 id="chat-title">{t("_pages:about.chat.title")}</h2>
        </div>
        <div className="chat-actions">
          <a className="chat-primary" href={`${pageUrl(lang, "home")}#contact`}>
            {t("_pages:about.chat.cta")}
          </a>
          <a className="chat-secondary" href={SOCIALS.resume}>
            <Icon name="download" />
            {t("_pages:about.chat.resume")}
          </a>
        </div>
      </div>
    </section>
  );
}
