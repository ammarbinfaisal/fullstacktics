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
      className="bg-white p-6 rounded-2xl border border-gray-200 h-full shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15 }}
    >
      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link href={`/services/${id}`} className="mt-4 inline-block text-yellow-500 hover:underline text-sm font-medium">
        Learn more
      </Link>
    </motion.div>
  )
}
