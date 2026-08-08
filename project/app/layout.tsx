import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Makers Public International School | Nurturing Global Citizens of Tomorrow',
    template: '%s | Makers Public International School',
  },
  description:
    'Makers Public International School, Srinagar — a premium K-12 institution blending Indian values (Sanskar) with world-class international education. Admissions open Nursery to Class 12.',
  keywords: [
    'international school Srinagar',
    'CBSE school Kashmir',
    'K-12 school Jammu & Kashmir',
    'best school Srinagar',
    'admissions open',
    'Makers Public International School',
  ],
  openGraph: {
    title: 'Makers Public International School | Nurturing Global Citizens of Tomorrow',
    description:
      'A premium K-12 institution blending Indian values with world-class international education in Srinagar, Jammu & Kashmir.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
