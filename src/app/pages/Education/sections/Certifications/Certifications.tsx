import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import "./styles.css";

const CERTS = ["cs50x", "cs50p", "meta", "scrum", "mikrotik"] as const;

export function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="certs" aria-labelledby="certs-title">
      <h2 id="certs-title">{t("_pages:education.certifications.title")}</h2>
      <ul>
        {CERTS.map((id) => (
          <li key={id}>
            <div>
              <span>{t(`_pages:education.certifications.${id}.name`)}</span>
              <span>{t(`_pages:education.certifications.${id}.issuer`)}</span>
            </div>
            <a
              href="#"
              aria-label={t(`_pages:education.certifications.${id}.view`)}
            >
              <Icon name="external" size={18} strokeWidth={1.8} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
