module.exports = {
  plugins: {
    // 1. O Tailwind CSS deve ser o primeiro plugin a rodar
    // Ele processa seus arquivos CSS e gera as classes.
    'tailwindcss': {},
    
    // 2. O Autoprefixer adiciona prefixos de fornecedor 
    // (ex: -webkit-, -moz-) às propriedades CSS para compatibilidade de navegadores.
    'autoprefixer': {},
  },
}