import { ArrowRight, Boxes, Download, GitMerge, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'; 


export default function Services() {
  return (
    <section id="services" className="container py-24">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Stop Letting These Problems Hold Your Business Back
        </h2>
        <p className="max-w-[900px] text-lg text-muted-foreground">
          We&apos;ve helped hundreds of businesses overcome these common challenges
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

      {/* Lead magnet callout */}
      <div className="mt-16 bg-muted rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Get Your Free Integration Cost Savings Calculator
        </h3>
        <p className="text-muted-foreground mb-6">
          See exactly how much you could save by switching to custom integrations
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Download Calculator <Download className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Get Your Cost Savings Calculator</DialogTitle>
              <DialogDescription>
                Enter your details below to receive your custom ROI calculator
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-4 py-2 rounded-md border"
              />
              <input
                type="text"
                placeholder="Monthly SaaS Tool Spend"
                className="w-full px-4 py-2 rounded-md border"
              />
              <Button type="submit" className="w-full">Get Calculator</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

const painPoints = [
  {
    title: "Drowning in SaaS Subscriptions",
    description: "Paying thousands monthly for tools that don't fully meet your needs",
    solution: "Custom-built integrations that replace 5-10 tools with one solution",
    icon: <Boxes className="h-5 w-5 text-primary" />
  },
  {
    title: "Manual Data Entry Hell",
    description: "Wasting hours copying data between different platforms",
    solution: "Automated data flow between all your business tools",
    icon: <Timer className="h-5 w-5 text-primary" />
  },
  {
    title: "Complex Marketing Funnels",
    description: "Struggling with expensive funnel builders and complex setups",
    solution: "Custom-coded funnels that you own and control completely",
    icon: <GitMerge className="h-5 w-5 text-primary" />
  }
];