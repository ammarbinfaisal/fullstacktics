# Fullstacktics SEO Guide (App Router)

This guide covers metadata, JSON-LD structured data, sitemaps/robots, Open Graph/Twitter, internal linking, and performance best practices tailored to this repository (Next.js App Router, Tailwind, framer-motion).

---

## Goals
- Clear, consistent metadata across pages.
- Rich results via JSON-LD (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage, Article).
- Solid technical SEO: canonical URLs, robots, sitemaps, OG images.
- Internal linking and content structure that supports our Automation specialization.

---

## Metadata (Next.js App Router)
Use the Metadata API where possible, then add JSON-LD via `<Script>`.

- Global: `src/app/layout.tsx:1`
  - Keep `export const metadata: Metadata = { ... }` for site defaults.
  - Add `metadataBase` for canonical generation.

Example
```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.fullstacktics.com'),
  title: {
    default: 'Fullstacktics – AI-Driven Full‑Stack Engineering',
    template: '%s | Fullstacktics',
  },
  description: 'Workflow automation (n8n/Make.com), AI content ops, and full‑stack delivery.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.fullstacktics.com',
    title: 'Fullstacktics',
    description: 'Automation + AI + Full‑stack delivery',
    siteName: 'Fullstacktics',
  },
  twitter: { card: 'summary_large_image', creator: '@your_handle' },
}
```

- Per-page: `export const metadata` or `export async function generateMetadata()` in each route file (e.g., `src/app/services/[id]/page.tsx:1`).
- Canonical per route: `alternates: { canonical: '/services/automation' }`.
- Noindex on previews:
```ts
// per page
export const metadata = { robots: { index: false, follow: false } }
```

---

## JSON-LD (Structured Data)
Add JSON-LD scripts using `next/script`. Use one `<Script>` per type. For dynamic pages, build from the page’s data.

How to inject
```tsx
// In any page or layout file
import Script from 'next/script'

const jsonLd = {/*...*/}

<Script id="ld-organization" type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fullstacktics",
  "url": "https://www.fullstacktics.com/",
  "logo": "https://www.fullstacktics.com/logo.png",
  "sameAs": [
    "https://www.upwork.com/freelancers/~0120fff5d26578a75e",
    "https://github.com/your-org",
    "https://www.linkedin.com/company/your-company"
  ]
}
```
Notes
- Update `logo` to a site logo you host (e.g., `/logo.png`).
- Add `contactPoint` if you want a Support entry.

### WebSite + SearchAction
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.fullstacktics.com/",
  "name": "Fullstacktics",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.fullstacktics.com/search?q={query}",
    "query-input": "required name=query"
  }
}
```

### WebPage (generic page)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.fullstacktics.com/services",
  "name": "Services – Fullstacktics",
  "description": "Comprehensive full‑stack development and workflow automation services."
}
```

### Service (for service detail pages)
Recommended for `/services/[id]` (e.g., Automation).
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Workflow Automation (n8n / Make.com)",
  "provider": {
    "@type": "Organization",
    "name": "Fullstacktics",
    "url": "https://www.fullstacktics.com/"
  },
  "areaServed": "Global",
  "offers": {
    "@type": "Offer",
    "url": "https://www.fullstacktics.com/services/automation",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

Dynamic Service JSON-LD from your data
```tsx
// src/app/services/[id]/page.tsx (inside component)
import Script from 'next/script'
import { getServiceData } from '@/lib/services-data'

const service = getServiceData(params.id)
const serviceJsonLd = service && {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  description: service.description,
  provider: { '@type': 'Organization', name: 'Fullstacktics', url: 'https://www.fullstacktics.com' },
  areaServed: 'Global',
  offers: { '@type': 'Offer', url: `https://www.fullstacktics.com/services/${service.id}` },
}

{serviceJsonLd && (
  <Script id={`ld-service-${service.id}`} type="application/ld+json" strategy="afterInteractive"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
  />
)}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://www.fullstacktics.com/"},
    {"@type":"ListItem","position":2,"name":"Services","item":"https://www.fullstacktics.com/services"},
    {"@type":"ListItem","position":3,"name":"Automation","item":"https://www.fullstacktics.com/services/automation"}
  ]
}
```

### FAQPage
```json
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"Can you connect Next.js to n8n/Make?","acceptedAnswer":{"@type":"Answer","text":"Yes. We securely connect frontends to workflows using webhooks, OAuth, and observability best practices."}},
    {"@type":"Question","name":"Do you add human review gates?","acceptedAnswer":{"@type":"Answer","text":"We can add human-in-the-loop approvals at critical steps for quality and compliance."}}
  ]
}
```

### Article/BlogPosting
```json
{
  "@context":"https://schema.org",
  "@type":"BlogPosting",
  "headline":"Hook Next.js Forms to n8n Securely",
  "author":{"@type":"Organization","name":"Fullstacktics"},
  "datePublished":"2024-11-01",
  "image":["https://www.fullstacktics.com/og/blog/n8n-forms.png"],
  "mainEntityOfPage":"https://www.fullstacktics.com/blog/n8n-secure-forms"
}
```

---

## Open Graph, Twitter, and OG Images
- Use Metadata API for OG/Twitter tags (see example in Metadata section).
- This repo already generates OG images for services: `src/app/services/[id]/opengraph-image.tsx:1`.
- For new pages (e.g., Case Studies), add similar OG image routes.

---

## Canonical URLs and Routing
- Set `metadataBase` in layout and use `alternates.canonical` per page.
- Avoid query‑param duplicates; route canonical to the clean URL.
- Consolidate trailing slash behavior in `next.config.mjs:1` if needed.

---

## Sitemaps and robots
Create programmatic sitemaps and environment-aware robots.

Sitemap
```ts
// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.fullstacktics.com'
  const paths = [
    '',
    '/services',
    '/services/automation',
    '/case-studies',
    '/blog',
  ]
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: 'weekly', priority: p ? 0.7 : 1 }))
}
```

Robots
```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.fullstacktics.com'
  const isProd = process.env.NODE_ENV === 'production'
  return {
    rules: isProd ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
```

---

## Images, Alt Text, and LCP
- Use `next/image` with explicit `alt` everywhere.
- Prefer `priority` for LCP images in hero.
- Provide descriptive `alt` for logos: e.g., “Baytonia logo”, “AiRendering.com logo”.

---

## Internal Linking and IA
- From Home: link to Services, highlighted Automation, and Case Studies.
- On service pages: link to Related Services and Contact.
- Blog posts should deep-link to Automation patterns and Case Studies.
- Use consistent anchor text (e.g., “n8n/Make.com automation”).

---

## Performance and Core Web Vitals
- Keep CLS low: reserve sizes, avoid layout shifts.
- Minimize main-thread work; defer 3rd‑party scripts with `strategy="afterInteractive"`.
- Use static generation where possible; cache API results.

---

## Internationalization (optional)
If adding locales:
- Configure i18n in `next.config.mjs`.
- Add `hrefLang` via Metadata API `alternates.languages`.
- Localize JSON-LD `inLanguage`.

---

## QA Checklist
- Titles are unique and descriptive; descriptions concise (140–160 chars).
- Canonical set per page; robots allow/disallow as intended.
- JSON-LD validates in Rich Results Test (Organization, Service, FAQ, Article).
- OG/Twitter cards render with correct image and summary.
- Sitemap/robots reachable and correct.
- Internal links crawlable; no orphan pages.

---

## Quick Recipes (copy/paste)
- Add Organization JSON-LD to layout.
- Add Service + Breadcrumb + FAQ JSON-LD to service detail pages.
- Add BlogPosting JSON-LD to MDX blog pages.
- Add `/sitemap.ts` and `/robots.ts` for discoverability.

Notes
- Replace example domain, handles, and assets with your production values.
- Keep secrets server-side; never expose API keys in JSON-LD or client code.
