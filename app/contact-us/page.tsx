import { Metadata } from 'next';
import { CallUsSection } from '@/components/ContactUsPage/CallUsSection/CallUsSection';
import { IntroSection } from '@/components/ContactUsPage/IntroSection/IntroSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Contact Us',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function ContactUsPage() {
  return (
    <>
      <IntroSection />
      <CallUsSection />
    </>
  );
}
