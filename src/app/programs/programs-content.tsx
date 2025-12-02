"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, BookOpen, Flame, Shield, Clock, Users, Star, Check } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const programs = [
  {
    slug: "mindset",
    icon: Target,
    title: "The Street CEO Mindset Program",
    description: "Master the mental frameworks that separate winners from everyone else. Build unshakeable discipline and transform your identity.",
    price: "$497",
    originalPrice: "$997",
    duration: "8 Weeks",
    modules: 12,
    features: [
      "12 video modules",
      "Daily discipline tracker",
      "Weekly challenges",
      "Private community access",
      "Lifetime updates",
    ],
    outcomes: [
      "Unshakeable mental toughness",
      "Daily discipline systems",
      "Winner's identity",
      "Eliminate excuses forever",
    ],
    popular: true,
  },
  {
    slug: "leadership",
    icon: BookOpen,
    title: "The Street CEO Leadership System",
    description: "Build and lead high-performing teams. Transform from individual contributor to visionary leader who inspires action.",
    price: "$697",
    originalPrice: "$1,297",
    duration: "10 Weeks",
    modules: 15,
    features: [
      "15 video modules",
      "Team assessment templates",
      "Leadership playbooks",
      "Monthly group calls",
      "Certificate of completion",
    ],
    outcomes: [
      "Build loyal, high-performing teams",
      "Create winning culture",
      "Scale your operations",
      "Lead with authority",
    ],
    popular: false,
  },
  {
    slug: "sales",
    icon: TrendingUp,
    title: "The Street CEO Sales Accelerator",
    description: "The exact sales strategies used to build 100+ rep teams. Learn to close like a Street CEO and scale your revenue.",
    price: "$597",
    originalPrice: "$1,197",
    duration: "6 Weeks",
    modules: 10,
    features: [
      "10 tactical modules",
      "Scripts & templates",
      "Objection handling guide",
      "Role-play exercises",
      "Performance tracking system",
    ],
    outcomes: [
      "Close more deals",
      "Handle any objection",
      "Build sales teams",
      "Hit targets consistently",
    ],
    popular: false,
  },
  {
    slug: "transformation",
    icon: Flame,
    title: "Urban Transformation Academy",
    description: "The complete life overhaul program. Transform every area of your life - mind, body, relationships, and wealth.",
    price: "$997",
    originalPrice: "$1,997",
    duration: "12 Weeks",
    modules: 20,
    features: [
      "20 comprehensive modules",
      "Personal audit tools",
      "90-day action plan",
      "Accountability partner matching",
      "Bonus: Nutrition & fitness guide",
    ],
    outcomes: [
      "Complete life transformation",
      "Holistic success system",
      "Lasting habit change",
      "New identity & purpose",
    ],
    popular: false,
  },
  {
    slug: "reset",
    icon: Shield,
    title: "Performance Reset Blueprint",
    description: "A quick-start program to reset your performance and get back on track. Perfect for those who've lost momentum.",
    price: "$197",
    originalPrice: "$397",
    duration: "2 Weeks",
    modules: 5,
    features: [
      "5 intensive modules",
      "Daily action plans",
      "Momentum tracker",
      "Quick-win strategies",
      "Reset workbook",
    ],
    outcomes: [
      "Break negative patterns",
      "Rebuild momentum fast",
      "Clear mental blocks",
      "Get back to winning",
    ],
    popular: false,
  },
];

const bundle = {
  title: "The Complete Street CEO Bundle",
  description: "Get ALL programs at a massive discount. The ultimate transformation package for serious high-performers.",
  originalValue: "$2,985",
  bundlePrice: "$1,497",
  savings: "$1,488",
  includes: programs.map(p => p.title),
};

export function ProgramsPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/3 -right-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Digital Programs
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Master The <span className="text-gold-gradient">Game</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70"
            >
              Proven systems and strategies from the streets to the boardroom.
              Choose your path to transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {programs.map((program, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard
                  className={`h-full flex flex-col ${
                    program.popular ? "ring-2 ring-[var(--gold)] relative" : ""
                  }`}
                  delay={index * 0.1}
                >
                  {program.popular && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-wide rounded-full">
                      Best Seller
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <program.icon className="w-7 h-7 text-[var(--gold)]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 flex-grow">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {program.modules} Modules
                    </span>
                  </div>

                  {/* Outcomes preview */}
                  <ul className="space-y-2 mb-6">
                    {program.outcomes.slice(0, 3).map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-3xl font-bold text-[var(--gold)]">
                      {program.price}
                    </span>
                    <span className="text-white/40 line-through text-sm">
                      {program.originalPrice}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link href={`/programs/${program.slug}`}>
                    <button className="w-full py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-[var(--gold)] hover:text-black transition-all">
                      Learn More
                    </button>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard className="p-8 lg:p-12 text-center ring-2 ring-[var(--gold)]">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

              <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-sm font-medium uppercase tracking-widest mb-6">
                Best Value
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                {bundle.title}
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                {bundle.description}
              </p>

              {/* What's included */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                {bundle.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-left">
                    <Check className="w-5 h-5 text-[var(--gold)] shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-white/40 line-through text-xl">
                  {bundle.originalValue}
                </span>
                <span className="font-display text-5xl font-bold text-[var(--gold)]">
                  {bundle.bundlePrice}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                  Save {bundle.savings}
                </span>
              </div>

              <MagneticButton size="xl">
                Get The Complete Bundle
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Risk-Free"
              title="30-Day Money-Back Guarantee"
              description="If you're not completely satisfied with any program, let us know within 30 days and we'll refund your purchase. No questions asked."
            />
            <GlassCard>
              <p className="text-white/70">
                I&apos;m so confident in these programs that I&apos;m willing to take all the risk.
                Try them, implement the strategies, and if you don&apos;t see results, you get your money back.
                That&apos;s how much I believe in what I&apos;ve created.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Shield className="w-12 h-12 text-[var(--gold)]" />
                <span className="font-display text-xl font-bold text-white">
                  100% Satisfaction Guaranteed
                </span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
