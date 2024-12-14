import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import servicesData from '@/app/services.json';
import { Bot, Database, Gauge } from 'lucide-react';
import { Button } from "@/components/ui/button";

const iconMap = {
  "browser-automation": Bot,
  "web-scraping": Database,
  "react-performance": Gauge,
};

export default function ServicesPage() {
  const services = Object.entries(servicesData).map(([key, service]) => ({
    slug: key,
    ...service
  }));

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="max-w-[750px] text-base sm:text-lg text-muted-foreground md:text-xl">
            Comprehensive web development and automation solutions for your business
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="h-full transition-colors hover:border-primary/50">
                  <CardHeader className="space-y-4 p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="inline-block rounded-lg bg-primary/10 p-2 sm:p-3">
                        {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
                      </div>
                      <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm flex flex-col justify-center sm:text-base text-muted-foreground">
                      <p className="line-clamp-3">
                      {service.description}
                      </p>
                      <Button size="sm" className="mt-4">
                        Learn More
                      </Button>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
