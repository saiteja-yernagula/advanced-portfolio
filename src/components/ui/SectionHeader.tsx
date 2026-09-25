import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedText?: string;
  subtitle: string;
  centered?: boolean;
  color?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  centered = true,
  color = '#00f0ff',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      {/* Cyber Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4 bg-[#0e1424]/90 border backdrop-blur-xl shadow-lg ${
          centered ? 'mx-auto' : ''
        }`}
        style={{ color: color, borderColor: `${color}40`, boxShadow: `0 0 20px ${color}25` }}
      >
        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{badge}</span>
      </div>

      {/* Main Title with Space Grotesk styling */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-display">
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient-cyan">
            {highlightedText}
          </span>
        )}
      </h2>

      {/* Subtitle with Outfit font */}
      <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Glowing Neon Line Accent */}
      <div className={`mt-5 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
      </div>
    </motion.div>
  );
};
