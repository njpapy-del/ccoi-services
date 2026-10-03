'use client'

// ─── Logos des projets réalisés ──────────────────────────────────────────────

interface Brand {
  name: string
  logo?: string
  dark?: boolean
  color: string
  tag: string
}

const brands: Brand[] = [
  { name: 'Ligalo', logo: '/logos/ligalo.webp', color: '#2563EB', tag: 'LegalTech SaaS' },
  { name: 'Juri-T', logo: '/logos/juri-t.svg', color: '#E70013', tag: 'LegalTech · Tabarka' },
  { name: 'TaxiTrust', logo: '/logos/taxitrust.webp', color: '#EF4444', tag: 'Mobility' },
  { name: 'LNAYCRM', color: '#00B4FF', tag: 'CRM · Contact Center' },
  { name: '26Powerlines', color: '#F59E0B', tag: 'Call Center ERP' },
  { name: 'Strowger OS', logo: '/logos/strowger.webp', dark: true, color: '#7C3AED', tag: 'AI Assistant' },
  { name: 'Northern Brethren', logo: '/logos/northern-brethren.webp', color: '#1e4e8c', tag: 'Corporate' },
  { name: 'Willbric Construction', logo: '/logos/willbric.webp', color: '#c9a24a', tag: 'Construction' },
  { name: 'Maison Esthesia', logo: '/logos/esthesia.webp', color: '#0f766e', tag: 'Medical' },
  { name: "A l'Eau Plombier", logo: '/logos/plomberie-louis-fils.webp', color: '#3730a3', tag: 'Services' },
  { name: 'Scorpus', color: '#a855f7', tag: 'AI Agents' },
  { name: 'Lab AI', color: '#10B981', tag: 'Machine Learning' },
  { name: 'Serruria', color: '#eab308', tag: 'Services' },
  { name: 'Maître Flenon', color: '#b45309', tag: 'Legal' },
  { name: 'Desert Luxe', color: '#d97706', tag: 'Travel' },
  { name: 'Fiches Terrain UCT', color: '#06B6D4', tag: 'Education' },
]

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9À-ÿ ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

function BrandCard({ b }: { b: Brand }) {
  return (
    <div
      className="group flex items-center gap-3 shrink-0 h-20 px-5 rounded-2xl glass transition-all duration-300 hover:-translate-y-1"
      style={{ border: `1px solid ${b.color}30` }}
      title={b.name}
    >
      {b.logo ? (
        <div className={`h-14 w-24 rounded-xl flex items-center justify-center overflow-hidden ${b.dark ? 'bg-black' : 'bg-white p-1.5'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.logo} alt={`${b.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
        </div>
      ) : (
        <div
          className="h-14 w-14 rounded-xl flex items-center justify-center font-black text-lg text-white"
          style={{ background: `linear-gradient(135deg, ${b.color}, ${b.color}88)` }}
        >
          {initials(b.name)}
        </div>
      )}
      <div className="leading-tight">
        <div className="text-white font-bold text-sm whitespace-nowrap">{b.name}</div>
        <div className="text-[11px] font-mono whitespace-nowrap" style={{ color: b.color }}>{b.tag}</div>
      </div>
    </div>
  )
}

export default function ProjectsMarquee() {
  const half = Math.ceil(brands.length / 2)
  const rows = [brands, [...brands.slice(half), ...brands.slice(0, half)]]

  return (
    <section aria-label="Projets réalisés" className="relative py-16 overflow-hidden border-y border-white/5">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 font-mono mb-8">
        Ils nous ont fait confiance · Projets réalisés
      </p>

      <div className="space-y-4 marquee-mask">
        {rows.map((row, r) => (
          <div key={r} className="marquee group/m">
            <div className={`marquee-track ${r === 1 ? 'marquee-reverse' : ''}`}>
              {[...row, ...row].map((b, i) => (
                <BrandCard key={`${b.name}-${i}`} b={b} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
