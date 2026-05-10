import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'astra': {
          'black': '#0a0e27',
          'blue': '#00d4ff',
          'cyan': '#00f0ff',
          'purple': '#7c3aed',
          'green': '#10b981',
          'red': '#ef4444',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'hologram-flicker': 'hologram-flicker 0.15s infinite',
        'data-stream': 'data-stream 2s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'rotate-slower': 'rotate 30s linear infinite reverse',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 244, 255, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 244, 255, 0.8)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'hologram-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}

export default config
