import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb: string;
  image: string;
}

export default function PageHero({
  title,
  description,
  breadcrumb,
  image,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[42vh] min-h-[320px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container-school relative z-10 text-center">
        <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-gold-200">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
