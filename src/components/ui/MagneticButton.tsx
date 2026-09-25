import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 35,
  onClick,
  href,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: (x / rect.width) * strength,
        y: (y / rect.height) * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.2, 0.4)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  if (href) {
    return (
      <div ref={buttonRef} className="inline-block">
        <a href={href} onClick={onClick} className={className}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div ref={buttonRef} className="inline-block" onClick={onClick}>
      <div className={className}>{children}</div>
    </div>
  );
};
