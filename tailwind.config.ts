// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // Garante que todo o código na app/ e componentes/ será escaneado
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3', // Azul do Next.js, cor limpa
      }
    },
  },
  plugins: [],
}

export default config