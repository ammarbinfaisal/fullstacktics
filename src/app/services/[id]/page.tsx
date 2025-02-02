import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
    params: { id: string }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const services = Object.entries(servicesData).map(([key, service]) => ({
        slug: key,
        ...service
    }));

    const service = services.find((service) => service.slug === params.id);

    if (!service) {
        notFound();
    }

    const title = `${service.title} | Professional Services`;
    const description = service.description;

    return {
        title,
        description,
        openGraph: {
            title: service.title,
            description: service.description,
            images: [
                {
                    url: `/images/services/${service.slug}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                }
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: service.title,
            description: service.description,
            images: [`/images/services/${service.slug}.jpg`],
        },
        keywords: [
            ...service.features,
        ],
    };
};

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