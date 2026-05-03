import { MetadataRoute } from 'next'

const BASE = 'https://ccoi-services.onrender.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // ── SEO service pages (indexables par Google) ───────────────
    {
      url: `${BASE}/ai-consulting`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/saas-development`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/crm-development`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/data-analytics`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
