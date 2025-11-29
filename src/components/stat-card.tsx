import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
  icon: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="border-border bg-card hover:border-primary/50 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">{icon}</div>
          <div>
            <div className="text-2xl font-bold text-foreground">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
