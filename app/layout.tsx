import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const BASE_URL = 'https://ccoi-services.onrender.com'

export const metadata: Metadata = {
  // ── Base URL (résout tous les chemins relatifs /og-image.png, /favicon.ico…) ──
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: 'AI Consulting & SaaS Development Company | CCOI SERVICES',
    template: '%s | CCOI SERVICES',
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    'CCOI SERVICES provides AI solutions, SaaS platforms, CRM systems, data analytics and embedded systems for businesses in Europe and USA. Based in Tunis, Tunisia.',

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    'AI consulting',
    'SaaS development',
    'CRM development',
    'data analytics',
    'artificial intelligence company',
    'machine learning consulting',
    'intelligent systems',
    'software engineering',
    'embedded systems',
    'IT consulting Tunis',
    'CCOI SERVICES',
    'développement logiciel Tunisie',
  ],

  // ── Authors ────────────────────────────────────────────────────────────────
  authors: [{ name: 'Ndzouakeu Jeannot Youssef', url: BASE_URL }],
  creator: 'CCOI SERVICES',
  publisher: 'CCOI SERVICES',

  // ── Google Search Console verification ────────────────────────────────────
  verification: {
    google: 'kDG7OC1VAzRGKVctU6suy-U-mjwFD1ubjbnOo-IzHpo',
  },

  // ── Canonical & alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-US': BASE_URL },
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'CCOI SERVICES',
    title: 'AI Consulting & SaaS Development Company | CCOI SERVICES',
    description:
      'CCOI SERVICES provides AI solutions, SaaS platforms, CRM systems, data analytics and embedded systems for businesses in Europe and USA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CCOI SERVICES — AI Consulting & SaaS Development',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X ────────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@ccoiservices',
    creator: '@ccoiservices',
    title: 'AI Consulting & SaaS Development | CCOI SERVICES',
    description:
      'CCOI SERVICES — AI solutions, SaaS platforms & CRM systems for enterprises in Europe and USA.',
    images: [{ url: '/og-image.png', alt: 'CCOI SERVICES' }],
  },

  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },

  manifest: '/site.webmanifest',

  // ── App info ───────────────────────────────────────────────────────────────
  applicationName: 'CCOI SERVICES',
  category: 'technology',
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
