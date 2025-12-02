import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppPageContent } from "./app-content";

export const metadata: Metadata = {
  title: "The Street CEO App",
  description:
    "The companion app for high-performers. Daily mindset videos, discipline tracking, habit building, and community - all in your pocket.",
};

export default function AppPage() {
  return (
    <>
      <Header />
      <main>
        <AppPageContent />
      </main>
      <Footer />
    </>
  );
}
