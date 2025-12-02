import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutPageContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Cameron Murrell",
  description:
    "The story of The Street CEO - from the streets to scaling 100+ rep sales teams across three countries. Discover the man behind the movement.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
