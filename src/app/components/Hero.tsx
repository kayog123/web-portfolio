import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { HERO_LINKS } from "../_lib/const";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-secondary/50 "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        {/* Hero Text Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="h-1 w-10 bg-primary rounded"></div>
            <p className="text-primary font-medium">Full Stack Developer</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Crafting <span className="highlight">digital experiences</span> with
            code
          </h1>

          <p className="text-lg text-muted-foreground md:max-w-md">
            I build modern, responsive web applications with cutting-edge
            technologies that deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4   justify-center sm:justify-start">
            {HERO_LINKS.map((item, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.links}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icons size={24} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center animate-fade-in animation-delay-100">
          <div className="relative w-full max-w-lg">
            {/* Image frame with subtle animation */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl -rotate-3"></div>
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl rotate-3"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                alt="Developer Workspace"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
