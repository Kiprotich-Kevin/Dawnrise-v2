/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#800000',
          dark: '#5C0000',
          light: '#F3E2E2',
        },
        success: {
          DEFAULT: '#008751',
        },
        accent: {
          red: '#C8102E',
          gold: '#FFCD00',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          navy: '#E7EAF3',
        },
        dark: {
          DEFAULT: '#210A0A',
          soft: '#331212',
        },
        text: {
          primary: '#111827',
          muted: '#6B7280',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'page-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'page-fade-in': 'page-fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}

