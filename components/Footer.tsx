"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const quoteWords =
  "The future does not belong to businesses that simply use AI. It belongs to those engineered to run without constraint.".split(
    " "
  );

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-ink">
      {/* North star quote */}
      <div className="px-6 md:px-12 lg:px-20 pt-32 pb-24 max-w-5xl mx-auto">
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
      <div className="border-t border-ink/[0.06] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Image
            src="/logo.png"
            alt="Autonomium"
            width={120}
            height={28}
            className="h-6 w-auto opacity-60"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-sm text-ash">
            <a
              href="https://hypersynthesis.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors duration-300"
            >
              HyperSynthesis Newsletter
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors duration-300"
            >
              X / Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/autonomium"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          <p className="font-mono text-xs text-ash/60">
            &copy; {new Date().getFullYear()} Autonomium
          </p>
        </div>
      </div>
    </footer>
  );
}
