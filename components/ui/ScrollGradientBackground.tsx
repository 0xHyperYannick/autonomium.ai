"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateBoxShadow(count: number, seed: number, maxSize = 1) {
  const rand = seededRand(seed);
  return Array.from({ length: count }, () => {
    const x = Math.floor(rand() * 2560);
    const y = Math.floor(rand() * 2560);
    const size = maxSize > 1 ? Math.floor(rand() * (maxSize - 1)) + 1 : 0;
    const opacity = Math.floor(rand() * 55 + 200); // hex 200-255
    const hex = opacity.toString(16).padStart(2, "0");
    return size > 0
      ? `${x}px ${y}px 0 ${size}px #ffffff${hex}`
      : `${x}px ${y}px #ffffff${hex}`;
  }).join(", ");
}

function StarLayer({
  boxShadow,
  y,
}: {
  boxShadow: string;
  y: ReturnType<typeof useTransform>;
}) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        top: 0,
        left: 0,
        width: "1px",
        height: "1px",
        borderRadius: "50%",
        background: "transparent",
        boxShadow,
        y,
      }}
      aria-hidden="true"
    />
  );
}

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Three parallax depths
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0px", "-600px"]);

  // Stars fade out as gradient enters atmosphere
  const starsOpacity = useTransform(scrollYProgress, [0, 0.45, 0.7], [1, 0.5, 0]);

  // Distant: many tiny 1px dots
  const smallStars = useMemo(() => generateBoxShadow(300, 12345, 1), []);
  // Mid: fewer, slightly larger
  const mediumStars = useMemo(() => generateBoxShadow(100, 67890, 2), []);
  // Close: sparse, a bit bigger
  const largeStars = useMemo(() => generateBoxShadow(30, 11111, 3), []);

  return (
    <>
      {/* Scroll-linked gradient */}
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

      {/* Parallax star layers */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: starsOpacity }}
      >
        <StarLayer boxShadow={smallStars} y={layer1Y} />
        <StarLayer boxShadow={mediumStars} y={layer2Y} />
        <StarLayer boxShadow={largeStars} y={layer3Y} />
      </motion.div>
    </>
  );
}
