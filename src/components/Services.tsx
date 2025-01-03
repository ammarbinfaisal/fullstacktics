import { TrendingUp, Database, Workflow, Filter } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import servicesData from "@/app/services.json";
import { Button } from "./ui/button";

export default function Services() {
  const services = Object.entries(servicesData).map(([key, service]) => ({
    slug: key,
    ...service,
  }));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5 text-primary" />;
      case "Database":
        return <Database className="h-5 w-5 text-primary" />;
      case "Workflow":
        return <Workflow className="h-5 w-5 text-primary" />;
      case "Filter":
        return <Filter className="h-5 w-5 text-primary" />;
      default:
        return <TrendingUp className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="services" className="container py-12 md:py-24 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Business Growth Solutions
        </h2>
        <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground">
          Comprehensive business growth, automation, and CRM solutions to help your
          business scale efficiently in the digital landscape.
        </p>
      </div>
      <div className="grid gap-6 pt-8 sm:pt-12 sm:grid-cols-2">
        {services.map((service) => (
          <Link key={service.title} href={`/services/${service.slug}`}>
            <Card
              key={service.title}
              className="group relative overflow-hidden h-full min-h-[450px]"
            >
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <ul className="grid gap-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Benefits:</h4>
                    <ul className="grid gap-2">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    Learn More
                  </Button>
                </div>
              </CardContent>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}