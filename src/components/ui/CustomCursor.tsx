import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follower
  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Track clickable hover elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest('button, a, input, select, textarea, [role="button"], .glass-glow-card, .interactive-card');
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Sharp Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed w-2 h-2 rounded-full pointer-events-none z-50 transition-colors duration-200 ${
          isHovered ? 'bg-cyan-300 scale-150 shadow-[0_0_12px_#00f0ff]' : 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]'
        }`}
      />

      {/* Outer Smooth Lagging Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed w-9 h-9 rounded-full border border-cyan-400/40 pointer-events-none z-40 backdrop-blur-[0.5px] shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center justify-center"
      >
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"
          />
        )}
      </motion.div>
    </div>
  );
};
