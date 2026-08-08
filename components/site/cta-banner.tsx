import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CtaBanner({
  title = 'Admissions Open for 2026-27 — Give Your Child the Gift of Excellence',
  description = 'Limited seats available from Nursery to Class 12. Book a campus visit today and experience the Makers Public difference first-hand.',
  primaryLabel = 'Apply for Admission',
  primaryHref = '/admissions',
  secondaryLabel = 'Book a Campus Visit',
  secondaryHref = '/contact',
  className,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 py-16 md:py-20',
        className
      )}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-500 blur-3xl" />
      </div>

      <div className="container-school relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            Admissions Open
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:from-gold-500 hover:to-gold-700"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
