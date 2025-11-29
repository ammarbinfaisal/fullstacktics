import Link from "next/link"
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Cal from "../Cal"
import { 
  Bot, 
  Database, 
  Layers, 
  Zap, 
  ArrowRight,
  MessageSquare,
  ShoppingCart,
  Image,
  Shield,
  Workflow,
  Users,
  Briefcase
} from "lucide-react"

export const metadata: Metadata = {
  title: "Web Scraping & Automation Projects | Case Studies | Fullstacktics",
  description: "Explore our portfolio of web scraping, browser automation, and SaaS projects. E-commerce price scraping, social media bots, data extraction pipelines, and custom software solutions.",
  keywords: ["web scraping projects", "automation case studies", "e-commerce scraping", "price monitoring", "data extraction", "browser automation", "Python scraping", "Playwright automation", "SaaS development"],
  openGraph: {
    title: "Web Scraping & Automation Projects | Fullstacktics",
    description: "Real-world web scraping, automation bots, and SaaS projects. See how we solve complex data extraction and automation challenges.",
    type: "website",
  },
}

interface Project {
  id: string
  title: string
  category: "bots" | "scrapers" | "saas"
  description: string
  challenge: string
  solution: string
  techStack: string[]
  icon: React.ReactNode
}

const projects: Project[] = [
  // BOTS
  {
    id: "quora-medium-bots",
    title: "Quora & Medium Content Automation",
    category: "bots",
    description: "Automated content publishing system that posts answers and articles while evading sophisticated anti-bot detection.",
    challenge: "Both platforms employ aggressive fingerprinting, rate limiting, and behavioral analysis that blocks conventional automation within hours.",
    solution: "Built a stealth automation layer with human-like typing patterns, randomized delays, browser fingerprint rotation, and session persistence. The system handles account warm-up, content scheduling, and automatic recovery from detection attempts.",
    techStack: ["Playwright", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    id: "twitter-signup-bot",
    title: "Twitter Account Creation System",
    category: "bots",
    description: "High-volume account creation automation with phone verification, CAPTCHA solving, and profile setup.",
    challenge: "Twitter's signup flow includes multiple verification layers, Arkose Labs challenges, and aggressive device fingerprinting that makes automation extremely difficult.",
    solution: "Developed a complete signup pipeline with residential proxy rotation, SMS verification integration, automated CAPTCHA solving, and fingerprint spoofing. Each account appears as a unique device with realistic browser characteristics.",
    techStack: ["Puppeteer", "Python", "2Captcha", "Residential Proxies", "BullMQ"],
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: "linkedin-job-bot",
    title: "LinkedIn Easy Apply Automation",
    category: "bots",
    description: "Intelligent job application bot that fills forms, uploads resumes, and applies based on custom criteria.",
    challenge: "LinkedIn actively detects and bans automation. The platform uses various signals including mouse movement patterns, session behavior, and API request analysis.",
    solution: "Created a human-mimicking automation system with natural scrolling, realistic form-filling speeds, and intelligent job filtering. The bot manages multiple sessions, handles 2FA, and adapts to LinkedIn's constantly evolving detection systems.",
    techStack: ["Playwright", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: "amazon-seller-bot",
    title: "Amazon Seller Central Automation",
    category: "bots",
    description: "Dashboard automation for inventory management, order processing, and seller operations at scale.",
    challenge: "Amazon's seller dashboard is heavily protected with session management, CAPTCHA challenges, and behavioral monitoring that makes automation unreliable.",
    solution: "Built a resilient automation framework that handles session persistence, automatic re-authentication, and graceful error recovery. The system manages inventory updates, order tracking, and reporting without triggering security alerts.",
    techStack: ["Playwright", "Python", "Capsolver", "PostgreSQL", "Grafana"],
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  // SCRAPERS
  {
    id: "amazon-scraping",
    title: "Amazon Product Data Extraction",
    category: "scrapers",
    description: "Large-scale product data extraction including pricing, reviews, seller information, and inventory levels.",
    challenge: "Amazon employs one of the most sophisticated anti-scraping systems in e-commerce, with rate limiting, CAPTCHA walls, and IP blocking.",
    solution: "Developed a distributed scraping infrastructure with intelligent proxy rotation, fingerprint randomization, and request throttling. The pipeline processes data through Airflow, handles deduplication, and loads directly into client databases.",
    techStack: ["Scrapy", "Playwright", "Airflow", "Bright Data", "PostgreSQL", "dbt"],
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  {
    id: "ecommerce-scraping",
    title: "E-commerce Price Intelligence",
    category: "scrapers",
    description: "Scraped competitor pricing data from multiple e-commerce platforms for an e-commerce client sourcing from these marketplaces.",
    challenge: "Each platform has different page structures and data formats, requiring custom scrapers for each source.",
    solution: "Built scrapers for each target platform with price normalization to output unified data. Set up scheduled runs and alerts for significant price changes.",
    techStack: ["Python", "Playwright", "Oxylabs", "Airflow", "BigQuery", "Redis"],
    icon: <Database className="h-6 w-6" />,
  },
  // SAAS
  {
    id: "ai-rendering-saas",
    title: "AI Architectural Rendering Platform",
    category: "saas",
    description: "Production SaaS that transforms architectural sketches into photorealistic renders using AI, with subscription billing and user management.",
    challenge: "Converting a ComfyUI workflow into a production-ready service required handling GPU inference at scale, implementing usage-based billing, and building a polished user experience.",
    solution: "Transformed the ComfyUI workflow into clean, maintainable code. Built the full platform with Next.js App Router, Clerk for multi-tenant authentication, Stripe for subscription and usage-based billing, and Drizzle ORM for type-safe database access. The rendering pipeline runs on dedicated GPU infrastructure with queue management.",
    techStack: ["Next.js", "React", "TypeScript", "Clerk", "Stripe", "Drizzle", "PostgreSQL", "ComfyUI", "Python"],
    icon: <Image className="h-6 w-6" />,
  },
]

const categoryInfo = {
  bots: {
    label: "Web Automation",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: <Bot className="h-4 w-4" />,
  },
  scrapers: {
    label: "Data Extraction",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: <Database className="h-4 w-4" />,
  },
  saas: {
    label: "SaaS Development",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    icon: <Layers className="h-4 w-4" />,
  },
}

export default function ProjectsPage() {
  const botProjects = projects.filter(p => p.category === "bots")
  const scraperProjects = projects.filter(p => p.category === "scrapers")
  const saasProjects = projects.filter(p => p.category === "saas")

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto py-20 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-6">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Projects That <span className="text-primary">Actually Ship</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Real automation systems, data pipelines, and SaaS products we&apos;ve built for clients. 
              Not demos or prototypes — production systems running right now.
            </p>
          </div>
        </section>

        {/* Bots Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Web Automation & Bots</h2>
                <p className="text-muted-foreground">Automation that works on platforms that fight back</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {botProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services/bots">
                <Button variant="outline" className="group">
                  Learn about our automation services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Scrapers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Web Scraping & ETL</h2>
                <p className="text-muted-foreground">Data extraction from the web&apos;s toughest targets</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {scraperProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services/scrapers">
                <Button variant="outline" className="group">
                  Learn about our scraping services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SaaS Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Layers className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">SaaS Development</h2>
                <p className="text-muted-foreground">Production-ready products with modern architecture</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {saasProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services/saas">
                <Button variant="outline" className="group">
                  Learn about our SaaS development
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Have a project that &quot;can&apos;t be automated&quot;?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We specialize in the automation challenges that make other developers give up. 
              Let&apos;s talk about what you&apos;re trying to build.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Cal>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Schedule a Call
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Link href="/inquiry">
                <Button size="lg" variant="outline">
                  Send Project Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const category = categoryInfo[project.category]
  
  return (
    <Card className="h-full border-border bg-card hover:border-primary/30 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {project.icon}
          </div>
          <Badge variant="outline" className={category.color}>
            {category.label}
          </Badge>
        </div>
        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
            <Shield className="h-4 w-4 text-orange-500" />
            The Challenge
          </h4>
          <p className="text-sm text-muted-foreground">{project.challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
            <Workflow className="h-4 w-4 text-green-500" />
            Our Solution
          </h4>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
