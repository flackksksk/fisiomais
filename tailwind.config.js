/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C2A3A', sea: '#1F6F8B', leaf: '#2E9E83', mint: '#E4F3EE', mist: '#F5FAF8', sand: '#FFFFFF'
      },
      fontFamily: { display: ['Fraunces', 'Georgia', 'serif'], sans: ['Figtree', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 18px 40px -22px rgba(12,42,58,.35)' }
    }
  },
  plugins: []
}
