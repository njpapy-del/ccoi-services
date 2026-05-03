import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

const BASE = 'https://ccoi-services.onrender.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Data Analytics Consulting & Engineering | CCOI SERVICES',
  description:
    'CCOI SERVICES provides end-to-end data analytics consulting — data pipelines, real-time BI dashboards, predictive analytics and data warehouse architecture for enterprises in Europe and USA.',
  keywords: [
    'data analytics consulting', 'data engineering', 'business intelligence consulting',
    'data analytics company', 'BI dashboard development', 'predictive analytics',
    'data pipeline engineering', 'data warehouse consulting', 'real-time analytics',
  ],
  alternates: { canonical: `${BASE}/data-analytics` },
  openGraph: {
    title: 'Data Analytics Consulting | CCOI SERVICES',
    description: 'End-to-end data engineering, real-time BI dashboards and predictive analytics for data-driven enterprises in Europe and USA.',
    url: `${BASE}/data-analytics`,
    siteName: 'CCOI SERVICES',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Analytics Consulting Services',
  serviceType: 'Data Engineering and Business Intelligence',
  provider: {
    '@type': 'Organization',
    name: 'CCOI SERVICES',
    url: BASE,
    telephone: '+216-26-089-553',
    email: 'ccoiservice28@gmail.com',
  },
  areaServed: ['Europe', 'USA', 'Tunisia'],
  url: `${BASE}/data-analytics`,
  description: 'Data pipelines, real-time dashboards, data warehouses and predictive analytics for data-driven enterprises.',
}

export default function DataAnalyticsPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'Data Analytics',
        h1: 'Data Analytics Consulting<br/><span style="background:linear-gradient(135deg,#a855f7,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent">That Drives Decisions</span>',
        tagline: 'Turn raw data into strategic intelligence. We build end-to-end data platforms that collect, process, visualize and predict — helping your leadership team make faster, smarter decisions.',
        color: '#a855f7',
      }}
      intro={`Data is the most valuable asset your organization generates — yet most businesses are still flying blind,
making decisions based on spreadsheets, gut instinct and delayed monthly reports.

At CCOI SERVICES, our data analytics consulting practice helps enterprises build the infrastructure, processes and culture
needed to become genuinely data-driven. We design and implement end-to-end data platforms that handle everything from
raw data ingestion at scale to executive-level predictive dashboards and ML-powered forecasting models.

Our data engineering team has built platforms processing 10+ TB of data per day, connecting 40+ disparate data sources
and serving real-time analytics to hundreds of concurrent business users — for clients in e-commerce, fintech,
healthcare, logistics and manufacturing across Europe and the United States.

Whether you are starting from scratch with no data infrastructure, or looking to modernize a legacy data warehouse,
CCOI SERVICES delivers tailored data analytics solutions that generate ROI from day one.`}
      sections={[
        {
          h2: 'Our Data Analytics Services',
          h3s: [
            {
              title: 'Data Engineering & Pipelines',
              body: 'We architect and build robust ELT/ETL pipelines using Apache Spark, dbt, Airflow and Kafka that ingest data from SaaS tools, databases, APIs and IoT devices — reliably, at any scale.',
            },
            {
              title: 'Data Warehouse & Lakehouse',
              body: 'Modern cloud data warehouse architecture on Snowflake, BigQuery or Redshift. We design your schema, manage data quality, implement dimensional modeling and optimize query performance.',
            },
            {
              title: 'Business Intelligence & Dashboards',
              body: 'Interactive BI dashboards on Apache Superset, Metabase or custom Next.js solutions — with role-based access, scheduled reports and mobile-responsive layouts your team will use daily.',
            },
            {
              title: 'Predictive Analytics',
              body: 'Machine learning models for revenue forecasting, churn prediction, demand planning, customer lifetime value and anomaly detection — integrated directly into your operational workflows.',
            },
            {
              title: 'Real-Time Analytics',
              body: 'Streaming data architectures with Apache Kafka, Flink or Spark Streaming for real-time monitoring dashboards, instant alerts and live KPI tracking across your business.',
            },
            {
              title: 'Data Strategy Consulting',
              body: 'Data governance frameworks, data catalog implementation, team training and organizational change management to help your entire company adopt a data-driven decision culture.',
            },
          ],
        },
        {
          h2: 'Our Data Tech Stack',
          h3s: [
            { title: 'Ingestion & Processing', body: 'Apache Spark, Kafka, Airbyte, Fivetran, dbt, Airflow / Prefect — battle-tested tools for reliable, observable data pipelines.' },
            { title: 'Storage & Warehousing', body: 'Snowflake, BigQuery, Redshift, PostgreSQL, ClickHouse, Delta Lake — right-sized for your data volume and query patterns.' },
            { title: 'Visualization', body: 'Apache Superset, Metabase, Grafana, custom React dashboards — beautiful, performant interfaces for non-technical stakeholders.' },
            { title: 'ML & Prediction', body: 'Scikit-learn, XGBoost, Prophet, PyTorch — production ML models with MLflow tracking, automated retraining and confidence intervals.' },
          ],
        },
      ]}
      benefits={[
        'End-to-end data platform from raw ingestion to executive dashboards',
        'Proven architecture patterns for 10TB+/day data volumes',
        'Real-time streaming capabilities for live monitoring',
        'GDPR-compliant data governance for European regulations',
        'Business-facing dashboards your team will actually use',
        'Predictive models that improve accuracy over time',
        'Cloud-agnostic — works with AWS, GCP, Azure or hybrid',
        'Knowledge transfer and documentation included',
      ]}
      cta={{ text: 'Ready to Become Data-Driven?', href: '/#contact' }}
      relatedPages={[
        { label: 'AI Consulting', href: '/ai-consulting', color: '#00B4FF' },
        { label: 'SaaS Development', href: '/saas-development', color: '#7C3AED' },
        { label: 'CRM Development', href: '/crm-development', color: '#06B6D4' },
      ]}
      schemaService={schema}
    />
  )
}
