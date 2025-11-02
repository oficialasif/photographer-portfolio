import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1A0F0A",
          lighter: "#3D1F10",
        },
        accent: {
          orange: "#FF7A00",
          orangeLight: "#FFB347",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #1A0F0A, #3D1F10)',
        'gradient-orange': 'linear-gradient(to right, #FF7A00, #FFB347)',
      },
    },
  },
  plugins: [],
};
export default config;

