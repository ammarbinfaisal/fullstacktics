import serviceData from "@/app/services.json";
import { CheckCircle, TrendingUp, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Revenue Growth Automation",
      key: "growth-strategy",
      description: serviceData["growth-strategy"].description,
      icon: <TrendingUp className="h-6 w-6" />,
      metrics: [
        "60% less manual tasks",
        "3-4x processing speed",
        "Real-time tracking"
      ],
      features: serviceData["growth-strategy"].features.slice(0, 3)
    },
    {
      title: "Operations Automation Hub",
      key: "automation-integration",
      description: serviceData["automation-integration"].description,
      icon: <Workflow className="h-6 w-6" />,
      metrics: [
        "90% less operations",
        "Zero-error flows",
        "Real-time monitoring"
      ],
      features: serviceData["automation-integration"].features.slice(0, 3)
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          Seamless Business Automation
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Harness Make.com and n8n for powerful, custom automation solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.key} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                {service.icon}
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {service.metrics.map((metric) => (
                  <div key={metric} className="text-center">
                    <div className="text-sm font-medium text-primary">{metric}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.key}`} className="w-full">
                <Button className="w-full" size="lg">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}