"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const quoteWords =
  "The future does not belong to businesses that simply use AI. It belongs to those engineered to run without constraint.".split(
    " "
  );

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white">
      {/* North star quote */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 pb-96 max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 mb-10">
            The North Star
          </p>
        </ScrollReveal>
        <h2 className="font-satoshi font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
          {quoteWords.map((word, i) => (
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
                delay: i * 0.04,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/[0.06] py-10 text-center">
        <p className="font-mono text-xs text-white/40">
          &copy; {new Date().getFullYear()} Autonomium
        </p>
      </div>
    </footer>
  );
}
