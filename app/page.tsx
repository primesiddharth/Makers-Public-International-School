import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/site/section-heading';
import StatsCounter from '@/components/site/stats-counter';
import TestimonialSlider from '@/components/site/testimonial-slider';
import CtaBanner from '@/components/site/cta-banner';
import Icon from '@/components/site/icon';
import { school, stats, whyChooseUs, programs, facilities, testimonials, events } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/20200756/pexels-photo-20200756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Makers Public International School campus building in Srinagar"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-school relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-200 backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              Admissions Open 2026-27
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Nurturing Your Child&apos;s <br />
              <span className="text-gradient-gold">Bright Future</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
              {school.tagline}. A premium K-12 international school in the
              heart of Srinagar, blending Indian values with world-class
              education.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:from-gold-500 hover:to-gold-700"
              >
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/campus-life"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Campus Life
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400" />
                {school.address}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-400" />
                {school.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-maroon-900 py-12">
        <div className="container-school grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatsCounter
              key={s.label}
              value={s.value}
              label={s.label}
              suffix={s.suffix}
              light
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A School That Feels Like Family"
            description="At Makers Public, we combine the warmth of Indian family values with the standards of international education — so your child grows in confidence, character, and capability."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-maroon-50 text-maroon-700 transition-colors group-hover:bg-maroon-700 group-hover:text-white">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-maroon-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-gradient-to-b from-gold-50/40 to-white py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Academic Programs"
            title="Nursery to Class 12 — A Journey of Excellence"
            description="Every stage of your child's growth is carefully designed to build strong foundations, curiosity, and a lifelong love for learning."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white">
                    {p.grades}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl font-bold text-maroon-900">
                    {p.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {p.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-maroon-50 px-3 py-1 text-xs font-medium text-maroon-700"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/academics"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-maroon-700 hover:text-maroon-900"
            >
              View Full Academic Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-maroon-950 py-20 text-white">
        <div className="container-school">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative mx-auto max-w-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/6981004/pexels-photo-6981004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Dr. Anjali Razdan, Principal of Makers Public International School"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-5 -right-5 rounded-xl bg-gold-500 px-6 py-4 shadow-lg">
                  <p className="font-serif text-sm font-bold text-white">
                    Dr. Anjali Razdan
                  </p>
                  <p className="text-xs text-gold-100">Principal</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Principal&apos;s Message
              </span>
              <Quote className="mb-4 h-10 w-10 text-gold-500" />
              <blockquote className="font-serif text-xl leading-relaxed text-gray-100 md:text-2xl">
                &ldquo;At Makers Public, we believe every child is unique and
                gifted in their own way. Our role as educators is to gently
                unfold those gifts with love, discipline, and the right
                guidance. As Dr. Sarvepalli Radhakrishnan said, &lsquo;Teachers
                should be the best minds in the country.&rsquo; We strive to
                live that every day.&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-gold-300">
                Dr. Anjali Razdan
              </p>
              <p className="text-sm text-gray-400">
                Principal — M.Ed., Ph.D. (Education), 32 years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="World-Class Infrastructure"
            title="Facilities That Inspire Learning"
            description="From smart classrooms to science labs, libraries to sports grounds — every corner of our campus is designed to help your child thrive."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-bold text-maroon-900">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-maroon-50/40 to-white py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Parents & Students Speak"
            title="Loved by Families Across Srinagar"
            description="The trust of our parents is our greatest achievement. Here is what they have to say about their Makers Public experience."
          />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Events & Achievements */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Events & Achievements"
            title="Celebrating Our Children's Talents"
            description="From annual functions to science exhibitions, sports days to award ceremonies — there is always something exciting happening at Makers Public."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <div
                key={e.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-maroon-800/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {e.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-700">
                    {e.date}
                  </p>
                  <h3 className="mb-2 font-serif text-lg font-bold text-maroon-900">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
