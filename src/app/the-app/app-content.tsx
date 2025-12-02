"use client";

import { motion } from "framer-motion";
import {
  Play,
  CheckSquare,
  BookOpen,
  Users,
  Trophy,
  Bell,
  Smartphone,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Play,
    title: "Daily Mindset Videos",
    description: "Start every morning with a powerful mindset video from Cameron. Less than 5 minutes to transform your day.",
  },
  {
    icon: CheckSquare,
    title: "Discipline Tracker",
    description: "Track your daily habits and build unbreakable discipline. Gamified progress to keep you accountable.",
  },
  {
    icon: BookOpen,
    title: "Sales & Leadership Lessons",
    description: "Bite-sized lessons you can consume on the go. Practical strategies you can implement immediately.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with other high-performers. Share wins, ask questions, and find accountability partners.",
  },
  {
    icon: Trophy,
    title: "Weekly Challenges",
    description: "Push yourself with weekly challenges designed to build your skills and expand your comfort zone.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a habit. Intelligent notifications that adapt to your schedule and keep you on track.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Download",
    description: "Get the app on iOS or Android",
  },
  {
    step: "2",
    title: "Set Your Goals",
    description: "Define your transformation targets",
  },
  {
    step: "3",
    title: "Daily Action",
    description: "Complete your daily disciplines",
  },
  {
    step: "4",
    title: "Track & Win",
    description: "Watch your progress compound",
  },
];

export function AppPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/3 -right-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-sm font-medium uppercase tracking-widest mb-6"
              >
                Coming Soon
              </motion.span>
              <motion.h1
                variants={staggerItem}
                className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                The Street CEO{" "}
                <span className="text-gold-gradient">App</span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-xl text-white/70 mb-8"
              >
                Your pocket performance coach. Daily mindset, discipline tracking,
                and community - everything you need to win, right in your phone.
              </motion.p>
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#waitlist">
                  <MagneticButton size="lg">
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </MagneticButton>
                </a>
              </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[280px] h-[560px] bg-gradient-to-b from-[var(--charcoal)] to-[var(--street-grey)] rounded-[3rem] border-4 border-[var(--street-grey)] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[2.5rem] bg-black overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

                    {/* App content placeholder */}
                    <div className="p-6 pt-10">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-6 text-xs text-white/50">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white/50 rounded-sm" />
                          <div className="w-4 h-2 bg-white/50 rounded-sm" />
                          <div className="w-6 h-3 bg-[var(--gold)] rounded-sm" />
                        </div>
                      </div>

                      {/* App header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gold)]/20 border border-[var(--gold)]/30 flex items-center justify-center mb-3">
                          <span className="font-display text-2xl font-bold text-[var(--gold)]">S</span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-white">Good Morning</h3>
                        <p className="text-white/50 text-sm">Let&apos;s build discipline</p>
                      </div>

                      {/* Daily video card */}
                      <div className="bg-[var(--charcoal)] rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                            <Play className="w-5 h-5 text-[var(--gold)]" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">Today&apos;s Mindset</p>
                            <p className="text-white/50 text-xs">4:32 min</p>
                          </div>
                        </div>
                      </div>

                      {/* Habits */}
                      <div className="space-y-2">
                        {["Wake up early", "Exercise", "Read 10 pages"].map((habit, i) => (
                          <div key={i} className="flex items-center gap-3 bg-[var(--street-grey)] rounded-lg p-3">
                            <div className={`w-5 h-5 rounded border-2 ${i === 0 ? 'bg-[var(--gold)] border-[var(--gold)]' : 'border-white/30'}`} />
                            <span className="text-white text-sm">{habit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-[var(--gold)]/10 blur-3xl rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Features"
            title="Everything You Need To Win"
            description="The ultimate companion for high-performers committed to transformation."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Simple"
            title="How It Works"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent" />
                )}
                <GlassCard className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--gold)]/10 border-2 border-[var(--gold)]/30 flex items-center justify-center mb-4">
                    <span className="font-display text-2xl font-bold text-[var(--gold)]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-[var(--gold)]" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Be The First To Know
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Join the waitlist for early access. Founding members get exclusive features
              and lifetime discount.
            </p>

            <GlassCard>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40 h-12"
                />
                <Button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12 hover-gold-glow"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              <p className="text-white/40 text-sm mt-4">
                Join 2,500+ people waiting for launch
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
