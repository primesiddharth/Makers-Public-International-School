'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { testimonials } from '@/lib/data';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [auto, next]);

  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl md:p-12"
        onMouseEnter={() => setAuto(false)}
        onMouseLeave={() => setAuto(true)}
      >
        <Quote className="absolute right-8 top-8 h-16 w-16 text-maroon-100" />

        <div className="relative">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                'transition-all duration-500',
                i === current
                  ? 'block opacity-100'
                  : 'hidden opacity-0'
              )}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <blockquote className="font-serif text-xl leading-relaxed text-gray-800 md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-maroon-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === current
                    ? 'w-8 bg-maroon-700'
                    : 'w-2 bg-maroon-200 hover:bg-maroon-300'
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon-200 text-maroon-700 transition-colors hover:bg-maroon-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon-200 text-maroon-700 transition-colors hover:bg-maroon-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
