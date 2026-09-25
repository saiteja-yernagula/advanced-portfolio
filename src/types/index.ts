export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mentorship';
  highlight?: boolean;
  tagline?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  badge: string;
  type: 'current' | 'past';
  highlights: string[];
  skills: string[];
  metrics?: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  techStack: string[];
  description: string;
  keyFeatures: string[];
  roleDescription: string[];
  liveLink?: string;
  githubLink?: string;
  metrics: string[];
  isFeatured?: boolean;
  color: string;
}

export interface ImpactStat {
  id: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
  color: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
