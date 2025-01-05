import serviceData from "@/app/services.json";
import { CheckCircle, Database, Filter, TrendingUp, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Growth Strategy & GTM",
      key: "growth-strategy",
      description: serviceData["growth-strategy"].description,
      icon: <TrendingUp className="h-6 w-6" />,
      metrics: [
        "30-50% lower CAC",
        "2-3x conversion rates",
        "Clear ROI tracking"
      ],
      features: serviceData["growth-strategy"].features.slice(0, 3)
    },
    {
      title: "Marketing Automation",
      key: "automation-integration",
      description: serviceData["automation-integration"].description,
      icon: <Workflow className="h-6 w-6" />,
      metrics: [
        "80% less manual work",
        "Zero workflow errors",
        "Real-time sync"
      ],
      features: serviceData["automation-integration"].features.slice(0, 3)
    },
    {
      title: "Custom Funnels & CRM",
      key: "funnel-crm",
      description: serviceData["funnel-crm"].description,
      icon: <Filter className="h-6 w-6" />,
      metrics: [
        "40% higher conversions",
        "90% faster responses",
        "Automated nurturing"
      ],
      features: serviceData["funnel-crm"].features.slice(0, 3)
    },
    {
      title: "Data Collection",
      key: "data-automation",
      description: serviceData["data-automation"].description,
      icon: <Database className="h-6 w-6" />,
      metrics: [
        "100x faster collection",
        "99.9% accuracy",
        "Real-time updates"
      ],
      features: serviceData["data-automation"].features.slice(0, 3)
    }
  ];

  return (
    <section className="container py-24 px-12 mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          End-to-End Business Automation
        </h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          Combine the power of no-code tools with custom development for the perfect automation solution
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="relative group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {service.metrics.map((metric) => (
                  <div key={metric} className="text-center">
                    <div className="text-sm font-medium text-primary">{metric}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.key}`}>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
