/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityPillars } from './components/AuthorityPillars';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { AboutUs } from './components/AboutUs';
import { ConversionBanner } from './components/ConversionBanner';
import { QuoteForm } from './components/QuoteForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('Landing page');

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const element = document.getElementById('orcamento');
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('projetos');
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* 1. Header Navigation */}
      <Header onOpenQuote={() => scrollToQuote()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onStartProject={() => scrollToQuote()}
          onExploreProjects={scrollToPortfolio}
        />

        {/* 3. Authority & Quality Pillars */}
        <AuthorityPillars />

        {/* 4. Services */}
        <Services onSelectService={(serviceTitle) => scrollToQuote(serviceTitle)} />

        {/* 5. Why Choose Us */}
        <WhyUs />

        {/* 6. Portfolio / Projects */}
        <Portfolio
          onOpenProjectModal={(project) => setSelectedProject(project)}
          onRequestSimilar={(projectTitle) => scrollToQuote(projectTitle)}
        />

        {/* 7. Development Process */}
        <Process />

        {/* 8. About The Developers (Pedro Henrique André & Henrique Lima Borges) */}
        <AboutUs />

        {/* 9. Conversion Banner */}
        <ConversionBanner onOpenForm={() => scrollToQuote()} />

        {/* 10. Quote Request Form */}
        <QuoteForm initialService={prefilledService} />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Final Call To Action */}
        <FinalCTA onStartProject={() => scrollToQuote()} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenQuote={() => scrollToQuote()} />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          scrollToQuote(title);
        }}
      />
      {/* Floating WhatsApp Chat Button with Pedro & Henrique */}
      <WhatsAppFloatingButton />
    </div>
  );
}
