"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <>
      {/* SVG noise filter definition */}
      <svg
        className="absolute"
        width="0"
        height="0"
        aria-hidden="true"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves={3}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Scroll-linked gradient layer */}
      <motion.div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgb(4, 2, 15) 0%,
            rgb(4, 2, 15) 30%,
            rgb(38, 13, 104) 42%,
            rgb(87, 72, 223) 54%,
            rgb(128, 125, 239) 62%,
            rgb(168, 177, 254) 70%,
            rgb(179, 195, 255) 76%,
            rgb(190, 213, 255) 82%,
            rgb(149, 186, 254) 90%,
            rgb(122, 158, 252) 96%,
            rgb(114, 144, 254) 100%
          )`,
          backgroundSize: "100% 300%",
          backgroundPositionY,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          filter: "url(#noise-filter)",
          mixBlendMode: "soft-light",
          opacity: 0.03,
        }}
      />
    </>
  );
}
