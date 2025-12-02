"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "J.M.",
    role: "Former Street Hustler → Sales Director",
    company: "London, UK",
    content: "I came from nothing. Council estate kid with no future. Cameron showed me the game isn't rigged — you just need the right playbook. 2x my income in 6 months.",
    rating: 5,
    result: "2x Revenue",
    initial: "JM",
  },
  {
    name: "S.J.",
    role: "Single Mom → 7-Figure CEO",
    company: "Manchester, UK",
    content: "I was stuck, broke, and scared. Cameron didn't give me sympathy — he gave me strategy. Hit 7 figures this quarter. From food stamps to financial freedom.",
    rating: 5,
    result: "7-Figure Exit",
    initial: "SJ",
  },
  {
    name: "M.T.",
    role: "Ex-Con → VP of Sales",
    company: "Dublin, Ireland",
    content: "Society wrote me off. Cameron didn't. Went from struggling to survive to leading a team of 30. The streets taught me hustle. He taught me how to channel it.",
    rating: 5,
    result: "Team of 30+",
    initial: "MT",
  },
  {
    name: "D.C.",
    role: "Dropout → Tech Founder",
    company: "New York, USA",
    content: "No degree. No connections. No excuses. The Academy isn't a course — it's a complete rewiring of how you see yourself. 3x growth and just getting started.",
    rating: 5,
    result: "3x Growth",
    initial: "DC",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-wide relative">
        <SectionHeading
          label="From The Trenches"
          title="Real People. Real Escapes."
          description="They came from nothing. Just like me. Here's what happens when you stop making excuses."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard className="h-full relative" delay={index * 0.1}>
                {/* Result badge */}
                <div className="absolute -top-3 right-6 px-3 py-1 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-wide rounded-full">
                  {testimonial.result}
                </div>

                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[var(--gold)]/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author - Anonymous Street Style */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--gold)]/30 bg-[var(--gold)]/10 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-[var(--gold)]">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-[var(--gold)]">{testimonial.role}</div>
                    <div className="text-xs text-white/50">{testimonial.company}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "500+", label: "Students Transformed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "97%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="px-6">
              <div className="font-display text-2xl font-bold text-[var(--gold)]">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
