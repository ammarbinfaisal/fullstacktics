"use client"

import { motion } from "framer-motion"

interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.div
      className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-gray-800"
      whileHover={{ y: -2, backgroundColor: "rgba(250, 204, 21, 0.1)", borderColor: "#FACC15" }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.div>
  )
}
