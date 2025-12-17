"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Mic,
  Users,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/shared/glass-card";
import { CalendlyEmbed } from "@/components/shared/calendly-embed";

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

const contactOptions = [
  {
    icon: Users,
    title: "Coaching & Mentorship",
    description: "Apply for 1-on-1 coaching, group training, or workshops",
    link: "/coaching",
    linkText: "View Coaching Options",
  },
  {
    icon: Mic,
    title: "Speaking Enquiries",
    description: "Book Cameron for your next event, conference, or workshop",
    link: "/speaking",
    linkText: "Explore Speaking",
  },
  {
    icon: Mail,
    title: "Media & Press",
    description: "Podcast appearances, interviews, and media opportunities",
    email: "hello@cameronmurrell.com",
    linkText: "hello@cameronmurrell.com",
  },
  {
    icon: MessageSquare,
    title: "General Enquiries",
    description: "Questions, partnerships, or anything else",
    email: "hello@cameronmurrell.com",
    linkText: "hello@cameronmurrell.com",
  },
];

const socialLinks = [
  {
    href: "https://instagram.com/cameronmurrell",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/cameronmurrell",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/@cameronmurrell",
    icon: Youtube,
    label: "YouTube",
  },
];

export function ContactPageContent() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)] opacity-[0.05]" />

        <div className="container-wide relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-6"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
            >
              Let&apos;s <span className="text-gold-gradient">Connect</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-white/70"
            >
              Whether you&apos;re ready to transform, book a speaking engagement,
              or explore partnerships - I&apos;m here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {contactOptions.map((option, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <option.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {option.title}
                      </h3>
                      <p className="text-white/60 mb-4">{option.description}</p>
                      {option.link ? (
                        <Link
                          href={option.link}
                          className="text-[var(--gold)] font-semibold hover:underline"
                        >
                          {option.linkText} &rarr;
                        </Link>
                      ) : (
                        <a
                          href={`mailto:${option.email}`}
                          className="text-[var(--gold)] font-semibold hover:underline"
                        >
                          {option.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="section-padding bg-[var(--background)]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
              Skip the back-and-forth
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Book a <span className="text-gold-gradient">Discovery Call</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-0 overflow-hidden">
              <CalendlyEmbed
                url="https://calendly.com/thestreetceo/discovery"
                height={700}
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Form & Social */}
      <section className="section-padding bg-[var(--charcoal)]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Prefer to write?
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
                Send A <span className="text-gold-gradient">Message</span>
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    className="bg-black/50 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-4">
                Follow The Journey
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
                Connect On <span className="text-gold-gradient">Social</span>
              </h2>

              <p className="text-white/60 mb-8">
                Get daily insights, behind-the-scenes content, and real-time
                updates. Join thousands following the journey.
              </p>

              <div className="grid gap-4 mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-4 hover:border-[var(--gold)]/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                      <social.icon className="w-6 h-6 text-[var(--gold)]" />
                    </div>
                    <span className="font-semibold text-white">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              <GlassCard>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-white/60">
                  We respond to all enquiries within 24-48 business hours. For
                  urgent speaking requests, indicate this in your subject line.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
