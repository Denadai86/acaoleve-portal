// /postcss.config.js
module.exports = {
  plugins: [
    // Usamos o pacote específico que o erro está pedindo.
    require('@tailwindcss/postcss')({
      // O Tailwind v4 espera o caminho para o arquivo de configuração
      config: './tailwind.config.ts', 
    }),
    require('autoprefixer'),
  ],
};