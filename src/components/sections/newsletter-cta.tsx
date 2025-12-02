"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  {
    icon: Flame,
    title: "Raw Weekly Fire",
    description: "Real talk, no BS. Street wisdom that works.",
  },
  {
    icon: Mail,
    title: "Free Starter Pack",
    description: "5 rules to go from nothing to something.",
  },
  {
    icon: Lock,
    title: "Inner Circle Only",
    description: "Strategies I don't share publicly.",
  },
];

export function NewsletterCTA() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* Gold gradient background - more subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold)]/5 via-transparent to-transparent" />

      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-sm font-medium uppercase tracking-widest mb-6"
          >
            Free Entry Point
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={staggerItem}
            className="font-display text-section text-white mb-4"
          >
            Stop Scrolling.{" "}
            <span className="text-gold-gradient">Start Winning.</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Every week, I send out the mindset shifts, sales strategies, and raw truths
            that built my career. No fluff. No corporate speak. Just what works.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-3">
                  <benefit.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-white/50">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={staggerItem}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Your best email"
              className="flex-1 bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40 h-14 text-lg"
            />
            <Button
              type="submit"
              className="bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-14 px-8 hover-gold-glow"
            >
              Send Me The Fire
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.form>

          {/* Trust signal */}
          <motion.p
            variants={staggerItem}
            className="mt-4 text-sm text-white/40"
          >
            Join 5,000+ hungry high-performers. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
