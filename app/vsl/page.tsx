import { Metadata } from 'next';
import { TestimonialSection } from '@/components/VslPage/TestimonialSection/TestimonialSection';
import { IntroSection } from '@/components/VslPage/IntroSection/IntroSection';

export const metadata: Metadata = {
  title: 'StoneSystems - VSL',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function VSLPage() {
  return (
    <>
      <IntroSection />
      <TestimonialSection />{' '}
    </>
  );
}
