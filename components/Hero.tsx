"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { ArrowRight } from "@phosphor-icons/react";

const headlineWords = "Your business runs. But it doesn't compound.".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-transparent text-ink overflow-hidden">
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
