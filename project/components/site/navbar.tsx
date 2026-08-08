'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, school } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      {/* Top bar */}
      <div className="hidden bg-maroon-900 text-white md:block">
        <div className="container-school flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>{school.phone}</span>
            <span className="mx-2 text-gold-400">|</span>
            <span>{school.address}</span>
          </p>
          <p className="text-gold-300">Admissions Open 2026-27 — Limited Seats!</p>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-school flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-white shadow-md">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-lg font-bold text-maroon-900">
              Makers Public
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-gold-700">
              International School
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-maroon-50 text-maroon-800'
                      : 'text-gray-700 hover:bg-maroon-50/60 hover:text-maroon-700'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/admissions"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:from-gold-600 hover:to-gold-700"
          >
            Apply for Admission
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-maroon-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="container-school space-y-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block rounded-md px-4 py-3 text-sm font-medium transition-colors',
                    active
                      ? 'bg-maroon-50 text-maroon-800'
                      : 'text-gray-700 hover:bg-maroon-50/60'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/admissions"
              className="mt-3 block rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
