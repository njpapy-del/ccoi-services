'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: number
  animated?: boolean
  className?: string
}

/**
 * CCOI Logo — three interconnected hexagons (6 sides × 3 = ∞ potential)
 * arranged as a neural/data cluster symbol.
 */
export default function Logo({ size = 40, animated = false, className = '' }: LogoProps) {
  const s = size
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.18 // hex circumradius

  // Hexagon helper: center x, center y → points string
  function hex(x: number, y: number, radius: number) {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6
      return `${x + radius * Math.cos(angle)},${y + radius * Math.sin(angle)}`
    }).join(' ')
  }

  // Three hexagon centers arranged in equilateral triangle
  const d = r * 1.85
  const hex1 = { x: cx, y: cy - d * 0.6 }           // top
  const hex2 = { x: cx - d * 0.6, y: cy + d * 0.35 } // bottom-left
  const hex3 = { x: cx + d * 0.6, y: cy + d * 0.35 } // bottom-right

  const hexes = [hex1, hex2, hex3]

  const glowVariants = {
    animate: {
      filter: [
        'drop-shadow(0 0 4px #00B4FF)',
        'drop-shadow(0 0 8px #7C3AED)',
        'drop-shadow(0 0 4px #06B6D4)',
        'drop-shadow(0 0 4px #00B4FF)',
      ],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const Wrapper = animated ? motion.svg : 'svg'
  const wrapperProps = animated ? { variants: glowVariants, animate: 'animate' } : {}

  return (
    <Wrapper
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(wrapperProps as object)}
    >
      <defs>
        <linearGradient id="ccoi-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="ccoi-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="ccoi-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#00B4FF" />
        </linearGradient>
        <linearGradient id="ccoi-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Connection lines between hexagon centers */}
      <line
        x1={hex1.x} y1={hex1.y} x2={hex2.x} y2={hex2.y}
        stroke="url(#ccoi-line-grad)" strokeWidth={s * 0.018} strokeLinecap="round"
        strokeDasharray={`${s * 0.04} ${s * 0.03}`}
      />
      <line
        x1={hex2.x} y1={hex2.y} x2={hex3.x} y2={hex3.y}
        stroke="url(#ccoi-line-grad)" strokeWidth={s * 0.018} strokeLinecap="round"
        strokeDasharray={`${s * 0.04} ${s * 0.03}`}
      />
      <line
        x1={hex3.x} y1={hex3.y} x2={hex1.x} y2={hex1.y}
        stroke="url(#ccoi-line-grad)" strokeWidth={s * 0.018} strokeLinecap="round"
        strokeDasharray={`${s * 0.04} ${s * 0.03}`}
      />

      {/* Three hexagons, each filled with gradient */}
      {hexes.map((h, i) => (
        <polygon
          key={i}
          points={hex(h.x, h.y, r)}
          fill={`url(#ccoi-grad-${i + 1})`}
          opacity="0.15"
          stroke={`url(#ccoi-grad-${i + 1})`}
          strokeWidth={s * 0.025}
        />
      ))}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={s * 0.04} fill="url(#ccoi-grad-1)" opacity="0.8" />

      {/* Node dots at each hex center */}
      {hexes.map((h, i) => (
        <circle
          key={`dot-${i}`}
          cx={h.x} cy={h.y} r={s * 0.035}
          fill={['#00B4FF', '#7C3AED', '#06B6D4'][i]}
          opacity="0.9"
        />
      ))}
    </Wrapper>
  )
}
