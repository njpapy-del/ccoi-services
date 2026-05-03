'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiCheckCircle } from 'react-icons/hi'
import Logo from './Logo'

interface ServicePageLayoutProps {
  hero: {
    label: string
    h1: string
    tagline: string
    color: string
  }
  intro: string
  sections: {
    h2: string
    h3s: { title: string; body: string }[]
  }[]
  benefits: string[]
  cta: { text: string; href: string }
  relatedPages: { label: string; href: string; color: string }[]
  schemaService: object
}

export default function ServicePageLayout({
  hero, intro, sections, benefits, cta, relatedPages, schemaService,
}: ServicePageLayoutProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />

      <div className="min-h-screen bg-dark text-slate-100">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo size={32} />
              <span className="font-black tracking-widest text-white text-sm">CCOI SERVICES</span>
            </Link>
            <Link
              href="/#contact"
              className="btn-primary text-white text-xs font-semibold py-2 px-5"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${hero.color}, transparent)` }}
          />
          <div className="max-w-4xl mx-auto relative text-center">
            <motion.span
              className="section-label mb-6 inline-flex"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: hero.color, borderColor: `${hero.color}30`, background: `${hero.color}10` }}
            >
              {hero.label}
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mt-6 mb-6 text-white"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: hero.h1 }}
            />
            <motion.p
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {hero.tagline}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/#contact" className="btn-primary text-white font-semibold">
                Get a Free Quote
              </Link>
              <Link href="/#services" className="btn-outline font-semibold">
                All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <article className="max-w-4xl mx-auto px-6 pb-24">
          {/* Intro */}
          <motion.div
            className="glass rounded-3xl p-10 mb-12"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-[1.9]">{intro}</p>
          </motion.div>

          {/* Sections */}
          {sections.map((sec, si) => (
            <motion.section
              key={si}
              className="mb-14"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: si * 0.05 }}
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 pb-4"
                style={{ borderBottom: `1px solid ${hero.color}20` }}>
                {sec.h2}
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {sec.h3s.map((item, hi) => (
                  <div
                    key={hi}
                    className="glass rounded-2xl p-6 shimmer-effect"
                    style={{ border: `1px solid ${hero.color}15` }}
                  >
                    <h3 className="text-base font-bold mb-3" style={{ color: hero.color }}>
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Benefits */}
          <motion.section
            className="glass rounded-3xl p-10 mb-12"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-black text-white mb-8">
              Why Choose CCOI SERVICES?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <HiCheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: hero.color }}
                  />
                  <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* CTA */}
          <motion.div
            className="text-center glass rounded-3xl p-10 mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ background: `linear-gradient(135deg, ${hero.color}, #7C3AED)` }}
            />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 relative">
              {cta.text}
            </h2>
            <p className="text-slate-400 mb-8 relative max-w-md mx-auto">
              Contact us today for a free consultation. Our engineers will assess your project and
              provide a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <Link href={cta.href} className="btn-primary text-white font-semibold">
                Get Started Today
                <HiArrowRight className="inline ml-2" size={14} />
              </Link>
              <a
                href="https://wa.me/21626089553"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline font-semibold"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Related pages */}
          <div>
            <h2 className="text-lg font-bold text-white mb-6">Explore Our Other Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="glass rounded-xl p-4 flex items-center justify-between group hover:border-primary/30 transition-all"
                  style={{ border: `1px solid ${p.color}15` }}
                >
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {p.label}
                  </span>
                  <HiArrowRight size={14} style={{ color: p.color }} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Footer strip */}
        <footer className="border-t border-white/5 py-8 px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm">
            <HiArrowLeft size={14} />
            Back to CCOI SERVICES Home
          </Link>
          <p className="text-xs text-slate-700 mt-3">
            © {new Date().getFullYear()} CCOI SERVICES · Rue Omar Kaddeh, Montplaisir 1073, Tunis · ccoiservice28@gmail.com
          </p>
        </footer>
      </div>
    </>
  )
}
