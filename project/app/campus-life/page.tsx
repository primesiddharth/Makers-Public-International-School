import type { Metadata } from 'next';
import PageHero from '@/components/site/page-hero';
import SectionHeading from '@/components/site/section-heading';
import CtaBanner from '@/components/site/cta-banner';
import Icon from '@/components/site/icon';
import { facilities, activities, safetyMeasures, campusGallery } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Campus Life & Facilities',
  description:
    'Explore the world-class infrastructure, extra-curricular activities, and safety measures at Makers Public International School, Srinagar.',
};

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        title="Campus Life & Facilities"
        breadcrumb="Campus Life"
        description="A safe, joyful, and inspiring campus where every child discovers their passions — in the classroom and beyond."
        image="https://images.pexels.com/photos/30945258/pexels-photo-30945258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Infrastructure */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="World-Class Infrastructure"
            title="Facilities That Inspire"
            description="Every corner of our 5-acre campus is designed to make learning joyful, safe, and future-ready."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-maroon-50 text-maroon-700 transition-colors group-hover:bg-maroon-700 group-hover:text-white">
                  <Icon name={f.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-maroon-900">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="bg-gradient-to-b from-maroon-50/40 to-white py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="A Glimpse of Campus"
            title="Life at Makers Public"
            description="From smart classrooms to sports grounds, science labs to art rooms — here is a peek into everyday life on our campus."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {campusGallery.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Campus life at Makers Public International School ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? 'h-full min-h-[300px]' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curricular Activities */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Extra-Curricular Activities"
            description="We believe every child has a hidden talent. Our job is to help them find it — through sports, arts, music, and more."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Icon name={a.icon} className="h-6 w-6" />
                </div>
                <span className="font-serif text-sm font-bold text-maroon-900">
                  {a.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="bg-maroon-950 py-20 text-white">
        <div className="container-school">
          <SectionHeading
            eyebrow="Your Child's Safety First"
            title="Safety & Security Measures"
            light
            description="We know that safety is every Indian parent's first priority. That is why we have left nothing to chance on our campus."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyMeasures.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20 text-gold-300">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See It for Yourself — Book a Campus Visit"
        description="The best way to understand a school is to walk its corridors. Schedule a guided campus tour with our admissions team today."
        primaryLabel="Schedule a Campus Visit"
        primaryHref="/contact"
        secondaryLabel="View Photo Gallery"
        secondaryHref="/gallery"
      />
    </>
  );
}
