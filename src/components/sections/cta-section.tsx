"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--charcoal)] to-[var(--background)]" />

      {/* Gold accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--gold)]/10 rounded-full blur-3xl" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Question */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="text-gold-gradient">Transform</span>?
          </h2>

          <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Stop waiting for the perfect moment. Start building the life and
            business you deserve. Your transformation begins with a single step.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/coaching">
              <MagneticButton size="xl">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton variant="outline" size="xl">
                Get In Touch
              </MagneticButton>
            </Link>
          </div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-white/40"
          >
            Join 500+ leaders who have already transformed their lives
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
