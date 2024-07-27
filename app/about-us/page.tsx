import { AboutUsSection } from '@/components/AboutUsPage/AboutUsSection/AboutUsSection';
import { EmployeeSection } from '@/components/AboutUsPage/EmployeeSection/EmployeeSection';
import { IntroSection } from '@/components/AboutUsPage/IntroSection/IntroSection';
import { ValuesSection } from '@/components/AboutUsPage/ValuesSection/ValuesSection';

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
