import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

const BASE = 'https://ccoi-services.onrender.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'CRM Development Services — Custom CRM Solutions | CCOI SERVICES',
  description:
    'CCOI SERVICES builds custom AI-powered CRM systems tailored to your sales processes. Automated pipelines, lead scoring, analytics dashboards and integrations for businesses in Europe and USA.',
  keywords: [
    'CRM development', 'custom CRM solutions', 'CRM development services',
    'AI-powered CRM', 'CRM software development', 'custom CRM system',
    'sales CRM development', 'CRM development company', 'enterprise CRM',
  ],
  alternates: { canonical: `${BASE}/crm-development` },
  openGraph: {
    title: 'CRM Development Services | CCOI SERVICES',
    description: 'Custom AI-powered CRM solutions — automated pipelines, intelligent lead scoring and real-time analytics for European and US enterprises.',
    url: `${BASE}/crm-development`,
    siteName: 'CCOI SERVICES',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Development Services',
  serviceType: 'Customer Relationship Management Software Development',
  provider: {
    '@type': 'Organization',
    name: 'CCOI SERVICES',
    url: BASE,
    telephone: '+216-26-089-553',
    email: 'ccoiservice28@gmail.com',
  },
  areaServed: ['Europe', 'USA', 'Tunisia'],
  url: `${BASE}/crm-development`,
  description: 'Custom AI-powered CRM systems with automated pipelines, lead scoring, analytics and full business process integration.',
}

export default function CRMDevelopmentPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'CRM Development',
        h1: 'Custom CRM Development<br/><span style="background:linear-gradient(135deg,#06B6D4,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Powered by AI</span>',
        tagline: 'Off-the-shelf CRMs like Salesforce or HubSpot may not fit your unique sales process. We build custom CRM systems that perfectly mirror your workflow — and make them smarter with AI.',
        color: '#06B6D4',
      }}
      intro={`Every business has a unique sales process, unique customer relationships and unique data challenges.
Generic CRM platforms like Salesforce, HubSpot or Pipedrive often require expensive customizations,
force you into rigid workflows and charge per-seat fees that scale poorly as your team grows.

CCOI SERVICES specializes in building custom CRM systems that are designed around your specific business processes —
not the other way around. Our CRM solutions are natively integrated with AI for intelligent lead scoring,
automated follow-up sequences, sales forecasting and conversational interfaces that your team will actually want to use.

We have delivered CRM platforms for sales teams ranging from 5 to 500+ users, for industries including
real estate, SaaS, professional services, manufacturing and financial advisory — each tailored to the
specific workflows, compliance requirements and integration needs of our clients across Europe and the USA.`}
      sections={[
        {
          h2: 'Custom CRM Features We Build',
          h3s: [
            {
              title: 'AI-Powered Lead Scoring',
              body: 'Machine learning models that analyze behavioral signals, firmographic data and engagement history to score and prioritize leads automatically — helping your sales team focus on the hottest opportunities.',
            },
            {
              title: 'Visual Pipeline Management',
              body: 'Drag-and-drop kanban pipelines with custom stages, automated stage transitions, deal rotation and real-time collaboration for distributed sales teams.',
            },
            {
              title: 'Sales Automation',
              body: 'Automated email sequences, follow-up reminders, task creation and workflow triggers based on deal stage, customer behavior or calendar events — reducing manual work by up to 70%.',
            },
            {
              title: 'Analytics & Forecasting',
              body: 'Real-time dashboards showing pipeline health, conversion rates, revenue forecasts and team performance. AI-powered forecasting that improves accuracy over time as it learns from your data.',
            },
            {
              title: 'Communication Hub',
              body: 'Unified inbox aggregating email, phone (VoIP), WhatsApp and LinkedIn conversations. Every touchpoint is logged automatically and linked to the correct contact and deal record.',
            },
            {
              title: 'Third-Party Integrations',
              body: 'Native integrations with Stripe, QuickBooks, Google Workspace, Slack, Zapier and your existing ERP or marketing automation tools via RESTful APIs and webhooks.',
            },
          ],
        },
        {
          h2: 'CRM Solutions by Industry',
          h3s: [
            { title: 'B2B SaaS Companies', body: 'Churn prediction, expansion revenue tracking, health scores and product usage data integrated directly into the CRM for customer success teams.' },
            { title: 'Real Estate Agencies', body: 'Property matching, automated valuation alerts, client portal, commission tracking and compliance document management.' },
            { title: 'Financial Services', body: 'Regulated CRM with GDPR-compliant data handling, activity logging for compliance audits, and client portfolio management.' },
            { title: 'E-commerce & Retail', body: 'Order history, lifetime value tracking, segment-based campaigns and automated reorder reminders integrated with your e-commerce platform.' },
          ],
        },
      ]}
      benefits={[
        '100% custom — built around your exact sales process',
        'AI lead scoring reduces time-to-close by 30–50%',
        'No per-seat licensing fees — you own the system',
        'Fully integrated with your existing tools and data sources',
        'GDPR and data residency compliant for European markets',
        'Mobile-first responsive design for field sales teams',
        'Onboarding, training and documentation included',
        'Ongoing feature development and support available',
      ]}
      cta={{ text: 'Get a Custom CRM Built for Your Team', href: '/#contact' }}
      relatedPages={[
        { label: 'AI Consulting', href: '/ai-consulting', color: '#00B4FF' },
        { label: 'SaaS Development', href: '/saas-development', color: '#7C3AED' },
        { label: 'Data Analytics', href: '/data-analytics', color: '#a855f7' },
      ]}
      schemaService={schema}
    />
  )
}
