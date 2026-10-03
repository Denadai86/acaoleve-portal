import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

//export const dynamic = 'force-dynamic';

const TOOLS = [
  { id: 'policygen', url: 'https://policygen.acaoleve.com.br' },
  { id: 'refeita-ai', url: 'https://refeita-ai.acaoleve.com.br' },
  { id: 'brinca-ai', url: 'https://brinca-ai.acaoleve.com.br' },
  { id: 'fechou-ai', url: 'https://fechou-ai.acaoleve.com.br' },
  { id: 'nutripet-ai', url: 'https://nutripet-ai.acaoleve.com.br' },
  { id: 'seu-evento', url: 'https://seu-evento.acaoleve.com.br' }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  // Prioriza a variável de ambiente, se não houver, usa o fallback
  const MY_SECRET = process.env.CRON_SECRET || "acaoleve_screenshot_replace_2026";

  if (!secret || secret !== MY_SECRET) {
    console.log("🚫 Tentativa de acesso não autorizado.");
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const results = await Promise.all(TOOLS.map(async (tool) => {
      try {
        const microlinkUrl = `https://api.microlink.io/?url=${tool.url}&screenshot=true&meta=false&waitFor=4000&waitUntil=networkidle0&overlay.browser=dark`;
        
        const metadataRes = await fetch(microlinkUrl);
        const metadata = await metadataRes.json();

        if (metadata.status === 'fail') throw new Error(metadata.message);

        const imageRes = await fetch(metadata.data.screenshot.url);
        const buffer = Buffer.from(await imageRes.arrayBuffer());

        const blob = await put(`screenshots/${tool.id}.jpg`, buffer, {
          access: 'public',
          addRandomSuffix: false,
          contentType: 'image/jpeg',
          token: process.env.BLOB_READ_WRITE_TOKEN,
          // @ts-ignore
          allowOverwrite: true,
        });

        return { tool: tool.id, status: 'success', url: blob.url };
      } catch (err: any) {
        return { tool: tool.id, status: 'error', reason: err.message };
      }
    }));

    return NextResponse.json({
      message: "Operação finalizada",
      timestamp: new Date().toISOString(),
      results
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}