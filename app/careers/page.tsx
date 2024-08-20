import { Metadata } from 'next';
import { IntroSection } from '@/components/CareersPage/IntroSection/IntroSection';
import { JobsSection } from '@/components/CareersPage/JobsSection/JobsSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Careers',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function CareersPage() {
  return (
    <>
      <IntroSection />
      <JobsSection />
    </>
  );
}
