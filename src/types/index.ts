export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Landing Page' | 'E-commerce' | 'Site Institucional' | 'Desenvolvimento Sob Medida';
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
  techStack: string[];
  highlight: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  whatsapp: string;
  email: string;
  projectType: string;
  approxBudget: string;
  projectDetails: string;
}
