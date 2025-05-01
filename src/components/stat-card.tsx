"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
  icon: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="bg-[#1A1A2E] border-gray-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#151528] rounded-lg">{icon}</div>
            <div>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
