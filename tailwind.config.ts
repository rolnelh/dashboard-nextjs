import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Activation du mode sombre via une classe CSS
  darkMode: 'class', 
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // On lie la police Poppins à Tailwind
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        // Ta couleur de marque reste vibrante en mode clair comme en mode sombre
        kkiapay: "#e31937",
      },
    },
  },
  plugins: [],
};

export default config;