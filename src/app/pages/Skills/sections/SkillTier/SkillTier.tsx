import { useLang, useTranslation } from "@/features/i18n";
import { pageUrl, type PageId } from "@/shared/config/pages";

import "./styles.css";

type ProofId = "toloka" | "mandioca" | "academos" | "side" | "cs50p" | "meta";

const PROOFS: Record<ProofId, PageId> = {
  toloka: "experience",
  mandioca: "mandioca",
  academos: "teaching",
  side: "projects",
  cs50p: "education",
  meta: "education",
};

type Skill = { name: string; proof: readonly ProofId[] };

const SKILLS = {
  daily: [
    { name: "Python", proof: ["toloka", "mandioca", "academos", "cs50p"] },
    { name: "Bash & Linux", proof: ["toloka", "mandioca"] },
    { name: "Docker", proof: ["toloka"] },
    { name: "GitHub Actions", proof: ["toloka"] },
    { name: "Git", proof: ["toloka", "mandioca", "meta"] },
    { name: "pytest", proof: ["toloka"] },
    { name: "JSON Schema", proof: ["toloka"] },
    { name: "MCP servers & LLM agents", proof: ["toloka"] },
  ],
  comfortable: [
    { name: "TypeScript", proof: ["mandioca", "side"] },
    { name: "NestJS & Express", proof: ["mandioca"] },
    { name: "Next.js & React", proof: ["mandioca", "side"] },
    { name: "Prisma & TypeORM", proof: ["mandioca", "side"] },
    { name: "MySQL & PostgreSQL", proof: ["mandioca", "academos"] },
    { name: "AWS", proof: ["mandioca"] },
    { name: "REST APIs & JWT", proof: ["mandioca", "side"] },
    { name: "UML & systems design", proof: ["mandioca"] },
  ],
} as const satisfies Record<string, readonly Skill[]>;

type SkillTierProps = { tier: keyof typeof SKILLS };

export function SkillTier({ tier }: SkillTierProps) {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <section className="skill-tier" id={tier} aria-labelledby={`${tier}-title`}>
      <div className="skill-tier-header">
        <h2 id={`${tier}-title`}>
          <span data-level={tier} aria-hidden="true" />
          {t(`_pages:skills.tiers.${tier}.title`)}
        </h2>
        <span>{t(`_pages:skills.tiers.${tier}.note`)}</span>
      </div>
      <div className="skill-grid">
        {SKILLS[tier].map(({ name, proof }) => (
          <article key={name} data-tier={tier}>
            <h3>{name}</h3>
            <p>{t("_pages:skills.usedIn")}</p>
            <ul>
              {proof.map((id) => (
                <li key={id}>
                  <a href={pageUrl(lang, PROOFS[id])}>
                    {t(`_pages:skills.proof.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
