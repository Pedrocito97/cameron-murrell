"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  TrendingUp,
  BookOpen,
  Flame,
  Shield,
  Clock,
  Check,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const programs = [
  {
    slug: "mindset",
    icon: Target,
    title: "Mindset Mastery",
    description:
      "Master the mental frameworks that separate winners from everyone else. Build unshakeable discipline.",
    price: "$497",
    originalPrice: "$997",
    duration: "8 Weeks",
    modules: 12,
    outcomes: [
      "Unshakeable mental toughness",
      "Daily discipline systems",
      "Winner's identity",
    ],
    popular: true,
  },
  {
    slug: "leadership",
    icon: BookOpen,
    title: "Leadership System",
    description:
      "Build and lead high-performing teams. Transform from contributor to visionary leader.",
    price: "$697",
    originalPrice: "$1,297",
    duration: "10 Weeks",
    modules: 15,
    outcomes: [
      "Build loyal, high-performing teams",
      "Create winning culture",
      "Scale your operations",
    ],
    popular: false,
  },
  {
    slug: "sales",
    icon: TrendingUp,
    title: "Sales Accelerator",
    description:
      "The exact sales strategies used to build 100+ rep teams. Learn to close and scale revenue.",
    price: "$597",
    originalPrice: "$1,197",
    duration: "6 Weeks",
    modules: 10,
    outcomes: [
      "Close more deals",
      "Handle any objection",
      "Hit targets consistently",
    ],
    popular: false,
  },
  {
    slug: "transformation",
    icon: Flame,
    title: "Total Transformation",
    description:
      "The complete life overhaul program. Transform every area - mind, body, relationships, wealth.",
    price: "$997",
    originalPrice: "$1,997",
    duration: "12 Weeks",
    modules: 20,
    outcomes: [
      "Complete life transformation",
      "Holistic success system",
      "New identity & purpose",
    ],
    popular: false,
  },
];

const bundle = {
  title: "The Complete Bundle",
  description:
    "Get ALL programs at a massive discount. The ultimate transformation package.",
  originalValue: "$2,985",
  bundlePrice: "$1,497",
  savings: "$1,488",
};

export function ProgramsPageContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.05]" />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-6"
            >
              Digital Programs
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
            >
              Master The <span className="text-gold-gradient">Game</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70"
            >
              Proven systems and strategies from real experience. Choose your path
              to transformation.
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
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard
                  className={`h-full flex flex-col ${
                    program.popular ? "ring-2 ring-[var(--gold)] relative" : ""
                  }`}
                >
                  {program.popular && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-wide rounded-full">
                      Best Seller
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <program.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span>{program.modules} Modules</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/60 mb-6 flex-grow">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-[var(--gold)]">
                        {program.price}
                      </span>
                      <span className="text-white/40 line-through text-sm">
                        {program.originalPrice}
                      </span>
                    </div>
                    <Link href={`/programs/${program.slug}`}>
                      <MagneticButton variant="outline" size="sm">
                        Learn More
                      </MagneticButton>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 lg:p-12 text-center ring-2 ring-[var(--gold)] relative">
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

              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {programs.map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--gold)]" />
                    <span className="text-white/80 text-sm">{p.title}</span>
                  </div>
                ))}
              </div>

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

      {/* Guarantee */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Risk-Free
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                30-Day <span className="text-gold-gradient">Guarantee</span>
              </h2>
            </motion.div>

            <GlassCard>
              <p className="text-white/70 mb-6">
                If you&apos;re not completely satisfied with any program, let us
                know within 30 days and we&apos;ll refund your purchase. No
                questions asked.
              </p>
              <div className="flex items-center justify-center gap-4">
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
