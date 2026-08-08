'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-maroon-900">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 max-w-md text-gray-600">
          Thank you for reaching out. We will get back to you shortly. For
          urgent queries, please call us directly.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-xl md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Your Name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g. 9000067890"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Your Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          rows={5}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-maroon-700 to-maroon-900 text-white hover:from-maroon-800 hover:to-maroon-950"
        size="lg"
      >
        Send Message
      </Button>
    </form>
  );
}
