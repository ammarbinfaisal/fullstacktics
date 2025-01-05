export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    client: string;
    industry: string;
    services: string[];
    results: {
        metric: string;
        value: string;
    }[];
    content: string;
    date: string;
}