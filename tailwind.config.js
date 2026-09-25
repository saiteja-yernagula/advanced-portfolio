/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070d',
          surface: '#090d16',
          card: '#0e1322',
          cardBorder: '#1e293b',
          accent: '#00f0ff',
          neonPurple: '#8b5cf6',
          neonPink: '#ec4899',
          neonGreen: '#10b981',
          neonYellow: '#f59e0b',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.55)',
        'neon-purple': '0 0 30px -5px rgba(139, 92, 246, 0.55)',
        'neon-green': '0 0 30px -5px rgba(16, 185, 129, 0.55)',
        'neon-pink': '0 0 30px -5px rgba(236, 72, 153, 0.55)',
        'glass-3d': '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-spin': 'spin 8s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
