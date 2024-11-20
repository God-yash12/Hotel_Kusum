/** @type {import('tailwindcss').Config} */

import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
      },
      container: {
        padding: {
          lg: "4rem",
          sm: "0rem",
        },
      },
      keyframes: {
        lineMove: {
          "0%": { left: "0" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "line-left-right": "lineMove 10s linear infinite",
      },
      colors:{
        RGBONE:'rgb(186, 136, 10)',
      }
    },
  },
  plugins: [
    lineClamp
  ],
};
