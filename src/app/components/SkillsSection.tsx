import React from "react";
import { STACK_LIST, TOOL_LIST } from "../_lib/const";
import { StackItem } from "../_lib/types";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/50 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Tools and Stacks
          </h2>
          <p className="text-lg text-muted-foreground">
            Ive acquired a diverse set of skills throughout my journey as a
            developer. Heres an overview of my technical expertise:
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div className=" ">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="h-1 w-8 bg-primary rounded mr-3"></span>
              My Tech Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 lg:grid-cols-6 gap-4">
              {STACK_LIST.map((stack: StackItem, index: number) => (
                // />
                <StackItemContainer
                  key={index}
                  name={stack.name}
                  icon={stack.icon}
                />
              ))}
            </div>
          </div>

          <div className="">
            {/* Backend Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="h-1 w-8 bg-accent rounded mr-3"></span>
                Development Tools
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 lg:grid-cols-6 gap-4">
                {TOOL_LIST.map((stack: StackItem, index: number) => (
                  <StackItemContainer
                    key={index}
                    name={stack.name}
                    icon={stack.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center">
            Other Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs",
              "Responsive Design",
              "Firebase",
              "Performance Optimization",
              "Agile/Scrum",
              "WordPress",
              "Vercel",
              "Netlify",
              "Heroku",
              "Authentication",
              "Clerk.dev",
              "Payment Integration",
              "Web Accessibility",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-secondary px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const SkillItem = ({ name, level }: SkillItemProps) => {
//   return (
//     <div className="animate-slide-up">
//       <div className="flex justify-between mb-1">
//         <span className="font-medium">{name}</span>
//         <span className="text-muted-foreground text-sm">{level}%</span>
//       </div>
//       <Progress value={level} className="h-2" />
//     </div>
//   );
// };

const StackItemContainer = ({ name, icon }: StackItem) => {
  return (
    <div className="flex items-center gap-2 flex-col">
      <Image
        src={icon}
        alt={name}
        className="w-15 h-15  "
        width={50}
        height={50}
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillsSection;
