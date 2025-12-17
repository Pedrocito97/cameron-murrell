"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mic,
  Users,
  Globe,
  Clock,
  ArrowRight,
  Star,
  Building2,
  Trophy,
  Rocket,
  Target,
  TrendingUp,
  Brain,
  Download,
  Calendar,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { CalendlyEmbed } from "@/components/shared/calendly-embed";

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

const stats = [
  { value: "50+", label: "Events" },
  { value: "10K+", label: "Audience Reached" },
  { value: "5", label: "Countries" },
  { value: "98%", label: "Satisfaction" },
];

const keynotes = [
  {
    title: "Discipline Over Everything",
    description:
      "Why motivation fails and discipline delivers. A tactical breakdown of the systems that separate top performers from everyone else.",
    duration: "45-60 minutes",
    idealFor: "Sales teams, corporate training, leadership events",
  },
  {
    title: "High-Performance Sales Leadership",
    description:
      "The exact strategies used to build and scale 100+ rep teams across three countries. For sales teams and leadership conferences.",
    duration: "60-90 minutes",
    idealFor: "Sales conferences, management summits, B2B events",
  },
  {
    title: "The Transformation Mindset",
    description:
      "How to think different, move different, and win different. Street-smart business strategy for entrepreneurs and leaders.",
    duration: "45-60 minutes",
    idealFor: "Entrepreneurship events, startup conferences",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Transform company culture with authentic keynotes that drive action.",
    size: "100-5,000+ attendees",
  },
  {
    icon: Target,
    title: "Sales Kickoffs",
    description: "Fire up your sales force with tactical strategies that close deals.",
    size: "50-500 attendees",
  },
  {
    icon: Trophy,
    title: "Leadership Summits",
    description: "Equip leaders with real-world wisdom for modern challenges.",
    size: "50-300 attendees",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship Events",
    description: "Inspire founders with the mindset needed to build from nothing.",
    size: "100-2,000 attendees",
  },
];

const testimonials = [
  {
    quote:
      "Cameron brought an energy to our conference that we've never experienced before. Our team is still talking about it months later.",
    author: "Sarah Mitchell",
    role: "VP of Sales, TechCorp UK",
  },
  {
    quote:
      "Raw, authentic, and incredibly impactful. Cameron doesn't just speak - he transforms the room.",
    author: "James Rodriguez",
    role: "Event Director, Leadership Summit",
  },
];

const galleryImages = [
  "/images/speaking/cameron-podium.jpg",
  "/images/speaking/cameron-speaking-medium.jpg",
  "/images/speaking/cameron-stage-duo.jpg",
  "/images/speaking/cameron-stage-group.jpg",
  "/images/speaking/cameron-audience.jpg",
  "/images/speaking/cameron-speaking-full.jpg",
];

export function SpeakingPageContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/speaking/cameron-speaking-full.jpg"
            alt="Cameron Murrell speaking on stage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

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
              Book Cameron
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.9]"
            >
              Keynotes That
              <br />
              <span className="text-gold-gradient">Transform</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70 max-w-2xl mb-10"
            >
              Raw energy. Real stories. Results that last beyond the event. Give
              your audience the wake-up call they need to execute.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#book-call">
                <MagneticButton size="lg">
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </a>
              <a href="#keynotes">
                <MagneticButton variant="outline" size="lg">
                  View Keynotes
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

      {/* Who Books Cameron */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Perfect For
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Who Books <span className="text-gold-gradient">Cameron</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {audiences.map((audience, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <audience.icon className="w-7 h-7 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {audience.description}
                  </p>
                  <span className="text-[var(--gold)] text-xs uppercase tracking-wide">
                    {audience.size}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Keynote Topics */}
      <section id="keynotes" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Signature Keynotes
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Three Powerful{" "}
              <span className="text-gold-gradient">Presentations</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-6"
          >
            {keynotes.map((keynote, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[var(--gold)]" />
                    <span className="text-white/50 text-sm">
                      {keynote.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {keynote.title}
                  </h3>
                  <p className="text-white/60 mb-6 flex-grow">
                    {keynote.description}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[var(--gold)] text-xs uppercase tracking-wide">
                      Ideal for: {keynote.idealFor}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              In Action
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Cameron <span className="text-gold-gradient">On Stage</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 ? "col-span-2 lg:col-span-1 row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Cameron speaking"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Client Feedback
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              What Event Organizers{" "}
              <span className="text-gold-gradient">Say</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-white/50">
                      {testimonial.role}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Book a Call */}
      <section id="book-call" className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Let&apos;s Talk
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Book a <span className="text-gold-gradient">Discovery Call</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Tell us about your event and let&apos;s explore how we can make it
              unforgettable.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-0 overflow-hidden">
              <CalendlyEmbed
                url="https://calendly.com/thestreetceo/discovery"
                height={700}
              />
            </GlassCard>
            <p className="text-center text-white/40 text-sm mt-4">
              Prefer email? Reach out at{" "}
              <a
                href="mailto:hello@cameronmurrell.com"
                className="text-[var(--gold)] hover:underline"
              >
                hello@cameronmurrell.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
