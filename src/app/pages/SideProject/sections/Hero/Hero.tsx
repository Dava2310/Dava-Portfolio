import { Tape } from "@/shared/ui/atoms/Tape";

import { Shot } from "../../components/Shot";
import type { SectionProps } from "../props";

import "./styles.css";

export function Hero({ text, data }: SectionProps) {
  return (
    <section className="side-hero" aria-label={text.hero.caption}>
      <figure>
        <Tape top="-14px" left="60px" rotate={-3} width={120} height={30} />
        <Tape
          top="-14px"
          left="auto"
          right="60px"
          rotate={4}
          width={120}
          height={30}
        />
        <Shot
          image={data.hero}
          label={text.hero.label}
          alt={text.hero.caption}
          ratio="16/9"
        />
        <figcaption>{text.hero.caption}</figcaption>
      </figure>
    </section>
  );
}
