import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ccoi-services.com'),
  title: {
    default: 'CCOI SERVICES — AI Consulting & SaaS Development Company',
    template: '%s | CCOI SERVICES',
  },
  description:
    'CCOI SERVICES is a premium AI consulting and SaaS development company. We engineer intelligent systems, CRM solutions, data analytics, and embedded systems for enterprises in Europe and the USA.',
  keywords: [
    'AI consulting',
    'SaaS development',
    'CRM solutions',
    'artificial intelligence company',
    'data analytics consulting',
    'intelligent systems',
    'software engineering',
    'machine learning',
    'embedded systems',
    'IT consulting',
    'CCOI SERVICES',
  ],
  authors: [{ name: 'Ndzouakeu Jeannot Youssef', url: 'https://ccoi-services.com' }],
  creator: 'CCOI SERVICES',
  publisher: 'CCOI SERVICES',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ccoi-services.com',
    siteName: 'CCOI SERVICES',
    title: 'CCOI SERVICES — Engineering the Future with AI & Intelligent Systems',
    description:
      'Premium AI consulting, SaaS development, CRM solutions and data analytics for enterprises in Europe and the USA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CCOI SERVICES — AI & Intelligent Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCOI SERVICES — AI Consulting & SaaS Development',
    description: 'Engineering the future with AI & Intelligent Systems.',
    images: ['/og-image.png'],
    creator: '@ccoiservices',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://ccoi-services.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-slate-100 antialiased overflow-x-hidden">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(10, 10, 20, 0.95)',
              color: '#f1f5f9',
              border: '1px solid rgba(0, 180, 255, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(16px)',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
