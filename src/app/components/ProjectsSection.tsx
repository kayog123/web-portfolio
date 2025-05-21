import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { projects } from "../_lib/const";
import { Project } from "../_lib/types";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work, showcasing my expertise in building
            web applications with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div> */}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="overflow-hidden h-56 bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={500}
          height={500}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className={`${!project.isVideo && "cursor-pointer"}`}
          >
            <a href={project.codeLink} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demoLink} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {project.isVideo ? "Watch Demo" : "Live Demo"}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
