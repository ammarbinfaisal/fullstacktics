// Basic interfaces
export interface TechStack {
  name: string;
  version?: string;
  description?: string;
}

export interface PerformanceMetric {
  metric: string;
  value: string;
  description: string;
}

export interface Testimonials {
  comments: string[];
}

// Technical details interface that handles both string[] and TechStack[]
export interface TechnicalDetails {
  technologies?: string[];
  performanceOptimization?: string[];
  infrastructure?: string[];
  monitoring?: string[];
  security?: string[];
  optimizationTechniques?: string[];
  tools?: string[];
  metrics?: string[];
  features?: string[];
}

// Main service data interface
export interface ServiceData {
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits?: string[];
  useCases?: string[];
  experience?: string;
  performanceMetrics?: PerformanceMetric[];
  testimonials?: Testimonials;
  technicalDetails: TechnicalDetails;
}

// Services object type
export interface Services {
  [key: string]: ServiceData;
  'saas-development': ServiceData;
  'performance-optimization': ServiceData;
  'infrastructure': ServiceData;
}