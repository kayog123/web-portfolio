"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: Word[];
  className?: string;
}

export const TypewriterEffect = ({
  words,
  className,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const targetText = word.text;

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < targetText.length) {
            setCurrentText(targetText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={`inline-flex flex-wrap gap-2 ${className}`}>
      {words.map((word, index) => {
        if (index < currentWordIndex) {
          return (
            <motion.span
              key={`${word.text}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={word.className}
            >
              {word.text}
            </motion.span>
          );
        } else if (index === currentWordIndex) {
          return (
            <motion.span
              key={`${word.text}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={word.className}
            >
              {currentText}
              {/* <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-full bg-primary ml-1 rounded-full"
              /> */}
            </motion.span>
          );
        }
        return null;
      })}
    </div>
  );
};
