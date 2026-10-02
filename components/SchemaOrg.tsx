/**
 * SchemaOrg — JSON-LD structured data for Google rich results.
 * Renders Organization + LocalBusiness + WebSite schemas.
 */
export default function SchemaOrg() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://ccoiservice.online/#organization',
    name: 'CCOI SERVICES',
    legalName: 'CCOI SERVICES',
    url: 'https://ccoiservice.online',
    image: 'https://ccoiservice.online/og-image.jpg',
    description:
      'CCOI SERVICES is a premium AI consulting and SaaS development company providing intelligent systems, CRM solutions, data analytics and embedded systems for enterprises in Europe and the USA.',
    founder: {
      '@type': 'Person',
      name: 'Ndzouakeu Jeannot Youssef',
      jobTitle: 'Founder & Chief AI Engineer',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Omar Kaddeh',
      addressLocality: 'Montplaisir',
      postalCode: '1073',
      addressRegion: 'Tunis',
      addressCountry: 'TN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+216-26-089-553',
        contactType: 'customer service',
        availableLanguage: ['English', 'French'],
        areaServed: ['TN', 'EU', 'US'],
      },
    ],
    email: 'ccoiservice851@gmail.com',
    telephone: '+216-26-089-553',
    sameAs: [
      'https://github.com/njpapy-del',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CCOI SERVICES — Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Consulting',
            description: 'Proactive AI systems, NLP, machine learning and intelligent automation for enterprises.',
            url: 'https://ccoiservice.online/ai-consulting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development',
            description: 'Custom cloud-native SaaS platforms built for scale, performance and reliability.',
            url: 'https://ccoiservice.online/saas-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CRM Development',
            description: 'AI-powered custom CRM solutions with advanced pipeline management and analytics.',
            url: 'https://ccoiservice.online/crm-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Analytics',
            description: 'End-to-end data engineering, real-time dashboards and predictive analytics.',
            url: 'https://ccoiservice.online/data-analytics',
          },
        },
      ],
    },
    areaServed: [
      { '@type': 'Country', name: 'Tunisia' },
      { '@type': 'Continent', name: 'Europe' },
      { '@type': 'Country', name: 'United States' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'SaaS Development',
      'CRM Systems',
      'Data Analytics',
      'Embedded Systems',
      'Software Engineering',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ccoiservice.online/#website',
    url: 'https://ccoiservice.online',
    name: 'CCOI SERVICES',
    description: 'AI Consulting & SaaS Development Company',
    publisher: { '@id': 'https://ccoiservice.online/#organization' },
    inLanguage: 'en-US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
