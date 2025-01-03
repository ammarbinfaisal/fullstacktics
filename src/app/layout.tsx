import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Consent from "./consent";

const jetBrainsMono = Outfit({
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
        {/* meta desc */}
        <meta
          name="description"
          content="We build high-performance web applications and websites."
        ></meta>

        <meta property="og:image" content="among-us.jpg"></meta>
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

        {/* <Script id="consent" strategy="afterInteractive" async type="module" src="cookieconsent-config.js" /> */}
        {/* <Script id="consent-conf" strategy="afterInteractive" async src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@/dist/cookieconsent.css" />

        <Script
          strategy="afterInteractive"
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMQS73V7');
    `,
          }}
        ></Script>
        <Script
          id="gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11298597203"
        />
        <GoogleAnalytics gaId="AW-11298597203" />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pd90txeeeg");
        `,
          }}
        />
      </head>
      <body className={`${jetBrainsMono.className} antialiased w-full`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMQS73V7"
          height="0" width="0" style={{
            display: "none",
            visibility: "hidden",
          }}></iframe></noscript>
        <Navbar />
        {children}
        <Analytics />
        <div id="cookieconsent" />
        <Consent />
      </body>
    </html>
  );
}
