import { CreditCard, UserCheck, Key, Brain, Search, Plug, ShieldCheck, BarChart, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface IntegrationItemProps {
  title: string
  description: string
  icon: string
}

export default function IntegrationItem({ title, description, icon }: IntegrationItemProps) {
  const getIcon = () => {
    switch (icon) {
      case "credit-card":
        return <CreditCard className="h-5 w-5 text-primary" />
      case "user-check":
        return <UserCheck className="h-5 w-5 text-primary" />
      case "key":
        return <Key className="h-5 w-5 text-primary" />
      case "brain":
        return <Brain className="h-5 w-5 text-primary" />
      case "search":
        return <Search className="h-5 w-5 text-primary" />
      case "plug":
        return <Plug className="h-5 w-5 text-primary" />
      case "shield-check":
        return <ShieldCheck className="h-5 w-5 text-primary" />
      case "bar-chart":
        return <BarChart className="h-5 w-5 text-primary" />
      case "message-square":
        return <MessageSquare className="h-5 w-5 text-primary" />
      default:
        return <Plug className="h-5 w-5 text-primary" />
    }
  }

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="flex items-start p-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
