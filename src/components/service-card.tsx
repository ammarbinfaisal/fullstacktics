"use client"

import { motion } from "framer-motion"
import { Code, Server, Zap, Webhook, Database, Code2 } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ id, title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className="h-6 w-6 text-[#6366F1]" />
      case "server":
        return <Server className="h-6 w-6 text-[#6366F1]" />
      case "zap":
        return <Zap className="h-6 w-6 text-[#6366F1]" />
      case "webhook":
        return <Webhook className="h-6 w-6 text-[#6366F1]" />
      case "database":
        return <Database className="h-6 w-6 text-[#6366F1]" />
      case "code-2":
        return <Code2 className="h-6 w-6 text-[#6366F1]" />
      default:
        return <Code className="h-6 w-6 text-[#6366F1]" />
    }
  }

  return (
    <motion.div
      className="bg-[#1A1A2E] p-8 rounded-2xl border border-gray-800 h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(99, 102, 241, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <Link href={`/services/${id}`} className="mt-4 inline-block text-[#6366F1] hover:underline">
        Learn more
      </Link>
    </motion.div>
  )
}
