import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]',
            light ? 'text-gold-300' : 'text-gold-700'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl font-bold leading-tight md:text-4xl',
          light ? 'text-white' : 'text-maroon-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          'mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-600',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
