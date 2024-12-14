import { Bot, Database, Gauge } from "lucide-react";

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
  return (
    <section id="services" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Our Services
        </h2>
        <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground">
          We offer a comprehensive suite of web development and automation
          services to help your business thrive in the digital world.
        </p>
      </div>
      <div className="grid gap-6 pt-8 sm:pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.title} href={`/services/${service.slug}`}>
            <Card
              key={service.title}
              className="group relative overflow-hidden h-[400px]"
            >
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  {service.icon === "Database" ? (
                    <Database />
                  ) : service.icon === "Bot" ? (
                    <Bot />
                  ) : (
                    <Gauge />
                  )}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-center gap-2 mb-4">
                <ul className="grid gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button size="sm" className="group">
                  Learn More
                </Button>
                </div>
              </CardContent>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
