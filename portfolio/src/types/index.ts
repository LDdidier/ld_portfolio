export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'design';
  proficiency: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}