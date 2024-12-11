import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import servicesData from '@/app/services.json';

export default function ServicesPage() {
  const services = Object.entries(servicesData).map(([key, service]) => ({
    slug: key,
    ...service
  }));

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-teal-500 mb-8 text-center">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="bg-gray-800 border-teal-500/20 hover:border-teal-500/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-500">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}