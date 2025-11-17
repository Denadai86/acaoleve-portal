// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Garante que o Tailwind escaneie arquivos em src/, app/ e components/
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // CRUCIAL para sua estrutura atual
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;