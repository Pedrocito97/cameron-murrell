import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroHome } from "@/components/sections/hero-home";
import { CredibilityBar } from "@/components/sections/credibility-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { ProgramsShowcase } from "@/components/sections/programs-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SpeakingPreview } from "@/components/sections/speaking-preview";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <CredibilityBar />
        <AboutPreview />
        <ProgramsShowcase />
        <TestimonialsSection />
        <SpeakingPreview />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
