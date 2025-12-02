"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function AboutPreview() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[800px] bg-gradient-to-l from-[var(--gold)]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Urban Street Collage Style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="relative"
          >
            {/* Main Image - UK Council Estate / Gritty Urban */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=987&auto=format&fit=crop"
                alt="Gritty urban council estate - where it all started"
                fill
                className="object-cover"
                quality={85}
              />
              {/* Heavy overlay for mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              {/* Gold border accent */}
              <div className="absolute inset-0 border-2 border-[var(--gold)]/20 rounded-2xl" />

              {/* Street text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="font-display text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight"
                >
                  From The
                  <span className="block text-[var(--gold)]">Concrete</span>
                </motion.p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-black border border-[var(--gold)]/30 rounded-xl p-5 backdrop-blur-sm"
            >
              <div className="font-display text-4xl font-bold text-[var(--gold)]">10+</div>
              <div className="text-white/70 text-sm font-medium">Years In The Trenches</div>
            </motion.div>

            {/* Quote overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute top-6 right-6 bg-black/90 backdrop-blur-sm border border-[var(--gold)]/20 rounded-lg p-4 max-w-[200px]"
            >
              <Quote className="w-5 h-5 text-[var(--gold)] mb-2" />
              <p className="text-white/80 text-sm italic">
                &ldquo;The streets taught me more than any school ever could.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              The Man Behind The Movement
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              From The Streets
              <br />
              <span className="text-gold-gradient">To The Boardroom</span>
            </h2>

            {/* Story - Raw and authentic */}
            <div className="space-y-4 text-white/70 text-lg mb-8">
              <p className="text-white/90 font-medium">
                I didn&apos;t have connections. I didn&apos;t have capital. I didn&apos;t have a safety net.
              </p>
              <p>
                What I had was hunger. The kind that wakes you up at 5am and keeps you grinding when everyone else quits. The kind that turns &ldquo;no&rdquo; into fuel.
              </p>
              <p>
                From door-to-door sales in the UK to building international teams across Ireland and the USA — every lesson was paid for in blood, sweat, and rejection.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Street-Smart Strategy",
                "Battle-Tested Methods",
                "Real Results Only",
                "Zero Fluff Approach",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <span className="text-white/80 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <MagneticButton size="lg">
                Read The Full Story
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
