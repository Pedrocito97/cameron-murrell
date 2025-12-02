import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CoachingPageContent } from "./coaching-content";

export const metadata: Metadata = {
  title: "Coaching & Mentorship",
  description:
    "Transform your life with The Street CEO coaching programs. 1:1 executive coaching, The Street CEO Academy membership, and group mentorship calls.",
};

export default function CoachingPage() {
  return (
    <>
      <Header />
      <main>
        <CoachingPageContent />
      </main>
      <Footer />
    </>
  );
}
