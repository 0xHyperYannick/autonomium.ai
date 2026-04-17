"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";
import MagneticButton from "./ui/MagneticButton";
import { ArrowRight } from "@phosphor-icons/react";

const tiers = [
  {
    phase: "01",
    name: "Autonomy Audit",
    description:
      "A deep diagnostic of your operating structure. We map every dependency, bottleneck, and latent capacity — then deliver a blueprint for autonomous operation.",
    emphasis: true,
  },
  {
    phase: "02",
    name: "System Design",
    description:
      "Architecture the AIOS layers specific to your business. Define the autonomous workflows, integration points, and intelligence requirements.",
    emphasis: false,
  },
  {
    phase: "03",
    name: "Implementation",
    description:
      "Build, deploy, and activate your autonomous operating system. Phased rollout with measurable milestones at every stage.",
    emphasis: false,
  },
  {
    phase: "04",
    name: "Ongoing Optimization",
    description:
      "Continuous monitoring, tuning, and expansion of autonomous capabilities. Your system gets smarter every cycle.",
    emphasis: false,
  },
];

export default function Offer() {
  return (
    <SectionWrapper dim={true} id="offer">
      <ScrollReveal>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          The Invitation
        </p>
        <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-16 max-w-3xl">
          Four phases to full autonomy.
          <br />
          <span className="text-ash">Start with the audit.</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-ink/[0.08] rounded-2xl overflow-hidden bg-void/40 backdrop-blur-md">
        {tiers.map((tier, i) => (
          <ScrollReveal key={tier.phase} delay={i * 0.1}>
            <div
              className={`relative p-8 md:p-10 h-full border-b md:border-b-0 md:border-r border-ink/[0.06] last:border-r-0 last:border-b-0 ${
                tier.emphasis ? "bg-accent/[0.04]" : ""
              }`}
            >
              <p className="font-mono text-xs text-accent/50 mb-4">
                {tier.phase}
              </p>
              <h3 className="font-satoshi font-bold text-lg tracking-tight mb-4">
                {tier.name}
              </h3>
              <p className="font-body text-sm text-ash leading-relaxed">
                {tier.description}
              </p>

              {tier.emphasis && (
                <div className="mt-8" id="audit">
                  <MagneticButton variant="primary" href="https://cal.com/autonomium" className="text-xs">
                    Begin Here <ArrowRight weight="bold" size={14} />
                  </MagneticButton>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
