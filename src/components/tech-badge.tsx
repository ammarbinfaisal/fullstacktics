"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TechBadgeProps {
  name: string
  showIcon?: boolean
}

// Mapping of technology names to their icon paths
const techIconMap: Record<string, { path: string; invert?: boolean }> = {
  "Next.js": { path: "/tech/nextjs.svg", invert: true },
  "NextJS": { path: "/tech/nextjs.svg", invert: true },
  "React": { path: "/tech/react.svg" },
  "ReactJS": { path: "/tech/react.svg" },
  "Go": { path: "/tech/go.png" },
  "Golang": { path: "/tech/go.png" },
  "Laravel": { path: "/tech/laravel.png" },
  "TypeScript": { path: "/tech/typescript.svg" },
  "Tailwind CSS": { path: "/tech/tailwind.svg" },
  "TailwindCSS": { path: "/tech/tailwind.svg" },
  "Cloudflare Workers": { path: "/tech/cloudflare.svg" },
  "Cloudflare": { path: "/tech/cloudflare.svg" },
  "Wrangler": { path: "/tech/wrangler.svg", invert: true },
  "OpenNext": { path: "/tech/opennext.svg", invert: true },
  "PostgreSQL": { path: "/tech/postgresql.svg" },
  "Postgres": { path: "/tech/postgresql.svg" },
  "n8n": { path: "/tech/n8n.svg" },
  "Make.com": { path: "/tech/make.svg" },
  "Make": { path: "/tech/make.svg" },
  "Stripe": { path: "/tech/stripe.svg" },
  "Clerk": { path: "/tech/clerk.svg", invert: true },
  "FastAPI": { path: "/tech/fastapi.svg" },
  "PyTorch": { path: "/tech/pytorch.svg" },
  "vLLM": { path: "/tech/vllm.svg", invert: true },
  "Docker": { path: "/tech/docker.svg" },
  "AWS": { path: "/tech/aws.svg", invert: true },
}

export default function TechBadge({ name, showIcon = true }: TechBadgeProps) {
  const iconConfig = techIconMap[name]
  const hasIcon = showIcon && iconConfig

  return (
    <motion.div
      className="px-4 py-2 bg-[#1A1A2E] rounded-full text-sm border border-gray-800 flex items-center gap-2"
      whileHover={{ y: -2, backgroundColor: "rgba(99, 102, 241, 0.1)", borderColor: "#6366F1" }}
      transition={{ duration: 0.2 }}
    >
      {hasIcon && (
        <Image
          src={iconConfig.path}
          alt={`${name} icon`}
          width={16}
          height={16}
          className={iconConfig.invert ? "dark:invert" : ""}
        />
      )}
      {name}
    </motion.div>
  )
}
