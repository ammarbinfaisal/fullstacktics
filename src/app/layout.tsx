import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import Cal from "./Cal";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
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
      <head>
        <meta
          property="twitter:title"
          content="Fullstacktics - Software Development Agency"
        ></meta>
        <meta
          property="twitter:description"
          content="We build high-performance web applications and websites."
        ></meta>
        <meta property="og:image" content="/public/among-us.jpg"></meta>
        <meta property="og:site_name" content="Fullstacktics"></meta>
        <meta property="og:url" content="https://fullstacktics.com"></meta>
        <meta
          property="og:title"
          content="Fullstacktics - Software Development Agency"
        ></meta>
        <meta
          property="og:description"
          content="We build high-performance web applications and websites."
        ></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11298597203"
        ></script>
        <GoogleAnalytics gaId="AW-11298597203" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pd90txeeeg");
        `,
          }}
        ></script>
      </head>
      <body className={`${jetBrainsMono.className} antialiased w-full`}>
        <Navbar />
        {children}
        <Analytics />
        <div className="fixed bottom-0 w-screen p-4 flex gap-4 bg-white justify-around px-12 align-items bg-background/60 supports-[backdrop-filter]:bg-background/60 backdrop-blur x-50">
          <Cal url="tel:+919140248919" className="text-primary cursor-pointer flex justify-center w-full text-sm sm:text-lg items-center">
            <PhoneCall size={24} /><span className="ml-4"> Call Us</span>
          </Cal>
          <Cal url="https://wa.me/919140248919" className="text-green-500 cursor-pointer flex justify-center w-full text-sm sm:text-lg md:text-md items-center">
            <Image src="/WhatsApp.svg.png" alt="whatsapp" width={32} height={32} /><span className="ml-4">Text Us</span>
          </Cal>
        </div>
      </body>
    </html>
  );
}
