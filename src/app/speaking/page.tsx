import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SpeakingPageContent } from "./speaking-content";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Cameron Murrell for your next event. Keynotes on transformation, leadership, sales, and the street-to-CEO mindset.",
};

export default function SpeakingPage() {
  return (
    <>
      <Header />
      <main>
        <SpeakingPageContent />
      </main>
      <Footer />
    </>
  );
}
