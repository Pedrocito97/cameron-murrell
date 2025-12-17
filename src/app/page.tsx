import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroVideo } from "@/components/sections/hero-video";
import { BentoGrid } from "@/components/sections/bento-grid";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <BentoGrid />
        <TestimonialsCarousel />
        <JourneyTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
