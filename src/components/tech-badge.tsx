"use client"

import { motion } from "framer-motion"

interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.div
      className="px-4 py-2 bg-[#1A1A2E] rounded-full text-sm border border-gray-800"
      whileHover={{ y: -2, backgroundColor: "rgba(99, 102, 241, 0.1)", borderColor: "#6366F1" }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.div>
  )
}
