import { Space_Grotesk, Oswald } from "next/font/google";

// Space Grotesk for body text
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Oswald for headlines - Bold, condensed, powerful (similar feel to Clash Display)
// Perfect for "THE STREET CEO" brand - masculine, impactful, urban
export const clashDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-clash-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
