import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, MessageCircle, Clock, ChevronDown, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_CONTACTS } from '../data/content';

interface ConversionBannerProps {
  onOpenForm: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ onOpenForm }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#080808] via-[#0d101d] to-[#080808]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed metadata kicker */}
        <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
          Inicie sua Transformação Digital
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 text-balance leading-tight">
          Vamos transformar sua ideia em um projeto digital?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Conte um pouco sobre seu negócio e vamos conversar sobre o que podemos criar para você.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 relative">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer"
          >
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* WhatsApp Dropdown Trigger */}
          <div ref={dropdownRef} className="w-full sm:w-auto relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-medium text-white bg-[#1a1d26] hover:bg-[#232734] border border-white/10 hover:border-emerald-500/30 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar pelo WhatsApp</span>
              <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-72 rounded-xl bg-[#0e0e13] border border-white/10 shadow-2xl p-3 z-30 animate-dropdown text-left shadow-black/90">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2 px-1">
                  Selecione com quem conversar:
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_CONTACTS.pedro.number}?text=${encodeURIComponent(
                    'Olá, Pedro! Gostaria de falar sobre um projeto de desenvolvimento web para minha empresa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors mb-1 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      PH
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                        {WHATSAPP_CONTACTS.pedro.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {WHATSAPP_CONTACTS.pedro.formatted}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_CONTACTS.henrique.number}?text=${encodeURIComponent(
                    'Olá, Henrique! Gostaria de falar sobre um projeto de desenvolvimento web para minha empresa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      HL
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                        {WHATSAPP_CONTACTS.henrique.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {WHATSAPP_CONTACTS.henrique.formatted}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Reassurance note */}
        <p className="text-xs sm:text-sm text-neutral-400 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span>Resposta personalizada para cada projeto.</span>
        </p>
      </div>
    </section>
  );
};
