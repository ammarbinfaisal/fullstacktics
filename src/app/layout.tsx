import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
