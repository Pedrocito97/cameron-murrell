"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg" | "xl";
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  disabled = false,
  variant = "primary",
  size = "default",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)]",
    secondary: "bg-[var(--street-grey)] text-white hover:bg-[var(--charcoal)]",
    outline: "bg-transparent border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative font-display font-semibold uppercase tracking-wide rounded-lg overflow-hidden transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
