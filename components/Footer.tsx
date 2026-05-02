'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import Logo from './Logo'

const footerLinks = {
  Services: [
    { label: 'SaaS Development', href: '#services' },
    { label: 'AI & Proactive Systems', href: '#services' },
    { label: 'Data Analytics', href: '#services' },
    { label: 'Training & Education', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #00B4FF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Top CTA banner */}
        <motion.div
          className="glass rounded-3xl p-10 mb-16 text-center overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ background: 'linear-gradient(135deg, #00B4FF, #7C3AED)' }}
          />
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 relative">
            Ready to Build Something<br />
            <span className="gradient-text">Extraordinary?</span>
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative">
            Let's engineer your next competitive advantage together.
          </p>
          <a href="#contact" className="btn-primary text-white font-semibold relative inline-block">
            Start a Conversation
          </a>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Logo size={38} />
              <div>
                <div className="font-black text-lg tracking-[0.15em] text-white">CCOI</div>
                <div className="text-[10px] font-light tracking-[0.25em] text-slate-500 -mt-1">SERVICES</div>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering intelligent systems and scalable platforms for enterprises
              across Europe and North America.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { Icon: FaGithub, href: 'https://github.com/njpapy-del', label: 'GitHub' },
                { Icon: FaTwitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="glow-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>
            &copy; {new Date().getFullYear()} CCOI SERVICES. Founded by Ndzouakeu Jeannot Youssef. All rights reserved.
          </span>
          <span className="font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All Systems Operational
          </span>
        </div>
      </div>
    </footer>
  )
}
