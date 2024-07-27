import { CredibilitySection } from '@/components/Homepage/CredibilitySection/CredibilitySection';
import { Faq } from '@/components/Homepage/Faq/Faq';
import { Feature1 } from '@/components/Homepage/Feature1/Feature1';
import { Feature2 } from '@/components/Homepage/Feature2/Feature2';
import { Feature3 } from '@/components/Homepage/Feature3/Feature3';
import { Feature4 } from '@/components/Homepage/Feature4/Feature4';
import { Feature5 } from '@/components/Homepage/Feature5/Feature5';
import { Hero } from '@/components/Homepage/Hero/Hero';
import { PartnersSection } from '@/components/Homepage/PartnersSection/PartnersSection';
import { TestimonialSection } from '@/components/Homepage/TestimonialSection/TestimonialSection';
import { TitleBlock } from '@/components/Homepage/TitleBlock/TitleBlock';
import { TitleBlockColored } from '@/components/Homepage/TitleBlockColored/TitleBlockColored';
import { WhoWeServeSection } from '@/components/Homepage/WhoWeServeSection/WhoWeServeSection';
import { WhyChooseUsSection } from '@/components/Homepage/WhyChooseUsSection/WhyChooseUsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilitySection />
      <TitleBlockColored />
      <TestimonialSection />
      <TitleBlock />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <WhoWeServeSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <Faq />
    </>
  );
}
