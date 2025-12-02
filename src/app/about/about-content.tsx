"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Shield, Flame, Crown } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const timeline = [
  {
    year: "The Beginning",
    title: "Born from Nothing",
    description: "Growing up on the streets, I learned early that survival requires strategy. No silver spoons, no safety nets - just raw determination.",
  },
  {
    year: "The Grind",
    title: "First Sales Role",
    description: "Started at the bottom, knocking doors and facing rejection daily. Every 'no' became fuel. Every closed deal built my foundation.",
  },
  {
    year: "The Rise",
    title: "UK Expansion",
    description: "Built my first team in the UK. Discovered that leadership isn't about titles - it's about transformation. Scaled to 50+ reps.",
  },
  {
    year: "The Expansion",
    title: "International Growth",
    description: "Took the Street CEO system to Ireland and the USA. 100+ reps across three countries. £1M+ years became the standard.",
  },
  {
    year: "The Mission",
    title: "Building The Movement",
    description: "Now I teach others what took me years to learn. The Street CEO isn't just my story - it's a blueprint for transformation.",
  },
];

const philosophy = [
  {
    icon: Target,
    title: "Discipline Over Motivation",
    description: "Motivation fades. Discipline delivers. I teach systems that work when feelings don't.",
  },
  {
    icon: Shield,
    title: "Street-Smart Strategy",
    description: "Theory means nothing without street-level execution. Everything I teach has been battle-tested.",
  },
  {
    icon: Flame,
    title: "Relentless Execution",
    description: "Ideas are worthless without action. I build high-performers who execute, not dreamers who plan.",
  },
  {
    icon: Crown,
    title: "Identity Transformation",
    description: "You can't outperform your identity. I help people become who they need to be to achieve what they want.",
  },
];

const stats = [
  { value: 3, suffix: "", label: "Countries Operated" },
  { value: 100, suffix: "+", label: "Reps Scaled" },
  { value: 1, prefix: "£", suffix: "M+", label: "Revenue Generated" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/4 -right-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              The Man Behind The Movement
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              From The Streets To{" "}
              <span className="text-gold-gradient">The Boardroom</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl"
            >
              I didn&apos;t inherit success. I built it from nothing. Every rejection, every failure,
              every sleepless night forged the leader I am today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--charcoal)] border-y border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-[var(--gold)]">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="My Journey"
            title="The Origin Story"
            description="Every empire starts somewhere. Mine started with nothing but hunger and an unshakeable belief in transformation."
            align="left"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 mb-12 ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Content */}
                <div className={`pl-12 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                  <span className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60">
                    {item.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-black" />
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? "hidden lg:block" : "hidden lg:block lg:order-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="My Philosophy"
            title="The Street CEO Way"
            description="These aren't just principles - they're the foundation of every transformation I've created."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {philosophy.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-black relative overflow-hidden">
        <FloatingOrb className="top-0 left-1/4" size="xl" delay={0} />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-6">
              My Mission
            </span>
            <blockquote className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
              &ldquo;To show every hungry soul that your past doesn&apos;t define your future.
              <span className="text-gold-gradient"> Transformation is possible.</span>
              Success is a decision.&rdquo;
            </blockquote>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              I&apos;ve dedicated my life to proving that where you start doesn&apos;t determine where you finish.
              Through coaching, speaking, and community, I&apos;m building an army of transformed high-performers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-[var(--charcoal)] to-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 text-center"
          >
            <h2 className="font-display text-section text-white mb-4">
              Ready to Transform?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Whether through coaching, programs, or live events - I&apos;m ready to help you build your empire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coaching">
                <MagneticButton size="lg">
                  Work With Me
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </Link>
              <Link href="/programs">
                <MagneticButton variant="outline" size="lg">
                  Explore Programs
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
