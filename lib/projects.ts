// lib/projects.ts — projetos sob medida (site institucional + sistema da paróquia)
import { Church, LayoutDashboard, type LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  kind: string;
  status: 'No ar' | 'Em desenvolvimento';
  description: string;
  highlights: string[];
  href?: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    id: 'site-paroquia',
    title: 'Paróquia Nossa Senhora Aparecida',
    kind: 'Site institucional',
    status: 'No ar',
    description:
      'Site público da paróquia de Botucatu, com tudo o que a comunidade procura em um só lugar.',
    highlights: [
      'Horários das missas e pastorais',
      'Pedido de oração, intenção de missa e agendamento de sacramentos',
      'Página de transmissão ao vivo',
      'Eventos, galeria de fotos, palavra do dia e tempo litúrgico',
    ],
    href: 'https://www.paroquiaaparecidabtu.com.br',
    icon: Church,
  },
  {
    id: 'na-paroquia',
    title: 'na Paróquia',
    kind: 'Sistema de gestão paroquial',
    status: 'Em desenvolvimento',
    description:
      'Plataforma web para organizar a rotina da paróquia, do atendimento à comunidade ao painel da equipe.',
    highlights: [
      'Catequese com presença por QR Code',
      'Pedidos de oração',
      'Administração da transmissão ao vivo',
      'Permissões para a equipe',
    ],
    icon: LayoutDashboard,
  },
];