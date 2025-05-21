import React from "react";
import { Code, Globe, Server } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { WORK_EXPERIENCE } from "../_lib/const";
import { WorkExperience } from "../_lib/types";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Im a passionate full stack developer with a focus on creating
            elegant, efficient, and user-friendly web applications. With years
            of experience in both frontend and backend technologies, I bring
            ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <SpecialtyCard
            icon={<Code size={32} />}
            title="Frontend Development"
            description="I craft responsive and interactive user interfaces using modern frameworks like React and Next.js, with a strong emphasis on performance and accessibility."
            technologies={[
              "React",
              "Next.js",
              "React Native",
              "TypeScript",
              "Tailwind CSS",
              "HTML5",
            ]}
          />

          {/* Backend Development */}
          <SpecialtyCard
            icon={<Server size={32} />}
            title="Backend Development"
            description="I build robust server-side applications and APIs using Node.js and other backend technologies, ensuring scalability and security."
            technologies={[
              "Node.js",
              "PostgreSQL",
              "MySQL",
              "NoSQL",
              "Drizzle ORM",
              "Prisma",
              "GraphQL",
              "PHP",
            ]}
          />

          {/* Full Stack Solutions */}
          <SpecialtyCard
            icon={<Globe size={32} />}
            title="Full Stack Solutions"
            description="I specialize in end-to-end development, from database design to deployment, creating cohesive and performant web applications."
            technologies={["CI/CD", "Docker", "AWS", "Firebase"]}
          />
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-3">My Journey</h3>
              <p className="text-muted-foreground">
                From writing my first lines of code to building complex
                applications for clients around the world.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-8">
                {WORK_EXPERIENCE.map(
                  (experience: WorkExperience, index: number) => (
                    <TimelineItem
                      key={index}
                      year={experience.year}
                      title={experience.title}
                      company={experience.company}
                      description={experience.description}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

const SpecialtyCard = ({
  icon,
  title,
  description,
  technologies,
}: SpecialtyCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-secondary px-3 py-1 rounded-full text-sm text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem = ({
  year,
  title,
  company,
  description,
}: TimelineItemProps) => (
  <div className="relative pl-8 md:pl-10 pb-2">
    <div className="absolute top-0 left-0 h-full w-px bg-border"></div>
    <div className="absolute top-1 left-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
    <div className="text-sm text-muted-foreground mb-1">{year}</div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <div className="text-muted-foreground">{company}</div>
    <p className="mt-1">{description}</p>
  </div>
);

export default AboutSection;
