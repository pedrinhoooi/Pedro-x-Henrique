import React from 'react';
import { Smartphone, Zap, Code2, Target } from 'lucide-react';

export const AuthorityPillars: React.FC = () => {
  const pillars = [
    'DESIGN',
    'DESENVOLVIMENTO',
    'RESPONSIVIDADE',
    'PERFORMANCE',
    'EXPERIÊNCIA',
  ];

  const standards = [
    {
      icon: Smartphone,
      title: '100% Responsivo',
      desc: 'Adaptação nativa e fluida para todos os formatos de tela.',
    },
    {
      icon: Zap,
      title: 'Alta Performance',
      desc: 'Tempo de carregamento mínimo para melhor retenção e SEO.',
    },
    {
      icon: Code2,
      title: 'Código Limpo',
      desc: 'Construção sob medida, sem templates pesados ou redundâncias.',
    },
    {
      icon: Target,
      title: 'Foco em Conversão',
      desc: 'Arquitetura pensada para transformar visitantes em oportunidades reais.',
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/5 bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Pillar Track */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase">
          {pillars.map((pillar, index) => (
            <React.Fragment key={pillar}>
              <span className="hover:text-blue-400 transition-colors duration-200">
                {pillar}
              </span>
              {index < pillars.length - 1 && (
                <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Central Core Statement */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed text-balance">
            "Do conceito ao lançamento, cuidamos de cada detalhe para entregar uma experiência digital profissional."
          </p>
        </div>

        {/* Authentic Pillars Grid (Real Engineering Standards, No Fabricated Metrics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {standards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
