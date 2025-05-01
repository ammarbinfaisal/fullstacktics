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
import { getAllServices } from "@/lib/services-data"
import Cal from "./Cal"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50">AI-Driven Development</Badge>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Crafting <span className="text-teal-400">Next-Gen Solutions</span> with AI & Full-Stack Expertise
            </motion.h1>
            <p className="text-gray-300 text-lg">
              We build intelligent systems with <span className="text-teal-400">cutting-edge AI</span> and{" "}
              <span className="text-purple-400">high-performance stacks</span>—optimized for speed and scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Cal>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Request a Quote
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Link href="/services" >
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30">
                  Explore Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                5+ YEARS OF INNOVATIVE SOLUTIONS | 50+ PROJECTS DELIVERED ANNUALLY
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-2xl opacity-30"></div>
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Cpu className="mx-auto h-16 w-16 text-teal-400 mb-4" />
                      <div className="text-sm text-gray-300">FULLSTACK</div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
                        DEVELOPMENT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <StatCard value="10x" label="Inference Speed (vLLM)" icon={<Zap className="h-5 w-5 text-yellow-400" />} />
          <StatCard
            value="99%"
            label="Model Accuracy"
            icon={
              <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
            }
          />
          <StatCard
            value="<1s"
            label="API Response Time"
            icon={
              <div className="h-5 w-5 flex items-center justify-center">
                <div className="h-4 w-1 bg-green-400 mr-0.5"></div>
                <div className="h-3 w-1 bg-green-400 mr-0.5"></div>
                <div className="h-5 w-1 bg-green-400"></div>
              </div>
            }
          />
          <StatCard value="100%" label="Uptime Guarantee" icon={<div className="h-5 w-5 text-red-400">✓</div>} />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <TechBadge name="PyTorch" />
          <TechBadge name="Next.js" />
          <TechBadge name="Go" />
          <TechBadge name="FastAPI" />
          <TechBadge name="vLLM" />
          <TechBadge name="Postgres" />
        </div>

        <div className="flex justify-center mt-12">
          <Cal>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Schedule a Technical Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Cal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#151528]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FULLSTACK DEVELOPMENT SERVICES</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs, from frontend to backend, and everything in
              between.
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
          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-6 text-center">Supported Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge name="Redis" />
              <TechBadge name="Kafka" />
              <TechBadge name="ELK Stack" />
              <TechBadge name="Celery" />
              <TechBadge name="FastAPI" />
              <TechBadge name="Django" />
              <TechBadge name="GORM" />
              <TechBadge name="Gin" />
              <TechBadge name="LlamaIndex" />
              <TechBadge name="LlamaBase" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-teal-900/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital presence?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our fullstack expertise can help you build innovative, high-performance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cal>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Us
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Cal>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30">
              View Our Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12121E] py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl">Fullstacktics</span>
            </Link>
            <nav className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Fullstacktics. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  )
}
