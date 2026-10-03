# Repaginação do portal Ação Leve

## 1. Branch + dependências
git checkout -b repaginacao
pnpm remove tailwindcss autoprefixer cn
pnpm add tailwindcss@^4 @tailwindcss/postcss

## 2. Remover / mover
git rm postcss.config.js tailwind.config.ts
git mv .github/workflow .github/workflows

## 3. Copiar os arquivos deste pacote (mesmos caminhos)
postcss.config.mjs, app/globals.css, app/layout.tsx, app/page.tsx,
app/servicos/page.tsx, lib/tools.ts,
components/{Header,Footer,ToolCard,ToolShot}.tsx

## 4. Ajustes pequenos
- components.json: "tailwind.config": "" (v4 não usa config)
- components/ui/button.tsx: trocar `from "cn"` por `from "@/lib/utils"`
- components/auth/UserMenu.tsx: botão "Entrar" está bg-red-600; trocar para o estilo da marca

## 5. Conferir
pnpm build  e revisar visualmente /sobre, /contato, /login, /termos-de-uso, /politica-*
