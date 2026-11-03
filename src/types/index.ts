export type SolutionCategory = 'brands' | 'content' | 'advertising' | 'performance';

export interface SolutionItem {
  id: string;
  category: SolutionCategory;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  statHeadline: string;
  statContext: string;
}

export interface MetricProof {
  metric: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: SolutionCategory;
  year: string;
  heroImage: string;
  excerpt: string;
  featured: boolean;
  metrics: MetricProof[];
  challenge: string;
  strategy: string;
  execution: string[];
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  tags: string[];
  videoArea?: {
    title: string;
    duration: string;
    aspectRatio: string;
    placeholderNote: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationDraft {
  name: string;
  email: string;
  company: string;
  phone?: string;
  services: string[];
  budget: string;
  timeline: string;
  projectBrief: string;
  submittedAt?: string;
}
