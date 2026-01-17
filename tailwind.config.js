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
  50:  '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
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
