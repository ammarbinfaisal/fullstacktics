"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <motion.div className="relative" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 h-full">
        <div className="w-12 h-12 bg-[#6366F1]/10 rounded-full flex items-center justify-center mb-4 text-[#6366F1] font-bold">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Connector line (hidden on mobile and last item) */}
      <div className="hidden lg:block absolute top-1/2 left-full h-0.5 bg-gray-800 w-8 -translate-y-1/2">
        {number % 4 !== 0 && (
          <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-[#6366F1] -translate-y-1/2"></div>
        )}
      </div>
    </motion.div>
  )
}
