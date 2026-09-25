import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  color?: string;
}

export const GsapCounter: React.FC<GsapCounterProps> = ({
  target,
  suffix = '',
  duration = 2.2,
  color = '#00f0ff',
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const countObj = { val: 0 };

    const anim = gsap.to(countObj, {
      val: target,
      duration: duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (el) {
          el.innerText = Math.floor(countObj.val).toLocaleString();
        }
      },
    });

    return () => {
      anim.kill();
    };
  }, [target, duration]);

  return (
    <span className="font-mono font-black" style={{ color }}>
      <span ref={numberRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
};
