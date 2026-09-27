import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { PROJECT_TYPES, BUDGET_RANGES, WHATSAPP_CONTACTS } from '../data/content';
import { CheckCircle2, Send, MessageCircle, AlertCircle, RefreshCw, Copy, Check, ArrowUpRight } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    whatsapp: '',
    email: '',
    projectType: 'Landing page',
    approxBudget: BUDGET_RANGES[0],
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      // Map initialService title to closest project type
      const matched = PROJECT_TYPES.find((type) =>
        type.toLowerCase().includes(initialService.toLowerCase()) ||
        initialService.toLowerCase().includes(type.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, projectType: matched }));
      }
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor, informe seu número de WhatsApp com DDD.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 10) {
      newErrors.whatsapp = 'Insira um número de WhatsApp válido com DDD.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail comercial.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Insira um endereço de e-mail válido.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Conte brevemente sobre o projeto ou objetivo da empresa.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & state persistence
    setTimeout(() => {
      try {
        const storedQuotes = JSON.parse(localStorage.getItem('pedro_henrique_quotes') || '[]');
        storedQuotes.push({
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('pedro_henrique_quotes', JSON.stringify(storedQuotes));
      } catch (err) {
        console.error('Storage note:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      whatsapp: '',
      email: '',
      projectType: 'Landing page',
      approxBudget: BUDGET_RANGES[0],
      projectDetails: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  const generateWhatsAppMessage = (phone: string) => {
    const text = `*Solicitação de Orçamento - Web Development*
*Nome:* ${formData.name}
*Empresa:* ${formData.companyName || 'Não informada'}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email}
*Tipo de Projeto:* ${formData.projectType}
*Orçamento Estimado:* ${formData.approxBudget}
*Detalhes:* ${formData.projectDetails}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleCopySummary = () => {
    const summary = `Nome: ${formData.name}\nEmpresa: ${formData.companyName}\nWhatsApp: ${formData.whatsapp}\nE-mail: ${formData.email}\nTipo: ${formData.projectType}\nOrçamento: ${formData.approxBudget}\nDetalhes: ${formData.projectDetails}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="orcamento" className="py-20 lg:py-28 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Proposta Sob Medida
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Solicitar Orçamento
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Preencha os campos abaixo. Retornaremos com uma proposta personalizada para os objetivos do seu negócio.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0e0e13] border border-white/10 shadow-2xl relative">
          {isSuccess ? (
            /* Success Feedback State */
            <div className="py-12 px-4 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Mensagem enviada com sucesso!
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed mb-6">
                Entraremos em contato em breve para apresentar a melhor solução para o seu projeto.
              </p>

              {/* Direct WhatsApp Action with Pedro or Henrique */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Enviar resumo diretamente pelo WhatsApp:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={generateWhatsAppMessage(WHATSAPP_CONTACTS.pedro.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar para Pedro (47)</span>
                  </a>

                  <a
                    href={generateWhatsAppMessage(WHATSAPP_CONTACTS.henrique.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar para Henrique (62)</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado!' : 'Copiar resumo dos dados'}</span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    Nome completo <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou como prefere ser chamado"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900/80 border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-blue-500/80'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Nome da Empresa */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    Nome da empresa
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Ex: Minha Empresa Ltda."
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/80 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    WhatsApp <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900/80 border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.whatsapp
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-blue-500/80'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    E-mail comercial <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="voce@empresa.com.br"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900/80 border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-blue-500/80'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tipo de Projeto */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    Tipo de projeto <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/80 transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-neutral-950 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Orçamento Aproximado */}
                <div>
                  <label htmlFor="approxBudget" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                    Orçamento aproximado
                  </label>
                  <select
                    id="approxBudget"
                    value={formData.approxBudget}
                    onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/80 transition-colors"
                  >
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-neutral-950 text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conte mais sobre seu projeto */}
              <div>
                <label htmlFor="projectDetails" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                  Conte mais sobre seu projeto <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Quais são os principais objetivos, prazos ou referências que você tem em mente?"
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-900/80 border text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors resize-none ${
                    errors.projectDetails
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-blue-500/80'
                  }`}
                />
                {errors.projectDetails && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.projectDetails}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Enviando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar solicitação</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-neutral-500">
                Seus dados são confidenciais e utilizados estritamente para a elaboração da proposta técnica.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
