import type { Metadata } from "next";
import { spaceGrotesk, clashDisplay } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thestreetceo.com"),
  title: {
    default: "The Street CEO | Cameron Murrell - Street to CEO, Built From Nothing",
    template: "%s | The Street CEO",
  },
  description:
    "Transform your life with Cameron Murrell - The Street CEO. From the streets to the boardroom. High-performance coaching, programs, and keynote speaking.",
  keywords: [
    "The Street CEO",
    "Cameron Murrell",
    "street to CEO",
    "built from nothing",
    "high-performance coaching",
    "urban transformation",
    "sales leadership",
    "discipline coach",
    "entrepreneur",
    "speaker",
  ],
  authors: [{ name: "Cameron Murrell" }],
  creator: "The Street CEO",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Street CEO",
    title: "The Street CEO | Cameron Murrell",
    description:
      "Transform your life with Cameron Murrell - The Street CEO. From the streets to the boardroom.",
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Street CEO | Cameron Murrell",
    description:
      "Transform your life with Cameron Murrell - The Street CEO. From the streets to the boardroom.",
    creator: "@thestreetceo",
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
        {children}
      </body>
    </html>
  );
}
