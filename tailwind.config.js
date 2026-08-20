/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#fce4ec', 500: '#c2185b', 600: '#ad1457', 700: '#880e4f' }
      }
    },
  },
  plugins: [],
}
