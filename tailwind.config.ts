import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#1a120e',
        ink: '#f5e9d9',
        dim: '#8a7560',
        ter: '#d97a4a',
        cr: '#e8c69a',
        pa: '#2a1e16',
        line: 'rgba(217,122,74,0.15)',
        'line-strong': 'rgba(217,122,74,0.28)',
        'card-line': 'rgba(217,122,74,0.10)',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
