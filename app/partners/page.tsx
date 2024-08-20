import { Metadata } from 'next';
import { IntroSection } from '@/components/PartnersPage/IntroSection/IntroSection';
import { PartnersSection } from '@/components/PartnersPage/PartnersSection/PartnersSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Who we partner with',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function PartnersPage() {
  return (
    <>
      <IntroSection />
      <PartnersSection />
    </>
  );
}
