import { Gauge, Code2, ServerCog, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Cal from "@/app/Cal";

export default function Process() {
  const steps = [
    {
      title: "Performance Audit",
      description: "Deep analysis of your application's performance metrics, architecture, and bottlenecks.",
      icon: <Gauge className="h-6 w-6" />,
      metrics: ["Core Web Vitals", "Bundle Analysis", "API Response Times"]
    },
    {
      title: "Architecture Design",
      description: "Design scalable architecture with Next.js, Prisma, and edge computing optimization.",
      icon: <Code2 className="h-6 w-6" />,
      metrics: ["Server Components", "Data Flow", "Caching Strategy"]
    },
    {
      title: "Technical Implementation",
      description: "Build high-performance features with focus on code splitting and optimization.",
      icon: <ServerCog className="h-6 w-6" />,
      metrics: ["Type Safety", "Edge Deployment", "Real-time Sync"]
    },
    {
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization of application performance metrics.",
      icon: <Activity className="h-6 w-6" />,
      metrics: ["Real-time Analytics", "Error Tracking", "Performance Alerts"]
    }
  ];

  return (
    <section className="container relative mx-auto py-24">
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            High-Performance{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Our proven approach to building lightning-fast SaaS applications with measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background/40 backdrop-blur-sm border border-primary/10 transition-all hover:border-primary/20">
                <div className="mb-4 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                {/* Metrics */}
                <div className="w-full pt-4 border-t border-primary/10">
                  <ul className="space-y-2">
                    {step.metrics.map((metric) => (
                      <li key={metric} className="text-xs text-primary flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Cal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
            >
              Schedule Technical Consultation
            </Button>
          </Cal>

          <p className="mt-4 text-sm text-muted-foreground">
            Average implementation time: 2-3 weeks for full optimization
          </p>
        </div>
      </div>
    </section>
  );
}