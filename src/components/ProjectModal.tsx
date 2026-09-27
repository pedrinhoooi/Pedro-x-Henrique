import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, CheckCircle, ArrowRight, Layers, Code, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0e0e13] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-neutral-950/60">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.highlight}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Asset */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-950 border border-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Overview */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base text-neutral-300 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Deliverables */}
          <div className="pt-4 border-t border-white/5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Entregáveis do Projeto
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-white/5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Tecnologias & Arquitetura
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono text-neutral-300 bg-neutral-900 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action */}
        <div className="p-5 border-t border-white/10 bg-neutral-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400 text-center sm:text-left">
            Deseja uma solução com este padrão para a sua marca?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Quero um projeto semelhante</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
