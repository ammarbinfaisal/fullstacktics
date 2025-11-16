import { Zap, Server, Activity, Code, ArrowRight, Gauge, Globe, Database, CreditCard, PackageOpen, Shield, Workflow, Network, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "AI-Powered Development",
      key: "ai-development",
      description: "Custom AI solutions with PyTorch, LLMs, and diffusion models, integrated into scalable Next.js applications.",
      icon: <Zap className="h-6 w-6" />,
      metrics: [
        { value: "Fast", label: "Inference Speed" },
        { value: "Precise", label: "Accuracy" },
        { value: "Quick", label: "Latency" },
      ],
      features: [
        { text: "PyTorch & vLLM", icon: <Globe className="h-4 w-4" /> },
        { text: "BERT & LLMs", icon: <Database className="h-4 w-4" /> },
        { text: "Next.js Integration", icon: <CreditCard className="h-4 w-4" /> },
      ],
    },
    {
      title: "Performance Optimization",
      key: "performance-optimization",
      description: "AI and app optimization with measurable gains in speed, efficiency, and resource usage.",
      icon: <Activity className="h-6 w-6" />,
      metrics: [
        { value: "Faster", label: "Speed Boost" },
        { value: "Quick", label: "Response" },
        { value: "Efficient", label: "Resource Use" },
      ],
      features: [
        { text: "Model Compression", icon: <PackageOpen className="h-4 w-4" /> },
        { text: "Core Web Vitals", icon: <Gauge className="h-4 w-4" /> },
        { text: "Redis Caching", icon: <Activity className="h-4 w-4" /> },
      ],
    },
    {
      title: "Scalable Infrastructure",
      key: "infrastructure",
      description: "Robust backend systems with Go, FastAPI, and Postgres, designed for AI and high traffic.",
      icon: <Server className="h-6 w-6" />,
      metrics: [
        { value: "Reliable", label: "Uptime" },
        { value: "Fast", label: "Response" },
        { value: "Scalable", label: "Growth" },
      ],
      features: [
        { text: "Edge Computing", icon: <Globe className="h-4 w-4" /> },
        { text: "Real-Time APIs", icon: <Zap className="h-4 w-4" /> },
        { text: "Data Security", icon: <Shield className="h-4 w-4" /> },
      ],
    },
    {
      title: "API & AI Integration",
      key: "api-integration",
      description: "High-performance APIs with FastAPI and Go, seamlessly integrating AI models.",
      icon: <Code className="h-6 w-6" />,
      metrics: [
        { value: "Safe", label: "Type-Safe" },
        { value: "Instant", label: "Cache" },
        { value: "Live", label: "Updates" },
      ],
      features: [
        { text: "FastAPI Endpoints", icon: <Workflow className="h-4 w-4" /> },
        { text: "Go Microservices", icon: <Network className="h-4 w-4" /> },
        { text: "AI Optimization", icon: <Settings className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <section className="container relative mx-auto py-24 bg-[#F5F5F5]">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 ring-1 ring-inset ring-yellow-200 mb-4">
            <Zap className="mr-1 h-3 w-3" />
            Technical Excellence
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#4B5E6A]">
            Advanced{" "}
            <span className="text-yellow-600">
              AI & Full-Stack Solutions
            </span>
          </h2>
          <p className="text-lg text-[#4B5E6A] max-w-[800px] mx-auto">
            Combining AI innovation with robust development for scalable, high-performance systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative group hover:shadow-lg transition-all border-gray-200 hover:border-yellow-400/50 bg-white"
            >
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-yellow-50 p-3 ring-1 ring-yellow-100">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#4B5E6A]">{service.title}</CardTitle>
                <CardDescription className="text-sm text-[#4B5E6A]">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2 rounded-lg bg-yellow-50">
                      <div className="text-lg font-bold text-yellow-600">{metric.value}</div>
                      <div className="text-xs text-[#4B5E6A]">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2">
                      <div className="rounded-full bg-yellow-50 p-1">
                        {feature.icon}
                      </div>
                      <span className="text-sm text-[#4B5E6A]">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={`/services/${service.key}`} className="w-full">
                  <Button
                    className="w-full group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
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