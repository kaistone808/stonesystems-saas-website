import { Metadata } from 'next';
import { Faq } from '@/components/Homepage/Faq/Faq';
import { Feature1 } from '@/components/Homepage/Feature1/Feature1';
import { Feature2 } from '@/components/Homepage/Feature2/Feature2';
import { Feature3 } from '@/components/Homepage/Feature3/Feature3';
import { Feature4 } from '@/components/Homepage/Feature4/Feature4';
import { Feature5 } from '@/components/Homepage/Feature5/Feature5';
import { Hero } from '@/components/Homepage/Hero/Hero';
import { OurProcessSection } from '@/components/Homepage/Our Process/OurProcessSection';
import { PartnersSection } from '@/components/Homepage/PartnersSection/PartnersSection';
import { TestimonialSection } from '@/components/Homepage/TestimonialSection/TestimonialSection';
import { WhoWeServeSection } from '@/components/Homepage/WhoWeServeSection/WhoWeServeSection';
import { WhyChooseUsSection } from '@/components/Homepage/WhyChooseUsSection/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Website Design & Marketing Systems For Contractors! ',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TestimonialSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <WhoWeServeSection />
      <OurProcessSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <Faq />
    </>
  );
}
