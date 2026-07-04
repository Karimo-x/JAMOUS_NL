/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-yellow': '#FFC107',
        'industrial-yellow-hover': '#E6AC00',
        'industrial-dark': '#1F1F1F',
        'industrial-secondary': '#2B2B2B',
        'industrial-text-secondary': '#B0B0B0',
        'industrial-border': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
