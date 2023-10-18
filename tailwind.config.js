/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './pages/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,mdx}',
    './src/components/*.{js,jsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#AAAAAA',
        'primary-dark': '#A1A1AA',
        'secondary-light': '#FFF',
        'secondary-dark': '#000',
        'hover-dark': '#FFFFFF',
        'hover-light': '#000',
        'back-primary-dark': '#131314'
      }
    },
    fontFamily: {
      sans: [
        '"Inter"',
        'Roboto',
        'sans-serif'
      ]
    }
  },
  plugins: [],
  darkMode: 'class'
}
