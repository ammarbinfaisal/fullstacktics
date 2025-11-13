import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Fullstacktics - Real Results for Real Businesses',
  description: 'Explore our proven track record with Baytonia and AiRendering.com. See how we deliver scalable full-stack solutions, workflow automation, and ETL pipelines.',
  keywords: [
    'case studies',
    'client success stories',
    'full-stack projects',
    'workflow automation',
    'ETL pipelines',
    'SaaS development',
    'Next.js projects',
    'Laravel development',
    'Make.com automation',
    'n8n workflows',
  ],
  openGraph: {
    title: 'Case Studies | Fullstacktics',
    description: 'Real results for real businesses: Baytonia e-commerce automation and AiRendering.com SaaS platform.',
    type: 'website',
    images: [
      {
        url: '/og-case-studies.png',
        width: 1200,
        height: 630,
        alt: 'Fullstacktics Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Fullstacktics',
    description: 'Real results for real businesses with full-stack solutions and workflow automation.',
    images: ['/og-case-studies.png'],
  },
}
