import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

const BASE = 'https://ccoi-services.onrender.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'AI Consulting Services for Enterprises | CCOI SERVICES',
  description:
    'CCOI SERVICES delivers expert AI consulting services — machine learning, NLP, proactive AI agents, computer vision and intelligent automation for businesses in Europe and USA.',
  keywords: [
    'AI consulting', 'artificial intelligence consulting', 'machine learning consulting',
    'AI consulting company Europe', 'AI services USA', 'NLP consulting',
    'proactive AI systems', 'intelligent automation', 'AI strategy consulting',
  ],
  alternates: { canonical: `${BASE}/ai-consulting` },
  openGraph: {
    title: 'AI Consulting Services | CCOI SERVICES',
    description: 'Expert AI consulting — machine learning, NLP, proactive agents and intelligent automation for enterprises in Europe and USA.',
    url: `${BASE}/ai-consulting`,
    siteName: 'CCOI SERVICES',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Consulting Services',
  serviceType: 'Artificial Intelligence Consulting',
  provider: {
    '@type': 'Organization',
    name: 'CCOI SERVICES',
    url: BASE,
    telephone: '+216-26-089-553',
    email: 'ccoiservice28@gmail.com',
  },
  areaServed: ['Europe', 'USA', 'Tunisia'],
  url: `${BASE}/ai-consulting`,
  description: 'AI strategy, machine learning pipelines, NLP systems, computer vision and proactive AI agents for enterprise clients.',
}

export default function AIConsultingPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'AI Consulting',
        h1: 'AI Consulting Services<br/><span style="background:linear-gradient(135deg,#00B4FF,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent">for Modern Enterprises</span>',
        tagline: 'We help businesses across Europe and the USA harness the power of artificial intelligence — from strategy to production-ready AI systems that deliver measurable ROI.',
        color: '#00B4FF',
      }}
      intro={`Artificial intelligence is no longer a competitive advantage — it is a competitive necessity.
At CCOI SERVICES, our AI consulting practice helps enterprises design, build and deploy intelligent systems
that automate complex processes, predict business outcomes and create new revenue streams.

With a team of 6 senior AI engineers based in Tunis, Tunisia, we serve clients across Europe and the United States.
Our AI-first philosophy means every solution we deliver is built with intelligence as a core feature, not a bolt-on addition.
Whether you need to automate customer service with conversational AI, build recommendation engines,
extract insights from unstructured data with NLP, or create proactive AI agents that act on your behalf —
CCOI SERVICES has the expertise to deliver production-grade AI systems on time and on budget.`}
      sections={[
        {
          h2: 'Our AI Consulting Services',
          h3s: [
            {
              title: 'AI Strategy & Roadmap',
              body: 'We assess your business objectives and data maturity to design a pragmatic AI adoption roadmap. From identifying high-impact use cases to building an internal AI culture, we guide your organization at every step.',
            },
            {
              title: 'Machine Learning Engineering',
              body: 'Our ML engineers build, train and deploy custom models for classification, regression, anomaly detection, forecasting and recommendation. We work with PyTorch, TensorFlow, scikit-learn and cloud ML platforms.',
            },
            {
              title: 'Natural Language Processing (NLP)',
              body: 'From sentiment analysis and document classification to semantic search and LLM-powered applications, we build NLP solutions that extract value from text data at enterprise scale.',
            },
            {
              title: 'Proactive AI Agents',
              body: 'We build autonomous AI agents that monitor, decide and act — reducing manual intervention in complex workflows. Our agents use state-of-the-art LLMs (Claude, GPT-4) combined with custom tools and memory systems.',
            },
            {
              title: 'Computer Vision',
              body: 'Object detection, image classification, facial recognition and video analytics systems built for industrial, retail and security applications. Deployable on cloud or edge hardware.',
            },
            {
              title: 'MLOps & AI Infrastructure',
              body: 'We design and implement end-to-end MLOps pipelines — model versioning, automated retraining, monitoring, A/B testing and production deployment on AWS, GCP or on-premise infrastructure.',
            },
          ],
        },
        {
          h2: 'Industries We Serve',
          h3s: [
            { title: 'FinTech & Banking', body: 'Fraud detection, credit scoring, algorithmic trading assistance and intelligent customer service chatbots for financial institutions.' },
            { title: 'Healthcare', body: 'Clinical NLP, medical image analysis and patient outcome prediction systems built with strict data privacy compliance (GDPR, HIPAA).' },
            { title: 'E-commerce & Retail', body: 'Personalization engines, demand forecasting, dynamic pricing and visual search solutions that increase conversion and average order value.' },
            { title: 'Manufacturing & IoT', body: 'Edge AI for predictive maintenance, quality control automation and supply chain optimization in industrial environments.' },
          ],
        },
      ]}
      benefits={[
        '6 senior AI engineers with 5+ years of ML/AI experience',
        'AI-first approach — intelligence is core, not a feature',
        'End-to-end delivery: from strategy to production deployment',
        'Experience with European GDPR and US compliance requirements',
        'Fast MVP delivery: AI prototypes in 2–4 weeks',
        'Post-deployment monitoring and continuous model improvement',
        'Transparent communication and weekly progress reports',
        'Competitive pricing for Europe and USA market standards',
      ]}
      cta={{ text: 'Ready to Build Your AI System?', href: '/#contact' }}
      relatedPages={[
        { label: 'SaaS Development', href: '/saas-development', color: '#7C3AED' },
        { label: 'CRM Development', href: '/crm-development', color: '#06B6D4' },
        { label: 'Data Analytics', href: '/data-analytics', color: '#a855f7' },
      ]}
      schemaService={schema}
    />
  )
}
