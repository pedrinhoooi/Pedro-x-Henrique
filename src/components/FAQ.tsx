import React, { useState } from 'react';
import { FAQ_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  // Open the first item by default for quick clarity
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#09090c] border-t border-white/5 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Esclarecimentos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-base text-neutral-400">
            Respostas transparentes para as perguntas mais comuns sobre o nosso fluxo de trabalho.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl bg-[#0e0e13] border transition-colors overflow-hidden ${
                  isOpen ? 'border-blue-500/30 shadow-md shadow-blue-950/20' : 'border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-medium pr-4 transition-colors ${isOpen ? 'text-blue-200' : 'text-white'}`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-neutral-900 border flex items-center justify-center shrink-0 transform transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-blue-400 border-blue-500/40 bg-blue-600/10' : 'text-neutral-400 border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 animate-dropdown">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
