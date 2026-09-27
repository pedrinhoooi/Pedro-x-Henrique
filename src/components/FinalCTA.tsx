import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#080808]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance leading-tight">
          Seu próximo site começa com uma conversa.
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Se você tem uma ideia, uma empresa ou um projeto que precisa de uma presença digital profissional, fale conosco.
        </p>

        <div>
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-9 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Começar meu projeto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
