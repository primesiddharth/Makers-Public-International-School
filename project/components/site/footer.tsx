import Link from 'next/link';
import { Heart, GraduationCap, MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { school, navLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 text-gray-300">
      {/* Main footer */}
      <div className="container-school py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 text-white shadow">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <span className="block font-serif text-lg font-bold text-white">
                  Makers Public
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-wider text-gold-400">
                  International School
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {school.tagline}. A premium K-12 institution nurturing global
              citizens of tomorrow with Indian values and world-class education
              in the heart of Srinagar.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: school.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: school.social.instagram, label: 'Instagram' },
                { icon: Youtube, href: school.social.youtube, label: 'YouTube' },
                { icon: Twitter, href: school.social.twitter, label: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-800/60 text-gray-300 transition-colors hover:bg-gold-600 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Academic Programs
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Pre-Primary (Nursery – UKG)</li>
              <li>Primary (Class 1 – 5)</li>
              <li>Middle School (Class 6 – 8)</li>
              <li>Senior Secondary (Class 9 – 12)</li>
              <li>Co-curricular & Sports</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Reach Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{school.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a href={`tel:${school.phone}`} className="hover:text-gold-400">
                  {school.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a href={`mailto:${school.email}`} className="hover:text-gold-400">
                  {school.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{school.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Credit line */}
      <div className="border-t border-maroon-800/60 py-6">
        <div className="container-school flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-gray-400">
            &copy; {year} Makers Public International School. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-gray-400">
            Made with
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-heart-beat" />
            by Creyotech
          </p>
        </div>
      </div>
    </footer>
  );
}
