"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Zap,
  Users,
  Play,
  ArrowRight,
  X,
  Calendar,
  MessageSquare,
  Target,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { CalendlyEmbed } from "@/components/shared/calendly-embed";
import { EmailCaptureForm } from "@/components/shared/email-capture-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const coachingOptions = [
  {
    name: "1-on-1 Coaching",
    icon: Zap,
    tagline: "Premium Transformation",
    description:
      "Weekly private sessions with Cameron. Custom strategy, unlimited support, and direct access.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Unlimited direct access",
      "Custom strategy development",
      "Performance tracking",
      "VIP event access",
      "Crisis support",
    ],
    ctaText: "Apply Now",
    highlighted: true,
  },
  {
    name: "Group Training",
    icon: Users,
    tagline: "Team Transformation",
    description:
      "Live group sessions with accountability partners. Build alongside a community of action-takers.",
    features: [
      "Live group coaching calls",
      "Private community access",
      "Accountability partners",
      "Monthly Q&A with Cameron",
      "Full replay library",
      "Networking opportunities",
    ],
    ctaText: "Book a Call",
    highlighted: false,
  },
  {
    name: "Online Workshop",
    icon: Play,
    tagline: "Self-Paced Learning",
    description:
      "Core frameworks and strategies at your own pace. Perfect for self-starters.",
    features: [
      "Full course library",
      "Core transformation frameworks",
      "Implementation guides",
      "Community access",
      "Lifetime updates",
      "Mobile-friendly",
    ],
    ctaText: "Join Waitlist",
    highlighted: false,
  },
];

const whoIsThisFor = [
  "Ready for real change and hungry for transformation",
  "Want proven systems, not more theory",
  "Building or leading high-performance teams",
  "Rebuilding and serious about results",
  "Done with excuses and ready for action",
];

const notForYou = [
  "Looking for get-rich-quick schemes",
  "Not willing to put in the work",
  "Making excuses instead of progress",
  "Wanting someone to do it for you",
];

const transformationProcess = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "Discuss your goals and challenges",
  },
  {
    icon: Target,
    title: "Assessment",
    description: "Identify gaps and fastest path forward",
  },
  {
    icon: Calendar,
    title: "Custom Plan",
    description: "Strategy designed for your situation",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "Execute with support and accountability",
  },
];

const faqs = [
  {
    question: "How is this different from other coaching programs?",
    answer:
      "This isn't theory from someone who read it in a book. Everything I teach comes from real experience - building teams, closing deals, losing everything, and rebuilding.",
  },
  {
    question: "What if I'm just starting out?",
    answer:
      "The Online Workshop or Group Training are perfect for those earlier in their journey. Book a call and we'll figure out the right fit together.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Group Training requires 2-3 hours per week. The Workshop is self-paced. 1:1 coaching is customized to your schedule.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Members typically see significant mindset shifts within weeks, with tangible business and personal results within 3-6 months.",
  },
];

export function CoachingPageContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/speaking/cameron-speaking-medium.jpg"
            alt="Cameron Murrell coaching"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
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
              Transform Your Results
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.9]"
            >
              Stop Figuring
              <br />
              It Out <span className="text-gold-gradient">Alone</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70 max-w-2xl mb-10"
            >
              Get the strategies, accountability, and support you need to
              transform your business, your team, and yourself.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a href="#options">
                <MagneticButton size="lg">
                  Find Your Path
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Read This First
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Not For <span className="text-gold-gradient">Everyone</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <GlassCard className="h-full">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  This IS For You If...
                </h3>
                <ul className="space-y-4">
                  {whoIsThisFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard className="h-full border-red-500/20">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  This is NOT For You If...
                </h3>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaching Options */}
      <section id="options" className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Choose Your Path
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              How We Work <span className="text-gold-gradient">Together</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-6"
          >
            {coachingOptions.map((option, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard
                  className={`h-full flex flex-col ${
                    option.highlighted ? "ring-2 ring-[var(--gold)] relative" : ""
                  }`}
                >
                  {option.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--gold)] text-black text-sm font-bold uppercase tracking-wide rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                      <option.icon className="w-8 h-8 text-[var(--gold)]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {option.name}
                    </h3>
                    <p className="text-[var(--gold)] text-sm uppercase tracking-wide">
                      {option.tagline}
                    </p>
                  </div>

                  <p className="text-white/60 text-center mb-6">
                    {option.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#book-call">
                    <Button
                      className={`w-full font-display font-semibold uppercase tracking-wide ${
                        option.highlighted
                          ? "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {option.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              How It Works
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              The <span className="text-gold-gradient">Process</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {transformationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--gold)]/10 border-2 border-[var(--gold)]/30 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-[var(--gold)]" />
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

      {/* FAQ */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Questions?
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Frequently <span className="text-gold-gradient">Asked</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-white hover:text-[var(--gold)] text-left font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section id="book-call" className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to Start?
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Book Your <span className="text-gold-gradient">Discovery Call</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Let&apos;s discuss your goals and find the right path for your
              transformation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-0 overflow-hidden">
              <CalendlyEmbed
                url="https://calendly.com/thestreetceo/coaching-discovery"
                height={700}
              />
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
