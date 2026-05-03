'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Carrières', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const observers: IntersectionObserver[] = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-glass px-6 py-3'
            : 'bg-transparent px-6 py-2'
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo size={36} />
            <div>
              <span className="font-black text-lg tracking-[0.15em] text-white group-hover:text-neon-blue transition-colors">
                CCOI
              </span>
              <span className="text-[10px] block font-light tracking-[0.25em] text-slate-500 -mt-1">
                SERVICES
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active === link.href
                      ? 'text-primary'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-white text-sm">
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-slate-300 rounded origin-center"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-slate-300 rounded"
              animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-slate-300 rounded origin-center"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-2 glass-strong rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ul className="p-4 flex flex-col gap-1">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-slate-300 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#contact" className="btn-primary block text-center text-white" onClick={() => setOpen(false)}>
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
