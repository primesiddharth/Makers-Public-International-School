'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
  light?: boolean;
}

export default function StatsCounter({
  value,
  label,
  suffix = '',
  duration = 2000,
  className,
  light = false,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div
        className={cn(
          'font-serif text-4xl font-bold md:text-5xl',
          light ? 'text-white' : 'text-maroon-800'
        )}
      >
        {count.toLocaleString('en-IN')}
        <span className="text-gold-500">{suffix}</span>
      </div>
      <p
        className={cn(
          'mt-2 text-sm font-medium uppercase tracking-wide',
          light ? 'text-gold-200' : 'text-gray-600'
        )}
      >
        {label}
      </p>
    </div>
  );
}
