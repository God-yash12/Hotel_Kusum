/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        RGBONE:'rgb(186, 136, 10)',
      }

    },
  },
  plugins: [],
}