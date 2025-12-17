"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mic, Users, BookOpen, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function BentoCard({ children, className = "", href }: BentoCardProps) {
  const content = (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-2xl bg-[var(--charcoal)] border border-white/5 p-6 transition-all duration-500 hover:border-[var(--gold)]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] ${className}`}
    >
      {children}
      {href && (
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-[var(--gold)]" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export function BentoGrid() {
  return (
    <section className="section-padding bg-[var(--background)]">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
            What I Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Transform Your Life &{" "}
            <span className="text-gold-gradient">Business</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Large Photo Card - Spans 2 columns */}
          <BentoCard className="lg:col-span-2 lg:row-span-2 p-0" href="/about">
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <Image
                src="/images/speaking/cameron-speaking-medium.jpg"
                alt="Cameron Murrell"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[var(--gold)] text-sm uppercase tracking-wider font-medium">
                  The Story
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-2">
                  Built From Real Experience
                </h3>
                <p className="text-white/60 mt-2 text-sm lg:text-base">
                  From nothing to 7 figures. Lost it all. Rebuilt stronger.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Speaking Card */}
          <BentoCard className="lg:col-span-1" href="/speaking">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Keynote Speaking
              </h3>
              <p className="text-white/60 text-sm flex-grow">
                High-impact presentations that transform audiences
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[var(--gold)] font-display text-2xl font-bold">
                  50+
                </span>
                <span className="text-white/50 text-sm ml-2">Events</span>
              </div>
            </div>
          </BentoCard>

          {/* Coaching Card */}
          <BentoCard className="lg:col-span-1" href="/coaching">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                1-on-1 Coaching
              </h3>
              <p className="text-white/60 text-sm flex-grow">
                Personal transformation for ambitious leaders
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[var(--gold)] font-display text-2xl font-bold">
                  500+
                </span>
                <span className="text-white/50 text-sm ml-2">Clients</span>
              </div>
            </div>
          </BentoCard>

          {/* Programs Card */}
          <BentoCard className="lg:col-span-1" href="/programs">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Programs
              </h3>
              <p className="text-white/60 text-sm flex-grow">
                Structured frameworks for mindset & sales mastery
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[var(--gold)] font-display text-2xl font-bold">
                  3
                </span>
                <span className="text-white/50 text-sm ml-2">Core Programs</span>
              </div>
            </div>
          </BentoCard>

          {/* Results Card */}
          <BentoCard className="lg:col-span-1 bg-gradient-to-br from-[var(--gold)]/20 to-[var(--charcoal)]">
            <div className="h-full flex flex-col items-center justify-center text-center py-4">
              <TrendingUp className="w-8 h-8 text-[var(--gold)] mb-4" />
              <span className="text-[var(--gold)] font-display text-4xl lg:text-5xl font-bold">
                97%
              </span>
              <span className="text-white/80 text-sm mt-2">Success Rate</span>
              <p className="text-white/50 text-xs mt-2">
                Client satisfaction across all programs
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
