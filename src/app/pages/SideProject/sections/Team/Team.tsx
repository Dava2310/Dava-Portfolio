import { useTranslation } from "@/features/i18n";
import type { ReactNode } from "react";

import { Icon } from "@/shared/ui/atoms/Icon";

import { MEMBERS } from "../../projects/people";

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

/** A teammate's name, linked to their public profile when they have one. */
function MemberName({ name }: { name: string }) {
  const url = MEMBERS[name]?.url;
  return url ? (
    <a
      className="side-member-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
      <Icon name="external" size={14} strokeWidth={2} />
    </a>
  ) : (
    <>{name}</>
  );
}

/** Links every teammate with a profile wherever their name appears in a sentence. */
function withMemberLinks(sentence: string): ReactNode[] {
  const linked = Object.keys(MEMBERS).filter((name) => MEMBERS[name]?.url);
  if (linked.length === 0) return [sentence];
  const pattern = new RegExp(`(${linked.join("|")})`, "g");
  return sentence
    .split(pattern)
    .map((part, index) =>
      linked.includes(part) ? <MemberName key={index} name={part} /> : part,
    );
}

export function Team({ text, data }: SectionProps) {
  const { t } = useTranslation();
  const { team } = text;

  return (
    <section
      id="team"
      className="side-team"
      data-reveal-section
      aria-labelledby="side-team-title"
    >
      <h2 id="side-team-title">{t("_pages:sideProject.roleTeam")}</h2>
      <div className="side-team-columns" data-reveal-group>
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
                  <span>{withMemberLinks(item)}</span>
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
          {team.people.map((person) => {
            const photo = MEMBERS[person.name]?.photo;
            return (
              <li key={person.name}>
                <span
                  aria-hidden="true"
                  data-me={person.me ? "true" : undefined}
                >
                  {photo ? (
                    <img
                      src={photo}
                      alt=""
                      width={256}
                      height={256}
                      loading="lazy"
                    />
                  ) : (
                    initials(person.name)
                  )}
                </span>
                <span>
                  <strong>
                    <MemberName name={person.name} />
                  </strong>
                  <span>{person.role}</span>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
