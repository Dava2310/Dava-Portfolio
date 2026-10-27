import { useTranslation } from "@/features/i18n";
import { Icon, type IconName } from "@/shared/ui/atoms/Icon";

import "./styles.css";

const SUBJECTS: readonly {
  key: "python" | "databases" | "robotics";
  icon: IconName;
}[] = [
  { key: "python", icon: "code" },
  { key: "databases", icon: "database" },
  { key: "robotics", icon: "bot" },
];

export function Taught() {
  const { t } = useTranslation();

  return (
    <section className="taught" aria-labelledby="taught-title">
      <h2 id="taught-title">{t("_pages:teaching.taught.title")}</h2>
      <div className="taught-grid">
        {SUBJECTS.map(({ key, icon }) => (
          <article key={key}>
            <span className="taught-icon">
              <Icon name={icon} size={26} strokeWidth={1.8} />
            </span>
            <h3>{t(`_pages:teaching.taught.${key}.title`)}</h3>
            <p>{t(`_pages:teaching.taught.${key}.body`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
