export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "#organization",
    "name": "Fullstacktics - AI & Full-Stack Development Agency",
    "offers": [
      {
        "@type": "Service",
        "name": "AI-Powered Development",
        "description": "Custom AI solutions leveraging PyTorch, LLMs, and diffusion models, seamlessly integrated into scalable Next.js applications for intelligent, high-performance systems.",
        "serviceType": "AI Development",
        "provider": { "@id": "#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Features",
              "itemListElement": [
                "PyTorch model development",
                "LLM fine-tuning with vLLM",
                "Diffusion model deployment",
                "Next.js frontend integration",
                "Real-time AI inference",
              ],
            },
          ],
        },
        "review": {
          "@type": "Review",
          "reviewBody": [
            "Their AI integration transformed our platform’s capabilities.",
            "Lightning-fast inference with zero compromise on accuracy.",
          ],
        },
      },
      {
        "@type": "Service",
        "name": "Performance Optimization",
        "description": "Comprehensive optimization for AI models and applications, ensuring speed, efficiency, and scalability with tools like Redis and advanced profiling.",
        "serviceType": "Performance Optimization",
        "provider": { "@id": "#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Features",
              "itemListElement": [
                "AI model compression",
                "Core Web Vitals optimization",
                "Redis caching strategies",
                "Latency reduction",
                "Resource profiling",
              ],
            },
          ],
        },
      },
      {
        "@type": "Service",
        "name": "Scalable Infrastructure",
        "description": "Enterprise-grade infrastructure with Go, FastAPI, and Postgres, built to support AI workloads and high-traffic applications.",
        "serviceType": "Infrastructure Services",
        "provider": { "@id": "#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Features",
              "itemListElement": [
                "Go microservices",
                "FastAPI endpoints",
                "Postgres scalability",
                "Edge deployment",
                "Real-time processing",
              ],
            },
          ],
        },
      },
      {
        "@type": "Service",
        "name": "API & AI Integration",
        "description": "High-performance APIs with FastAPI and Go, designed to integrate AI models like BERT and diffusion models into production systems.",
        "serviceType": "API Development",
        "provider": { "@id": "#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Features",
              "itemListElement": [
                "FastAPI development",
                "Go microservices",
                "AI model serving",
                "Real-time endpoints",
                "Type-safe APIs",
              ],
            },
          ],
        },
        "review": {
          "@type": "Review",
          "reviewBody": [
            "Their API integration made our AI models production-ready.",
            "FastAPI and Go combo delivered unmatched speed.",
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}