import type React from "react"
import {
  Code,
  Database,
  Layers,
  Globe,
  Lock,
  Workflow,
  Cpu,
  Cloud,
  Shield,
  Bot,
  MousePointer,
  CreditCard,
  Users,
  Fingerprint,
  Filter,
  Clock,
  ArrowDownToLine,
} from "lucide-react"
import Image from "next/image"

// Tech icon component for features
const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={20} height={20} className="h-5 w-5" />
)

// Define the service data type
export interface ServiceData {
  id: string
  imageUrl?: string
  title: string
  shortName?: string
  description: string
  category: string
  icon: React.ReactNode
  lightIcon: React.ReactNode
  benefits: string[]
  overview: string[]
  featuresDescription: string
  features: {
    title: string
    description: string
    icon: React.ReactNode
    lightIcon: React.ReactNode
  }[]
  processDescription: string
  process: {
    title: string
    description: string
  }[]
  technologiesDescription: string
  technologies: string[]
  ctaText: string
  relatedServices?: {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    lightIcon: React.ReactNode
  }[]
}

// Create the services data
const servicesData: Record<string, ServiceData> = {
  bots: {
    id: "bots",
    title: "Web Automation & Bots",
    imageUrl: "/tech/playwright.svg",
    shortName: "Bots",
    description: "Stealthy browser bots that bypass detection, handle CAPTCHAs, and automate what others say can't be automated",
    category: "Automation",
    icon: <Bot className="h-6 w-6 text-primary" />,
    lightIcon: <Bot className="h-6 w-6 text-white" />,
    benefits: [
      "Automate platforms that actively fight automation",
      "Human-like behavior that passes the strictest detection",
      "Run unattended around the clock without babysitting",
      "Handle CAPTCHAs, popups, and dynamic content seamlessly",
      "Built to adapt when platforms change their defenses",
    ],
    overview: [
      "Most automation breaks the moment a platform updates their bot detection. Ours doesn't. We've built bots for Quora, Medium, Twitter, LinkedIn, and Amazon Seller Central — platforms with aggressive anti-bot systems that block ordinary scripts on sight.",
      "Whether you need content posting bots, account signup automation, job application systems, or seller dashboard management — we build automation that looks, acts, and thinks like a human. Fingerprint rotation, behavioral mimicry, and intelligent error recovery come standard.",
    ],
    featuresDescription:
      "Battle-tested automation that's already running against the web's toughest platforms.",
    features: [
      {
        title: "Social Media Automation",
        description: "Quora answer posting, Medium article publishing, Twitter account creation — all with anti-detection built in from day one.",
        icon: <MousePointer className="h-5 w-5 text-primary" />,
        lightIcon: <MousePointer className="h-5 w-5 text-white" />,
      },
      {
        title: "Undetectable Browser Fingerprints",
        description: "Every session looks like a unique real user. Canvas, WebGL, audio context, fonts — we spoof it all convincingly.",
        icon: <Shield className="h-5 w-5 text-primary" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
      {
        title: "CAPTCHA Handling",
        description: "Integrated solving for reCAPTCHA, hCaptcha, Cloudflare Turnstile, and custom challenges. Your bots don't get stuck.",
        icon: <Lock className="h-5 w-5 text-primary" />,
        lightIcon: <Lock className="h-5 w-5 text-white" />,
      },
      {
        title: "Account & Session Management",
        description: "Isolated browser contexts, persistent sessions, and credential vaults. Manage as many accounts as you need without cross-contamination.",
        icon: <Users className="h-5 w-5 text-primary" />,
        lightIcon: <Users className="h-5 w-5 text-white" />,
      },
      {
        title: "Job Application Bots",
        description: "LinkedIn Easy Apply automation that fills forms, uploads resumes, and applies intelligently based on your criteria.",
        icon: <Clock className="h-5 w-5 text-primary" />,
        lightIcon: <Clock className="h-5 w-5 text-white" />,
      },
      {
        title: "E-commerce Dashboard Automation",
        description: "Amazon Seller Central, marketplace dashboards, inventory systems — automate the repetitive seller operations that eat your time.",
        icon: <Cpu className="h-5 w-5 text-primary" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "We reverse-engineer the platform, then build automation that's indistinguishable from real users.",
    process: [
      {
        title: "Platform Analysis",
        description: "Deep dive into the target platform's detection systems, rate limits, and behavioral expectations.",
      },
      {
        title: "Stealth Engineering",
        description: "Build the anti-detection layer first — fingerprinting, proxy integration, and human-like timing patterns.",
      },
      {
        title: "Workflow Automation",
        description: "Implement your specific use case with intelligent error handling and edge case management.",
      },
      {
        title: "Deployment & Maintenance",
        description: "Deploy with monitoring and alerting. When platforms update their defenses, we update your bots.",
      },
    ],
    technologiesDescription: "The same tools and techniques that power our production bots.",
    technologies: [
      "Playwright",
      "Puppeteer",
      "TypeScript",
      "Python",
      "2Captcha",
      "Anti-Captcha",
      "Capsolver",
      "Residential Proxies",
      "Mobile Proxies",
      "Docker",
      "Redis",
      "PostgreSQL",
      "BullMQ",
      "Grafana",
    ],
    ctaText: "Got a platform that fights automation? We've probably already beaten it. Let's talk.",
    relatedServices: [
      {
        id: "scrapers",
        title: "Web Scraping & ETL",
        description: "Extract data from the same platforms we automate.",
        icon: <Database className="h-5 w-5 text-primary" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        id: "saas",
        title: "SaaS Development",
        description: "Build the control panel and infrastructure around your bots.",
        icon: <Layers className="h-5 w-5 text-primary" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
    ],
  },
  scrapers: {
    id: "scrapers",
    title: "Web Scraping & ETL",
    imageUrl: "/tech/airflow.svg",
    shortName: "Scrapers",
    description: "Data extraction from protected sites with fingerprint rotation, proxy networks, and pipelines that feed your systems automatically",
    category: "Data Engineering",
    icon: <Database className="h-6 w-6 text-primary" />,
    lightIcon: <Database className="h-6 w-6 text-white" />,
    benefits: [
      "Scrape sites that block ordinary scrapers",
      "Fingerprint and proxy rotation that stays ahead of detection",
      "Structured data delivered straight to your database",
      "Scheduled pipelines that run without intervention",
      "Built to handle site changes and anti-bot updates",
    ],
    overview: [
      "Everyone can scrape a simple website. The challenge is extracting data from Amazon, major e-commerce platforms, and sites that actively detect and block scrapers. That's where we come in.",
      "We've built extraction systems for Amazon product data, e-commerce catalogs, pricing intelligence, and competitive analysis. Our scrapers use the same anti-detection techniques as our bots — because getting blocked isn't an option when your business depends on the data.",
    ],
    featuresDescription:
      "Production scraping infrastructure that handles the sites others give up on.",
    features: [
      {
        title: "Fingerprint Rotation",
        description: "Every request looks like a different real browser. We rotate canvas, WebGL, user agents, and device characteristics automatically.",
        icon: <Fingerprint className="h-5 w-5 text-primary" />,
        lightIcon: <Fingerprint className="h-5 w-5 text-white" />,
      },
      {
        title: "Smart Proxy Networks",
        description: "Residential and datacenter proxy rotation with automatic failover. Geo-targeting when you need location-specific data.",
        icon: <Globe className="h-5 w-5 text-primary" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        title: "Amazon & E-commerce Scraping",
        description: "Product listings, pricing, reviews, seller data, inventory levels — extracted reliably from the platforms that fight hardest.",
        icon: <MousePointer className="h-5 w-5 text-primary" />,
        lightIcon: <MousePointer className="h-5 w-5 text-white" />,
      },
      {
        title: "Airflow ETL Pipelines",
        description: "Orchestrated data workflows with scheduling, retries, and monitoring. Your data arrives clean and on time, every time.",
        icon: <Workflow className="h-5 w-5 text-primary" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        title: "Data Transformation",
        description: "Raw HTML becomes structured data. We normalize, deduplicate, and enrich before loading into your systems.",
        icon: <Filter className="h-5 w-5 text-primary" />,
        lightIcon: <Filter className="h-5 w-5 text-white" />,
      },
      {
        title: "Direct Database Loading",
        description: "Scraped data flows directly into PostgreSQL, BigQuery, or your warehouse. No manual exports or file transfers.",
        icon: <ArrowDownToLine className="h-5 w-5 text-primary" />,
        lightIcon: <ArrowDownToLine className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "From target analysis to running pipeline — we handle the entire data extraction lifecycle.",
    process: [
      {
        title: "Source Reconnaissance",
        description: "Analyze the target site's structure, anti-bot systems, and data patterns. Plan the extraction strategy.",
      },
      {
        title: "Scraper Development",
        description: "Build extraction logic with the right tool — HTTP for simple sites, headless browsers for JavaScript-heavy pages.",
      },
      {
        title: "Pipeline Engineering",
        description: "Design the ETL workflow in Airflow with scheduling, validation, and error recovery built in.",
      },
      {
        title: "Deploy & Monitor",
        description: "Launch with dashboards and alerting. We handle maintenance when sites change their structure.",
      },
    ],
    technologiesDescription: "Enterprise-grade tools for reliable, scalable data extraction.",
    technologies: [
      "Playwright",
      "Puppeteer",
      "Scrapy",
      "Apache Airflow",
      "Python",
      "TypeScript",
      "Bright Data",
      "Oxylabs",
      "PostgreSQL",
      "BigQuery",
      "Redis",
      "Docker",
      "Kubernetes",
      "dbt",
    ],
    ctaText: "Need data from a site that blocks scrapers? We specialize in exactly that.",
    relatedServices: [
      {
        id: "bots",
        title: "Web Automation & Bots",
        description: "Go beyond extraction — automate actions on the same platforms.",
        icon: <Bot className="h-5 w-5 text-primary" />,
        lightIcon: <Bot className="h-5 w-5 text-white" />,
      },
      {
        id: "saas",
        title: "SaaS Development",
        description: "Build products and APIs powered by your scraped data.",
        icon: <Layers className="h-5 w-5 text-primary" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
    ],
  },
  saas: {
    id: "saas",
    title: "SaaS Development",
    imageUrl: "/tech/nextjs.svg",
    shortName: "SaaS",
    description: "Production-ready SaaS products with Next.js, Clerk auth, Stripe billing, and AI integrations that actually ship",
    category: "Product Development",
    icon: <Layers className="h-6 w-6 text-primary" />,
    lightIcon: <Layers className="h-6 w-6 text-white" />,
    benefits: [
      "Skip the boilerplate — auth, billing, and users work from day one",
      "AI features with real model integrations, not toy demos",
      "Architecture that won't need a rewrite when you scale",
      "Production infrastructure included, not an afterthought",
      "Ship your MVP in weeks, not months",
    ],
    overview: [
      "We build SaaS products that are ready for paying customers on launch day. Not prototypes, not demos — real products with authentication, billing, and the infrastructure to scale.",
      "Our recent work includes an AI architectural rendering platform with ComfyUI workflows converted to production code, Stripe subscription billing, and Clerk-based multi-tenant accounts. We've shipped the same stack you're probably planning to build — and we know where the pitfalls are.",
    ],
    featuresDescription:
      "Everything a SaaS needs to launch, built with the stack that modern products run on.",
    features: [
      {
        title: "Next.js Full-Stack",
        description: "App Router, Server Components, API routes — the full Next.js architecture optimized for SaaS products.",
        icon: <TechIcon src="/tech/nextjs.svg" alt="Next.js" />,
        lightIcon: <TechIcon src="/tech/nextjs.svg" alt="Next.js" />,
      },
      {
        title: "Clerk Authentication",
        description: "Social logins, email/password, MFA, organizations, and user management. Auth that works and stays out of your way.",
        icon: <TechIcon src="/tech/clerk.svg" alt="Clerk" />,
        lightIcon: <TechIcon src="/tech/clerk.svg" alt="Clerk" />,
      },
      {
        title: "Stripe Billing",
        description: "Subscriptions, usage-based pricing, customer portal, invoicing, and webhook handling. Revenue infrastructure done right.",
        icon: <TechIcon src="/tech/stripe.svg" alt="Stripe" />,
        lightIcon: <TechIcon src="/tech/stripe.svg" alt="Stripe" />,
      },
      {
        title: "Drizzle ORM & PostgreSQL",
        description: "Type-safe database access with migrations, relations, and query builders. Your data layer won't be the bottleneck.",
        icon: <TechIcon src="/tech/postgresql.svg" alt="PostgreSQL" />,
        lightIcon: <TechIcon src="/tech/postgresql.svg" alt="PostgreSQL" />,
      },
      {
        title: "AI & ComfyUI Integration",
        description: "Production AI features with real model inference. We've converted ComfyUI workflows to code for customer-facing products.",
        icon: <TechIcon src="/tech/ai.svg" alt="AI" />,
        lightIcon: <TechIcon src="/tech/ai.svg" alt="AI" />,
      },
      {
        title: "Production Infrastructure",
        description: "CI/CD, preview deployments, monitoring, error tracking. Your product runs reliably from the first deploy.",
        icon: <TechIcon src="/tech/docker.svg" alt="Docker" />,
        lightIcon: <TechIcon src="/tech/docker.svg" alt="Docker" />,
      },
    ],
    processDescription:
      "We move fast without breaking things. Your SaaS ships production-ready, not half-baked.",
    process: [
      {
        title: "Scope & Prioritize",
        description: "Define what ships in V1 and what waits. We're ruthless about cutting scope to hit launch dates.",
      },
      {
        title: "Foundation First",
        description: "Auth, billing, database, and deployment pipeline before any feature code. The boring stuff that makes everything else work.",
      },
      {
        title: "Rapid Feature Development",
        description: "Weekly deployments, continuous feedback. You see progress constantly, not just at the end.",
      },
      {
        title: "Launch & Iterate",
        description: "Go live with monitoring and support. Then iterate based on real user behavior, not assumptions.",
      },
    ],
    technologiesDescription: "The modern stack that powers fast-growing SaaS products.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Clerk",
      "Stripe",
      "PostgreSQL",
      "Drizzle",
      "Tailwind CSS",
      "shadcn/ui",
      "ComfyUI",
      "Vercel",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Sentry",
    ],
    ctaText: "Ready to ship your SaaS? Let's build something your customers will pay for.",
    relatedServices: [
      {
        id: "bots",
        title: "Web Automation & Bots",
        description: "Add automation superpowers to your SaaS product.",
        icon: <Bot className="h-5 w-5 text-primary" />,
        lightIcon: <Bot className="h-5 w-5 text-white" />,
      },
      {
        id: "scrapers",
        title: "Web Scraping & ETL",
        description: "Feed your SaaS with data from across the web.",
        icon: <Database className="h-5 w-5 text-primary" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
    ],
  },
}

// Function to get service data by ID
export function getServiceData(id: string): ServiceData | undefined {
  return servicesData[id]
}

// Function to get all services
export function getAllServices() {
  return Object.values(servicesData)
}

// Function to get related services
export function getRelatedServices(id: string, count = 3) {
  const service = servicesData[id]
  if (!service || !service.relatedServices) return []

  return service.relatedServices.slice(0, count)
}
