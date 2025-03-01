import Image from 'next/image'
import Link from 'next/link'

const PastClients = () => {
    const clients = [
        {
            name: 'AiRendering.com',
            url: 'https://airendering.com',
            logo: '/airendering.com-logo.svg',
            description: 'Leading platform for AI-powered architectural visualization',
        },
        {
            name: 'Baytonia.com',
            url: 'https://baytonia.com',
            logo: '/baytonia.png',
            description: 'Premier e-commerce solution in the Middle East',
        },
    ]

    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Our Past Clients</h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    We&apos;ve had the privilege of working with amazing companies and professionals.
                    Here are some of our notable collaborations.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="border rounded-lg p-8 hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm"
                        >
                            <div className="h-24 relative mb-6">
                                <Link href={client.url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{client.name}</h3>
                            <p className="text-gray-600 mb-4">{client.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Check Our Work History</h3>
                    <Link
                        href="https://www.upwork.com/freelancers/~0120fff5d26578a75e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <span>View Our Upwork Profile</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PastClients 