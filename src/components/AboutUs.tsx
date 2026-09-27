import React from 'react';
import { FOUNDERS } from '../data/content';
import { Github, Linkedin, Mail, Code, MessageCircle, ArrowUpRight } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-20 lg:py-28 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            A Dupla de Desenvolvedores
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 text-balance">
            Quem está por trás dos projetos?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            <p>
              Somos <strong className="text-white font-semibold">Pedro Henrique André</strong> e <strong className="text-white font-semibold">Henrique Lima Borges</strong>, uma dupla focada na criação de experiências digitais modernas, funcionais e profissionais.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base">
              Unimos desenvolvimento, design e estratégia para transformar ideias em projetos digitais que representam empresas de forma clara e profissional.
            </p>
          </div>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo / Avatar Placeholder Slot */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-blue-400 font-bold text-2xl tracking-wider shadow-inner group-hover:border-blue-500/40 transition-colors shrink-0">
                    <span>{founder.avatarInitial}</span>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 border-2 border-[#0a0a0d] flex items-center justify-center text-white">
                      <Code className="w-3 h-3" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {founder.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                      {founder.role}
                    </div>
                  </div>
                </div>

                {/* Profile Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {founder.description}
                </p>

                {/* Direct WhatsApp Callout Button */}
                <div className="mb-6">
                  <a
                    href={`https://wa.me/${founder.whatsapp}?text=${encodeURIComponent(
                      `Olá, ${founder.name.split(' ')[0]}! Gostaria de conversar sobre um projeto de desenvolvimento web.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800/90 border border-white/5 hover:border-emerald-500/40 transition-all group/wa"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-semibold text-white group-hover/wa:text-emerald-300 transition-colors">
                          WhatsApp Direto
                        </span>
                        <span className="block text-[11px] text-neutral-400 font-mono">
                          {founder.whatsappDisplay}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/wa:text-emerald-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Editable Social / Contact Links */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Outras redes:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                    aria-label={`GitHub de ${founder.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="p-2 rounded-lg bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                    aria-label={`Email para ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
