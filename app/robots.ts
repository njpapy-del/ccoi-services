import { MetadataRoute } from 'next'

const BASE_URL = 'https://ccoiservice.online'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Seules les routes API (formulaires contact / candidatures) sont techniques
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
