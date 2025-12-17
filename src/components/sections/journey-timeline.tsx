"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const chapters = [
  {
    id: "origin",
    year: "Early Years",
    title: "The Beginning",
    subtitle: "No Connections. No Capital. Just Drive.",
    description:
      "Started with nothing but ambition and relentless work ethic. No safety net, no plan B — just the burning desire to build something meaningful.",
    color: "var(--gold)",
  },
  {
    id: "rise",
    year: "The Rise",
    title: "Building Empire",
    subtitle: "7 Figures by 25",
    description:
      "Built multiple successful operations, led teams across 3 countries, and generated millions in revenue. Proved that with the right mindset, anything is possible.",
    color: "var(--gold)",
  },
  {
    id: "fall",
    year: "The Fall",
    title: "Lost Everything",
    subtitle: "Rock Bottom",
    description:
      "Lost it all. The money, the status, the certainty. But in that darkness, discovered what really matters and what true resilience means.",
    color: "var(--gold)",
  },
  {
    id: "rebuild",
    year: "The Rebuild",
    title: "Stronger Than Before",
    subtitle: "From Ashes to Impact",
    description:
      "Rebuilt with purpose. Now dedicated to helping others avoid the mistakes and accelerate their success. Coaching, speaking, transforming lives.",
    color: "var(--gold)",
  },
];

export function JourneyTimeline() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="section-padding bg-[var(--charcoal)] overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
            The Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            From Nothing to{" "}
            <span className="text-gold-gradient">Everything</span>
          </h2>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />

          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-[var(--gold)] -translate-y-1/2"
            initial={{ width: "0%" }}
            animate={{
              width: `${(activeChapter / (chapters.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Timeline Points */}
          <div className="relative flex justify-between">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(index)}
                className="group flex flex-col items-center"
              >
                {/* Point */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index <= activeChapter
                      ? "bg-[var(--gold)] border-[var(--gold)]"
                      : "bg-[var(--charcoal)] border-white/30"
                  }`}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Label */}
                <span
                  className={`mt-4 text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors ${
                    index === activeChapter
                      ? "text-[var(--gold)]"
                      : "text-white/50"
                  }`}
                >
                  {chapter.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Content */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Text Content */}
              <div>
                <span className="text-[var(--gold)] text-sm uppercase tracking-wider font-medium">
                  Chapter {activeChapter + 1}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mt-2 mb-3">
                  {chapters[activeChapter].title}
                </h3>
                <p className="text-xl text-white/80 mb-4">
                  {chapters[activeChapter].subtitle}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {chapters[activeChapter].description}
                </p>

                {/* Navigation arrows */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() =>
                      setActiveChapter(Math.max(0, activeChapter - 1))
                    }
                    disabled={activeChapter === 0}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--gold)]/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveChapter(
                        Math.min(chapters.length - 1, activeChapter + 1)
                      )
                    }
                    disabled={activeChapter === chapters.length - 1}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--gold)]/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-[var(--gold)]/10 rounded-full blur-3xl" />

                  {/* Chapter Number */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="font-display text-[12rem] lg:text-[16rem] font-black text-white/5">
                      {String(activeChapter + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Icon/Symbol */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-[var(--gold)]">
                        {activeChapter + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
