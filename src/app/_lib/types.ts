export interface NavMenuItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SkillItemProps {
  name: string;
  level: number;
  category?: string;
}

export interface WorkExperience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  isVideo?: boolean;
  isCode?: boolean;
}

export interface StackItem {
  name: string;
  icon: string;
}
