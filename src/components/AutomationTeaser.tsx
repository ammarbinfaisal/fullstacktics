"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, Workflow, Zap } from "lucide-react"

export default function AutomationTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200">
                <Workflow className="h-3 w-3 mr-2" />
                Workflow Automation
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Turn Forms into Flows with{" "}
                <span className="text-yellow-500">
                  n8n & Make.com
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg">
                Ship frontends that trigger reliable, observable workflows. Link modern Next.js applications 
                to robust automation systems with human-in-the-loop approvals where needed.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Frontend ↔ Workflow:</span> Webhooks, OAuth, and secure API integrations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Content Ops:</span> From brief to publish with AI assistance and approval checkpoints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Social Automation:</span> Schedule, post, listen, and reply with safety rails
                  </p>
                </div>
              </div>

              <Link href="/services/automation">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold group">
                  Explore Automation Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Right Content - Logos */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                  Powered By
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-16 bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
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
                    className="relative w-32 h-16 bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
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
                <div className="w-40 h-40 relative">
                  <div className="absolute inset-0 bg-yellow-100 rounded-full"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Workflow className="h-20 w-20 text-yellow-400 opacity-80" />
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
