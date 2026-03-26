"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

const words = "Imagine a business that gets stronger the more it runs.".split(" ");

export default function Vision() {
  return (
    <SectionWrapper id="vision" padding="pt-16 pb-40 md:pt-20 md:pb-52">
      <div className="max-w-5xl">
        <motion.p
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Vision
        </motion.p>

        <h2 className="font-satoshi font-black text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 30,
                delay: i * 0.08,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          className="mt-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 30, delay: 0.8 }}
        >
          <p className="font-body text-lg text-ash leading-relaxed">
            Not a business dependent on any single person — including you. A
            system where every process, every workflow, every decision pathway is
            engineered to execute, learn, and improve without human bottlenecks.
            This is the shift from labor-dependency to system-dependency.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
