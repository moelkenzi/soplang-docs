import { MetadataRoute } from 'next'
import { siteConfig } from './metadata.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/docs',
    '/play',
    '/docs/getting-started',
    '/docs/installation',
    '/docs/syntax',
    '/docs/examples'
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
