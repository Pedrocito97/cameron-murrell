"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MessageSquare, Mic, Users, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingOrb } from "@/components/shared/floating-orb";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactOptions = [
  {
    icon: Users,
    title: "Coaching & Mentorship",
    description: "Apply for 1:1 coaching or join The Street CEO Academy",
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
    email: "media@thestreetceo.com",
    linkText: "media@thestreetceo.com",
  },
  {
    icon: MessageSquare,
    title: "General Enquiries",
    description: "Questions, partnerships, or anything else",
    email: "contact@thestreetceo.com",
    linkText: "contact@thestreetceo.com",
  },
];

const socialLinks = [
  { href: "https://instagram.com/thestreetceo", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/thestreetceo", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/cameronmurrell", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@thestreetceo", icon: Youtube, label: "YouTube" },
];

export function ContactPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-black">
        <FloatingOrb className="top-1/4 -right-32" size="xl" delay={0} />

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
              Get In Touch
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let&apos;s <span className="text-gold-gradient">Connect</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70"
            >
              Whether you&apos;re ready to transform your life, book a speaking engagement,
              or explore partnership opportunities - I&apos;m here.
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
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {contactOptions.map((option, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard className="h-full" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                      <option.icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {option.title}
                      </h3>
                      <p className="text-white/60 mb-4">
                        {option.description}
                      </p>
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

      {/* Contact Form */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label="Send A Message"
                title="General Enquiries"
                align="left"
              />
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40"
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
                    className="bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={5}
                    className="bg-[var(--charcoal)] border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12 hover-gold-glow"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Social & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <SectionHeading
                label="Follow The Journey"
                title="Connect On Social"
                align="left"
              />
              <p className="text-white/60 mb-8">
                Get daily motivation, behind-the-scenes content, and real-time insights.
                Join thousands following The Street CEO movement.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
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
                    <span className="font-semibold text-white">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Response Time */}
              <GlassCard>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-white/60">
                  We aim to respond to all enquiries within 24-48 business hours.
                  For urgent speaking requests, please indicate this in your subject line.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
