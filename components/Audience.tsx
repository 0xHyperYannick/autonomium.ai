"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";

const painPoints = [
  "You have systems that don't talk to each other — and people filling the gaps.",
  "Your best operators spend more time coordinating than creating.",
  "Every new hire adds communication overhead faster than output.",
  "You've automated tasks, but your workflows still depend on human choreography.",
  "Growth feels like it's adding weight, not building momentum.",
  "You know AI matters, but bolt-on tools haven't changed the fundamental equation.",
];

export default function Audience() {
  return (
    <SectionWrapper dim={true} id="audience" padding="pt-16 pb-32 md:pt-20">
      <div className="max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            The Mirror
          </p>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-16">
            This is for you if...
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="py-6 border-b border-ink/[0.06] last:border-b-0">
                <p className="font-body text-lg md:text-xl text-ink/70 leading-relaxed">
                  {point}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
