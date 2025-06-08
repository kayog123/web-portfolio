"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Code, Terminal } from "lucide-react";
import { TypewriterEffect } from "../general/TypewriterEffect";
import { Button } from "../../ui/button";
import {
  codeLines,
  containerVariants,
  itemVariants,
  words,
} from "@/app/lib/const";

const HeroSection = () => {
  const codeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 1,
        duration: 0.5,
      },
    }),
  };
  async function handleDownload() {
    const response = await fetch("/api/download");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jovanni-jungco-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Code Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <Code size={16} className="text-primary" />
            <span className="text-muted-foreground font-medium">
              developer.js
            </span>
          </div>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={codeVariants}
              initial="hidden"
              animate="visible"
              className="text-xs text-muted-foreground mb-1 font-mono"
            >
              {line}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-20 right-10 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg p-4 w-80"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
            <Terminal size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Terminal
            </span>
            <div className="flex gap-1 ml-auto">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-sm">
            <div className="text-green-400 mb-1 font-medium">$ npm run dev</div>
            <div className="text-muted-foreground mb-1">
              Starting development server...
            </div>
            <div className="text-blue-400 mb-1 font-medium">
              ✓ Ready on http://localhost:3000
            </div>
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-primary inline-block"
            >
              _
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center   z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-medium tracking-wide"
          >
            Hello, I&lsquo;m Jovanni Jungco
          </motion.h2>
          <div className="heading-xl text-balance">
            <TypewriterEffect words={words} />
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
        >
          I craft digital experiences through code, bringing ideas to life with
          modern web technologies. Specializing in React, Node.js, and cloud
          architecture.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide"
            asChild
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <motion.div
                className="ml-2"
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </motion.a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold tracking-wide"
            asChild
            onClick={handleDownload}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} className="mr-2" />
              Download CV
            </motion.a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
