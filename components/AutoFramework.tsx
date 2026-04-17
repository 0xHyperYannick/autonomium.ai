"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";
import { Lightning, Wrench, ArrowsClockwise, Circuitry } from "@phosphor-icons/react";

const phases = [
  {
    letter: "A",
    label: "Ability",
    icon: Lightning,
    description:
      "Map every capability your business needs to operate — human, digital, and hybrid. Surface the invisible dependencies.",
  },
  {
    letter: "U",
    label: "Utility",
    icon: Wrench,
    description:
      "Convert each capability into a modular, repeatable function. Remove the person from the process without removing the intelligence.",
  },
  {
    letter: "T",
    label: "Transformation",
    icon: ArrowsClockwise,
    description:
      "Redesign workflows so autonomous components interact, hand off, and escalate without human choreography.",
  },
  {
    letter: "O",
    label: "Orchestration",
    icon: Circuitry,
    description:
      "Deploy the intelligent layer that coordinates all autonomous systems, monitors performance, and continuously optimizes.",
  },
];

export default function AutoFramework() {
  return (
    <SectionWrapper dim={true} id="method">
      <ScrollReveal>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          The Method
        </p>
        <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-16 max-w-2xl">
          The AUTO Framework
        </h2>
      </ScrollReveal>

      {/* Bento grid — asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          const span = i % 2 === 0 ? "md:col-span-7" : "md:col-span-5";

          return (
            <ScrollReveal
              key={phase.letter}
              delay={i * 0.1}
              className={span}
            >
              <div className="group relative p-8 md:p-10 rounded-2xl bg-void/40 backdrop-blur-md border border-ink/[0.08] hover:border-accent/30 hover:bg-void/50 transition-colors duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-satoshi font-black text-5xl tracking-tight text-ink/10">
                      {phase.letter}
                    </span>
                    <div>
                      <p className="font-mono text-xs tracking-[0.15em] uppercase text-ash">
                        Phase {i + 1}
                      </p>
                      <p className="font-satoshi font-bold text-xl tracking-tight">
                        {phase.label}
                      </p>
                    </div>
                  </div>
                  <Icon
                    size={28}
                    weight="light"
                    className="text-ink/20 group-hover:text-accent/60 transition-colors duration-500"
                  />
                </div>
                <p className="font-body text-base text-ash leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
