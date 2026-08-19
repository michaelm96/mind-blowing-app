import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mind-Blowing — A CSS playground for the curious",
  description:
    "A showcase of mind-blowing CSS effects — animated gradients, glassmorphism, 3D tilt, aurora borders, and cosmic micro-interactions.",
};

export const viewport: Viewport = {
  themeColor: "#05010f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}