import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

const BASE = 'https://ccoi-services.onrender.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'SaaS Development Company — Custom Platforms | CCOI SERVICES',
  description:
    'CCOI SERVICES builds scalable, production-ready SaaS platforms for startups and enterprises. Custom cloud-native architecture, multi-tenant systems and AI-powered features for Europe and USA markets.',
  keywords: [
    'SaaS development', 'SaaS development company', 'custom SaaS platform',
    'SaaS development agency', 'cloud-native SaaS', 'multi-tenant SaaS',
    'B2B SaaS development', 'SaaS startup development', 'SaaS development Europe',
  ],
  alternates: { canonical: `${BASE}/saas-development` },
  openGraph: {
    title: 'SaaS Development Company | CCOI SERVICES',
    description: 'Custom cloud-native SaaS platforms built for scale. From MVP to enterprise — AI-powered, production-ready, delivered fast.',
    url: `${BASE}/saas-development`,
    siteName: 'CCOI SERVICES',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Development Services',
  serviceType: 'Software as a Service Development',
  provider: {
    '@type': 'Organization',
    name: 'CCOI SERVICES',
    url: BASE,
    telephone: '+216-26-089-553',
    email: 'ccoiservice28@gmail.com',
  },
  areaServed: ['Europe', 'USA', 'Tunisia'],
  url: `${BASE}/saas-development`,
  description: 'Custom cloud-native SaaS platform development for startups and enterprises — multi-tenant architecture, AI integration and scalable infrastructure.',
}

export default function SaaSDevelopmentPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'SaaS Development',
        h1: 'Custom SaaS Development<br/><span style="background:linear-gradient(135deg,#7C3AED,#00B4FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent">That Scales with You</span>',
        tagline: 'We design and build cloud-native SaaS platforms that handle millions of users, integrate AI natively and deliver exceptional user experiences — from MVP to enterprise scale.',
        color: '#7C3AED',
      }}
      intro={`In today's digital economy, SaaS is the dominant software delivery model — and building a successful SaaS product requires more than just writing code.
It demands deep architectural thinking, performance engineering, security by design and a product mindset that keeps user experience at the center.

CCOI SERVICES is a specialized SaaS development company with a proven track record of delivering scalable, production-ready platforms for B2B and B2C markets in Europe and the United States.
Our team of 6 senior engineers has built SaaS products across industries including fintech, healthcare, e-commerce, HR and education — each handling thousands to millions of concurrent users.

We don't just build software. We architect digital products that grow with your business.
From defining your technical architecture to shipping your first paying customer, CCOI SERVICES is your end-to-end SaaS development partner.`}
      sections={[
        {
          h2: 'Our SaaS Development Expertise',
          h3s: [
            {
              title: 'Cloud-Native Architecture',
              body: 'We design SaaS platforms on modern cloud infrastructure (AWS, GCP, Azure) using microservices, containerization (Docker, Kubernetes) and serverless patterns for maximum scalability and cost efficiency.',
            },
            {
              title: 'Multi-Tenant Systems',
              body: 'Our multi-tenant architecture patterns ensure data isolation, performance at scale and seamless onboarding for new customers — built with PostgreSQL row-level security or schema-per-tenant models.',
            },
            {
              title: 'AI-Powered Features',
              body: 'We integrate intelligence directly into your SaaS product — from smart search and recommendations to automated workflows and predictive analytics dashboards powered by machine learning.',
            },
            {
              title: 'API-First Development',
              body: 'Every SaaS platform we build comes with a well-documented REST or GraphQL API, enabling integrations with third-party tools, mobile apps and partner systems from day one.',
            },
            {
              title: 'Real-Time Capabilities',
              body: 'WebSocket-powered real-time features, event-driven architectures with Kafka or Redis Streams, and live collaboration capabilities for modern SaaS applications.',
            },
            {
              title: 'Billing & Subscription',
              body: 'Full Stripe integration for subscription management, usage-based billing, freemium models, invoicing and dunning automation — everything you need to monetize your SaaS product.',
            },
          ],
        },
        {
          h2: 'Our SaaS Tech Stack',
          h3s: [
            { title: 'Frontend', body: 'Next.js, React, TypeScript, TailwindCSS — performant, SEO-optimized frontends with pixel-perfect UI and exceptional Core Web Vitals scores.' },
            { title: 'Backend', body: 'Node.js, Python (FastAPI), PostgreSQL, Redis — battle-tested backend architectures built for high availability and horizontal scaling.' },
            { title: 'Infrastructure', body: 'Docker, Kubernetes, Terraform, GitHub Actions CI/CD — automated deployments, infrastructure as code and zero-downtime releases.' },
            { title: 'Security', body: 'SOC2-aligned security practices: JWT authentication, RBAC, encryption at rest and in transit, audit logging and GDPR compliance.' },
          ],
        },
      ]}
      benefits={[
        'SaaS MVP delivery in 4–8 weeks — from concept to production',
        'Battle-tested multi-tenant architecture patterns',
        'AI natively integrated — not bolted on',
        '99.99% uptime SLAs with auto-scaling infrastructure',
        'GDPR compliant for European market requirements',
        'Full source code ownership — no vendor lock-in',
        'Post-launch support and maintenance packages available',
        'Transparent pricing and fixed-scope project options',
      ]}
      cta={{ text: 'Ready to Build Your SaaS Product?', href: '/#contact' }}
      relatedPages={[
        { label: 'AI Consulting', href: '/ai-consulting', color: '#00B4FF' },
        { label: 'CRM Development', href: '/crm-development', color: '#06B6D4' },
        { label: 'Data Analytics', href: '/data-analytics', color: '#a855f7' },
      ]}
      schemaService={schema}
    />
  )
}
