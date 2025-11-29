import Image from "next/image"

interface TechBadgeProps {
  name: string
  showIcon?: boolean
}

// Mapping of technology names to their icon paths
const techIconMap: Record<string, { path: string; invert?: boolean }> = {
  // Frameworks & Libraries
  "Next.js": { path: "/tech/nextjs.svg", invert: true },
  "NextJS": { path: "/tech/nextjs.svg", invert: true },
  "React": { path: "/tech/react.svg" },
  "ReactJS": { path: "/tech/react.svg" },
  "Laravel": { path: "/tech/laravel.png" },
  
  // Languages
  "TypeScript": { path: "/tech/typescript.svg" },
  "JavaScript": { path: "/tech/javascript.svg" },
  "Python": { path: "/tech/python.svg" },
  "Go": { path: "/tech/go.png" },
  "Golang": { path: "/tech/go.png" },
  "Rust": { path: "/tech/rust.svg", invert: true },
  "PHP": { path: "/tech/php.svg" },
  "C": { path: "/tech/c.svg" },
  "C++": { path: "/tech/cpp.svg" },
  
  // Automation & Scraping
  "Playwright": { path: "/tech/playwright.svg" },
  "Puppeteer": { path: "/tech/puppeteer.svg" },
  "Scrapy": { path: "/tech/scrapy.svg" },
  
  // Data & ETL
  "Apache Airflow": { path: "/tech/airflow.svg" },
  "Airflow": { path: "/tech/airflow.svg" },
  "dbt": { path: "/tech/dbt.svg" },
  "BigQuery": { path: "/tech/database.svg" },
  
  // Databases
  "PostgreSQL": { path: "/tech/postgresql.svg" },
  "Postgres": { path: "/tech/postgresql.svg" },
  "Redis": { path: "/tech/redis.svg" },
  
  // Infrastructure & DevOps
  "Docker": { path: "/tech/docker.svg" },
  "Kubernetes": { path: "/tech/kubernetes.svg" },
  "AWS": { path: "/tech/aws.svg", invert: true },
  "Vercel": { path: "/tech/vercel.svg", invert: true },
  "Cloudflare Workers": { path: "/tech/cloudflare.svg" },
  "Cloudflare": { path: "/tech/cloudflare.svg" },
  "GitHub Actions": { path: "/tech/githubactions.svg" },
  
  // Monitoring & Observability
  "Grafana": { path: "/tech/grafana.svg" },
  "Sentry": { path: "/tech/sentry.svg" },
  
  // Auth & Payments
  "Stripe": { path: "/tech/stripe.svg" },
  "Clerk": { path: "/tech/clerk.svg", invert: true },
  
  // ORM & Database Tools
  "Drizzle": { path: "/tech/drizzle.svg" },
  
  // UI & Styling
  "Tailwind CSS": { path: "/tech/tailwind.svg" },
  "TailwindCSS": { path: "/tech/tailwind.svg" },
  "shadcn/ui": { path: "/tech/shadcnui.svg", invert: true },
  
  // AI & ML
  "PyTorch": { path: "/tech/pytorch.svg" },
  "vLLM": { path: "/tech/vllm.svg", invert: true },
  "ComfyUI": { path: "/tech/ai.svg" },
  
  // APIs
  "FastAPI": { path: "/tech/fastapi.svg" },
  
  // Automation Tools
  "n8n": { path: "/tech/n8n.svg" },
  "Make.com": { path: "/tech/make.svg" },
  "Make": { path: "/tech/make.svg" },
  
  // Other
  "Wrangler": { path: "/tech/wrangler.svg", invert: true },
  "OpenNext": { path: "/tech/opennext.svg", invert: true },
}

export default function TechBadge({ name, showIcon = true }: TechBadgeProps) {
  const iconConfig = techIconMap[name]
  const hasIcon = showIcon && iconConfig

  return (
    <div className="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm border border-border/50 flex items-center gap-2 hover:border-primary/50 hover:shadow-glass-sm transition-all cursor-default">
      {hasIcon && (
        <Image
          src={iconConfig.path}
          alt={`${name} icon`}
          width={16}
          height={16}
          className={iconConfig.invert ? "dark:invert" : ""}
        />
      )}
      <span className="text-foreground">{name}</span>
    </div>
  )
}
