"use client";

import { useMemo, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  MotionValue,
} from "framer-motion";

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
  x,
  y,
}: {
  boxShadow: string;
  x: MotionValue<string>;
  y: MotionValue<string>;
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
        x,
        y,
      }}
      aria-hidden="true"
    />
  );
}

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Mask center rises from below viewport (arc hidden) to final position (arc visible)
  const maskCenterY = useTransform(scrollYProgress, [0, 1], [145, 105]);
  const maskImage = useMotionTemplate`radial-gradient(ellipse 160% 90% at 50% ${maskCenterY}%, black 48%, transparent 68%)`;

  // Mouse tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawMouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // Scroll parallax offsets (numeric, in px)
  const layer1ScrollY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const layer2ScrollY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const layer3ScrollY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // Combined scroll + mouse Y per layer
  const layer1Y = useTransform(
    [layer1ScrollY, mouseY] as MotionValue<number>[],
    ([scroll, mouse]: number[]) => `${scroll + mouse * -10}px`
  );
  const layer2Y = useTransform(
    [layer2ScrollY, mouseY] as MotionValue<number>[],
    ([scroll, mouse]: number[]) => `${scroll + mouse * -22}px`
  );
  const layer3Y = useTransform(
    [layer3ScrollY, mouseY] as MotionValue<number>[],
    ([scroll, mouse]: number[]) => `${scroll + mouse * -38}px`
  );

  // Mouse-only X per layer — inverted so stars flee the cursor
  const layer1X = useTransform(mouseX, [-1, 1], ["15px", "-15px"]);
  const layer2X = useTransform(mouseX, [-1, 1], ["32px", "-32px"]);
  const layer3X = useTransform(mouseX, [-1, 1], ["55px", "-55px"]);

  // Stars fade out as gradient enters atmosphere
  // Hold full opacity through void/deep-indigo zone, then fade as purple rises
  const starsOpacity = useTransform(scrollYProgress, [0, 0.70, 0.82], [1, 1, 0]);

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
          backgroundImage: `radial-gradient(
            ellipse 160% 30% at 50% 105%,
            rgb(114, 144, 254) 0%,
            rgb(72, 118, 240) 10%,
            rgb(100, 145, 248) 18%,
            rgb(149, 186, 254) 26%,
            rgb(190, 213, 255) 34%,
            rgb(168, 177, 254) 42%,
            rgb(128, 125, 239) 55%,
            rgb(87, 72, 223) 62%,
            rgb(38, 13, 104) 76%,
            rgb(4, 2, 15) 90%,
            rgb(4, 2, 15) 100%
          )`,
          backgroundSize: "100% 300%",
          backgroundPositionY,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />

      {/* Parallax star layers */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: starsOpacity }}
      >
        <StarLayer boxShadow={smallStars} x={layer1X} y={layer1Y} />
        <StarLayer boxShadow={mediumStars} x={layer2X} y={layer2Y} />
        <StarLayer boxShadow={largeStars} x={layer3X} y={layer3Y} />
      </motion.div>
    </>
  );
}
