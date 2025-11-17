// /app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ação Leve - Portal de Micro-SaaS',
  description: 'Coleção de ferramentas simples e leves para produtividade digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Adicione um padding vertical para teste de estilo */}
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-xl font-bold text-primary">Ação Leve Portal</h1>
            </div>
        </header>
        <main className="min-h-screen container mx-auto p-8">
            {children}
        </main>
        <footer className="w-full text-center p-4 border-t text-sm text-gray-500">
            © {new Date().getFullYear()} Ação Leve. Todas as ferramentas são construídas com ❤️ e Next.js.
        </footer>
      </body>
    </html>
  )
}