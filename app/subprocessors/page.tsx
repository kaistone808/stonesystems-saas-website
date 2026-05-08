import { Metadata } from 'next';
import { SubprocessorsPage } from '@/components/SubprocessorsPage/SubprocessorsPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Sub-processors',
  description:
    'Current sub-processors used by Stone Systems to deliver the Services, including service provided and location.',
};

export default function SubprocessorsRoutePage() {
  return <SubprocessorsPage />;
}
