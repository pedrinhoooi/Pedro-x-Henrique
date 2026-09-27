import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { MessageSquare, LayoutTemplate, Terminal, Rocket } from 'lucide-react';

const stepIcons = [MessageSquare, LayoutTemplate, Terminal, Rocket];

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-20 lg:py-28 relative bg-[#09090c] border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Metodologia & Etapas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Do primeiro contato ao site no ar.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Processo transparente, ágil e estruturado em 4 fases claras para que você acompanhe cada evolução sem surpresas.
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20 -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index] || MessageSquare;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#0e0e13] border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-mono font-bold text-blue-400">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>

                    {/* Primary Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Supplemental Detail */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-neutral-400 leading-normal">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
