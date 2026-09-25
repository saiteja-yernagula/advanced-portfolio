import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  tiltEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = '#00f0ff',
  tiltEffect = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 10 degrees tilt
    const rotX = -((y - centerY) / centerY) * 9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);
    setSpotlightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`glass-glow-card relative rounded-2xl bg-[#090d18]/90 backdrop-blur-2xl border border-slate-800/80 p-6 transition-colors duration-300 group overflow-hidden shadow-glass-3d ${
        isHovered ? 'border-cyan-500/50 shadow-neon-cyan' : ''
      } ${className}`}
    >
      {/* Dynamic Cursor Spotlight Following Reflection */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 0.25 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Top Neon Ambient Flare */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full blur-2xl opacity-15 pointer-events-none group-hover:opacity-35 transition-opacity duration-500"
        style={{ backgroundColor: glowColor }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
