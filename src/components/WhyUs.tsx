import React from 'react';
import { WHY_US_CARDS } from '../data/content';
import { Compass, Smartphone, Gauge, Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Smartphone,
  Gauge,
  Sparkles,
  Layers,
  ShieldCheck,
};

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Diferenciais & Filosofia
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
              Não criamos apenas sites.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Criamos experiências digitais.
              </span>
            </h2>
            <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
              <p>
                Cada projeto é pensado para unir estética, funcionalidade e estratégia. O objetivo não é apenas ter um site bonito, mas criar uma ferramenta que represente sua empresa e ajude seu negócio.
              </p>
              <p className="text-neutral-400 text-sm">
                Trabalhamos com foco na clareza da mensagem, velocidade de carregamento e facilidade de contato para que sua marca se torne memorável desde o primeiro segundo.
              </p>
            </div>

            {/* Quick Commitments List */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Atendimento direto com os desenvolvedores</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Sem intermediários ou burocracias desnecessárias</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Entregas pontuais e alinhadas ao seu cronograma</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Differentiator Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {WHY_US_CARDS.map((card) => {
                const Icon = iconMap[card.icon] || ShieldCheck;
                return (
                  <div
                    key={card.title}
                    className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-900/70 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 group-hover:border-blue-500/40 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
