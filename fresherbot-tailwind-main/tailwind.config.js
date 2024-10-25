/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Added JSX support for React components
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
        'archivo': ["Archivo", 'sans-serif'],
        'julius': ["Julius Sans One", 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'], // Added Playfair Display for headlines
        'roboto': ['Roboto', 'sans-serif'], // Added Roboto for body text
      }
    },
  },
  plugins: [],
}
