import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import JsonLd from "./JsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fullstacktics - Web Automation, Scraping & SaaS Development",
  description:
    "We build stealthy browser bots, web scrapers, and production-ready SaaS products. Specializing in automation that bypasses detection and full-stack development with Next.js.",
  keywords: [
    "web automation",
    "web scraping",
    "SaaS development",
    "browser bots",
    "Next.js",
    "full-stack development",
    "ETL pipelines",
    "CAPTCHA bypass",
  ],
  authors: [{ name: "Fullstacktics" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullstacktics.com",
    siteName: "Fullstacktics",
    title: "Fullstacktics - Web Automation, Scraping & SaaS Development",
    description:
      "We build stealthy browser bots, web scrapers, and production-ready SaaS products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullstacktics - Web Automation, Scraping & SaaS Development",
    description:
      "We build stealthy browser bots, web scrapers, and production-ready SaaS products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          {children}
        </div>
        <SpeedInsights/>
      </body>
    </html>
  );
}
