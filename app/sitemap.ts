import { MetadataRoute } from 'next'

const BASE = 'https://ccoiservice.online'

// Date de dernière modification réelle du contenu de chaque page.
// À mettre à jour quand le contenu d'une page change.
const LAST_MODIFIED = {
  home: '2026-10-02',
  services: '2026-10-02',
}

// Pages services réellement présentes dans app/
const servicePages = ['ai-consulting', 'saas-development', 'crm-development', 'data-analytics']

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...servicePages.map(slug => ({
      url: `${BASE}/${slug}`,
      lastModified: LAST_MODIFIED.services,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
