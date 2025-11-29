import { Code, Server, Zap, Webhook, Database, Code2 } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

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
        return <Code className="h-6 w-6 text-primary" />
      case "server":
        return <Server className="h-6 w-6 text-primary" />
      case "zap":
        return <Zap className="h-6 w-6 text-primary" />
      case "webhook":
        return <Webhook className="h-6 w-6 text-primary" />
      case "database":
        return <Database className="h-6 w-6 text-primary" />
      case "code-2":
        return <Code2 className="h-6 w-6 text-primary" />
      default:
        return <Code className="h-6 w-6 text-primary" />
    }
  }

  return (
    <Link href={`/services/${id}`} prefetch={true}>
      <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
        <CardContent className="pt-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <span className="mt-4 inline-block text-primary font-medium group-hover:underline">
            Learn more
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
