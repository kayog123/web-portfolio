"use client";

import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { stats } from "@/app/lib/const";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Crafting Digital Experiences
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&lsquo;m a passionate fullstack developer with over 4 years of
                experience building scalable web applications. My journey
                started with curiosity about how websites work, and it has
                evolved into a deep love for creating elegant solutions to
                complex problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud
                architecture, and creating seamless user experiences. Whether
                it&lsquo;s a simple landing page or a complex enterprise
                application, I bring the same level of dedication and attention
                to detail to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&lsquo;m not coding, you&lsquo;ll find me exploring new
                technologies, contributing to open-source projects, or mentoring
                aspiring developers. I believe in the power of technology to
                transform lives and businesses.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="p-6 text-center bg-card/50 border-border hover:bg-card/80 transition-colors group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <stat.icon className="text-primary" size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="text-2xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
