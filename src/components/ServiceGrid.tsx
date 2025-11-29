import { Bot, Database, Layers, ArrowRight, Globe, Shield, Lock, Users, Fingerprint, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Web Automation & Bots",
      key: "bots",
      description: "Stealthy browser bots that bypass detection, handle CAPTCHAs, and automate what others say can't be automated.",
      icon: <Bot className="h-6 w-6" />,
      metrics: [
        { value: "99%", label: "Success Rate" },
        { value: "24/7", label: "Uptime" },
        { value: "<1s", label: "Response" },
      ],
      features: [
        { text: "Anti-Detection", icon: <Shield className="h-4 w-4" /> },
        { text: "CAPTCHA Solving", icon: <Lock className="h-4 w-4" /> },
        { text: "Session Management", icon: <Users className="h-4 w-4" /> },
      ],
    },
    {
      title: "Web Scraping & ETL",
      key: "scrapers",
      description: "Data extraction from protected sites with fingerprint rotation, proxy networks, and automated pipelines.",
      icon: <Database className="h-6 w-6" />,
      metrics: [
        { value: "1M+", label: "Records/Day" },
        { value: "99%", label: "Accuracy" },
        { value: "Auto", label: "Pipelines" },
      ],
      features: [
        { text: "Fingerprint Rotation", icon: <Fingerprint className="h-4 w-4" /> },
        { text: "Smart Proxies", icon: <Globe className="h-4 w-4" /> },
        { text: "Airflow ETL", icon: <Workflow className="h-4 w-4" /> },
      ],
    },
    {
      title: "SaaS Development",
      key: "saas",
      description: "Production-ready SaaS products with Next.js, Clerk auth, Stripe billing, and AI integrations.",
      icon: <Layers className="h-6 w-6" />,
      metrics: [
        { value: "4 wks", label: "To MVP" },
        { value: "100%", label: "Type-Safe" },
        { value: "Scale", label: "Ready" },
      ],
      features: [
        { text: "Next.js Full-Stack", icon: <Globe className="h-4 w-4" /> },
        { text: "Clerk + Stripe", icon: <Users className="h-4 w-4" /> },
        { text: "AI Integration", icon: <Workflow className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <section className="container relative mx-auto py-24 bg-[#F5F5F5]">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[#4A919E]/10 px-3 py-1 text-sm font-medium text-[#4A919E] ring-1 ring-inset ring-[#4A919E]/20 mb-4">
            <Zap className="mr-1 h-3 w-3" />
            Technical Excellence
          </span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#4B5E6A]">
            Advanced{" "}
            <span className="bg-gradient-to-r from-[#4A919E] to-teal-600 bg-clip-text text-transparent">
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
              className="relative group hover:shadow-lg transition-all border-[#4A919E]/10 hover:border-[#4A919E]/20 bg-white"
            >
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-[#4A919E]/10 p-3 ring-1 ring-[#4A919E]/20">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#4B5E6A]">{service.title}</CardTitle>
                <CardDescription className="text-sm text-[#4B5E6A]">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-2 rounded-lg bg-[#4A919E]/5">
                      <div className="text-lg font-bold text-[#4A919E]">{metric.value}</div>
                      <div className="text-xs text-[#4B5E6A]">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2">
                      <div className="rounded-full bg-[#4A919E]/10 p-1">
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
                    className="w-full group bg-gradient-to-r from-[#4A919E] to-teal-600 hover:from-[#3A7A85] hover:to-teal-700 text-white"
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