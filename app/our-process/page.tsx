import { Metadata } from 'next';
import { IntroSection } from '@/components/OurProcessPage/IntroSection/IntroSection';
import { Step1 } from '@/components/OurProcessPage/Step1/Step1';
import { Step2 } from '@/components/OurProcessPage/Step2/Step2';
import { Step3 } from '@/components/OurProcessPage/Step3/Step3';

export const metadata: Metadata = {
  title: 'Stone Systems - Our process',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function OurProcessPage() {
  return (
    <>
      <IntroSection />
      <Step1 />
      <Step2 />
      <Step3 />
    </>
  );
}
