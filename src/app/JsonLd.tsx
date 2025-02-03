// app/components/JsonLd.tsx
export default function JsonLd() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "#organization",
      "name": "SaaS Development Agency",
      "offers": [
        {
          "@type": "Service",
          "name": "Custom SaaS Solution Development",
          "description": "Expert full-stack development specializing in software as a service solutions with multi-tenant architecture. Our development team focuses on creating scalable SaaS products through an optimized development process.",
          "serviceType": "SaaS Development",
          "provider": {"@id": "#organization"},
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Features",
                "itemListElement": [
                  "Full stack development with modern tech stack",
                  "Multi tenant architecture implementation",
                  "Custom SaaS solution design",
                  "Optimized development process",
                  "Enhanced user experience focus"
                ]
              }
            ]
          },
          "review": {
            "@type": "Review",
            "reviewBody": [
              "Exceptional development team that understood our business goals",
              "Transformed our software solution with their tech stack expertise"
            ]
          }
        },
        {
          "@type": "Service",
          "name": "SaaS Product Development Process",
          "description": "Comprehensive development process focusing on creating scalable software solutions with emphasis on user experience and business goals.",
          "serviceType": "Development Process",
          "provider": {"@id": "#organization"},
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Features",
                "itemListElement": [
                  "Structured development process",
                  "Full stack implementation",
                  "Project management integration",
                  "User experience optimization",
                  "Business goals alignment"
                ]
              }
            ]
          }
        },
        {
          "@type": "Service",
          "name": "SaaS Platform Infrastructure",
          "description": "Enterprise-grade infrastructure setup for software as a service platforms, focusing on multi tenant architecture and scalability.",
          "serviceType": "Infrastructure Services",
          "provider": {"@id": "#organization"},
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Features",
                "itemListElement": [
                  "Multi tenant architecture",
                  "Scalable software solution",
                  "Tech stack optimization",
                  "Development process automation",
                  "User experience focus"
                ]
              }
            ]
          }
        },
        {
          "@type": "Service",
          "name": "High-Performance API Development",
          "description": "Enterprise-grade API development with focus on type safety, real-time capabilities, and advanced caching strategies. Expertise in tRPC, GraphQL, and RESTful architectures.",
          "serviceType": "API Development",
          "provider": {"@id": "#organization"},
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Features",
                "itemListElement": [
                  "Type-safe API development with tRPC",
                  "GraphQL endpoint optimization",
                  "Real-time API capabilities",
                  "Advanced caching strategies",
                  "Performance monitoring and metrics"
                ]
              }
            ]
          },
          "review": {
            "@type": "Review",
            "reviewBody": [
              "Dramatically improved our API performance with innovative caching solutions",
              "The type-safe implementation significantly reduced our runtime errors"
            ]
          }
        }
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }