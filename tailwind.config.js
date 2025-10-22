/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a4aad',
          50: '#eef4ff',
          100: '#dbe8ff',
          200: '#b6d0ff',
          300: '#8fb8ff',
          400: '#6aa2ff',
          500: '#3f88ff',
          600: '#1d6ef2',
          700: '#0a4aad',
          800: '#083a87',
          900: '#072e6b'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
