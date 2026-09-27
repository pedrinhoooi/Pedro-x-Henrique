import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, MessageCircle, Building2, Zap, Briefcase, ShoppingBag, RefreshCw, Code2 } from 'lucide-react';
import { WHATSAPP_CONTACTS } from '../data/content';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [whatsAppDropdownOpen, setWhatsAppDropdownOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const whatsAppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (whatsAppRef.current && !whatsAppRef.current.contains(event.target as Node)) {
        setWhatsAppDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setWhatsAppDropdownOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const servicesList = [
    { title: 'Sites Institucionais', href: '#servicos', icon: Building2 },
    { title: 'Landing Pages', href: '#servicos', icon: Zap },
    { title: 'Sites para Empresas', href: '#servicos', icon: Briefcase },
    { title: 'E-commerce', href: '#servicos', icon: ShoppingBag },
    { title: 'Redesign de Sites', href: '#servicos', icon: RefreshCw },
    { title: 'Desenvolvimento Sob Medida', href: '#servicos', icon: Code2 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Pedro Henrique e Henrique Lima - Web Developers"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-xs tracking-wider group-hover:border-blue-500/40 transition-colors">
              PH
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Pedro Henrique</span>
              <span className="text-blue-500 font-light text-sm">×</span>
              <span className="text-neutral-300">Henrique Lima</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Início
            </a>

            {/* Serviços with Animated Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-sm font-medium flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                  servicesDropdownOpen ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {/* Animated Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-64 z-50 animate-dropdown">
                  <div className="p-2 rounded-xl bg-[#0e0e13] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl">
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400 border-b border-white/5 mb-1">
                      Nossas Soluções
                    </div>
                    {servicesList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-neutral-300 hover:text-white hover:bg-blue-600/10 hover:border-blue-500/20 border border-transparent transition-all group/item"
                        >
                          <Icon className="w-3.5 h-3.5 text-blue-400 group-hover/item:text-blue-300 shrink-0" />
                          <span>{item.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#projetos');
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Projetos
            </a>

            <a
              href="#processo"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#processo');
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Processo
            </a>

            <a
              href="#sobre-nos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#sobre-nos');
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Sobre nós
            </a>

            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faq');
              }}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Action Zone: WhatsApp Quick Dropdown + Orçamento CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Contact Dropdown */}
            <div ref={whatsAppRef} className="relative">
              <button
                type="button"
                onClick={() => setWhatsAppDropdownOpen(!whatsAppDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-emerald-500/30 rounded-lg transition-all cursor-pointer"
                title="Conversar pelo WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${whatsAppDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {whatsAppDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 w-64 z-50 animate-dropdown">
                  <div className="p-3 rounded-xl bg-[#0e0e13] border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2 px-1">
                      Falar diretamente com:
                    </div>

                    {/* Pedro's WhatsApp */}
                    <a
                      href={`https://wa.me/${WHATSAPP_CONTACTS.pedro.number}?text=${encodeURIComponent(
                        'Olá, Pedro! Gostaria de conversar sobre um projeto web.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors mb-1 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                          PH
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {WHATSAPP_CONTACTS.pedro.shortName}
                          </div>
                          <div className="text-[10px] text-neutral-400">{WHATSAPP_CONTACTS.pedro.formatted}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                    </a>

                    {/* Henrique's WhatsApp */}
                    <a
                      href={`https://wa.me/${WHATSAPP_CONTACTS.henrique.number}?text=${encodeURIComponent(
                        'Olá, Henrique! Gostaria de conversar sobre um projeto web.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                          HL
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {WHATSAPP_CONTACTS.henrique.shortName}
                          </div>
                          <div className="text-[10px] text-neutral-400">{WHATSAPP_CONTACTS.henrique.formatted}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Quote CTA */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-sm hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Dropdown Animation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0c0e]/98 backdrop-blur-xl px-4 pt-4 pb-6 animate-dropdown">
          <div className="flex flex-col space-y-2">
            {['Início', 'Serviços', 'Projetos', 'Processo', 'Sobre nós', 'FAQ'].map((label) => {
              const href = `#${label.toLowerCase().replace(' ', '-').replace('í', 'i')}`;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {label}
                </a>
              );
            })}

            {/* Direct WhatsApp Contacts in Mobile Drawer */}
            <div className="pt-2 pb-1 border-t border-white/10">
              <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-3 mb-2">
                Falar pelo WhatsApp:
              </div>
              <div className="grid grid-cols-2 gap-2 px-1">
                <a
                  href={`https://wa.me/${WHATSAPP_CONTACTS.pedro.number}?text=${encodeURIComponent(
                    'Olá, Pedro! Gostaria de falar sobre um projeto.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-200 hover:text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Pedro (47)</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_CONTACTS.henrique.number}?text=${encodeURIComponent(
                    'Olá, Henrique! Gostaria de falar sobre um projeto.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-200 hover:text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Henrique (62)</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
