export interface ServiceSolution {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  capabilities: string[];
  metrics: string[];
  suitableFor: string;
}

export interface PipelineStage {
  step: string;
  title: string;
  subtitle: string;
  details: string;
  turnaroundTime: string;
  keyDeliverable: string;
  responsibility: string;
}

export interface MetricCategory {
  index: string;
  title: string;
  subcategories: {
    name: string;
    indicators: string[];
    benchmarkImpact: string;
  }[];
}

export interface OperatingDomain {
  id: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface ConsultationRequest {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  solutionInterest: string;
  geographicScope: string;
  message: string;
}

export interface SuccessStory {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  region: string;
  serviceCategory: string;
  headline: string;
  quote: string;
  challenge: string;
  intervention: string;
  results: {
    label: string;
    value: string;
  }[];
}

export interface LinkedInPost {
  id: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    company: string;
  };
  date: string;
  category: string;
  title: string;
  content: string;
  tags: string[];
  metrics: {
    likes: number;
    comments: number;
    reposts: number;
  };
  link: string;
  featuredStat?: {
    label: string;
    value: string;
  };
}
