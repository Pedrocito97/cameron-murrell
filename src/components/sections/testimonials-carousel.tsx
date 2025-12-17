"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    role: "From Sales Rep to Sales Director",
    location: "London, UK",
    content:
      "Cameron showed me the game isn't rigged — you just need the right playbook. Doubled my income in 6 months.",
    result: "2x Revenue",
  },
  {
    name: "Sarah J.",
    role: "From Startup Founder to 7-Figure CEO",
    location: "Manchester, UK",
    content:
      "He didn't give me sympathy — he gave me strategy. Hit 7 figures this quarter. From struggling to financial freedom.",
    result: "7-Figure Exit",
  },
  {
    name: "Michael T.",
    role: "From Team Lead to VP of Sales",
    location: "Dublin, Ireland",
    content:
      "Went from struggling to survive to leading a team of 30. He taught me how to channel my drive into real results.",
    result: "Team of 30+",
  },
  {
    name: "David C.",
    role: "From Dropout to Tech Founder",
    location: "New York, USA",
    content:
      "The program isn't a course — it's a complete rewiring of how you see yourself. 3x growth and just getting started.",
    result: "3x Growth",
  },
  {
    name: "Emma R.",
    role: "From Burnout to Balanced Success",
    location: "Sydney, Australia",
    content:
      "Finally found the balance between ambition and wellbeing. Revenue up 150% while working fewer hours.",
    result: "150% Growth",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[350px] sm:w-[400px] lg:w-[450px]">
      <div className="h-full bg-[var(--charcoal)] border border-white/5 rounded-2xl p-6 lg:p-8 relative group hover:border-[var(--gold)]/30 transition-all duration-500">
        {/* Result badge */}
        <div className="absolute -top-3 right-6 px-4 py-1.5 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-wide rounded-full">
          {testimonial.result}
        </div>

        {/* Quote icon */}
        <Quote className="w-10 h-10 text-[var(--gold)]/20 mb-6" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
            <span className="font-display text-lg font-bold text-[var(--gold)]">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-[var(--gold)]">{testimonial.role}</div>
            <div className="text-xs text-white/50">{testimonial.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={containerRef}
      className="section-padding bg-[var(--background)] overflow-hidden"
    >
      <div className="container-wide mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Real People.{" "}
            <span className="text-gold-gradient">Real Results.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <motion.div style={{ x }} className="flex gap-6 px-6 pb-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
        {/* Duplicate for seamless feel */}
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <TestimonialCard key={`dup-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-wide mt-12"
      >
        <div className="flex flex-wrap justify-center gap-12 text-center">
          {[
            { value: "500+", label: "Lives Transformed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "97%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="font-display text-3xl font-bold text-[var(--gold)]">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
