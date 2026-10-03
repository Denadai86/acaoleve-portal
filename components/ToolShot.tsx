// components/ToolShot.tsx — screenshot do app com fallback se a imagem do Blob falhar
'use client';

import { useState } from 'react';
import Image from 'next/image';

const BLOB_BASE_URL =
  'https://keuabft7jwxlysoy.public.blob.vercel-storage.com/screenshots';

export default function ToolShot({ id, title }: { id: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full place-items-center bg-linear-to-br from-elevated to-card font-display text-lg font-bold text-muted-foreground">
        {title}
      </div>
    );
  }

  return (
    <Image
      src={`${BLOB_BASE_URL}/${id}.jpg`}
      alt={`Tela do ${title}`}
      fill
      sizes="(min-width: 1024px) 40vw, 100vw"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
