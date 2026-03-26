"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";

const differentiators = [
  {
    tag: "Philosophy",
    statement: "Architecture, not automation.",
    detail:
      "We don't bolt AI onto broken processes. We redesign the operating structure so autonomy is the default state, not an afterthought.",
  },
  {
    tag: "Methodology",
    statement: "Systems thinking, not tool shopping.",
    detail:
      "The AUTO framework treats your business as an integrated system. Every intervention is structural — designed to compound, not just perform.",
  },
  {
    tag: "Outcome",
    statement: "Compounding returns, not linear improvements.",
    detail:
      "Traditional consulting delivers a 10% improvement. Autonomy engineering delivers a fundamentally different trajectory — one where every cycle makes the next one more efficient.",
  },
  {
    tag: "Commitment",
    statement: "We build to leave, not to stay.",
    detail:
      "The goal is a business that doesn't need us. Every engagement is designed to transfer ownership of autonomous systems entirely to your team.",
  },
];

export default function Differentiators() {
  return (
    <SectionWrapper id="edge" padding="pt-16 pb-32 md:pt-20">
      <ScrollReveal>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          The Edge
        </p>
        <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-16 max-w-2xl">
          What makes this different
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {differentiators.map((d, i) => (
          <ScrollReveal key={d.tag} delay={i * 0.1}>
            <div className="group">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent/60 mb-3">
                {d.tag}
              </p>
              <h3 className="font-satoshi font-bold text-xl md:text-2xl tracking-tight mb-4">
                {d.statement}
              </h3>
              <p className="font-body text-base text-ash leading-relaxed">
                {d.detail}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
