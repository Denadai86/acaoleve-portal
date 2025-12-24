import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const TOOLS = [
  { id: 'policygen', url: 'https://policygen.acaoleve.com' },
  { id: 'refeita-ai', url: 'https://refeita-ai.acaoleve.com' },
  { id: 'brinca-ai', url: 'https://brinca-ai.acaoleve.com' }
];

export async function GET() {
  console.log("🚀 Iniciando atualização PARALELA (com Overwrite)...");

  try {
    const promises = TOOLS.map(async (tool) => {
      try {
        // 1. Tira o print (espera 4s para carregar tudo)
        const microlinkApi = `https://api.microlink.io/?url=${tool.url}&screenshot=true&meta=false&overlay.browser=dark&waitFor=4000&waitUntil=networkidle0`;
        
        const metadataResponse = await fetch(microlinkApi);
        const metadata = await metadataResponse.json();

        if (metadata.status === 'fail' || !metadata.data?.screenshot?.url) {
            console.error(`❌ Falha Microlink: ${tool.id}`);
            return { tool: tool.id, status: 'error' };
        }

        const imageUrl = metadata.data.screenshot.url;
        
        // 2. Baixa a imagem
        const imageResponse = await fetch(imageUrl);
        const arrayBuffer = await imageResponse.arrayBuffer();
        
        // 3. Salva no Blob (AGORA COM PERMISSÃO PARA SOBRESCREVER)
        const blob = await put(`screenshots/${tool.id}.jpg`, Buffer.from(arrayBuffer), {
          access: 'public',
          addRandomSuffix: false,     // Mantém o nome fixo
          contentType: 'image/jpeg',  // Garante que o navegador entenda que é imagem
          // AQUI ESTÁ A CORREÇÃO:
          token: process.env.BLOB_READ_WRITE_TOKEN, // Garante que usa o token certo
          // @ts-ignore - Algumas versões do TS reclamam, mas a API exige isso
          allowOverwrite: true        // <--- O PULO DO GATO
        });

        console.log(`✅ ${tool.id} atualizado com sucesso!`);
        return { tool: tool.id, status: 'success', url: blob.url };

      } catch (err: any) {
        console.error(`Erro em ${tool.id}: ${err.message}`);
        return { tool: tool.id, status: 'error', error: err.message };
      }
    });

    const results = await Promise.all(promises);

    return NextResponse.json({ 
      message: "Screenshots atualizados e sobrescritos", 
      results 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}