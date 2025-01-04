import servicesData from '@/app/services.json';
import ServicePageTemplate from '../../service';
import { notFound } from 'next/navigation';

async function ServiceIndividual({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const p = await params;
    const { id } = p;
    console.log(p);
    const services = Object.entries(servicesData).map(([key, service]) => ({
        slug: key,
        ...service
    }));

    const service = services.find((service) => service.slug === id);

    if (!service) {
        console.error(`Service with id ${id} not found`);
        notFound();
    }

    return <ServicePageTemplate serviceData={service} />;
}


export default ServiceIndividual;