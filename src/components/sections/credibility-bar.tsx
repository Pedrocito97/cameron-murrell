"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const credentials = [
  "UK",
  "Ireland",
  "USA",
  "100+ Reps",
  "£1M+ Years",
  "Sales Leader",
];

export function CredibilityBar() {
  return (
    <section className="relative py-8 bg-[var(--charcoal)] border-y border-white/5 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="container-wide"
      >
        <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
