'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HiBriefcase, HiClipboardCheck, HiDocumentText, HiShieldCheck, HiTranslate,
  HiClock, HiUserGroup, HiArchive, HiExternalLink, HiCheckCircle, HiDeviceMobile,
} from 'react-icons/hi'

const BLUE = '#2563EB'

// Modules réellement proposés par Ligalo (ligalo.tn)
const audiences = [
  {
    title: 'Avocats',
    icon: HiBriefcase,
    items: ['Gestion des affaires', 'Calendrier & délais', 'Recherche juridique', 'Rédaction de documents'],
  },
  {
    title: 'Huissiers de justice',
    icon: HiClipboardCheck,
    items: ['Gestion des dossiers', 'Délais & alertes', 'Registre & preuves', 'Rapports d’activité'],
  },
  {
    title: 'Notaires',
    icon: HiDocumentText,
    items: ['Rédaction d’actes', 'Registre & archives', 'Droits immobiliers', 'Analyse successorale'],
  },
]

const strengths = [
  { icon: HiShieldCheck, label: 'Chiffrement & sauvegardes' },
  { icon: HiUserGroup, label: 'Rôles, permissions & journal d’accès' },
  { icon: HiTranslate, label: 'Bilingue arabe / français' },
  { icon: HiDocumentText, label: 'Éditeur IA + Add-in Microsoft Word' },
]

// Compétences transposables à un système de suivi des affaires judiciaires
const transferable = [
  { icon: HiArchive, text: 'Gestion et suivi des dossiers et des affaires, de l’ouverture à l’archivage' },
  { icon: HiClock, text: 'Calendrier des audiences, délais procéduraux et alertes automatiques' },
  { icon: HiUserGroup, text: 'Gestion des acteurs, des rôles et des droits d’accès par profil' },
  { icon: HiShieldCheck, text: 'Traçabilité des actions, sécurité et confidentialité des données' },
  { icon: HiTranslate, text: 'Interfaces multilingues adaptées aux usages locaux' },
  { icon: HiDeviceMobile, text: 'Plateforme web + application mobile (voir aussi notre projet Juri-T)' },
]

export default function LigaloFeature() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ligalo" className="relative py-28 px-6 overflow-hidden">
      {/* Halo de mise en avant */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* En-tête */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: `${BLUE}22`, border: `1px solid ${BLUE}66`, color: '#93b4ff' }}
          >
            ★ Projet phare · LegalTech
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6 leading-tight">
            Ligalo, le logiciel des
            <br />
            <span className="gradient-text">professions juridiques</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Conçu et développé par <span className="text-white font-semibold">CCOI SERVICES</span>, Ligalo est une
            solution cloud tout-en-un <span className="text-white font-semibold">en production en Tunisie</span> pour
            les avocats, huissiers de justice et notaires : gestion des dossiers et des affaires, délais, rédaction
            assistée par IA, recherche juridique et archives numériques.
          </p>
        </motion.div>

        {/* Visuel + logo */}
        <motion.div
          className="grid lg:grid-cols-5 gap-8 items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="lg:col-span-3 relative">
            <div
              className="absolute -inset-1 rounded-3xl blur-xl opacity-50"
              style={{ background: `linear-gradient(135deg, ${BLUE}, #7C3AED)` }}
            />
            <div className="relative rounded-3xl overflow-hidden" style={{ border: `1px solid ${BLUE}55` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/proj-ligalo-screens.webp"
                alt="Ligalo — calendrier des rendez-vous et outil de calcul des droits"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl px-8 py-6 inline-block shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/ligalo.webp" alt="Logo Ligalo" className="h-14 w-auto" />
            </div>
            <ul className="space-y-3">
              {strengths.map(s => (
                <li key={s.label} className="flex items-center gap-3 text-slate-200">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${BLUE}22` }}>
                    <s.icon size={18} style={{ color: '#93b4ff' }} />
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://ligalo.tn/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)` }}
              >
                Visiter ligalo.tn <HiExternalLink />
              </a>
              <a href="#contact" className="btn-outline font-semibold">
                Discuter de votre projet
              </a>
            </div>
          </div>
        </motion.div>

        {/* Modules par profession */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className="glass rounded-2xl p-6"
              style={{ border: `1px solid ${BLUE}33` }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${BLUE}22` }}>
                  <a.icon size={22} style={{ color: '#93b4ff' }} />
                </span>
                <h3 className="text-white font-bold text-lg">{a.title}</h3>
              </div>
              <ul className="space-y-2">
                {a.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-sm text-slate-300">
                    <HiCheckCircle className="shrink-0" style={{ color: BLUE }} /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Expérience transposable */}
        <motion.div
          className="rounded-3xl p-8 md:p-10"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.10))', border: `1px solid ${BLUE}44` }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Une expertise directement mobilisable pour le <span className="gradient-text">suivi des affaires judiciaires</span>
          </h3>
          <p className="text-slate-400 mb-8 max-w-3xl">
            L’expérience acquise sur Ligalo et Juri-T se transpose aux plateformes web et applications mobiles de suivi
            des affaires pour les juridictions, les auxiliaires de justice et les usagers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {transferable.map(t => (
              <div key={t.text} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${BLUE}22` }}>
                  <t.icon size={18} style={{ color: '#93b4ff' }} />
                </span>
                <p className="text-slate-200 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
