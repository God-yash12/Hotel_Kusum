/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      container: {
        padding: {
          lg: "6rem",
          sm: "0rem",
        },
      },
      keyframes: {
        lineMove: {
          '0%': { left: '0' },
          '100%': { left: '100%' },
        },
        swipeIn: {
          '0%': { backgroundSize: '0% 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
        swipeOut: {
          '0%': { backgroundSize: '100% 100%' },
          '100%': { backgroundSize: '0% 100%' },
        },
      },
      animation: {
        'line-left-right': 'lineMove 10s linear infinite',
        swipeIn: 'swipeIn 0.4s ease-out forwards',
        swipeOut: 'swipeOut 0.4s ease-out forwards',
      },
      
    },
  },
  plugins: [],
};
