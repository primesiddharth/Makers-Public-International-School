import type { Metadata } from 'next';
import PageHero from '@/components/site/page-hero';
import SectionHeading from '@/components/site/section-heading';
import CtaBanner from '@/components/site/cta-banner';
import AdmissionEnquiryForm from '@/components/site/admission-enquiry-form';
import Icon from '@/components/site/icon';
import { admissionSteps, ageChart, requiredDocuments, importantDates, school } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Admissions open at Makers Public International School, Srinagar. Learn about the admission process, eligibility, age criteria, documents required, and submit your enquiry.',
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions Open 2026-27"
        breadcrumb="Admissions"
        description="Give your child the gift of world-class education with Indian values. Limited seats available from Nursery to Class 12."
        image="https://images.pexels.com/photos/29303163/pexels-photo-29303163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Admission Process */}
      <section className="py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Admission Process"
            title="Four Simple Steps to Join Our Family"
            description="We have made the admission journey simple and transparent — just four steps, and your child is ready to begin."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 font-serif text-2xl font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-maroon-900">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {s.description}
                  </p>
                </div>
                {i < admissionSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-maroon-300 lg:block">
                    <Icon name="ArrowRight" className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Age Chart */}
      <section className="bg-gradient-to-b from-maroon-50/40 to-white py-20">
        <div className="container-school">
          <SectionHeading
            eyebrow="Eligibility Criteria"
            title="Age Criteria & Eligibility"
            description="Here is the age chart for admission to each grade, as per our admission guidelines for the 2026-27 session."
          />
          <div className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-maroon-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-serif font-semibold">Grade</th>
                    <th className="px-6 py-4 font-serif font-semibold">Age as on 31st March 2026</th>
                    <th className="px-6 py-4 font-serif font-semibold">Born Between</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ageChart.map((row) => (
                    <tr key={row.grade} className="transition-colors hover:bg-maroon-50/30">
                      <td className="px-6 py-4 font-semibold text-maroon-800">{row.grade}</td>
                      <td className="px-6 py-4 text-gray-700">{row.age}</td>
                      <td className="px-6 py-4 text-gray-500">{row.bornBetween}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            * Age relaxation of up to 30 days may be considered at the Principal's discretion.
          </p>
        </div>
      </section>

      {/* Documents & Dates */}
      <section className="py-20">
        <div className="container-school">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Documents */}
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Documents Required
              </span>
              <h2 className="font-serif text-2xl font-bold text-maroon-900 md:text-3xl">
                What to Bring for Registration
              </h2>
              <ul className="mt-6 space-y-3">
                {requiredDocuments.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Icon name="Sparkles" className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates */}
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                Academic Calendar
              </span>
              <h2 className="font-serif text-2xl font-bold text-maroon-900 md:text-3xl">
                Important Admission Dates
              </h2>
              <div className="mt-6 space-y-3">
                {importantDates.map((d) => (
                  <div
                    key={d.event}
                    className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700">{d.event}</span>
                    <span className="shrink-0 rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-800">
                      {d.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Note */}
      <section className="bg-maroon-950 py-14 text-white">
        <div className="container-school">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Fee Structure
              </h3>
              <p className="mt-2 max-w-2xl text-gray-300">
                Our fee is structured to be transparent and fair, with options
                for siblings and merit scholarships. Please contact our
                admissions office for the detailed fee sheet for your child's
                grade.
              </p>
            </div>
            <a
              href={`tel:${school.phone}`}
              className="shrink-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:from-gold-500 hover:to-gold-700"
            >
              Call for Fee Details: {school.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20">
        <div className="container-school max-w-3xl">
          <SectionHeading
            eyebrow="Admission Enquiry"
            title="Submit Your Enquiry"
            description="Fill in the form below and our admissions team will call you within 24 hours to guide you through the next steps."
          />
          <div className="mt-12">
            <AdmissionEnquiryForm variant="card" />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have Questions? We Are Here to Help"
        description="Our admissions team is happy to answer any questions you may have. Book a campus visit and see the Makers Public difference for yourself."
        primaryLabel="Book a Campus Visit"
        primaryHref="/contact"
        secondaryLabel="Explore Academics"
        secondaryHref="/academics"
      />
    </>
  );
}
