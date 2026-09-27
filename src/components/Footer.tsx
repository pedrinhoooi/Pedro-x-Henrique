import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Mail, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#orcamento' },
  ];

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6">
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              Pedro Henrique André <span className="text-blue-500 font-light">×</span> Henrique Lima Borges
            </h3>
            <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
              Web Development • Design • Experiências Digitais
            </p>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Criação de websites, landing pages e soluções digitais sob medida com alto padrão visual, desempenho otimizado e arquitetura moderna para marcas de destaque.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Canais Oficiais
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/5547999975646?text=Ol%C3%A1%2C%20Pedro!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: Pedro (47) 99997-5646</span>
              </a>
              <a
                href="https://wa.me/5562985751288?text=Ol%C3%A1%2C%20Henrique!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: Henrique (62) 98575-1288</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Instagram Oficial</span>
              </a>
              <a
                href="mailto:contato@pedro-e-henrique.dev"
                className="flex items-center gap-2.5 text-xs hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contato@pedro-e-henrique.dev</span>
              </a>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © 2026 Pedro Henrique André & Henrique Lima Borges. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors p-1 cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
