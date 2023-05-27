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
          light: '#2c2e3a',
          DEFAULT: '#15161c',
          dark: '#09090c',
        },
        cloud: {
          light: '#f2f5f8',
          DEFAULT: '#cad6e2',
          dark: '#243342',
        },
        cobalt: {
          light: '9dbcfb',
          DEFAULT: '#4d86f9',
          dark: '#042a77',
        },
        orange: {
          light: '#f67a28',
          DEFAULT: '#f56e14',
          dark: '#622a04',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
