import ServicePageTemplate from '@/app/service';
import servicesData from '@/app/services.json';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
    aiDevelopmentMetadata,
    performanceOptimizationMetadata,
    infrastructureMetadata,
    apiIntegrationMetadata,
} from './meta';

type Props = {
    params: { id: string };
};

// Map service IDs to metadata
const metadataMap = {
    'ai-development': aiDevelopmentMetadata,
    'performance-optimization': performanceOptimizationMetadata,
    infrastructure: infrastructureMetadata,
    'api-integration': apiIntegrationMetadata,
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const services = Object.entries(servicesData).map(([key, service]) => ({
        slug: key,
        ...service,
    }));

    const service = services.find((service) => service.slug === params.id);

    if (!service) {
        notFound();
    }

    const metadata = metadataMap[params.id as keyof typeof metadataMap] || {
        title: `${service.title} | Fullstacktics`,
        description: service.description,
        keywords: service.features,
    };

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.openGraph?.title || metadata.title,
            description: metadata.openGraph?.description || metadata.description,
            images: metadata.openGraph?.images || [
                {
                    url: `/images/services/${service.slug}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.twitter?.title || metadata.title,
            description: metadata.twitter?.description || metadata.description,
            images: metadata.twitter?.images || [`/images/services/${service.slug}.jpg`],
        },
        keywords: metadata.keywords || service.features,
    };
};

async function ServiceIndividual({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const p = await params;
    const { id } = p;
    const services = Object.entries(servicesData).map(([key, service]) => ({
        slug: key,
        ...service,
    }));

    const service = services.find((service) => service.slug === id);

    if (!service) {
        console.error(`Service with id ${id} not found`);
        notFound();
    }

    return <ServicePageTemplate serviceData={service} />;
}

export default ServiceIndividual;