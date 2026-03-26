"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary:
      "bg-void text-white border border-chalk/10 hover:bg-void-lighter font-medium",
    secondary:
      "bg-transparent border border-chalk/15 text-ink hover:border-chalk/30",
    ghost: "bg-transparent text-ink hover:text-accent",
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
