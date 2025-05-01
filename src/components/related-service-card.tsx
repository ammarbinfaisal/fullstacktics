"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface RelatedServiceCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function RelatedServiceCard({ id, title, description, icon }: RelatedServiceCardProps) {
  return (
    <motion.div
      className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 h-full group"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(99, 102, 241, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={`/services/${id}`} className="inline-flex items-center text-[#6366F1] font-medium">
        Learn more
        <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
