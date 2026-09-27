import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';
import { ArrowUpRight, Eye, Layers } from 'lucide-react';

interface PortfolioProps {
  onOpenProjectModal: (project: ProjectItem) => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectModal, onRequestSimilar }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Landing Page',
    'E-commerce',
    'Site Institucional',
    'Desenvolvimento Sob Medida',
  ];

  const filteredProjects =
    activeFilter === 'Todos'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" className="py-20 lg:py-28 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Portfólio & Demonstrações
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 text-balance">
              Projetos que falam por si.
            </h2>
            <p className="text-base text-neutral-400">
              Confira alguns exemplos de experiências digitais que podemos criar.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per frontend constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900/80 border border-white/5 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-blue-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category & Highlight badges (unboxed text metadata per constitution) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <span className="font-medium text-white">{project.category}</span>
                  <span className="text-neutral-500" aria-hidden="true">·</span>
                  <span className="text-blue-400">{project.highlight}</span>
                </div>

                {/* Quick Action Button On Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver detalhes do projeto</span>
                  </button>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {/* Tech stack hints */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 truncate max-w-[65%]">
                    {project.techStack.slice(0, 3).join(' • ')}
                  </div>

                  {/* Ver Projeto button */}
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Ver projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note (Respecting user request that these are customizable demos) */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-900/20 border border-white/5 text-center text-xs text-neutral-500 max-w-2xl mx-auto">
          Demonstrações conceituais de interfaces prontas para receber a identidade, fotos e conteúdo específico da sua empresa.
        </div>
      </div>
    </section>
  );
};
