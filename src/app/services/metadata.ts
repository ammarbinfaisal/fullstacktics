import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
  title: 'Services – Next.js, n8n Pipelines & AI Agents',
  description:
    'We focus on three things: fullstack Next.js apps wired to n8n/Make.com, AI agents for content generation, and AI-managed social media.',
  keywords: [
    'Next.js development',
    'workflow automation',
    'n8n automation',
    'Make.com integration',
    'AI content agents',
    'AI social media management',
    'automation-first fullstack apps',
  ],
  openGraph: {
    title: 'Services – Fullstacktics',
    description: 'Fullstack Next.js apps with n8n/Make.com pipelines plus AI agents for content and social.',
    url: 'https://www.fullstacktics.com/services',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Fullstacktics Services',
      },
    ],
  },
}
