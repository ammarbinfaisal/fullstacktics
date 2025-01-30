import serviceData from "@/app/services.json";
import { CheckCircle, Database, Settings, Workflow, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      title: "Platform Automation",
      key: "automation-integration",
      description: serviceData["automation-integration"].description,
      icon: <Workflow className="h-6 w-6" />,
      metrics: [
        "90% less manual work",
        "24/7 automation",
        "Real-time sync"
      ],
      features: [
        "Make.com automation",
        "n8n workflow design",
        "Zapier integration"
      ]
    },
    {
      title: "Data Management",
      key: "data-management",
      description: serviceData["data-management"].description,
      icon: <Database className="h-6 w-6" />,
      metrics: [
        "100% accuracy",
        "Automated sync",
        "Zero data entry"
      ],
      features: [
        "Airtable integration",
        "Monday.com sync",
        "Google Workspace automation"
      ]
    },
    {
      title: "Workflow Optimization",
      key: "workflow-optimization",
      description: serviceData["workflow-optimization"].description,
      icon: <Settings className="h-6 w-6" />,
      metrics: [
        "85% time saved",
        "Eliminated errors",
        "Custom processes"
      ],
      features: [
        "Custom API integration",
        "Webhook automation",
        "Error handling"
      ]
    },
    {
      title: "System Integration",
      key: "system-integration",
      description: "Connect and automate data flow between all your business tools and platforms",
      icon: <GitBranch className="h-6 w-6" />,
      metrics: [
        "Real-time sync",
        "Zero downtime",
        "Custom logic"
      ],
      features: [
        "Cross-platform integration",
        "Custom code actions",
        "Advanced routing"
      ]
    }
  ];

  return (
    <section className="container py-24 px-12 mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          Professional Automation Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          Replace expensive tools and manual processes with custom automation solutions using Make.com, n8n, and Zapier
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="relative group hover:shadow-lg transition-all">
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
              <Link href={`/services/${service.key}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}