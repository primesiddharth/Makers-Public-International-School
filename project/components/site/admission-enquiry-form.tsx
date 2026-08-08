'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

interface AdmissionEnquiryFormProps {
  variant?: 'default' | 'card';
}

const classes = [
  'Pre-Nursery',
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

export default function AdmissionEnquiryForm({ variant = 'default' }: AdmissionEnquiryFormProps) {
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
          Thank You for Your Enquiry!
        </h3>
        <p className="mt-2 max-w-md text-gray-600">
          We have received your admission enquiry. Our admissions team will
          call you within 24 hours to guide you further. Dhanyavaad!
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === 'card'
          ? 'space-y-5 rounded-2xl bg-white p-6 shadow-xl md:p-8'
          : 'space-y-5'
      }
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Parent / Guardian Name <span className="text-red-500">*</span>
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

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address
          </Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label>
            Class Applying For <span className="text-red-500">*</span>
          </Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              {classes.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message / Query</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your child or any questions you have about admissions..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-maroon-700 to-maroon-900 text-white hover:from-maroon-800 hover:to-maroon-950"
        size="lg"
      >
        Submit Admission Enquiry
      </Button>
      <p className="text-center text-xs text-gray-400">
        Our admissions team will contact you within 24 hours.
      </p>
    </form>
  );
}
