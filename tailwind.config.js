/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          light: '#343432',
          DEFAULT: '#242423',
          dark: '#0a0a0a',
        },
        cloud: {
          DEFAULT: '#e8eddf',
          dark: '#cfdbd5',
        },
        taxi: '#f5cb5c',
        violet: '#a5a5b6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class', '[data-theme="dark"]'],
}
