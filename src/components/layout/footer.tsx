"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const footerLinks = {
  navigation: [
    { href: "/about", label: "About" },
    { href: "/coaching", label: "Coaching" },
    { href: "/programs", label: "Programs" },
    { href: "/speaking", label: "Speaking" },
    { href: "/app", label: "The App" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/programs", label: "Courses" },
    { href: "/coaching", label: "Mentorship" },
    { href: "/speaking", label: "Book Speaking" },
    { href: "#", label: "Free Resources" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/thestreetceo", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/thestreetceo", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/cameronmurrell", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/@thestreetceo", icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--charcoal)] border-t border-white/10">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />

      <div className="container-wide section-padding">
        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24"
        >
          <div className="glass-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest">
                  Join The Movement
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4">
                  The Street CEO Inner Circle
                </h3>
                <p className="text-white/70 max-w-md">
                  Get exclusive insights, strategies, and motivation delivered straight to your inbox. Join thousands transforming their lives.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/50 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Button
                  type="submit"
                  className="bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] font-display font-semibold uppercase tracking-wide h-12 px-8 hover-gold-glow"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-white">THE STREET</span>{" "}
                <span className="text-gold-gradient">CEO</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              From the streets to the boardroom. Building high-performers who transform their lives through discipline, strategy, and relentless action.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Contact */}
            <div className="mt-6">
              <a
                href="mailto:contact@thestreetceo.com"
                className="flex items-center gap-2 text-white/60 hover:text-[var(--gold)] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@thestreetceo.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} The Street CEO. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Built with discipline. Delivered with excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
