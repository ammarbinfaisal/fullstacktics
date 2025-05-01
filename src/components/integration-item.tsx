"use client"

import { motion } from "framer-motion"
import { CreditCard, UserCheck, Key, Brain, Search, Plug, ShieldCheck, BarChart, MessageSquare } from "lucide-react"

interface IntegrationItemProps {
  title: string
  description: string
  icon: string
}

export default function IntegrationItem({ title, description, icon }: IntegrationItemProps) {
  const getIcon = () => {
    switch (icon) {
      case "credit-card":
        return <CreditCard className="h-5 w-5 text-[#6366F1]" />
      case "user-check":
        return <UserCheck className="h-5 w-5 text-[#6366F1]" />
      case "key":
        return <Key className="h-5 w-5 text-[#6366F1]" />
      case "brain":
        return <Brain className="h-5 w-5 text-[#6366F1]" />
      case "search":
        return <Search className="h-5 w-5 text-[#6366F1]" />
      case "plug":
        return <Plug className="h-5 w-5 text-[#6366F1]" />
      case "shield-check":
        return <ShieldCheck className="h-5 w-5 text-[#6366F1]" />
      case "bar-chart":
        return <BarChart className="h-5 w-5 text-[#6366F1]" />
      case "message-square":
        return <MessageSquare className="h-5 w-5 text-[#6366F1]" />
      default:
        return <Plug className="h-5 w-5 text-[#6366F1]" />
    }
  }

  return (
    <motion.div
      className="flex items-start p-6 bg-[#1A1A2E] rounded-xl border border-gray-800"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mr-4">{getIcon()}</div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
