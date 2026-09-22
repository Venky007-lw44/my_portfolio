export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  accentColor: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  techStack: string[];
  status: 'Completed' | 'In Progress';
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveDemoAvailable?: boolean;
}

export interface RoadmapMilestone {
  id: string;
  phase: string;
  title: string;
  status: 'In Progress' | 'Active Focus' | 'Upcoming';
  description: string;
  topics: string[];
  progressPercent: number;
}
