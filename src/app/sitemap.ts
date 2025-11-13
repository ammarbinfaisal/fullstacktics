import type { MetadataRoute } from 'next'
import { getAllServices } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.fullstacktics.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/inquiry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Dynamic service pages
  const services = getAllServices()
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.id === 'automation' ? 0.9 : 0.7,
  }))

  return [...staticPages, ...servicePages]
}
