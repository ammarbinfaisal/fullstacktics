export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://fullstacktics.com/#organization",
    "name": "Fullstacktics",
    "alternateName": "Fullstacktics - Web Automation & Full-Stack Development",
    "url": "https://fullstacktics.com",
    "logo": "https://fullstacktics.com/favicon.ico",
    "description": "We build stealthy browser bots, web scrapers, and production-ready SaaS products. Specializing in automation that bypasses detection, data extraction from protected sites, and full-stack development with Next.js.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "postalCode": "110025",
      "addressCountry": "IN"
    },
    "email": "ammar@fullstacktics.com",
    "sameAs": [
      "https://github.com/fullstacktics",
      "https://www.linkedin.com/company/fullstacktics"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Automation & Bots",
            "description": "Stealthy browser bots that bypass detection, handle CAPTCHAs, and automate platforms like Quora, Medium, Twitter, LinkedIn, and Amazon Seller Central.",
            "url": "https://fullstacktics.com/services/bots",
            "provider": { "@id": "https://fullstacktics.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Scraping & ETL",
            "description": "Data extraction from protected sites with fingerprint rotation, proxy networks, and Airflow ETL pipelines that feed your systems automatically.",
            "url": "https://fullstacktics.com/services/scrapers",
            "provider": { "@id": "https://fullstacktics.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Development",
            "description": "Production-ready SaaS products with Next.js, Clerk authentication, Stripe billing, and AI integrations that ship in weeks.",
            "url": "https://fullstacktics.com/services/saas",
            "provider": { "@id": "https://fullstacktics.com/#organization" }
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fullstacktics",
    "url": "https://fullstacktics.com",
    "publisher": { "@id": "https://fullstacktics.com/#organization" }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}