// components/ServiceCard.tsx
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
}

/**
 * @name ServiceCard
 * @description Componente RSC minimalista para apresentar um micro-SaaS.
 * @best_practice Uso da tag <a> do Link do Next.js para pré-busca e transição rápida.
 */
export const ServiceCard = ({ title, description, href, isNew = false }: ServiceCardProps) => {
  return (
    <Link 
      href={href} 
      className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-indigo-500 bg-white"
      target="_blank" // Abre em nova aba, pois são subdomínios
      rel="noopener noreferrer"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>
        {isNew && (
          <span className="text-xs font-medium bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full">
            Novo
          </span>
        )}
      </div>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </Link>
  );
};