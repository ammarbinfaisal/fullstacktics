import servicesData from '@/app/services.json';
import ServicePageTemplate from '../service';
import { notFound } from 'next/navigation';

async function ServiceIndividual({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const services = Object.entries(servicesData).map(([key, service]) => ({
        slug: key,
        ...service
    }));

    const service = services.find((service) => service.slug === id);

    if (!service) {
        notFound();
    }

    return <ServicePageTemplate serviceData={service} />;   
}


export default ServiceIndividual;