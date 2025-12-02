"use client";

import { motion } from "framer-motion";
import { Mic, Users, Globe, Clock, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { staggerContainer, staggerItem } from "@/lib/animations";

const keynotes = [
  {
    title: "Street to CEO: Built From Nothing",
    description: "My signature keynote. The raw, unfiltered story of transformation - from having nothing to building everything. Perfect for corporate events, sales conferences, and motivational gatherings.",
    duration: "45-90 minutes",
    topics: ["Mindset transformation", "Overcoming adversity", "Building from zero", "The power of discipline"],
  },
  {
    title: "Discipline Over Everything",
    description: "Why motivation fails and discipline delivers. A tactical breakdown of the systems and habits that separate top performers from everyone else.",
    duration: "45-60 minutes",
    topics: ["Daily routines of winners", "Building unbreakable habits", "Mental toughness", "Eliminating excuses"],
  },
  {
    title: "High-Performance Sales Leadership",
    description: "The exact strategies I used to build and scale 100+ rep teams across three countries. For sales teams and leadership conferences.",
    duration: "60-90 minutes",
    topics: ["Recruiting top talent", "Team culture creation", "Performance management", "Scaling operations"],
  },
  {
    title: "The Street CEO Mindset",
    description: "Street-smart business strategy for entrepreneurs and leaders. How to think different, move different, and win different.",
    duration: "45-60 minutes",
    topics: ["Strategic thinking", "Opportunity recognition", "Risk assessment", "Execution excellence"],
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Events" },
  { value: 10, suffix: "K+", label: "Audience Reached" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

const testimonials = [
  {
    quote: "Cameron brought an energy to our annual conference that we've never experienced before. Our team is still talking about it months later.",
    author: "Sarah Mitchell",
    role: "VP of Sales, TechCorp UK",
  },
  {
    quote: "Raw, authentic, and incredibly impactful. Cameron doesn't just speak - he transforms the room.",
    author: "James Rodriguez",
    role: "Event Director, Leadership Summit",
  },
];

const bookingProcess = [
  {
    step: "1",
    title: "Submit Enquiry",
    description: "Fill out the form with your event details",
  },
  {
    step: "2",
    title: "Discovery Call",
    description: "We'll discuss your goals and audience",
  },
  {
    step: "3",
    title: "Custom Proposal",
    description: "Receive a tailored speaking package",
  },
  {
    step: "4",
    title: "Book & Prepare",
    description: "Confirm dates and collaborate on content",
  },
];

export function SpeakingPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -right-32" size="xl" delay={0} />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
              >
                Book Cameron
              </motion.span>
              <motion.h1
                variants={staggerItem}
                className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Commanding The <span className="text-gold-gradient">Stage</span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-xl text-white/70 mb-8"
              >
                Bring raw energy, real stories, and transformational insights to your next event.
                Keynotes that move audiences from inspiration to action.
              </motion.p>
              <motion.div variants={staggerItem}>
                <a href="#enquiry">
                  <MagneticButton size="lg">
                    Enquire Now
                    <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </MagneticButton>
                </a>
              </motion.div>
            </motion.div>

            {/* Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--street-grey)] to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)]/30 flex items-center justify-center cursor-pointer hover:bg-[var(--gold)]/30 transition-all">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[var(--gold)] border-b-8 border-b-transparent ml-1" />
                  </div>
                  <p className="text-white/40 text-sm">Speaker Reel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--charcoal)] border-y border-white/5">
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
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote Topics */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Signature Keynotes"
            title="Speaking Topics"
            description="Each presentation is customized to your audience and objectives."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {keynotes.map((keynote, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[var(--gold)]" />
                    <span className="text-white/50 text-sm">{keynote.duration}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {keynote.title}
                  </h3>
                  <p className="text-white/60 mb-6">{keynote.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {keynote.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-full text-[var(--gold)] text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="What Event Organizers Say"
            title="Client Testimonials"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard delay={index * 0.1}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="How It Works"
            title="Booking Process"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < bookingProcess.length - 1 && (
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

      {/* Enquiry Form */}
      <section id="enquiry" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Get In Touch"
              title="Speaking Enquiry"
              description="Tell us about your event and we'll get back to you within 24-48 hours."
            />

            <GlassCard>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Name *
                    </label>
                    <Input
                      placeholder="Full name"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Organization
                    </label>
                    <Input
                      placeholder="Company/Organization"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Event Type
                  </label>
                  <Input
                    placeholder="Conference, Workshop, Corporate Event, etc."
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Expected Audience Size
                  </label>
                  <Input
                    placeholder="Approximate number of attendees"
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Tell Us About Your Event *
                  </label>
                  <Textarea
                    placeholder="Share details about your event, audience, and what you're hoping to achieve..."
                    rows={5}
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12 hover-gold-glow"
                >
                  Submit Enquiry
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
