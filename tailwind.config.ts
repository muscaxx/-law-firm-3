import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kurumsal lacivert — bir tık açılmış ton
        navy: {
          DEFAULT: "#1f3a5a",
          50: "#eef3f9",
          100: "#d8e3f0",
          200: "#b3c7e0",
          300: "#8aa6cb",
          400: "#5a7ba8",
          500: "#2f5685",
          600: "#264a6e",
          700: "#1f3a5a",
          800: "#1a3150",
          900: "#142740",
        },
        // Turuncu vurgu rengi (eski "gold" yerine)
        gold: {
          DEFAULT: "#e07c34",
          light: "#f1985b",
          dark: "#c1631f",
        },
        orange: {
          DEFAULT: "#e07c34",
          light: "#f1985b",
          dark: "#c1631f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
