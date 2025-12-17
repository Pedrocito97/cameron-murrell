import type { Metadata } from "next";
import { spaceGrotesk, clashDisplay } from "@/lib/fonts";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cameronmurrell.com"),
  title: {
    default: "Cameron Murrell | Coach, Speaker & Entrepreneur",
    template: "%s | Cameron Murrell",
  },
  description:
    "Transform your mindset and results with Cameron Murrell. High-impact coaching and keynotes for ambitious leaders ready to execute. 50+ events, 98% satisfaction.",
  keywords: [
    "Cameron Murrell",
    "keynote speaker",
    "executive coaching",
    "leadership coach",
    "mindset coaching",
    "business transformation",
    "motivational speaker UK",
    "leadership development",
    "high-performance coaching",
    "sales leadership",
    "entrepreneur",
  ],
  authors: [{ name: "Cameron Murrell" }],
  creator: "Cameron Murrell",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cameron Murrell",
    title: "Cameron Murrell | Coach, Speaker & Entrepreneur",
    description:
      "Transform your mindset and results. High-impact coaching and keynotes for ambitious leaders.",
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Murrell | Coach, Speaker & Entrepreneur",
    description:
      "Transform your mindset and results. High-impact coaching and keynotes for ambitious leaders.",
    creator: "@cameronmurrell",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${clashDisplay.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
