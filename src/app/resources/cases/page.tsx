import Link from 'next/link';
import { getCaseStudies } from './cases';


function ResultCard({ metric, value }: { metric: string; value: string }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">{metric}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
}

function ServiceBadge({ service }: { service: string }) {
    return (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {service}
        </span>
    );
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Business Automation Case Studies
                </h1>
                <p className="text-xl text-gray-600">
                    Explore how we&apos;ve helped businesses transform their operations through automation
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                    <div
                        key={study.slug}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {study.title}
                                </h2>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <span>{study.client}</span>
                                    <span className="mx-2">•</span>
                                    <span>{study.industry}</span>
                                </div>
                                <p className="text-gray-600">
                                    {study.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                    Services Provided
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.services.map((service) => (
                                        <ServiceBadge key={service} service={service} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                    Key Results
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {study.results.map((result) => (
                                        <ResultCard
                                            key={result.metric}
                                            metric={result.metric}
                                            value={result.value}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={`/resources/cases/${study.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                                >
                                    Read full case study
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}