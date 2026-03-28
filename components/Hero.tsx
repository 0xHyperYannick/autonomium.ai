"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { ArrowRight } from "@phosphor-icons/react";

const headlineWords = "Your business runs. But it doesn't compound.".split(" ");

const gridLines = Array.from({ length: 12 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-transparent text-ink overflow-hidden">
      {/* Structural grid visual — right side */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none">
        <div className="relative h-full w-full">
          {gridLines.map((i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-ink/[0.04]"
              style={{ left: `${(i + 1) * 8}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                delay: 0.8 + i * 0.06,
              }}
            />
          ))}
          {gridLines.map((i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-ink/[0.04]"
              style={{ top: `${(i + 1) * 8}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                delay: 1.0 + i * 0.06,
              }}
            />
          ))}
          {/* The hollow engine — empty center */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-ink/10 rounded-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 1.6 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-ink/[0.06] rounded-sm rotate-45"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 1.8 }}
          />
        </div>
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100dvh] px-6 md:px-12 lg:px-20 max-w-3xl">
        <motion.p
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0.2 }}
        >
          Autonomy Engineering
        </motion.p>

        <h1 className="font-satoshi font-black text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.4 + i * 0.08,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="font-body text-lg md:text-xl text-ash leading-relaxed max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, delay: 1.2 }}
        >
          You built something that works. But underneath the revenue, there&apos;s a
          hollow engine — a business that needs you for every decision, every
          handoff, every escalation. We engineer the autonomy to change that.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, delay: 1.4 }}
        >
          <MagneticButton href="https://cal.com/autonomium">
            Free Audit <ArrowRight weight="bold" size={16} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
