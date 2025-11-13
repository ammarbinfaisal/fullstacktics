import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.fullstacktics.com'
  const isProd = process.env.NODE_ENV === 'production'

  return {
    rules: isProd
      ? {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/_next/', '/inquiry/', '/confirmation/', '/we-will-contact-you/', '/invalid-parameters/', '/unauthorized/'],
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    sitemap: `${base}/sitemap.xml`,
  }
}
