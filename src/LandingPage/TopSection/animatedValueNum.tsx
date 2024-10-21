import React, { useEffect, useRef } from 'react';
import './animatedValueNum.css'; // Create a separate CSS file for styles

interface AnimatedValueProps {
  start: number;
  end: number;
  duration: number;
}

const AnimatedValue: React.FC<AnimatedValueProps> = ({ start, end, duration }) => {
  const valueRef = useRef<HTMLDivElement | null>(null);

  const animateValue = (obj: HTMLElement, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (valueRef.current) {
      animateValue(valueRef.current, start, end, duration);
    }
  }, [start, end, duration]);

  return <div id="value" ref={valueRef} className="animated-value count-up"></div>;
};

export default AnimatedValue;
