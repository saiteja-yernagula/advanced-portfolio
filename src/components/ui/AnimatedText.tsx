import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: 'cyan' | 'amber' | 'emerald' | 'none';
  stagger?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  gradient = 'none',
  stagger = 0.03,
}) => {
  const words = text.split(' ');

  const gradientClass =
    gradient === 'cyan'
      ? 'text-gradient-cyan'
      : gradient === 'amber'
      ? 'text-gradient-amber'
      : gradient === 'emerald'
      ? 'text-gradient-emerald'
      : '';

  return (
    <span className={`inline-block ${gradientClass} ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 15, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: (wordIndex * 5 + charIndex) * stagger,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};
