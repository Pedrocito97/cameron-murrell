"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stats = [
  { value: "500+", label: "Lives Transformed" },
  { value: "50+", label: "Events Delivered" },
  { value: "3", label: "Countries" },
];

export function HeroVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/speaking/cameron-speaking-full.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Cinematic vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="relative z-20 container-wide text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Name - Massive Typography */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6"
          >
            <span className="block text-white">CAMERON</span>
            <span className="block text-gold-gradient">MURRELL</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/60 font-medium uppercase tracking-[0.3em] mb-10"
          >
            Coach · Speaker · Entrepreneur
          </motion.p>

          {/* Main Value Proposition */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/90 mb-10 leading-tight max-w-3xl mx-auto"
          >
            Step Into Your Power.{" "}
            <span className="text-[var(--gold)]">
              Build a Life of Discipline and a Business of Impact.
            </span>
          </motion.h2>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/coaching">
              <MagneticButton size="xl">
                Get Coached
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
            <Link href="/speaking">
              <MagneticButton variant="outline" size="xl">
                Book a Keynote
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--gold)]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs text-white/40 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
