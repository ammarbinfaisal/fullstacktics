import { Zap, Server, Activity, Code, ArrowRight, Gauge, Globe, Database, CreditCard, PackageOpen, Shield, Workflow, Network, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Full-Stack SaaS Development",
      key: "saas-development",
      description: "Enterprise-grade Next.js applications with Server Components, Prisma, and Stripe integration",
      icon: <Zap className="h-6 w-6" />,
      metrics: [
        { value: "<1s", label: "FCP" },
        { value: "100", label: "Lighthouse" },
        { value: "0", label: "CLS" }
      ],
      features: [
        { text: "Next.js 14+ with RSC", icon: <Globe className="h-4 w-4" /> },
        { text: "Prisma + Supabase", icon: <Database className="h-4 w-4" /> },
        { text: "Stripe Integration", icon: <CreditCard className="h-4 w-4" /> }
      ]
    },
    {
      title: "Performance Optimization",
      key: "performance-optimization",
      description: "Deep performance analysis and optimization for React applications with measurable improvements",
      icon: <Activity className="h-6 w-6" />,
      metrics: [
        { value: "90%", label: "Faster" },
        { value: "<2.5s", label: "LCP" },
        { value: "<200ms", label: "TTI" }
      ],
      features: [
        { text: "Bundle optimization", icon: <PackageOpen className="h-4 w-4" /> },
        { text: "Core Web Vitals", icon: <Gauge className="h-4 w-4" /> },
        { text: "Memory profiling", icon: <Activity className="h-4 w-4" /> }
      ]
    },
    {
      title: "Infrastructure & Backend",
      key: "infrastructure",
      description: "Scalable backend architecture with Prisma and Supabase, optimized for performance",
      icon: <Server className="h-6 w-6" />,
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "<100ms", label: "p95" },
        { value: "∞", label: "Scale" }
      ],
      features: [
        { text: "Edge deployment", icon: <Globe className="h-4 w-4" /> },
        { text: "Real-time sync", icon: <Zap className="h-4 w-4" /> },
        { text: "Row-level security", icon: <Shield className="h-4 w-4" /> }
      ]
    },
    {
      title: "API Development",
      key: "api-integration",
      description: "High-performance API development with type safety and real-time capabilities",
      icon: <Code className="h-6 w-6" />,
      metrics: [
        { value: "100%", label: "Type-safe" },
        { value: "0ms", label: "Cache" },
        { value: "Live", label: "Updates" }
      ],
      features: [
        { text: "tRPC integration", icon: <Workflow className="h-4 w-4" /> },
        { text: "GraphQL endpoints", icon: <Network className="h-4 w-4" /> },
        { text: "API optimization", icon: <Settings className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section className="container relative py-24">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
            <Zap className="mr-1 h-3 w-3" />
            Technical Excellence
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            High-Performance{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              SaaS Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Full-stack Next.js development with deep performance optimization, focused on measurable results and scalable architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="relative group hover:shadow-lg transition-all border-primary/10 hover:border-primary/20 backdrop-blur-sm bg-background/40">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2 rounded-lg bg-primary/5">
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        {feature.icon}
                      </div>
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={`/services/${service.key}`} className="w-full">
                  <Button 
                    className="w-full group bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                  >
                    View Technical Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}