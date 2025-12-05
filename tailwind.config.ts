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
      
      // ⚡ CORREÇÃO: As keyframes e animação devem estar aqui, dentro de 'extend'
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },

  plugins: [],
}

export default config