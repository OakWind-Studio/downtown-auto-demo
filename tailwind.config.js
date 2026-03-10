/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2B2D2F',
        crimson: '#C0392B',
        'crimson-dark': '#A93226',
        'warm-gray': '#F8F7F5',
        'trust-green': '#27AE60',
        'near-black': '#1A1A1A',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
