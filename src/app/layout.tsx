import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fullstacktics.com'),
  title: {
    default: 'Fullstacktics – AI-Driven Full-Stack Engineering',
    template: '%s | Fullstacktics',
  },
  description: 'Workflow automation with n8n/Make.com, AI content ops, and full-stack delivery. We connect Next.js frontends to reliable workflows with human-in-the-loop approvals.',
  keywords: [
    'workflow automation',
    'n8n automation',
    'Make.com integration',
    'Next.js development',
    'full-stack development',
    'AI content generation',
    'social media automation',
    'Laravel development',
    'ETL pipelines',
    'SaaS development'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.fullstacktics.com',
    title: 'Fullstacktics – Workflow Automation & Full-Stack Engineering',
    description: 'Automation + AI + Full-stack delivery with n8n, Make.com, and modern web technologies',
    siteName: 'Fullstacktics',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fullstacktics - Workflow Automation & Full-Stack Solutions',
      },
    ],
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'Fullstacktics – Workflow Automation & Full-Stack Engineering',
    description: 'n8n/Make.com automation, AI content ops, and full-stack delivery',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fullstacktics",
    "url": "https://www.fullstacktics.com/",
    "logo": "https://www.fullstacktics.com/logo.png",
    "description": "Full-stack development and workflow automation specialists. We build n8n/Make.com integrations, AI-powered workflows, and modern web applications.",
    "sameAs": [
      "https://www.upwork.com/freelancers/~0120fff5d26578a75e",
      "https://github.com/fullstacktics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://www.fullstacktics.com/inquiry"
    }
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.fullstacktics.com/",
    "name": "Fullstacktics",
    "description": "Workflow automation with n8n/Make.com and full-stack development services"
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-screen bg-white text-black">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
