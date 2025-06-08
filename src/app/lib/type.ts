import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavItemsProp {
  name: string;
  href: string;
}
export interface SocialLinksProp {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
}

export interface StatsProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: string;
}

export interface SkillCategoryProps {
  title: string;
  skills: SkillItemProps[];
}

export interface SkillItemProps {
  name: string;
  icon: string;
}
