'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiScale, HiDeviceMobile, HiGlobeAlt, HiSearch, HiLocationMarker } from 'react-icons/hi'

// Photos de Tabarka — Wikimedia Commons (licences CC BY-SA, crédits ci-dessous)
const photos = [
  { src: '/tabarka/fort.webp', caption: "Fort génois de l'île de Tabarka", credit: 'IssamBarhoumi', license: 'CC BY-SA 4.0', page: "https://commons.wikimedia.org/wiki/File:Fort_de_l%27%C3%AEle_de_Tabarka_3.JPG" },
  { src: '/tabarka/aiguilles.webp', caption: 'Les Aiguilles de Tabarka', credit: 'Eyakaddour', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tabarka_les_aiguilles.jpg' },
  { src: '/tabarka/port.webp', caption: 'Port de Tabarka', credit: 'Foued Béjaoui', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Port_de_Tabarka.jpg' },
  { src: '/tabarka/plage.webp', caption: 'Baie de Tabarka', credit: 'Eyakaddour', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Plage_%C3%A0_Tabarka.jpg' },
  { src: '/tabarka/ile.webp', caption: 'Île de Tabarka', credit: 'Farah Mokrani', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tabarka_%C3%AEle.jpg' },
]

const features = [
  { icon: HiSearch, title: 'Recherche de jurisprudence', body: 'Moteur de recherche dans les décisions de justice, par mots-clés, juridiction, date et matière.' },
  { icon: HiDeviceMobile, title: 'Application mobile', body: 'Application Android & iOS pour consulter les décisions et suivre les procédures, même en déplacement.' },
  { icon: HiGlobeAlt, title: 'Plateforme web', body: 'Portail web et interface d’administration pour la publication et la gestion des décisions.' },
  { icon: HiLocationMarker, title: 'Ancrage régional', body: 'Projet déployé pour la région de Tabarka (gouvernorat de Jendouba), au plus près des usagers.' },
]

export default function JuriT() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % photos.length), 5500)
    return () => clearInterval(t)
  }, [])

  const cur = photos[idx]

  return (
    <section id="juri-t" className="relative py-32 px-6 overflow-hidden">
      {/* Diaporama de Tabarka en arrière-plan */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence>
          <motion.div
            key={cur.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
          >
            <div className="absolute inset-0 bg-cover bg-center ken-burns" style={{ backgroundImage: `url(${cur.src})` }} />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #050508 0%, #050508cc 25%, #05050899 60%, #050508 100%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mb-6 inline-flex">
            <HiScale className="text-primary" /> Réalisation · LegalTech
          </span>
          <div className="flex justify-center mt-6 mb-6">
            <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/juri-t.svg" alt="Logo Juri-T" className="h-16 md:h-20 w-auto" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Juri-T — <span className="gradient-text">Jurisprudence en Tunisie</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Conception et développement d’une <span className="text-white font-semibold">application mobile et web</span> dédiée
            à la jurisprudence tunisienne, réalisée pour la <span className="text-white font-semibold">région de Tabarka</span>.
            Juri-T rend l’information juridique plus accessible aux professionnels du droit et aux citoyens.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(231,0,19,0.25)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(231,0,19,0.15)' }}>
                <f.icon size={22} style={{ color: '#ff4d5e' }} />
              </div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Vignettes de Tabarka */}
        <div className="mt-14 grid grid-cols-5 gap-2 md:gap-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIdx(i)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden transition-all"
              style={{ outline: i === idx ? '2px solid #E70013' : '1px solid rgba(255,255,255,0.08)', outlineOffset: 2 }}
              aria-label={p.caption}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </button>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          <span className="text-slate-300">{cur.caption}</span> — Photo :{' '}
          <a href={cur.page} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            {cur.credit}
          </a>
          , {cur.license}, via Wikimedia Commons
        </p>
      </div>
    </section>
  )
}
