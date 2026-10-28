import { useTranslation } from "@/features/i18n";
import { Icon } from "@/shared/ui/atoms/Icon";

import type { SectionProps } from "../props";

import "./styles.css";

/** Initials of a name, for the avatar circle. */
const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");

export function Team({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const { team } = text;

  return (
    <section className="side-team" aria-labelledby="side-team-title">
      <h2 id="side-team-title">{t("_pages:sideProject.roleTeam")}</h2>
      <div className="side-team-columns">
        <div className="side-team-mine">
          <h3>{t("_pages:sideProject.iOwned")}</h3>
          <ul>
            {team.mine.map((item) => (
              <li key={item}>
                <Icon name="check" strokeWidth={2.2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {data.solo ? (
          <div className="side-team-solo">
            <p>{t("_pages:sideProject.solo")}</p>
          </div>
        ) : (
          <div className="side-team-theirs">
            <h3>{t("_pages:sideProject.theyOwned")}</h3>
            <ul>
              {(team.theirs ?? []).map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {data.solo ? null : (
        <ul
          className="side-credits"
          aria-label={t("_pages:sideProject.credits")}
        >
          {team.people.map((person) => (
            <li key={person.name}>
              <span aria-hidden="true" data-me={person.me ? "true" : undefined}>
                {initials(person.name)}
              </span>
              <span>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
