import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fullstacktics - Software Development Agency",
  description: "We build high-performance web applications and websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="twitter:title" content="Fullstacktics - Software Development Agency"></meta>
      <meta property="twitter:description" content="We build high-performance web applications and websites."></meta>
      <meta property="og:image" content="/public/among-us.jpg"></meta>
      <meta property="og:site_name" content="Fullstacktics"></meta>
      <meta property="og:url" content="https://fullstacktics.com"></meta>
      <meta property="og:title" content="Fullstacktics - Software Development Agency"></meta>
      <meta property="og:description" content="We build high-performance web applications and websites."></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
