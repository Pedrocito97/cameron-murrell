"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  Book,
  Users,
  Sparkles,
  Lock,
  Zap,
  Gift,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { EmailCaptureForm } from "@/components/shared/email-capture-form";

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

const playbookBenefits = [
  "Mindset shifts that took me from nothing to 7 figures",
  "How to lead without credentials or degrees",
  "The 3 mistakes that cost me everything",
  "My daily discipline routine that drives results",
  "Street-smart strategies for any industry",
];

const innerCircleBenefits = [
  {
    icon: Mail,
    title: "Weekly Insights",
    description: "Actionable wisdom delivered to your inbox every week.",
  },
  {
    icon: Zap,
    title: "First Access",
    description: "Be first to know about new content and opportunities.",
  },
  {
    icon: Lock,
    title: "Exclusive Strategies",
    description: "Insights I only share with the Inner Circle.",
  },
  {
    icon: Users,
    title: "Community Invites",
    description: "Exclusive events, workshops, and community calls.",
  },
  {
    icon: Gift,
    title: "Member-Only Offers",
    description: "Special pricing and early access to programs.",
  },
  {
    icon: Sparkles,
    title: "Behind The Scenes",
    description: "Follow the rebuild journey. Wins, losses, lessons.",
  },
];

const testimonials = [
  {
    quote:
      "Cameron's emails are the only ones I actually open. No BS, just straight value.",
    author: "Marcus T.",
    role: "Sales Manager",
  },
  {
    quote:
      "The Playbook changed how I approach my business. The weekly emails keep me accountable.",
    author: "Sophie R.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Finally someone who tells it how it is. The Inner Circle is where the real ones hang out.",
    author: "David K.",
    role: "Team Leader",
  },
];

export function InnerCircleContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.08]" />

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
              Free Access
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
            >
              Join The <span className="text-gold-gradient">Inner Circle</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70 mb-10"
            >
              Get exclusive strategies, behind-the-scenes access, and the free
              Playbook that&apos;s helped thousands transform.
            </motion.p>

            <motion.div variants={itemVariants}>
              <GlassCard className="max-w-md mx-auto">
                <EmailCaptureForm
                  ctaText="Send Me The Playbook"
                  showName={true}
                  variant="default"
                />
                <div className="flex items-center justify-center gap-4 mt-4 text-white/40 text-xs">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> 100% Free
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Instant Access
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 bg-[var(--charcoal)] border-y border-white/5">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            <div>
              <span className="font-display text-3xl font-bold text-[var(--gold)]">
                5,000+
              </span>
              <span className="text-white/60 text-sm ml-2">Members</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div>
              <span className="font-display text-3xl font-bold text-[var(--gold)]">
                2,500+
              </span>
              <span className="text-white/60 text-sm ml-2">Downloads</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                />
              ))}
              <span className="text-white/60 text-sm ml-2">4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Section */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Your Free Gift
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                The <span className="text-gold-gradient">Playbook</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                10 lessons packed with the exact strategies, mindsets, and
                frameworks I&apos;ve used to build, lose, and rebuild. No theory -
                just what works.
              </p>

              <ul className="space-y-4 mb-8">
                {playbookBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[var(--gold)]" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <a href="#get-playbook">
                <MagneticButton size="lg">
                  Get The Free Playbook
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>

            {/* Playbook Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                <div className="relative z-10 bg-gradient-to-br from-[var(--charcoal)] to-black rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="aspect-[3/4] flex flex-col justify-between">
                    <div>
                      <span className="text-[var(--gold)] text-xs uppercase tracking-widest">
                        Free Download
                      </span>
                      <h3 className="font-display text-3xl font-bold text-white mt-2 mb-4">
                        CAMERON MURRELL
                        <br />
                        <span className="text-gold-gradient">PLAYBOOK</span>
                      </h3>
                      <p className="text-white/60 text-sm">
                        10 Lessons for Building,
                        <br />
                        Losing & Rebuilding Everything
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 flex items-center justify-center">
                        <Book className="w-6 h-6 text-[var(--gold)]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Cameron Murrell
                        </p>
                        <p className="text-white/40 text-xs">
                          Coach & Entrepreneur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 bottom-0 bg-[var(--gold)]/5 rounded-2xl -z-10" />
                <div className="absolute top-8 left-8 right-8 bottom-0 bg-[var(--gold)]/3 rounded-2xl -z-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Inside The Circle
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              What You <span className="text-gold-gradient">Get</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innerCircleBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              What Members Say
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              From The <span className="text-gold-gradient">Circle</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-playbook" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Join 5,000+ Members
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Get The Playbook &<br />
                Enter The Circle
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Your transformation starts with a single step. Drop your email and
                get instant access.
              </p>
            </motion.div>

            <GlassCard className="max-w-md mx-auto">
              <EmailCaptureForm
                ctaText="Join The Inner Circle"
                showName={true}
                variant="default"
              />
              <p className="text-white/40 text-xs mt-4 text-center">
                No spam. Unsubscribe anytime. Your data stays private.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
