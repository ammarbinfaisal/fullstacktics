import { Card, CardContent } from "@/components/ui/card"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors">
        <CardContent className="pt-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-lg">
            {number}
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>

      {/* Connector line (hidden on mobile and last item) */}
      {number % 4 !== 0 && (
        <div className="hidden lg:block absolute top-1/2 left-full h-0.5 bg-border w-6 -translate-y-1/2 z-10">
          <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-primary -translate-y-1/2"></div>
        </div>
      )}
    </div>
  )
}
