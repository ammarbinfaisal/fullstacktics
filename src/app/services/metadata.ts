import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/services',
  },
  title: 'Services – Full-Stack Development & Workflow Automation',
  description: 'Comprehensive full-stack development services including Next.js, Laravel, Go, workflow automation with n8n/Make.com, and AI integrations.',
  keywords: [
    'full-stack development',
    'Next.js development',
    'Laravel development',
    'workflow automation',
    'n8n automation',
    'Make.com integration',
    'API development',
    'SaaS development',
  ],
  openGraph: {
    title: 'Services – Fullstacktics',
    description: 'Full-stack development and workflow automation services',
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
