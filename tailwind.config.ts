import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B4FF',
          50: '#e6f8ff',
          100: '#b3ecff',
          200: '#66d9ff',
          300: '#1ac6ff',
          400: '#00b4ff',
          500: '#0090cc',
          600: '#006b99',
          700: '#004766',
          800: '#002333',
          900: '#000f1a',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#f3eeff',
          100: '#d9c5ff',
          200: '#b38bff',
          300: '#8d52ff',
          400: '#7c3aed',
          500: '#6020c9',
          600: '#480fa5',
          700: '#330381',
          800: '#1f005d',
          900: '#0e0030',
        },
        accent: '#06B6D4',
        dark: {
          DEFAULT: '#050508',
          100: '#0a0a0f',
          200: '#0f0f1a',
          300: '#141420',
          400: '#1a1a2e',
          500: '#16213e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'gradient-y': 'gradient-y 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'neon-flicker': 'neon-flicker 3s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0,180,255,0.3), 0 0 40px rgba(0,180,255,0.1)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0,180,255,0.6), 0 0 80px rgba(0,180,255,0.3)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.8' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B4FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,180,255,0.4), 0 0 40px rgba(0,180,255,0.2)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.2)',
        'neon-cyan': '0 0 20px rgba(6,182,212,0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
