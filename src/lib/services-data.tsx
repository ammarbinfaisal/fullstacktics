import type React from "react"
import {
  Code,
  Database,
  Layers,
  Zap,
  Globe,
  BarChart,
  Workflow,
  Cpu,
  Shield,
  Search,
} from "lucide-react"

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

// Create the services data – focused on three core offers:
// 1) Fullstack apps with n8n/Make.com pipelines
// 2) Content generation via AI agents
// 3) Social media managed by AI agents
const servicesData: Record<string, ServiceData> = {
  automation: {
    id: "automation",
    title: "Fullstack Apps with n8n/Make Pipelines",
    imageUrl: "/tech/nextjs.svg",
    shortName: "Fullstack + Automation",
    description:
      "We design and ship Next.js products wired into n8n/Make.com workflows for leads, ops, and internal tools.",
    category: "Fullstack + Automation",
    icon: <Workflow className="h-6 w-6 text-yellow-400" />,
    lightIcon: <Workflow className="h-6 w-6 text-white" />,
    benefits: [
      "One team responsible for both your Next.js app and n8n/Make.com workflows.",
      "Frontend, APIs, and automation are designed together instead of bolted on later.",
      "Production-ready monitoring, logging, and retry strategies so flows stay reliable.",
      "Secure, auditable hand-offs between humans and automation for sensitive steps.",
      "A foundation where AI agents can be layered in without rewiring the product.",
    ],
    overview: [
      "Your product, CRM, and internal tools shouldn’t live in isolated silos. We build fullstack systems where the Next.js app, APIs, and n8n/Make.com workflows are designed as a single product.",
      "Every form submission, button click, and background job can drive a well-defined pipeline – from lead capture to onboarding, billing, data sync, and reporting – with one accountable team owning the whole stack.",
    ],
    featuresDescription:
      "We combine fullstack engineering with workflow design so your app and automations behave like one cohesive system.",
    features: [
      {
        title: "Next.js Product Foundations",
        description:
          "Multi-tenant-ready Next.js applications with auth, roles, and clean API boundaries tuned for workflow triggers.",
        icon: <Code className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Code className="h-5 w-5 text-white" />,
      },
      {
        title: "n8n & Make.com Pipelines",
        description:
          "Design and implement workflows for lead routing, onboarding, billing, and internal tools using n8n and Make.com.",
        icon: <Workflow className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        title: "Secure Webhook Contracts",
        description:
          "Webhook and API designs with signatures, retries, and idempotency so automations stay robust even under load.",
        icon: <Shield className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
      {
        title: "Data & Reporting Flows",
        description:
          "Sync data between your app, CRM, and analytics tools and surface it back into dashboards and admin views.",
        icon: <Database className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        title: "Human Approval Paths",
        description:
          "Slack/email-based approvals, escalations, and manual review steps for flows that can’t be fully automated.",
        icon: <BarChart className="h-5 w-5 text-yellow-400" />,
        lightIcon: <BarChart className="h-5 w-5 text-white" />,
      },
      {
        title: "Observability & Ops",
        description:
          "Logs, metrics, and alerts for both the app and workflows so issues are visible long before users notice.",
        icon: <Zap className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "We partner with you from idea to production, owning both the app and the automation layer.",
    process: [
      {
        title: "Discovery & Mapping",
        description:
          "We map your current flows, systems, and edge cases and define clear success metrics for automation.",
      },
      {
        title: "Architecture & UX",
        description:
          "We design the Next.js app, API surface, and workflow topology so everything fits together cleanly.",
      },
      {
        title: "Build & Integrate",
        description:
          "We implement app features, APIs, and n8n/Make.com workflows in tight feedback loops with your team.",
      },
      {
        title: "Launch & Iterate",
        description:
          "We ship, monitor, and iterate on flows based on real-world usage and new automation opportunities.",
      },
    ],
    technologiesDescription:
      "An automation-first stack built around Next.js, n8n, and Make.com with modern tooling around it.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "n8n",
      "Make.com",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "LangChain",
      "Vercel",
      "AWS",
    ],
    ctaText:
      "Need a product team that owns both your app and your automations? Let’s design your stack together.",
    relatedServices: [
      {
        id: "ai-content",
        title: "AI Content Agents",
        description: "Agentic pipelines that turn a brief into multi-channel content ready to publish.",
        icon: <Cpu className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
      {
        id: "ai-social",
        title: "AI Social Media Agents",
        description: "Agents that schedule, listen, and assist with replies across your social channels.",
        icon: <Globe className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
    ],
  },
  "ai-content": {
    id: "ai-content",
    title: "Content Generation via AI Agents",
    description:
      "Agentic workflows that turn a single brief into SEO-ready blogs, emails, and landing pages with human approval built in.",
    category: "AI Content Ops",
    icon: <Cpu className="h-6 w-6 text-yellow-400" />,
    lightIcon: <Cpu className="h-6 w-6 text-white" />,
    benefits: [
      "Turn one strategic brief into multi-channel content without adding headcount.",
      "Brand-safe outputs with tone templates, guardrails, and mandatory human review where needed.",
      "Structured content history you can search, reuse, and analyze over time.",
      "Tight integration with your CMS, planning tools, and analytics stack.",
      "Transparent pipelines so your team can see what every agent did at each step.",
    ],
    overview: [
      "Most teams either drown in content requests or ship ad-hoc pieces with no process. We build agentic content pipelines where briefs go in and reviewed, on-brand content comes out.",
      "Your writers and editors stay in control while agents handle research, drafting, rewriting, metadata generation, and distribution across the tools you already use.",
    ],
    featuresDescription:
      "We design content workflows that blend AI agents, your editors, and automation into one repeatable system.",
    features: [
      {
        title: "Brief Intake Apps",
        description:
          "Next.js forms and internal tools for capturing structured briefs, target personas, and brand constraints.",
        icon: <Layers className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        title: "Research & Outline Agents",
        description:
          "Agents that pull context from your docs, CRM, and the web to propose outlines and talking points.",
        icon: <Search className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Search className="h-5 w-5 text-white" />,
      },
      {
        title: "Draft & Rewrite Pipelines",
        description:
          "Multi-step workflows that generate drafts, apply tone/voice templates, and rewrite for different channels.",
        icon: <Code className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Code className="h-5 w-5 text-white" />,
      },
      {
        title: "SEO & Metadata Automation",
        description:
          "Automatic generation of titles, meta descriptions, slugs, and internal links with human-friendly review UIs.",
        icon: <Globe className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        title: "Approval & Compliance Flows",
        description:
          "Slack/email review steps, redline views, and sign-off tracking for legal, brand, and leadership stakeholders.",
        icon: <Shield className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
      {
        title: "Publish & Distribution",
        description:
          "Integrations to push approved content into CMSs, email tools, and social automation with proper tracking.",
        icon: <Workflow className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "We help you move from scattered content production to a measurable, repeatable pipeline.",
    process: [
      {
        title: "Strategy & Inventory",
        description:
          "We review your content goals, existing assets, and channels, and identify where agents can help most.",
      },
      {
        title: "Workflow & Agent Design",
        description:
          "We design the agent graph, approval steps, and data model for briefs, drafts, and published content.",
      },
      {
        title: "Implementation & Integration",
        description:
          "We implement the workflows in n8n/Make.com, wire them to your Next.js tools, and integrate your CMS/CRMs.",
      },
      {
        title: "Rollout & Optimization",
        description:
          "We launch pilots, collect feedback, and tune prompts, agents, and automations based on real output.",
      },
    ],
    technologiesDescription:
      "We use a practical mix of AI and workflow tools anchored around your existing stack.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "n8n",
      "Make.com",
      "OpenAI",
      "Anthropic",
      "LangChain",
      "PostgreSQL",
      "Supabase",
      "Notion",
      "Airtable",
    ],
    ctaText:
      "Ready to give your marketing team agentic superpowers? Let’s design your content pipeline.",
    relatedServices: [
      {
        id: "automation",
        title: "Fullstack + Automation",
        description: "Next.js products with n8n/Make.com pipelines behind every key workflow.",
        icon: <Workflow className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        id: "ai-social",
        title: "AI Social Media Agents",
        description: "Agents that handle scheduling, listening, and smart replies for social channels.",
        icon: <Globe className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
    ],
  },
  "ai-social": {
    id: "ai-social",
    title: "Social Media Managed by AI Agents",
    description:
      "AI agents that help draft, schedule, and respond on social media—with strong guardrails and clear human control.",
    category: "AI Social",
    icon: <Globe className="h-6 w-6 text-yellow-400" />,
    lightIcon: <Globe className="h-6 w-6 text-white" />,
    benefits: [
      "Consistent posting cadence across channels without adding a full-time social team.",
      "Automated listening for mentions, replies, and DMs with smart triage and routing.",
      "Guardrails so agents never go off-brand, overshare, or over-promise.",
      "Attribution from social posts to leads, signups, or revenue where your stack allows it.",
      "Dashboards showing what content, timings, and agents actually drive results.",
    ],
    overview: [
      "Social feeds move too fast for purely manual workflows, but purely automated posting is risky. We design agentic social systems where AI handles the repetitive work and your team keeps final say.",
      "From multi-channel calendars to listening and reply suggestions, we wire agents into your tools, CRMs, and data so your social presence feels human while scaling like software.",
    ],
    featuresDescription:
      "We focus on safe, measurable social automation rather than generic “set-and-forget” bots.",
    features: [
      {
        title: "Content Calendar & Scheduling",
        description:
          "Central calendars with agents proposing slots and content based on your themes, launches, and campaigns.",
        icon: <Layers className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        title: "Multi-Channel Posting",
        description:
          "Workflows that adapt content for LinkedIn, X, and other platforms while preserving brand voice.",
        icon: <Workflow className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        title: "Listening & Inbox Triage",
        description:
          "Agents that monitor mentions, replies, and DMs and route them to the right person or queue.",
        icon: <Search className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Search className="h-5 w-5 text-white" />,
      },
      {
        title: "Reply Suggestions with Guardrails",
        description:
          "Suggested responses with clear labels, tone controls, and red-line checks before anything is sent.",
        icon: <Cpu className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
      {
        title: "Attribution & Reporting",
        description:
          "UTM tracking, CRM integration, and dashboards that link posts to leads, pipeline, and key metrics.",
        icon: <BarChart className="h-5 w-5 text-yellow-400" />,
        lightIcon: <BarChart className="h-5 w-5 text-white" />,
      },
      {
        title: "Compliance & Safety",
        description:
          "Policy-aware prompts, blocklists, and audit logs so you can prove what was generated and approved.",
        icon: <Shield className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "We design social agents that fit how your team already works instead of forcing a brand-new workflow.",
    process: [
      {
        title: "Discovery & Guardrails",
        description:
          "We document your brand voice, risk tolerances, and approval policies for each channel and persona.",
      },
      {
        title: "Workflow & Agent Design",
        description:
          "We map out how content is planned, drafted, reviewed, and published—and where agents plug in safely.",
      },
      {
        title: "Implementation & Training",
        description:
          "We implement the automations, fine-tune prompts, and train your team on when to trust or override agents.",
      },
      {
        title: "Optimization & Expansion",
        description:
          "We analyze performance, tighten guardrails, and expand coverage to more channels and playbooks over time.",
      },
    ],
    technologiesDescription:
      "We integrate with the channels and tools your marketing team already relies on.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "n8n",
      "Make.com",
      "OpenAI",
      "Anthropic",
      "Zapier",
      "LinkedIn API",
      "X API",
      "Slack",
      "HubSpot",
      "Salesforce",
    ],
    ctaText:
      "Want social that mostly runs itself but still sounds like you? Let’s deploy agents for your brand.",
    relatedServices: [
      {
        id: "ai-content",
        title: "AI Content Agents",
        description: "Use agents to generate long-form and campaign content that feeds your social calendar.",
        icon: <Cpu className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
      {
        id: "automation",
        title: "Fullstack + Automation",
        description: "Connect social signals back into your product, CRM, and internal tools with automations.",
        icon: <Workflow className="h-5 w-5 text-yellow-400" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
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

