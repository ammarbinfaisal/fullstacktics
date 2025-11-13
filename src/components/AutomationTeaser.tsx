"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, Workflow, Zap } from "lucide-react"

export default function AutomationTeaser() {
  return (
    <section className="py-20 bg-[#1A1A2E]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-900/30 to-teal-900/30 rounded-3xl border border-purple-900/30 p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50">
                <Workflow className="h-3 w-3 mr-2" />
                Workflow Automation
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Turn Forms into Flows with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  n8n & Make.com
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg">
                Ship frontends that trigger reliable, observable workflows. Link modern Next.js applications 
                to robust automation systems with human-in-the-loop approvals where needed.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Frontend ↔ Workflow:</span> Webhooks, OAuth, and secure API integrations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Content Ops:</span> From brief to publish with AI assistance and approval checkpoints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Social Automation:</span> Schedule, post, listen, and reply with safety rails
                  </p>
                </div>
              </div>

              <Link href="/services/automation">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white group">
                  Explore Automation Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Right Content - Logos */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">
                  Powered By
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-16 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <Image
                      src="/make-logo.svg"
                      alt="Make.com"
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-16 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <Image
                      src="/n8n-logo.svg"
                      alt="n8n"
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Additional visual element */}
              <div className="hidden lg:block relative">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Workflow className="h-24 w-24 text-purple-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
