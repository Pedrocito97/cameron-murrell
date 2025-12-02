"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mic, Users, Globe, Play } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const speakingTopics = [
  "Street to CEO: Built From Nothing",
  "Discipline Over Everything",
  "High-Performance Sales Leadership",
  "The Transformation Mindset",
];

export function SpeakingPreview() {
  return (
    <section className="relative section-padding bg-[var(--charcoal)] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-gradient-to-r from-[var(--gold)]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Book Cameron
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-display text-section text-white mb-6"
            >
              I Don&apos;t{" "}
              <span className="text-gold-gradient">Motivate</span>.
              <br />I <span className="text-gold-gradient">Ignite</span>.
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-white/70 mb-8"
            >
              No rehearsed scripts. No corporate jargon. Just raw truth from someone who&apos;s lived it.
              Your audience won&apos;t just be inspired — they&apos;ll be transformed.
            </motion.p>

            {/* Topics */}
            <motion.div variants={staggerItem} className="mb-8">
              <h3 className="font-semibold text-white mb-4">Signature Keynotes:</h3>
              <ul className="space-y-3">
                {speakingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span className="text-white/80">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Link href="/speaking">
                <MagneticButton size="lg">
                  Book Me For Your Event
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Video Thumbnail with Urban Stage Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              {/* Urban crowd/event image */}
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop"
                alt="Live event - raw energy"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={85}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.7)] transition-shadow duration-300"
                >
                  <Play className="w-8 h-8 text-black ml-1 fill-black" />
                </motion.div>
              </div>

              {/* Gold border */}
              <div className="absolute inset-0 border-2 border-[var(--gold)]/20 rounded-2xl group-hover:border-[var(--gold)]/40 transition-colors" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">Watch the Keynote Reel</p>
                <p className="text-white/60 text-sm">2 min • Most requested highlights</p>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 flex justify-center gap-4 lg:gap-6">
              {[
                { icon: Mic, value: "50+", label: "Events" },
                { icon: Users, value: "10K+", label: "Audience" },
                { icon: Globe, value: "5", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card px-4 py-3 text-center"
                >
                  <stat.icon className="w-5 h-5 text-[var(--gold)] mx-auto mb-1" />
                  <div className="font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
