import Image from 'next/image';
import Link from 'next/link';

const PastClients = () => {
    const clients = [
        {
            name: 'AiRendering.com',
            url: 'https://airendering.com',
            logo: '/airendering.com-logo.svg',
            invert: false,
            description: 'AI-powered architectural visualization',
        },
        {
            name: 'Baytonia.com',
            url: 'https://baytonia.com',
            logo: '/baytonia.png',
            invert: false,
            description: 'Premier e-commerce solution in the Middle East',
        },
        {
            name: 'Rockvest',
            url: 'https://rockvest.vercel.app', // Placeholder URL; update as needed
            logo: '/rockvest.webp', // Placeholder path; update with actual logo
            invert: true,
            description: 'Rockvest focuses on selling luxury properties in international markets',
        },
    ];

    return (
        <section className="container w-full mx-auto py-24 px-4 bg-[#F5F5F5]">
            <h2 className="text-4xl font-bold text-center my-4 text-[#4B5E6A]">Trusted by</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className="border rounded-lg p-8 hover:shadow-lg transition-shadow bg-white border-[#4A919E]/10"
                    >
                        <div className="h-24 relative mb-6">
                            <Link href={client.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    fill
                                    className={`object-contain ${client.invert ? 'invert' : ''}`}
                                />
                            </Link>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-[#4B5E6A]">{client.name}</h3>
                        <p className="text-[#4B5E6A] mb-4">{client.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#4B5E6A]">Check Our Work History</h3>
                <Link
                    href="https://www.upwork.com/freelancers/~0120fff5d26578a75e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#4A919E] text-white px-6 py-3 rounded-lg hover:bg-[#3A7A85] transition-colors"
                >
                    <span>View Our Upwork Profile</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </div>
        </section >
    );
};

export default PastClients;