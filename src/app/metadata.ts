import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: 'Fullstacktics – AI-Driven Full-Stack Engineering',
  description: 'Workflow automation with n8n/Make.com, AI content generation, and full-stack development. We connect Next.js frontends to reliable workflows.',
  openGraph: {
    title: 'Fullstacktics – Workflow Automation & Full-Stack Engineering',
    description: 'n8n/Make.com automation, AI content ops, and full-stack delivery',
    url: 'https://www.fullstacktics.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fullstacktics - Workflow Automation & Full-Stack Solutions',
      },
    ],
  },
}
