/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },

        /* Semantic colors */
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f9fafb',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#6b7280',
        },
      },

      borderRadius: {
        xl: '1rem',
      },

      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
