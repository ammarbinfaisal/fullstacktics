import { ArrowRight, Bot, CircuitBoard, Workflow, Boxes, Repeat, GitMerge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Services() {
  return (
    <section id="services" className="container py-24">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Streamline Your Business with Powerful Automations
        </h2>
        <p className="max-w-[900px] text-lg text-muted-foreground">
          Replace expensive tools and manual work with custom automation solutions
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((point, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                {point.icon}
              </div>
              <CardTitle>{point.title}</CardTitle>
              <CardDescription>{point.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Our Solution:</h4>
                <p className="text-sm text-muted-foreground">{point.solution}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {point.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <div className="absolute bottom-4 right-4">
              <Button variant="ghost" size="sm">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

const painPoints = [
  {
    title: "Complex System Integration",
    description: "Struggling to connect multiple platforms and automate workflows",
    solution: "Custom automation solutions using Make.com, n8n, and Zapier",
    features: [
      "Cross-platform integration",
      "Real-time data sync",
      "Custom webhook handling",
      "Error monitoring"
    ],
    icon: <Workflow className="h-5 w-5 text-primary" />
  },
  {
    title: "Manual Data Management",
    description: "Wasting time on repetitive data entry and updates",
    solution: "Automated data flows between your key business tools",
    features: [
      "Airtable integration",
      "Monday.com automation",
      "Google Workspace sync",
      "Custom data transforms"
    ],
    icon: <Repeat className="h-5 w-5 text-primary" />
  },
  {
    title: "Disconnected Workflows",
    description: "Using multiple tools that don't work together efficiently",
    solution: "Unified automation system with custom integrations",
    features: [
      "API integration",
      "Custom code actions",
      "Webhook automation",
      "Error handling"
    ],
    icon: <GitMerge className="h-5 w-5 text-primary" />
  }
];