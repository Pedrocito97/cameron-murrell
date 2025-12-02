"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Crown, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const coachingTiers = [
  {
    name: "Group Mentorship",
    icon: Users,
    price: "$97",
    period: "/month",
    description: "Weekly group calls and community access for those starting their transformation journey.",
    features: [
      "Weekly live group coaching calls",
      "Private community access",
      "Replay library",
      "Monthly Q&A sessions",
      "Networking with like-minded individuals",
    ],
    cta: "Join Mentorship",
    popular: false,
  },
  {
    name: "Street CEO Academy",
    icon: Crown,
    price: "$297",
    period: "/month",
    description: "The complete transformation system. Courses, community, and direct access to Cameron.",
    features: [
      "Everything in Group Mentorship",
      "Full course library access",
      "Bi-weekly strategy calls",
      "Direct messaging access",
      "Exclusive workshops",
      "Implementation accountability",
      "Guest expert sessions",
    ],
    cta: "Join The Academy",
    popular: true,
  },
  {
    name: "1:1 Executive Coaching",
    icon: Zap,
    price: "Custom",
    period: "",
    description: "Premium, high-touch coaching for serious high-performers ready for rapid transformation.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Unlimited direct access",
      "Custom strategy development",
      "Performance tracking",
      "Crisis support",
      "VIP event access",
      "Lifetime community membership",
      "Personal brand development",
    ],
    cta: "Apply Now",
    popular: false,
  },
];

const whoIsThisFor = [
  "Entrepreneurs who want to scale but feel stuck",
  "Sales professionals ready to become top performers",
  "Leaders who want to build high-performance teams",
  "Anyone serious about transforming their life and results",
  "Those who are done with excuses and ready for action",
];

const faqs = [
  {
    question: "How is this different from other coaching programs?",
    answer: "This isn't theory from someone who read it in a book. Everything I teach comes from real experience - building teams, closing deals, and transforming lives. I've been where you are and built my way out.",
  },
  {
    question: "What if I'm just starting out?",
    answer: "The Group Mentorship is perfect for those at the beginning of their journey. You'll get foundational strategies and community support without a massive investment. Start there and upgrade as you grow.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "Group Mentorship requires 2-3 hours per week. The Academy is 5-7 hours. 1:1 coaching is customized to your schedule but expect intensive work during our sessions together.",
  },
  {
    question: "What results can I expect?",
    answer: "Results vary based on your starting point and commitment. Members typically see significant mindset shifts within weeks, with tangible business and personal results following within 3-6 months of consistent application.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, both Group Mentorship and Academy memberships can be cancelled anytime. No long-term contracts. I want you here because you're getting results, not because you're locked in.",
  },
  {
    question: "How do I know which option is right for me?",
    answer: "Book a free consultation call. We'll discuss your goals, situation, and budget to determine the best path forward. No pressure, just honest advice.",
  },
];

export function CoachingPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -left-32" size="xl" delay={0} />
        <FloatingOrb className="bottom-1/4 -right-32" size="lg" delay={1} />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Transform Your Life
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Coaching & <span className="text-gold-gradient">Mentorship</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 mb-8"
            >
              Stop trying to figure it out alone. Get the strategies, accountability,
              and support you need to transform your results.
            </motion.p>
            <motion.div variants={staggerItem}>
              <a href="#pricing">
                <MagneticButton size="lg">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Is This For You?"
            title="Who I Work With"
            description="My coaching isn't for everyone. It's for those who are serious about change."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <GlassCard>
              <ul className="space-y-4">
                {whoIsThisFor.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-black">
        <div className="container-wide">
          <SectionHeading
            label="Investment"
            title="Choose Your Path"
            description="Every level is designed for a different stage of transformation. Start where you are."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {coachingTiers.map((tier, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard
                  className={`h-full flex flex-col ${
                    tier.popular ? "ring-2 ring-[var(--gold)] relative" : ""
                  }`}
                  delay={index * 0.1}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--gold)] text-black text-sm font-bold uppercase tracking-wide rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-4">
                      <tier.icon className="w-8 h-8 text-[var(--gold)]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-4xl font-bold text-[var(--gold)]">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-white/50">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-white/60 mt-3 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full font-display font-semibold uppercase tracking-wide ${
                      tier.popular
                        ? "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] hover-gold-glow"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <SectionHeading
            label="Questions?"
            title="Frequently Asked Questions"
          />

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

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12 text-center"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Not Sure Where To Start?
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Book a Free Consultation
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Let&apos;s talk about your goals and find the right path for your transformation.
              No pressure, no commitment - just honest advice.
            </p>
            <Link href="/contact">
              <MagneticButton size="xl">
                Book Free Call
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
