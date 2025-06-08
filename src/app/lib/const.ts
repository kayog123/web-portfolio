import {
  Github,
  Linkedin,
  Mail,
  Award,
  Coffee,
  Code,
  Users,
  Phone,
  MapPin,
} from "lucide-react";
import {
  NavItemsProp,
  SkillCategoryProps,
  SocialLinksProp,
  StatsProps,
} from "./type";

export const navItems: NavItemsProp[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLinksProp[] = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export const codeLines: string[] = [
  "const developer = {",
  "  name: 'Jovanni Jungco',",
  "  nickname: 'Kayog',",
  "  skills: ['React', 'Node.js', 'AWS', 'Prisma', 'Websocket', 'Drizzle ORM','Prisma', 'MySQL'],",
  "  passion: 'coding',",
  "  status: 'Turn your ideas into reality'",
  "};",
];

export const words = [
  { text: "I'm" },
  { text: "a" },
  { text: "Fullstack", className: "text-primary" },
  { text: "Developer", className: "text-primary" },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const stats: StatsProps[] = [
  { icon: Code, label: "Projects Completed", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "20+" },
  { icon: Award, label: "Years Experience", value: "4+" },
  { icon: Coffee, label: "Cups of Coffee", value: "2000+" },
];

export const skillCategories: SkillCategoryProps[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: "/stacks/reactjs.png",
      },
      {
        name: "TypeScript",
        icon: "/stacks/typescript.png",
      },
      {
        name: "Laravel",
        icon: "/stacks/laravel.svg",
      },
      {
        name: "Javascript",
        icon: "/stacks/javascript.png",
      },
      {
        name: "Redux",
        icon: "stacks/redux.svg",
      },
      {
        name: "HTML",
        icon: "/stacks/html5.png",
      },
      {
        name: "CSS",
        icon: "/stacks/css.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "/stacks/nodejs.svg",
      },
      {
        name: "PHP",
        icon: "/stacks/php.svg",
      },
      {
        name: "Laravel",
        icon: "/stacks/laravel.svg",
      },
      {
        name: "Code Igniter",
        icon: "/stacks/codeigniter.svg",
      },
      {
        name: "PostgresSQL",
        icon: "/stacks/postgresql.svg",
      },
      {
        name: "MySQL",
        icon: "/stacks/mysql.svg",
      },
      {
        name: "AWS DynamoDB",
        icon: "/stacks/aws-dynamodb.svg",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Postman",
        icon: "/stacks/postman.svg",
      },
      {
        name: "PgAdmin 4",
        icon: "/stacks/pgadmin4.jpg",
      },
      {
        name: "Visual Studio Code",
        icon: "/stacks/vs-code.svg",
      },
      {
        name: "MySQL Workbench",
        icon: "/stacks/workbench.png",
      },
      {
        name: "Drizzle ORM",
        icon: "/stacks/drizzle-orm.png",
      },
      {
        name: "Figma",
        icon: "/stacks/figma.svg",
      },
    ],
  },
];

export const projects = [
  {
    title: "Set Dialer - Real Estate Agent Dialer and Lead Management System",
    description:
      "Our web app empowers real estate agents with an auto-dialer that calls leads from a CSV upload and includes in-call note-taking and lead management tools to streamline your workflow.",
    image: "/project/set-dialer.png",
    tech: ["NextJS", "TailwindCSS"],
    liveUrl: "https://web-portfolio-five-black.vercel.app/",
    githubUrl: "https://github.com/kayog123/web-portfolio",
  },
  {
    title: "Filipina Dating App",
    description:
      "A vibrant platform connecting Filipina singles with German men for meaningful relationships, featuring seamless chat, media uploads, and secure Stripe subscriptions to foster growth and connection.",
    image: "/project/filipina-dream.png",
    tech: [
      "T3 Stack",
      "Clerk",
      "Planetscale (MySQL)",
      "Paypal",
      "AWS",
      "TailwindCSS",
      "Drizzle ORM",
      "Next.js",
      "React Query",
    ],
    liveUrl: "https://filipinadreamgirl-lime.vercel.app/en",
    githubUrl: "#",
  },
  {
    title: "Nexus ODM",
    description:
      "A dynamic platform connecting influencers and businesses to collaborate, grow their brands, and monetize opportunities seamlessly.",
    image: "/project/nexus-odm.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Xata DB(PostgressSQL)",
      "React Query",
      "AWS",
      "PusherJS",
    ],
    liveUrl: "https://nexus-odm.com/",
    githubUrl: "#",
  },
  {
    title: "Web Maintenance for Church",
    description:
      "Update landing page, add download option of churche files and add blog page.",
    image: "/project/cttp.png",
    tech: ["React", "Python", "FastAPI", "OpenAI", "Docker"],
    liveUrl: "https://www.cttp.org.ph/",
    githubUrl: "#",
  },
  {
    title: "Livelihood Mobile Application",
    description:
      "A mobile app empowering Tagbilaranons to effortlessly sell local products to tourists and locals, boosting livelihoods with a user-friendly marketplace.",
    image: "/project/livelihood.png",
    tech: ["Vue.js", "D3.js", "Node.js", "Redis", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Behold Bohol Trip Mobile App",
    description:
      "A mobile app designed to help tourists book tricycles, motorcycles, and SUVs at fair prices, preventing overpricing, while enabling drivers to easily secure bookings from tourists.",
    image: "/project/bbtrip.png",
    tech: ["React Native", "Firebase", "Node.js", "JWT", "Plaid API"],
    liveUrl:
      "https://drive.google.com/file/d/1XpIY8oJPg2ZERlCYvEXvgEdC-_MP-flu/view?usp=sharing",
    githubUrl: "#",
  },
  {
    title: "Love Bohol Portal",
    description:
      "This is used to manage business information that will show on the Skyride Travel Application",
    image: "/project/love-bohol.png",
    tech: ["Next.js", "AWS DynamoDB", "Algolia", "AWS S3", "MUI"],
    liveUrl:
      "https://drive.google.com/file/d/1XpIY8oJPg2ZERlCYvEXvgEdC-_MP-flu/view?usp=sharing",
    githubUrl: "#",
  },
  {
    title: "Set Dialer - Real Estate Agent Dialer and Lead Management System",
    description:
      "Our web app empowers real estate agents with an auto-dialer that calls leads from a CSV upload and includes in-call note-taking and lead management tools to streamline your workflow.",
    image: "/project/set-dialer.png",
    tech: ["AWS", "NextJS", "GraphQL", "NoSQL", "AWS Amplify", "Twillio"],
    liveUrl: "https://www.beholdbohol.com/",
    githubUrl: "#",
  },
];

export const PHONE: string = "+63 (951) 573-5250";
export const EMAIL: string = "jovannijungco27@gmail.com";
export const ADDRESS: string = "Bohol, PH";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: "mailto:alex@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: ADDRESS,
    href: "#",
  },
];
