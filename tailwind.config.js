/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue LT Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
