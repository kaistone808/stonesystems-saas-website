import { Metadata } from 'next';
import { OurWorkSection } from '@/components/OurWorkPage/TestimonialSection/OurWorkSection';

export const metadata: Metadata = {
  title: 'StoneSystems - Our Work',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function OurWorkPage() {
  return (
    <>
      <OurWorkSection />{' '}
    </>
  );
}
