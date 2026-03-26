"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";

const layers = [
  {
    name: "Intelligence Layer",
    description: "AI models, decision engines, and learning systems that think on behalf of the business.",
  },
  {
    name: "Orchestration Layer",
    description: "The conductor — routes tasks, manages priorities, handles escalation logic.",
  },
  {
    name: "Integration Layer",
    description: "Connective tissue between your existing tools, APIs, and data sources.",
  },
  {
    name: "Process Layer",
    description: "Codified workflows — every SOP converted into executable, autonomous procedures.",
  },
  {
    name: "Data Layer",
    description: "Unified knowledge base — structured, searchable, always current.",
  },
  {
    name: "Infrastructure Layer",
    description: "The foundation — hosting, security, monitoring, and performance guarantees.",
  },
];

export default function AiosArchitecture() {
  return (
    <SectionWrapper id="system" padding="pt-32 pb-16 md:pb-20" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
              The System
            </p>
            <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              AIOS Architecture
            </h2>
            <p className="font-body text-lg text-ash leading-relaxed">
              Six layers. One operating system for your entire business. Each
              layer is independently upgradeable, collectively orchestrated.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-0">
            {layers.map((layer, i) => (
              <ScrollReveal key={layer.name} delay={i * 0.08}>
                <div className="group relative flex items-stretch border-b border-ink/[0.06] last:border-b-0">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/0 group-hover:bg-accent/60 transition-colors duration-500" />

                  <div className="flex items-center gap-6 py-6 pl-6 w-full">
                    <span className="font-mono text-xs text-accent/50 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-satoshi font-bold text-lg tracking-tight mb-1">
                        {layer.name}
                      </p>
                      <p className="font-body text-sm text-ash leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
