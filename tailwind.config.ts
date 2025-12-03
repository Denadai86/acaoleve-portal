// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class", // habilita dark mode controlado por classe

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
      },
    },
  },

  plugins: [],
}

export default config
