import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: "#070b19",
          900: "#0c132c",
          800: "#131d42",
          700: "#1d2b5c",
          600: "#283b7a",
          500: "#3d55a8",
        },
        neon: {
          cyan: "#06b6d4",
          purple: "#8b5cf6",
          pink: "#ec4899",
          gold: "#f59e0b",
          emerald: "#10b981",
          rose: "#f43f5e",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
