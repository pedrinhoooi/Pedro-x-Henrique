import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User, ChevronDown } from 'lucide-react';
import { WHATSAPP_CONTACTS } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<'pedro' | 'henrique'>('pedro');
  const [selectedTopic, setSelectedTopic] = useState<'orcamento' | 'duvidas' | 'outro'>('orcamento');
  const [customNote, setCustomNote] = useState('');
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPastHero(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDev = WHATSAPP_CONTACTS[selectedDeveloper];

  const topicMessages: Record<string, string> = {
    orcamento: `Olá, ${currentDev.shortName}! Gostaria de solicitar um orçamento para o desenvolvimento de um site.`,
    duvidas: `Olá, ${currentDev.shortName}! Gostaria de tirar algumas dúvidas sobre os serviços de desenvolvimento web.`,
    outro: `Olá, ${currentDev.shortName}! Gostaria de conversar sobre um projeto digital para o meu negócio.`,
  };

  const getFullMessage = () => {
    let msg = topicMessages[selectedTopic] || topicMessages.orcamento;
    if (customNote.trim()) {
      msg += `\n\nDetalhes adicionais: ${customNote.trim()}`;
    }
    return msg;
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(getFullMessage());
    const url = `https://wa.me/${currentDev.number}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popover with Dropdown Animation */}
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-88 rounded-2xl bg-[#0e0e13] border border-white/10 shadow-2xl p-5 animate-dropdown text-left shadow-black/80"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0e0e13]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Atendimento WhatsApp</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Online para conversar</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Fechar janela de chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Developer Selector Tabs */}
          <div className="mb-4">
            <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Escolha com quem deseja falar:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-900/90 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setSelectedDeveloper('pedro')}
                className={`flex flex-col items-start p-2 rounded-lg text-left transition-all cursor-pointer ${
                  selectedDeveloper === 'pedro'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-xs font-semibold">Pedro Henrique</span>
                <span className={`text-[10px] ${selectedDeveloper === 'pedro' ? 'text-blue-100' : 'text-neutral-500'}`}>
                  (47) 99997-5646
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDeveloper('henrique')}
                className={`flex flex-col items-start p-2 rounded-lg text-left transition-all cursor-pointer ${
                  selectedDeveloper === 'henrique'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-xs font-semibold">Henrique Lima</span>
                <span className={`text-[10px] ${selectedDeveloper === 'henrique' ? 'text-blue-100' : 'text-neutral-500'}`}>
                  (62) 98575-1288
                </span>
              </button>
            </div>
          </div>

          {/* Topic selector */}
          <div className="space-y-1.5 mb-4">
            <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
              Assunto principal:
            </label>
            <button
              type="button"
              onClick={() => setSelectedTopic('orcamento')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                selectedTopic === 'orcamento'
                  ? 'bg-blue-600/15 text-blue-300 border border-blue-500/30 font-medium'
                  : 'bg-neutral-900/50 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              <span>Solicitar orçamento</span>
              {selectedTopic === 'orcamento' && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
            </button>

            <button
              type="button"
              onClick={() => setSelectedTopic('duvidas')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                selectedTopic === 'duvidas'
                  ? 'bg-blue-600/15 text-blue-300 border border-blue-500/30 font-medium'
                  : 'bg-neutral-900/50 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              <span>Tirar dúvidas sobre serviços</span>
              {selectedTopic === 'duvidas' && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
            </button>

            <button
              type="button"
              onClick={() => setSelectedTopic('outro')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                selectedTopic === 'outro'
                  ? 'bg-blue-600/15 text-blue-300 border border-blue-500/30 font-medium'
                  : 'bg-neutral-900/50 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              <span>Outro assunto</span>
              {selectedTopic === 'outro' && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
            </button>
          </div>

          {/* Quick Note Input */}
          <div className="mb-4">
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Adicionar recado opcional..."
              className="w-full px-3 py-2 text-xs bg-neutral-900/80 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500/80"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleOpenWhatsApp();
                }
              }}
            />
          </div>

          {/* Dispatch button */}
          <button
            onClick={handleOpenWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md hover:shadow-emerald-500/20 cursor-pointer"
          >
            <span>Iniciar conversa no WhatsApp</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && hasScrolledPastHero && (
          <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-neutral-900/90 border border-white/10 text-xs text-neutral-300 shadow-xl backdrop-blur-md animate-dropdown">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Falar no WhatsApp (Pedro ou Henrique)</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/30"
          aria-label="Abrir conversa no WhatsApp com Pedro ou Henrique"
          title="Fale conosco no WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#080808]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
