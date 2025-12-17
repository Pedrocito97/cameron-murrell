"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Shield,
  Flame,
  Crown,
  Check,
  Mic,
  Quote,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "7", label: "Figures Built by 25" },
  { value: "100+", label: "Reps Scaled" },
  { value: "3", label: "Countries" },
  { value: "500+", label: "Lives Transformed" },
];

const philosophy = [
  {
    icon: Target,
    title: "Discipline Over Motivation",
    description:
      "Motivation fades. Discipline delivers. I teach systems that work when feelings don't.",
  },
  {
    icon: Shield,
    title: "Battle-Tested Strategy",
    description:
      "Theory means nothing without execution. Everything I teach has been proven in the real world.",
  },
  {
    icon: Flame,
    title: "Relentless Execution",
    description:
      "Ideas are worthless without action. I build high-performers who execute consistently.",
  },
  {
    icon: Crown,
    title: "Identity Transformation",
    description:
      "You can't outperform your identity. I help people become who they need to be.",
  },
];

const whatMakesDifferent = [
  "Lived experience, not theory from books",
  "Built from nothing - no privilege, no safety net",
  "Transparent about failure and lessons learned",
  "Still in the arena, actively building",
];

export function AboutPageContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/speaking/cameron-speaking-full.jpg"
            alt="Cameron Murrell"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-6"
            >
              The Story
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.9]"
            >
              I Built Millions.
              <br />
              <span className="text-gold-gradient">Lost It All.</span>
              <br />
              Now I&apos;m Coming Back.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70 max-w-2xl mb-10"
            >
              Most coaches show you the highlight reel. Here&apos;s the truth - the
              rise, the crash, and the rebuild. No filters.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a href="#story">
                <MagneticButton size="lg">
                  Read My Story
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-[var(--gold)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[var(--charcoal)] border-y border-white/5">
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
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-3 gap-3 lg:gap-6"
          >
            {[
              "/images/speaking/cameron-speaking-full.jpg",
              "/images/speaking/cameron-podium.jpg",
              "/images/speaking/cameron-speaking-medium.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Cameron Murrell"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Story - Timeline */}
      <section id="story" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              The Journey
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Rise. Fall. <span className="text-gold-gradient">Rebuild.</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                chapter: "Chapter 1",
                title: "The Beginning",
                text: "No degree. No connections. No safety net. Just a family depending on me and an unshakeable drive to build something from nothing.",
              },
              {
                chapter: "Chapter 2",
                title: "The Rise",
                text: "Built my first sales team in the UK, expanded to Ireland and the USA. Scaled to 100+ reps across three countries. Hit 7 figures by 25.",
              },
              {
                chapter: "Chapter 3",
                title: "The Fall",
                text: "Bad decisions, wrong partnerships, overconfidence. Lost the money, the team, everything. Most people never talk about this part.",
              },
              {
                chapter: "Chapter 4",
                title: "The Rebuild",
                text: "Now rebuilding publicly. Every lesson documented. Through coaching and speaking, I help others avoid my mistakes and accelerate their success.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-center"
              >
                {/* Left content (even items) or empty */}
                <div className={index % 2 === 0 ? "lg:text-right" : "lg:order-3"}>
                  {index % 2 === 0 && (
                    <>
                      <span className="text-[var(--gold)] text-sm uppercase tracking-widest font-medium">
                        {item.chapter}
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">{item.text}</p>
                    </>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-0 lg:static flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-[var(--charcoal)]" />
                </div>

                {/* Right content (odd items) or empty */}
                <div className={index % 2 === 1 ? "" : "lg:order-3"}>
                  {index % 2 === 1 && (
                    <>
                      <span className="text-[var(--gold)] text-sm uppercase tracking-widest font-medium">
                        {item.chapter}
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">{item.text}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Different */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Why Work With Me
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">
                What Makes Me{" "}
                <span className="text-gold-gradient">Different</span>
              </h2>

              <ul className="space-y-4">
                {whatMakesDifferent.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
                      <Check className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-8 lg:p-10">
                <Quote className="w-12 h-12 text-[var(--gold)]/30 mb-6" />
                <blockquote className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                  &ldquo;Your past doesn&apos;t define your future.
                  <span className="text-gold-gradient">
                    {" "}
                    Transformation is possible.
                  </span>
                  &rdquo;
                </blockquote>
                <p className="text-white/60">
                  Through coaching, speaking, and community, I help ambitious
                  leaders transform their mindset and results.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              My Philosophy
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              The <span className="text-gold-gradient">Foundation</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {philosophy.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gold-gradient">Transform</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Whether through coaching or a powerful keynote - I&apos;m ready to
              help you and your team execute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coaching">
                <MagneticButton size="lg">
                  Work With Me
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </Link>
              <Link href="/speaking">
                <MagneticButton variant="outline" size="lg">
                  <Mic className="w-5 h-5 mr-2 inline-block" />
                  Book a Keynote
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
