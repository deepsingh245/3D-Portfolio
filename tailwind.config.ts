import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1", // indigo-500
          dark: "#4f46e5",
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          light: "#1f2937",
          dark: "#f8fafc",
        },
      },
       transitionProperty: {
    'theme': 'background-color, color, border-color'
  }
    },
  },
  plugins: [],
};

export default config;
