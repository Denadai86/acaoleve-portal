// types/gtm.d.ts

// Interface que define a estrutura básica de um evento que enviamos para o DataLayer
interface GtmEvent {
  event: string;
  [key: string]: any; // Permite outras propriedades como 'page', 'user_id', etc.
}

// Declaração de módulo global para adicionar a propriedade 'dataLayer' ao objeto 'window'
declare global {
  interface Window {
    dataLayer: GtmEvent[];
  }
}

// Isso garante que este arquivo seja tratado como um módulo, mesmo que só tenha declarações globais.
export {};