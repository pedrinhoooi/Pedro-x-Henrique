import React from 'react';
import { ArrowRight, Code, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreProjects }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden scroll-mt-24">
      {/* Subtle background glow effect (refined, non-distracting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean Eyebrow: Unboxed text without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
              <span>Web Development</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Design</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Performance</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Seu negócio merece uma presença digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">
                à altura.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-8">
              Criamos sites modernos, estratégicos e de alta performance para empresas que querem se destacar, transmitir confiança e transformar visitantes em clientes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-md hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer"
              >
                <span>Quero meu site</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/80 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span>Ver projetos</span>
              </button>
            </div>

            {/* Micro information below buttons */}
            <div className="pt-2 border-t border-white/5">
              <p className="text-xs sm:text-sm text-neutral-400 flex flex-wrap items-center gap-2">
                <span>Desenvolvimento sob medida</span>
                <span className="text-neutral-600" aria-hidden="true">•</span>
                <span>Design moderno</span>
                <span className="text-neutral-600" aria-hidden="true">•</span>
                <span>Experiência profissional</span>
              </p>
            </div>
          </div>

          {/* Right Column: Web Interface Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer container with sleek hairline border and subtle glow */}
              <div className="relative rounded-2xl bg-neutral-900/60 p-2 sm:p-3 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm group transition-transform duration-500 hover:-translate-y-1">
                {/* Browser Top Bar Mock */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-neutral-950/60 rounded-t-xl mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-3 py-0.5 rounded border border-white/5 flex items-center gap-1.5 truncate max-w-[200px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>pedro-e-henrique.dev</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Interface Preview Asset */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-neutral-950 border border-white/5">
                  <img
                    src="/src/assets/images/hero_web_interface_1790482260986.jpg"
                    alt="Mockup de interface web moderna e de alta performance"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Micro-Card: Architecture Quality Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#0e0e12]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <span>Arquitetura Moderna</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <p className="text-[11px] text-neutral-400">React • TypeScript • Alta Performance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle corner aura */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
