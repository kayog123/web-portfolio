"use client";

import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import Image from "next/image";
import { skillCategories } from "@/app/lib/const";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="p-6 h-full bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-semibold mb-8 text-center text-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-background/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className={`  mb-3 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ y: -5 }}
                      >
                        <Image
                          src={skill.icon}
                          width={50}
                          height={50}
                          alt={skill.name}
                        />
                      </motion.div>
                      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
