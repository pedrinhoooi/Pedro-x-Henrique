import { ServiceItem, ProjectItem, StepItem, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites-institucionais',
    number: '01',
    title: 'Sites Institucionais',
    description: 'Sites profissionais para empresas que precisam apresentar seus serviços, gerar confiança e fortalecer sua presença online.',
    iconName: 'Building2',
    tag: 'Presença Corporativa',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    description: 'Páginas desenvolvidas para campanhas, produtos, serviços e geração de leads.',
    iconName: 'Zap',
    tag: 'Foco em Conversão',
  },
  {
    id: 'sites-empresas',
    number: '03',
    title: 'Sites para Empresas',
    description: 'Presença digital completa para empresas que querem apresentar seus diferenciais de forma profissional.',
    iconName: 'Briefcase',
    tag: 'Posicionamento Digital',
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-commerce',
    description: 'Experiências de compra modernas, responsivas e pensadas para facilitar a jornada do cliente.',
    iconName: 'ShoppingBag',
    tag: 'Vendas Online',
  },
  {
    id: 'redesign',
    number: '05',
    title: 'Redesign de Sites',
    description: 'Transformamos sites antigos em experiências modernas, rápidas e visualmente profissionais.',
    iconName: 'RefreshCw',
    tag: 'Modernização & Velocidade',
  },
  {
    id: 'sob-medida',
    number: '06',
    title: 'Desenvolvimento Sob Medida',
    description: 'Soluções personalizadas de acordo com as necessidades específicas de cada projeto.',
    iconName: 'Code2',
    tag: 'Arquitetura Customizada',
  },
];

export const WHY_US_CARDS = [
  {
    title: 'Design estratégico',
    description: 'Visual concebido para orientar o olhar do usuário e conduzir a ações objetivas.',
    icon: 'Compass',
  },
  {
    title: 'Responsivo em qualquer dispositivo',
    description: 'Fluidez impecável em smartphones, tablets, notebooks e monitores ultrawide.',
    icon: 'Smartphone',
  },
  {
    title: 'Performance',
    description: 'Carregamento instantâneo, código otimizado e boas práticas de Core Web Vitals.',
    icon: 'Gauge',
  },
  {
    title: 'Experiência do usuário',
    description: 'Navegação intuitiva, hierarquia limpa e microinterações que geram retenção.',
    icon: 'Sparkles',
  },
  {
    title: 'Desenvolvimento personalizado',
    description: 'Arquitetura modular sem templates engessados ou códigos desnecessários.',
    icon: 'Layers',
  },
  {
    title: 'Visual profissional',
    description: 'Acabamento minimalista e refinado que valoriza o posicionamento da sua marca.',
    icon: 'ShieldCheck',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'techventures-saas',
    title: 'TechVentures Studio',
    category: 'Landing Page',
    shortDesc: 'Página de alta conversão estruturada para apresentação de ecossistema digital e captação de clientes.',
    fullDesc: 'Conceito desenvolvido com ênfase em contraste escuro, tipografia editorial e layout dinâmico. Projetada para reduzir atrito na tomada de decisão e comunicar autoridade técnica imediata.',
    image: '/src/assets/images/project_saas_landing_1790482271450.jpg',
    deliverables: ['Landing page de alto impacto', 'Otimização para mobile', 'Formulário integrado'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlight: 'Foco em Conversão',
  },
  {
    id: 'lumina-atelier',
    title: 'Lumina Atelier',
    category: 'E-commerce',
    shortDesc: 'Experiência de e-commerce minimalista com catálogo refinado e navegação sem atritos.',
    fullDesc: 'Desenvolvimento visual centrado no produto com grid contemporâneo, estética sóbria e processo de checkout projetado para elevar a percepção de valor dos itens comercializados.',
    image: '/src/assets/images/project_ecommerce_minimal_1790482282030.jpg',
    deliverables: ['Catálogo dinâmico', 'Design responsivo', 'Checkout simplificado'],
    techStack: ['React', 'Tailwind CSS', 'Microinterações'],
    highlight: 'Experiência do Usuário',
  },
  {
    id: 'vanguard-arquitetura',
    title: 'Vanguard Arquitetura',
    category: 'Site Institucional',
    shortDesc: 'Site institucional corporativo para escritório de arquitetura com exibição de portfólio.',
    fullDesc: 'Estrutura institucional completa com seções modulares, apresentação de serviços, equipe e galeria de obras arquitetônicas em formato editorial minimalista.',
    image: '/src/assets/images/project_institutional_studio_1790482291581.jpg',
    deliverables: ['Site institucional completo', 'Galeria de projetos', 'Formulário de briefing'],
    techStack: ['TypeScript', 'Design Responsivo', 'SEO Estruturado'],
    highlight: 'Identidade & Confiança',
  },
  {
    id: 'nexus-platform',
    title: 'Nexus Data Platform',
    category: 'Desenvolvimento Sob Medida',
    shortDesc: 'Interface moderna para aplicações web e dashboards corporativos com visual sofisticado.',
    fullDesc: 'Exemplo de aplicação sob medida com visualização de dados, navegação lateral intuitiva e componentes reutilizáveis preparados para escalar conforme a necessidade do negócio.',
    image: '/src/assets/images/hero_web_interface_1790482260986.jpg',
    deliverables: ['Painel administrativo', 'Componentes modulares', 'Design system customizado'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'APIs'],
    highlight: 'Desenvolvimento Sob Medida',
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Conversa',
    description: 'Entendemos seu negócio, seus objetivos e o que você precisa.',
    details: 'Alinhamento inicial dos desafios, público-alvo e requisitos do projeto para traçar o plano ideal.',
  },
  {
    step: '02',
    title: 'Estratégia e Design',
    description: 'Definimos a estrutura, identidade visual e experiência da página.',
    details: 'Criação do wireframe, arquitetura de conteúdo e refinamento visual alinhado à proposta da empresa.',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Transformamos o projeto em uma experiência web funcional, responsiva e otimizada.',
    details: 'Implementação em código limpo, moderno, com carregamento rápido e perfeita adaptação a celulares e desktops.',
  },
  {
    step: '04',
    title: 'Entrega',
    description: 'Após os ajustes finais, seu projeto está pronto para ir ao ar.',
    details: 'Revisão detalhada, testes de navegação, configuração de domínio e publicação definitiva da aplicação.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto custa um site?',
    answer: 'Cada projeto possui necessidades diferentes. Por isso, analisamos o que você precisa antes de apresentar uma proposta personalizada.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo leva para criar um site?',
    answer: 'O prazo depende da complexidade do projeto, quantidade de páginas, funcionalidades e processo de aprovação.',
  },
  {
    id: 'faq-3',
    question: 'Vocês fazem sites responsivos?',
    answer: 'Sim. Os projetos são desenvolvidos pensando em diferentes tamanhos de tela, incluindo celulares, tablets e computadores.',
  },
  {
    id: 'faq-4',
    question: 'Posso solicitar alterações?',
    answer: 'Sim. O projeto passa por uma etapa de ajustes para garantir que o resultado final esteja alinhado ao que foi planejado.',
  },
  {
    id: 'faq-5',
    question: 'Vocês criam o design?',
    answer: 'Sim. Podemos desenvolver a estrutura visual e a experiência da página de acordo com a identidade e os objetivos do projeto.',
  },
  {
    id: 'faq-6',
    question: 'Vocês trabalham com empresas de qualquer cidade?',
    answer: 'Sim. O atendimento pode ser realizado de forma online.',
  },
];

export const WHATSAPP_CONTACTS = {
  pedro: {
    name: 'Pedro Henrique André',
    shortName: 'Pedro',
    number: '5547999975646',
    formatted: '(47) 99997-5646',
    url: 'https://wa.me/5547999975646',
  },
  henrique: {
    name: 'Henrique Lima Borges',
    shortName: 'Henrique',
    number: '5562985751288',
    formatted: '(62) 98575-1288',
    url: 'https://wa.me/5562985751288',
  },
};

export const FOUNDERS = [
  {
    name: 'Pedro Henrique André',
    role: 'Web Developer',
    description: 'Especialista em desenvolvimento web, arquitetura de interfaces modernas e experiências digitais intuitivas e de alto desempenho.',
    avatarInitial: 'PH',
    whatsapp: '5547999975646',
    whatsappDisplay: '(47) 99997-5646',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'contato@pedrohenrique.dev',
  },
  {
    name: 'Henrique Lima Borges',
    role: 'Web Developer',
    description: 'Focado em engenharia frontend, estratégias de conversão, responsividade e integração de soluções sob medida para empresas.',
    avatarInitial: 'HL',
    whatsapp: '5562985751288',
    whatsappDisplay: '(62) 98575-1288',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'contato@henriquelima.dev',
  },
];

export const PROJECT_TYPES = [
  'Site institucional',
  'Landing page',
  'E-commerce',
  'Redesign de site',
  'Sistema personalizado',
  'Outro',
];

export const BUDGET_RANGES = [
  'A definir / Avaliar proposta',
  'Até R$ 2.500',
  'R$ 2.500 a R$ 5.000',
  'R$ 5.000 a R$ 10.000',
  'Acima de R$ 10.000',
];
