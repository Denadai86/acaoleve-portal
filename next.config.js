/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configurações padrão ou vazias para o MVP.
    // Garantimos que o modo strict seja false para evitar possíveis problemas
    // com bibliotecas externas no futuro, se necessário.
    reactStrictMode: true,

    // Configuração de subdomínio para os micro-SaaS
    // Esta configuração é crucial para a escalabilidade dos seus projetos.
    async rewrites() {
        return [
            // Rotas que não devem ser tratadas pelo Next.js (ex: arquivos estáticos)
        ];
    },
};

module.exports = nextConfig;