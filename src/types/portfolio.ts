export type Language = 'vi' | 'en';

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  number: string;
  label: string;
  description: string;
  highlight?: string;
  icon: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
  tags: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  category: 'all' | 'engineering' | 'research' | 'growth';
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
  badge?: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location?: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface TechCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  displayPhone: string;
  location: string;
  github: string;
  linkedin: string;
  facebook?: string;
  zalo: string;
  responseTimeCommitment: string;
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    name: string;
    tagline: string;
    liveStatus: string;
    links: NavItem[];
    downloadCv: {
      label: string;
      viVersion: string;
      enVersion: string;
    };
  };
  hero: {
    kicker?: string;
    firstName?: string;
    lastName?: string;
    rolesText?: string;
    skillPills?: { label: string; icon?: string }[];
    identityTags: string[];
    headline: string;
    bio: string;
    workStatus: string;
    primaryCta: string;
    secondaryCta: string;
    badges: {
      id: string;
      title: string;
      subtitle: string;
      icon: string;
    }[];
  };
  metrics: {
    title: string;
    description: string;
    items: MetricItem[];
  };
  capabilities: {
    title: string;
    subtitle: string;
    items: CapabilityItem[];
    workflowTitle: string;
    workflowSteps: WorkflowStep[];
  };
  projects: {
    title: string;
    subtitle: string;
    filterLabels: {
      all: string;
      engineering: string;
      research: string;
      growth: string;
    };
    viewDetailsLabel: string;
    closeModalLabel: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  techStack: {
    title: string;
    subtitle: string;
    categories: TechCategory[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    bannerTitle: string;
    bannerCta: string;
    bannerCv: string;
    title: string;
    subtitle: string;
    directTitle: string;
    formTitle: string;
    info: ContactInfo;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      orgLabel: string;
      orgPlaceholder: string;
      topicLabel: string;
      topicOptions: { value: string; label: string }[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMessage: string;
    };
  };
  footer: {
    quote: string;
    copyright: string;
    allRightsReserved?: string;
    builtWith: string;
  };
}
