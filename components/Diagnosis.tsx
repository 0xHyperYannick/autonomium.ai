"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ui/ScrollReveal";

export default function Diagnosis() {
  return (
    <SectionWrapper dim={true} id="diagnosis" padding="pt-16 pb-32 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left — editorial text */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-8">
              The Diagnosis
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-satoshi font-bold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-8">
              The problem isn&apos;t your tools.
              <br />
              It&apos;s your operating structure.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-ash leading-relaxed mb-8 max-w-lg">
              You hired well. You chose good software. You built processes that
              made sense at the time. But every new hire, every new tool, every
              new process added mass — and mass, without architecture, becomes
              drag.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-lg text-ash leading-relaxed max-w-lg">
              Your business doesn&apos;t need more thrust. It needs less drag.
              The distinction is everything.
            </p>
          </ScrollReveal>
        </div>

        {/* Right — pull quote */}
        <div className="lg:col-span-5 flex items-center">
          <ScrollReveal delay={0.3} direction="left">
            <blockquote className="relative pl-8 border-l-2 border-accent">
              <p className="font-satoshi font-medium text-2xl md:text-3xl leading-snug tracking-tight text-ink/70 italic">
                &ldquo;In aerodynamics, the goal is never simply more power.
                It&apos;s reducing drag so the existing force carries you
                further.&rdquo;
              </p>
              <footer className="mt-6 font-mono text-xs tracking-[0.15em] uppercase text-ash">
                The Aerodynamics of Scale
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
