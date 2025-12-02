"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  duration?: number;
}

const sizes = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
};

export function FloatingOrb({
  className,
  size = "md",
  delay = 0,
  duration = 6,
}: FloatingOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.1, 1],
        y: [0, -30, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        "bg-gradient-radial from-[var(--gold)]/30 via-[var(--gold)]/10 to-transparent",
        sizes[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.1) 40%, transparent 70%)`,
      }}
    />
  );
}
