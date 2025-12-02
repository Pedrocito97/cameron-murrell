"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          variants={staggerItem}
          className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={staggerItem}
        className="font-display text-section text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={staggerItem}
          className={cn(
            "mt-4 text-lg text-white/60 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
