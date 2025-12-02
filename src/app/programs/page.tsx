import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProgramsPageContent } from "./programs-content";

export const metadata: Metadata = {
  title: "Programs & Courses",
  description:
    "Digital programs and courses from The Street CEO. Master mindset, leadership, sales, and transformation with proven systems.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsPageContent />
      </main>
      <Footer />
    </>
  );
}
