import { useState, type FormEvent } from "react";

import { useTranslation } from "@/features/i18n";
import { CONTACT_EMAIL } from "@/shared/config/socials";
import { Icon } from "@/shared/ui/atoms/Icon";
import { Tape } from "@/shared/ui/atoms/Tape";
import { SocialLinks } from "@/shared/ui/molecules/SocialLinks";

import "./styles.css";

const TOPICS = [
  { id: "role", label: "topicRole" },
  { id: "project", label: "topicProject" },
  { id: "hola", label: "topicHola" },
] as const;

type Topic = (typeof TOPICS)[number]["id"];

export function Contact() {
  const { t } = useTranslation();
  const [topic, setTopic] = useState<Topic>("role");
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the message filled in.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => {
      const value = data.get(key);
      return typeof value === "string" ? value : "";
    };
    const name = field("name");
    const email = field("email");
    const message = field("message");
    const subject = t(`_pages:home.contact.subject.${topic}`);
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="contact-kicker">{t("_pages:home.contact.kicker")}</p>
        <h2 id="contact-title">{t("_pages:home.contact.title")}</h2>
        <p className="contact-lead">{t("_pages:home.contact.lead")}</p>
        <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <SocialLinks
          items={["github", "linkedin"]}
          labels={{
            github: t("_common:social.github"),
            linkedin: t("_common:social.linkedin"),
            email: t("_common:social.email"),
            resume: t("_common:social.resume"),
          }}
        />
      </div>
      <div className="contact-card">
        <Tape top="-14px" left="50%" rotate={-2} width={120} height={30} />
        {sent ? (
          <div className="contact-thanks" role="status">
            <p className="contact-thanks-kicker">
              {t("_pages:home.contact.thanksKicker")}
            </p>
            <p className="contact-thanks-title">
              {t("_pages:home.contact.thanksTitle")}
            </p>
            <p>{t("_pages:home.contact.thanksBody")}</p>
            <button type="button" onClick={() => setSent(false)}>
              {t("_pages:home.contact.again")}
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-fields">
              <div>
                <label htmlFor="c-name">{t("_pages:home.contact.name")}</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t("_pages:home.contact.namePlaceholder")}
                  required
                />
              </div>
              <div>
                <label htmlFor="c-email">
                  {t("_pages:home.contact.email")}
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t("_pages:home.contact.emailPlaceholder")}
                  required
                />
              </div>
            </div>
            <fieldset>
              <legend>{t("_pages:home.contact.topicLegend")}</legend>
              <div className="contact-topics">
                {TOPICS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={topic === id}
                    onClick={() => setTopic(id)}
                  >
                    {t(`_pages:home.contact.${label}`)}
                  </button>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="c-msg">{t("_pages:home.contact.message")}</label>
              <textarea
                id="c-msg"
                name="message"
                rows={5}
                placeholder={t("_pages:home.contact.messagePlaceholder")}
                required
              />
            </div>
            <button className="contact-send" type="submit">
              {t("_pages:home.contact.send")}
              <Icon name="arrow" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
