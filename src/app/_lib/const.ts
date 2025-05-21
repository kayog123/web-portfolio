import {
  NavMenuItem,
  Project,
  SkillItemProps,
  StackItem,
  WorkExperience,
} from "./types";
import { Github, Linkedin, Facebook } from "lucide-react";

export const menuItems: NavMenuItem[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const PHONE: string = "+63 (951) 573-5250";
export const EMAIL: string = "jovannijungco27@gmail.com";
export const ADDRESS: string = "Bohol, PH";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    year: "2020 - Present",
    title: "Full Stack Developer",
    company: "Skyride Web and Mobile App Solutions",
    description:
      "Maintain and add new features on different websites using ReactJS, NextJS, NodeJS, Amplify, Laravel, MySQL, DynamoDB, Lamda, Electron and etc.",
  },
  {
    year: "2018 - 2019",
    title: "Full Stack Developer",
    company: "Alturas Group of Companies",
    description:
      "I was assigned to build an application for HR Department. We built software for their franchise store employee. We used PHP, MySQL, JQUERY to build the project with Code Igniter as PHP framework.",
  },
  {
    year: "2017",
    title: "Graphic Designer (Intern)",
    company: "Tarshare",
    description:
      "Create amazing social media designs and layouts for tarpaulins and banners using Adobe Photoshop which was used for the marketing of the software.",
  },
];

export const SKILLS: SkillItemProps[] = [
  // Frontend Skills
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "React / React Native", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "HTML / CSS / JavaScript", level: 98, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },

  // Backend Skills
  { name: "Node.js", level: 92, category: "backend" },
  { name: "MySQL", level: 88, category: "backend" },
  { name: "PostgresSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },

  // Other Skills
  { name: "Git & CI/CD", level: 90, category: "other" },
  { name: "Docker", level: 40, category: "other" },
  { name: "AWS", level: 82, category: "other" },
  { name: "Vercel", level: 82, category: "other" },
  { name: "UI/UX Design", level: 75, category: "other" },
];

export const INSTAGRAM_ACCOUNT_LINK =
  "https://www.instagram.com/jovannijungco/";
export const LINKEDIN_ACCOUNT_LINK =
  "https://www.linkedin.com/in/jovanni-jungco-31a819166/";
export const GITHUB_ACCOUNT_LINK = "https://github.com/kayog123";
export const FACEBOOK_PROFILE_LINK =
  "https://www.facebook.com/jovanni.jungco.3";
export const projects: Project[] = [
  {
    id: 1,
    title: "Filipina Dating App",
    description:
      "A vibrant platform connecting Filipina singles with German men for meaningful relationships, featuring seamless chat, media uploads, and secure Stripe subscriptions to foster growth and connection.",
    image: "/project/filipina-dream.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Paypal Payment Integration",
      "AWS Websockets",
      "AWS Lamda",
      "Realtime Messages",
    ],
    demoLink: "#",
    codeLink: "#",
    isCode: false,
  },
  {
    id: 2,
    title: "Nexus ODM",
    description:
      "A dynamic platform connecting influencers and businesses to collaborate, grow their brands, and monetize opportunities seamlessly.",
    image: "/project/nexus-odm.png",
    tags: [
      "NextJS",
      "Node.js",
      "PostgreSQL",
      "PusherJS",
      "AWS",
      "Drizzle ORM",
      "Post Affiliate Pro Integration",
    ],
    demoLink: "https://nexus-odm.com/",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Web Maintenance for Church",
    description:
      "Update landing page, add download option of churche files and add blog page.",
    image: "/project/cttp.png",
    tags: ["NextJS", "Redux", "Azure", "Onedrive API"],
    demoLink: "https://www.cttp.org.ph/",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Livelihood Mobile App",
    description:
      "A mobile app empowering Tagbilaranons to effortlessly sell local products to tourists and locals, boosting livelihoods with a user-friendly marketplace.",
    image: "/project/livelihood.png",
    tags: [
      "TypeScript",
      "React",
      "React Native",
      "PusherJS",
      "PlanetScale(MySQL)",
      "AWS",
      "Algolia",
    ],
    demoLink:
      "https://drive.google.com/file/d/1BrJ6ujcbphltkupJ5bK3f3NrlDQFhDam/view?usp=sharing",
    codeLink: "#",
    isVideo: true,
  },
  {
    id: 5,
    title: "BBTrip Mobile App",
    description:
      "A mobile app designed to help tourists book tricycles, motorcycles, and SUVs at fair prices, preventing overpricing, while enabling drivers to easily secure bookings from tourists.",
    image: "/project/bbtrip.png",
    tags: [
      "TypeScript",
      "React Native",
      "PusherJS",
      "PlanetScale(MySQL)",
      "AWS",
    ],
    demoLink:
      "https://drive.google.com/file/d/1XpIY8oJPg2ZERlCYvEXvgEdC-_MP-flu/view?usp=sharing",
    codeLink: "#",
    isVideo: true,
  },
  {
    id: 6,
    title: "Set Dialer - Real Estate Agent Dialer and Lead Management System",
    description:
      "Our web app empowers real estate agents with an auto-dialer that calls leads from a CSV upload and includes in-call note-taking and lead management tools to streamline your workflow.",
    image: "/project/set-dialer.png",
    tags: [
      "TypeScript",
      "React Native",
      "PusherJS",
      "PlanetScale(MySQL)",
      "AWS",
      "Twillio",
      "DynamoDB",
    ],
    demoLink:
      "https://drive.google.com/file/d/16ILMzy6uqzarXAx3DklfQ1JyMqha6ypN/view?usp=sharing",
    codeLink: "#",
    isVideo: true,
  },
];
interface HeroLinksProp {
  name: string;
  links: string;
  icons: React.ComponentType<any>;
}
export const HERO_LINKS: HeroLinksProp[] = [
  {
    name: "Github",
    links: GITHUB_ACCOUNT_LINK,
    icons: Github,
  },
  {
    name: "Linked In",
    links: LINKEDIN_ACCOUNT_LINK,
    icons: Linkedin,
  },
  {
    name: "Facebook",
    links: FACEBOOK_PROFILE_LINK,
    icons: Facebook,
  },
];

export const STACK_LIST: StackItem[] = [
  {
    name: "HTML",
    icon: "/stack/html5.png",
  },

  {
    name: "ReactJS",
    icon: "/stack/reactjs.png",
  },
  {
    name: "Next.js",
    icon: "/stack/nextjs.svg",
  },
  {
    name: "TypeScript",
    icon: "/stack/typescript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/stack/tailwindcss.svg",
  },
  {
    name: "CSS",
    icon: "/stack/css.png",
  },
  {
    name: "JavaScript",
    icon: "/stack/javascript.png",
  },
  {
    name: "Redux",
    icon: "/stack/redux.svg",
  },
  {
    name: "Node.js",
    icon: "/stack/nodejs.svg",
  },
  {
    name: "MySQL",
    icon: "/stack/mysql.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/stack/postgresql.svg",
  },
  {
    name: "GraphQL",
    icon: "/stack/graphql.svg",
  },
  {
    name: "PHP",
    icon: "/stack/php.svg",
  },
  {
    name: "Firebase",
    icon: "/stack/firebase.svg",
  },
];

export const TOOL_LIST: StackItem[] = [
  {
    name: "VS Code",
    icon: "/stack/vs-code.svg",
  },
  {
    name: "Git",
    icon: "/stack/git.svg",
  },
  {
    name: "GitHub",
    icon: "/stack/github.svg",
  },
  {
    name: "Gitlab",
    icon: "/stack/gitlab.svg",
  },
  {
    name: "Bitbucket",
    icon: "/stack/bitbucket.svg",
  },
  {
    name: "Figma",
    icon: "/stack/figma.svg",
  },
  {
    name: "Adobe Photoshop",
    icon: "/stack/photoshop.svg",
  },
  {
    name: "PgAdmin",
    icon: "/stack/pgadmin4.jpg",
  },
  {
    name: "Postman",
    icon: "/stack/postman.svg",
  },
  {
    name: "MySQL Workbench",
    icon: "/stack/workbench.png",
  },
];
