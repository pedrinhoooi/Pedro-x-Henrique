import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { Building2, Zap, Briefcase, ShoppingBag, RefreshCw, Code2, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Zap,
  Briefcase,
  ShoppingBag,
  RefreshCw,
  Code2,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-20 lg:py-28 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Especialidades & Soluções
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Tudo o que seu negócio precisa para crescer no digital.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Desenvolvemos experiências digitais pensadas para representar sua marca e facilitar a conversão de visitantes em clientes.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900/60 flex flex-col justify-between"
              >
                {/* Subtle hover gradient highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-neutral-500 tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action: Direct trigger to quote form */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    {service.tag}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Solicitar projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
