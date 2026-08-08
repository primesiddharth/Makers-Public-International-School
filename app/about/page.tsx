import type { Metadata } from 'next';
import PageHero from '@/components/site/page-hero';
import SectionHeading from '@/components/site/section-heading';
import CtaBanner from '@/components/site/cta-banner';
import Icon from '@/components/site/icon';
import { leadership, management, values, school } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story, mission, vision, and values of Makers Public International School, Srinagar — where Indian Sanskar meets world-class international education.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our School"
        breadcrumb="About Us"
        description="Two decades of nurturing global citizens of tomorrow, rooted in Indian values and powered by world-class education."
        image="https://images.pexels.com/photos/30945258/pexels-photo-30945258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* History / Story */}
      <section className="py-20">
        <div className="container-school">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/5147363/pexels-photo-5147363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Makers Public International School building"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gold-500 px-8 py-6 text-white shadow-lg md:block">
                <p className="font-serif text-4xl font-bold">20+</p>
                <p className="text-sm text-gold-100">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Our Story
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-maroon-900 md:text-4xl">
                A Dream Born in the Valley of Kashmir
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Founded in {school.established} by Mr. Ghulam Nabi Bhat, Makers
                  Public International School began with a simple yet powerful
                  dream — that every child in our valley should have access to
                  world-class education without losing touch with our rich
                  culture and values.
                </p>
                <p>
                  What started as a small school with just 40 students has grown
                  into one of Srinagar&apos;s most respected K-12 institutions,
                  with over 1,800 students and 120+ expert faculty. Yet our
                  heart remains the same — nurturing each child with love,
                  discipline, and the right guidance.
                </p>
                <p>
                  Today, our alumni study and work across India and the globe —
                  from IITs and AIIMS to universities abroad. But wherever they
                  go, they carry with them the Sanskar and confidence they
                  gained on our campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-b from-maroon-50/40 to-white py-20">
        <div className="container-school">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-maroon-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-maroon-700 text-white">
                <Icon name="Award" className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-maroon-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-600">
                To provide a nurturing, safe, and joyful learning environment
                where every child discovers their unique potential. We blend
                the rigor of CBSE-aligned academics with international teaching
                methods, so our children grow into confident, compassionate,
                and capable global citizens — deeply rooted in Indian values.
              </p>
            </div>
            <div className="rounded-2xl border border-gold-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500 text-white">
                <Icon name="Globe2" className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-maroon-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-600">
                To be the most trusted international school in Jammu &amp;
                Kashmir — a place where Sanskar meets Shiksha, where tradition
                meets tomorrow, and where every child is prepared not just for
                exams, but for life. We envision a future where our students
                lead with empathy, excel with integrity, and serve with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="These four pillars guide everything we do — from the classroom to the playground, from morning assembly to the annual function."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-maroon-50 text-maroon-700 transition-colors group-hover:bg-maroon-700 group-hover:text-white">
                  <Icon name={v.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-maroon-900">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="bg-maroon-950 py-20 text-white">
        <div className="container-school">
          <SectionHeading
            eyebrow="Our Leadership"
            title="Messages From Our Leaders"
            light
            description="The vision and warmth of the people who built and guide Makers Public International School."
          />
          <div className="mt-14 space-y-12">
            {leadership.map((person, i) => (
              <div
                key={person.name}
                className={`grid items-center gap-10 lg:grid-cols-5 ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className="lg:col-span-2 [direction:ltr]">
                  <div className="relative mx-auto max-w-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={person.image}
                      alt={person.name}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 [direction:ltr]">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="mb-4 text-sm font-semibold text-gold-300">
                    {person.role}
                  </p>
                  <blockquote className="font-serif text-lg leading-relaxed text-gray-200">
                    &ldquo;{person.message}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management / Board */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Management & Trustees"
            title="Our Board of Trustees"
            description="A dedicated team of educators and administrators who ensure our school runs with excellence, transparency, and care."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 font-serif text-2xl font-bold text-white">
                  {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-serif text-lg font-bold text-maroon-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come, Be Part of Our Family"
        description="Visit our campus, meet our faculty, and see for yourself why families across Srinagar trust Makers Public with their children's future."
      />
    </>
  );
}
