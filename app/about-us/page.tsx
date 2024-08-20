import { Metadata } from 'next';
import { AboutUsSection } from '@/components/AboutUsPage/AboutUsSection/AboutUsSection';
import { EmployeeSection } from '@/components/AboutUsPage/EmployeeSection/EmployeeSection';
import { IntroSection } from '@/components/AboutUsPage/IntroSection/IntroSection';
import { ValuesSection } from '@/components/AboutUsPage/ValuesSection/ValuesSection';

export const metadata: Metadata = {
  title: 'Stone Systems - About Us',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function AboutUsPage() {
  return (
    <>
      <IntroSection />
      <AboutUsSection />
      <ValuesSection />
      <EmployeeSection />
    </>
  );
}
