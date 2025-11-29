"use client"

import { motion } from "framer-motion"
import TechBadge from "./tech-badge"

interface TechShowcaseProps {
  title?: string
  description?: string
  categories?: {
    name: string
    technologies: string[]
  }[]
}

const defaultCategories = [
  {
    name: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    technologies: ["Go", "Python", "FastAPI", "Laravel", "PHP"],
  },
  {
    name: "AI & ML",
    technologies: ["PyTorch", "vLLM", "AI", "NLP"],
  },
  {
    name: "Database",
    technologies: ["PostgreSQL", "Database"],
  },
  {
    name: "Infrastructure",
    technologies: ["Docker", "AWS", "Cloudflare"],
  },
  {
    name: "Integration",
    technologies: ["Stripe", "Clerk", "n8n", "Make"],
  },
  {
    name: "Systems",
    technologies: ["Rust", "C++", "System Architecture", "Compiler"],
  },
]

export default function TechShowcase({
  title = "Technologies We Master",
  description = "We work with cutting-edge technologies to build robust, scalable solutions",
  categories = defaultCategories,
}: TechShowcaseProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
