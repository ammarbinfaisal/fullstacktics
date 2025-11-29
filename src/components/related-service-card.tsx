import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface RelatedServiceCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function RelatedServiceCard({ id, title, description, icon }: RelatedServiceCardProps) {
  return (
    <Link href={`/services/${id}`} prefetch={true}>
      <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-glass transition-all cursor-pointer group">
        <CardContent className="pt-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <span className="inline-flex items-center text-link font-medium group-hover:text-link-hover transition-colors">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
