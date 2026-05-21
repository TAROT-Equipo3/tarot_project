/** @type {import('tailwindcss').Config} */
import textShadow from "tailwindcss-textshadow";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A2659",
        secondary: "#7C52BF",
        accent: "#FFD700",
        white: "#FFFFFF",
        goldDark: "#6C5E06",
        cardOuter: "#240F42",
        cardInner: "rgba(108, 94, 6, 0.20)",
        modal: "rgba(0, 0, 0, 0.80)",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        "glow-accent": "0 0 15px 0 #FFD700",
        "glow-hover": "0 0 15px 0 #FCDD4D",
      },
      textShadow: {
        "glow-gold": "0 0 15px #FFD700",
      },
      // Añade tus degradados aquí
      backgroundImage: {
        "header-gradient": "linear-gradient(180deg, #3A2659 38.41%, #7C52BF 82.87%)",
        "footer-gradient": "linear-gradient(180deg, #3A2659 0%, #7C52BF 100%)",
        "body-gradient": "linear-gradient(180deg, #3A2659 38.41%, #7C52BF 82.87%)",
      }
    },
  },
  plugins: [
    textShadow,
  ],
};