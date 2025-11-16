"use client"

import Link from "next/link"
import { Zap, ChevronRight, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import CookieConsent from "@/components/cookie-consent"
import ServiceCard from "@/components/service-card"
import TechBadge from "@/components/tech-badge"
import StatCard from "@/components/stat-card"
import PastClients from "@/components/PastClients"
import AutomationTeaser from "@/components/AutomationTeaser"
import { getAllServices } from "@/lib/services-data"
import Cal from "./Cal"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-300">Automation-First Fullstack</Badge>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Build Once. Automate Everywhere.
            </motion.h1>
            <p className="text-gray-600 text-lg">
              We ship <span className="font-semibold text-gray-900">Next.js products</span> wired into{" "}
              <span className="font-semibold text-gray-900">n8n &amp; Make.com</span> plus{" "}
              <span className="font-semibold text-gray-900">AI agents</span> for content and social.
            </p>
            <div className="flex flex-wrap gap-4">
              <Cal>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Request a Quote
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Link href="/services" >
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">
                  Explore Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                5+ YEARS OF INNOVATIVE SOLUTIONS | 50+ PROJECTS DELIVERED ANNUALLY
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-100 to-orange-100" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Cpu className="mx-auto h-16 w-16 text-yellow-400 mb-4" />
                      <div className="text-sm text-gray-500 tracking-wide">NEXT.JS · n8n · MAKE.COM</div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        AUTOMATION STUDIO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <StatCard value="10x" label="Automation Speed" icon={<Zap className="h-5 w-5 text-yellow-400" />} />
          <StatCard value="99%" label="On-Time Runs" icon={<div className="h-5 w-5 text-green-500">●</div>} />
          <StatCard value="<1m" label="Lead Routing" icon={<div className="h-5 w-5 text-blue-500">↻</div>} />
          <StatCard value="100%" label="Human Oversight" icon={<div className="h-5 w-5 text-yellow-400">✓</div>} />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <TechBadge name="Next.js" />
          <TechBadge name="React" />
          <TechBadge name="TypeScript" />
          <TechBadge name="n8n" />
          <TechBadge name="Make.com" />
          <TechBadge name="Postgres" />
        </div>

        <div className="flex justify-center mt-12">
          <Cal>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Schedule a Technical Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Cal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              FULLSTACK APPS, AUTOMATION & AI AGENTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three focused offerings: Next.js apps with n8n/Make.com pipelines, AI agents for content generation, and
              AI-managed social media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getAllServices().map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Supported Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge name="OpenAI" />
              <TechBadge name="Anthropic" />
              <TechBadge name="LangChain" />
              <TechBadge name="Notion" />
              <TechBadge name="Airtable" />
              <TechBadge name="HubSpot" />
              <TechBadge name="Salesforce" />
              <TechBadge name="Slack" />
              <TechBadge name="Zapier" />
              <TechBadge name="Webhooks & REST APIs" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <PastClients />

      {/* Automation Teaser */}
      <AutomationTeaser />

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to design your automation stack?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let&apos;s map your Next.js app, workflows, and AI agents into one reliable system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cal>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Contact Us
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Cal>
            <Link href="/case-studies">
              <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">
                View Case Studies
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  )
}
