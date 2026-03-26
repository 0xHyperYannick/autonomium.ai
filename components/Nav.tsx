"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./ui/MagneticButton";

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.08]);

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3 rounded-full"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(4, 2, 15, ${v})`),
        borderWidth: 1,
        borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Image
        src="/logo.png"
        alt="Autonomium"
        width={140}
        height={32}
        className="h-7 w-auto"
        priority
      />

      <div className="hidden md:flex items-center gap-6 text-sm text-ash font-body">
        <a href="#method" className="hover:text-ink transition-colors duration-300">
          Method
        </a>
        <a href="#system" className="hover:text-ink transition-colors duration-300">
          System
        </a>
        <a href="#offer" className="hover:text-ink transition-colors duration-300">
          Offer
        </a>
      </div>

      <MagneticButton variant="primary" href="https://cal.com/autonomium" className="text-xs px-5 py-2">
        Start the Audit
      </MagneticButton>
    </motion.nav>
  );
}
