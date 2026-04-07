import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { bookingUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Stone Systems - Contact Us',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function ContactUsPage() {
  redirect(bookingUrl('contact-redirect'));
}
