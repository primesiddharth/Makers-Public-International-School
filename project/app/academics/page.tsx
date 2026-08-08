import type { Metadata } from 'next';
import PageHero from '@/components/site/page-hero';
import SectionHeading from '@/components/site/section-heading';
import CtaBanner from '@/components/site/cta-banner';
import Icon from '@/components/site/icon';
import { programs, faculty } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore the CBSE-aligned curriculum, grade-wise structure, teaching methodology, and expert faculty at Makers Public International School, Srinagar.',
};

const methodology = [
  {
    title: 'Experiential Learning',
    description:
      'Children learn by doing. Hands-on projects, real-world applications, and activity-based lessons make concepts stick for life.',
    icon: 'FlaskConical',
  },
  {
    title: 'Personalised Attention',
    description:
      'Small class sizes and dedicated mentors ensure every child gets the individual care and guidance they deserve.',
    icon: 'Users',
  },
  {
    title: 'Technology-Enabled',
    description:
      'Smart classrooms, digital labs, and blended learning tools make education engaging and future-ready.',
    icon: 'MonitorPlay',
  },
  {
    title: 'Values-Integrated',
    description:
      'Sanskar, discipline, and empathy are woven into every subject — because character matters as much as marks.',
    icon: 'Lotus',
  },
];

const gradeStructure = [
  {
    stage: 'Pre-Primary',
    grades: 'Nursery – UKG',
    focus: 'Play-based foundation, phonics, sensorial activities, social skills',
  },
  {
    stage: 'Primary',
    grades: 'Class 1 – 5',
    focus: 'Strong literacy & numeracy, environmental awareness, creativity',
  },
  {
    stage: 'Middle School',
    grades: 'Class 6 – 8',
    focus: 'Conceptual depth, STEM, leadership, debates, quizzes, projects',
  },
  {
    stage: 'Secondary',
    grades: 'Class 9 – 10',
    focus: 'Board preparation, Olympiads, career awareness, life skills',
  },
  {
    stage: 'Senior Secondary',
    grades: 'Class 11 – 12',
    focus: 'Science / Commerce / Humanities streams, competitive exam coaching',
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics & Curriculum"
        breadcrumb="Academics"
        description="CBSE-aligned rigor with international exposure — a learning journey designed to make every child confident, curious, and future-ready."
        image="https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="container-school">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Our Curriculum
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-maroon-900 md:text-4xl">
                Indian + International Curriculum
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  At Makers Public International School, we follow a CBSE-aligned
                  curriculum enriched with international teaching methodologies.
                  This means your child gets the academic rigor trusted by Indian
                  parents — plus the global exposure needed to succeed anywhere
                  in the world.
                </p>
                <p>
                  Our approach combines project-based learning, continuous
                  assessment, and value education. We prepare students for board
                  exams while also building the communication, collaboration,
                  and critical thinking skills that the 21st century demands.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['CBSE Aligned', 'Project-Based Learning', 'STEM & Robotics', 'Olympiad Ready', 'Value Education'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-maroon-50 px-4 py-2 text-sm font-medium text-maroon-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/7742832/pexels-photo-7742832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Students engaged in technology-enabled learning"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="bg-gradient-to-b from-maroon-50/40 to-white py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Grade-Wise Structure"
            title="From Pre-Nursery to Class 12"
            description="A seamless academic journey across five carefully designed stages — each building on the last to nurture well-rounded young adults."
          />
          <div className="mt-14 space-y-4">
            {gradeStructure.map((g, i) => (
              <div
                key={g.stage}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:gap-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 font-serif text-xl font-bold text-white">
                  {i + 1}
                </div>
                <div className="md:w-56">
                  <h3 className="font-serif text-lg font-bold text-maroon-900">
                    {g.stage}
                  </h3>
                  <p className="text-sm font-medium text-gold-700">{g.grades}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {g.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Academic Programs"
            title="Programs at Every Stage"
            description="Each program is tailored to the developmental needs of that age group — with the right balance of academics, activities, and care."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-maroon-950 py-20 text-white">
        <div className="container-school">
          <SectionHeading
            eyebrow="How We Teach"
            title="Our Teaching Methodology"
            light
            description="Great teaching is not about finishing the syllabus — it is about lighting a spark. Here is how we do it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20 text-gold-300">
                  <Icon name={m.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-lg font-bold text-white">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Meet Our Faculty"
            title="Teachers Who Are Mentors First"
            description="Our faculty members are not just highly qualified — they are caring, experienced, and deeply committed to every child's growth."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-serif text-lg font-bold">{f.name}</h3>
                    <p className="text-xs text-gold-200">{f.subject}</p>
                    <p className="mt-1 text-xs text-gray-300">{f.qualification}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Begin Your Child's Academic Journey?"
        description="Admissions are open across all grades. Talk to our admissions team today to find the right fit for your child."
      />
    </>
  );
}
