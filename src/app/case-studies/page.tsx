"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, TrendingUp, Zap } from "lucide-react"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Cal from "@/app/Cal"

interface CaseStudy {
  id: string
  name: string
  logo: string
  website: string
  industry: string
  description: string
  problem: string[]
  solution: string[]
  impact: {
    metric: string
    value: string
    icon: React.ReactNode
  }[]
  technologies: string[]
  relatedServices: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "baytonia",
    name: "Baytonia",
    logo: "/baytonia.png",
    website: "https://baytonia.com",
    industry: "E-commerce",
    description: "Premier multi-vendor e-commerce platform serving the Middle East market with automated data pipelines",
    problem: [
      "Complex multi-vendor marketplace requiring scalable data synchronization",
      "Need to aggregate product data from multiple vendor sources and APIs",
      "Real-time monitoring of web scraping operations across hundreds of sources",
      "Managing ETL pipelines for inventory, pricing, and product metadata updates",
      "Dashboard visibility into scraper health, success rates, and data quality",
    ],
    solution: [
      "Built robust Laravel backend with optimized database schema for multi-vendor operations",
      "Implemented ETL pipelines for automated product data extraction, transformation, and loading",
      "Developed custom web scrapers with intelligent retry logic and anti-blocking measures",
      "Created real-time scraper monitoring dashboard with health checks and alerting",
      "Built trigger system for scheduled and on-demand scraper executions",
      "Implemented data validation and quality checks with automated error reporting",
    ],
    impact: [
      {
        metric: "Automation",
        value: "95% automated sync",
        icon: <Zap className="h-6 w-6 text-yellow-400" />,
      },
      {
        metric: "Data Pipeline",
        value: "10,000+ products/day",
        icon: <TrendingUp className="h-6 w-6 text-yellow-400" />,
      },
      {
        metric: "Monitoring",
        value: "Real-time dashboard",
        icon: <CheckCircle className="h-6 w-6 text-yellow-400" />,
      },
    ],
    technologies: ["Laravel", "ETL Pipelines", "Web Scraping", "MySQL", "Redis", "Vue.js", "Monitoring Dashboard"],
    relatedServices: ["laravel", "automation", "integrations"],
  },
  {
    id: "airendering",
    name: "AiRendering.com",
    logo: "/airendering.com-logo.svg",
    website: "https://airendering.com",
    industry: "AI-Powered SaaS",
    description: "Full-stack AI-powered architectural visualization SaaS platform with subscription billing",
    problem: [
      "Need to build a complete SaaS platform from scratch with modern authentication",
      "Complex subscription and credit-based billing system with Stripe integration",
      "Type-safe database schema with efficient queries for high-volume image processing",
      "Real-time user session management and secure API routes",
      "Scalable architecture for AI image processing with multiple model integrations",
    ],
    solution: [
      "Built full-stack Next.js SaaS application with App Router and server actions",
      "Implemented Clerk for authentication with OAuth providers and session management",
      "Used Drizzle ORM for type-safe database operations with PostgreSQL",
      "Integrated Stripe for subscription billing, credits system, and payment processing",
      "Created real-time user dashboard with project management and gallery features",
      "Developed AI processing pipeline with queue management and status tracking",
      "Implemented secure file upload/download with AWS S3 integration",
    ],
    impact: [
      {
        metric: "Launch Speed",
        value: "8 weeks to production",
        icon: <Zap className="h-6 w-6 text-yellow-400" />,
      },
      {
        metric: "Type Safety",
        value: "100% TypeScript coverage",
        icon: <CheckCircle className="h-6 w-6 text-yellow-400" />,
      },
      {
        metric: "Billing",
        value: "Automated subscriptions",
        icon: <TrendingUp className="h-6 w-6 text-yellow-400" />,
      },
    ],
    technologies: ["Next.js", "Clerk", "Drizzle ORM", "PostgreSQL", "Stripe", "TypeScript", "AWS S3", "AI APIs"],
    relatedServices: ["nextjs", "integrations", "api"],
  },
]

export default function CaseStudiesPage() {
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: 'https://www.fullstacktics.com/case-studies',
    name: 'Case Studies – Fullstacktics',
    description: 'Real results for real businesses: Baytonia e-commerce automation with ETL pipelines and AiRendering.com SaaS platform with Next.js, Clerk, and Stripe.',
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Script
        id="ld-webpage-case-studies"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Badge className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 mb-4">Case Studies</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Real Results for{" "}
            <span className="text-yellow-400">
              Real Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            See how we&apos;ve helped businesses scale with modern full-stack solutions and workflow automation.
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="bg-zinc-950 p-8 md:p-12 border-b border-zinc-800">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                    <div className="relative w-32 h-20 bg-white rounded-lg p-4 flex items-center justify-center">
                      <Image src={study.logo} alt={`${study.name} logo`} fill className="object-contain p-2" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-2">{study.name}</h2>
                      <Badge className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">
                        {study.industry}
                      </Badge>
                    </div>
                    <Link href={study.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-lg text-gray-300">{study.description}</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {/* Problem */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                        Challenge
                      </h3>
                      <ul className="space-y-3">
                        {study.problem.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>
                        Solution
                      </h3>
                      <ul className="space-y-3">
                        {study.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>
                      Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {study.impact.map((item, i) => (
                        <div
                          key={i}
                          className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-yellow-400/50 transition-colors"
                        >
                          <div className="mb-4">{item.icon}</div>
                          <div className="text-2xl font-bold mb-1">{item.value}</div>
                          <div className="text-gray-400">{item.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-400">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-zinc-800 text-gray-300 hover:bg-zinc-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 p-12 rounded-3xl border border-zinc-800 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Success Story?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our full-stack expertise can help you achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cal>
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Cal>
            <Link href="/services">
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
