import { Metadata } from 'next';
import { TermsPage } from '@/components/TermsPage/TermsPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Terms of Service',
  description:
    'Terms of Service for Stone Systems marketing technology, websites, automation, and related services for home service businesses.',
};

export default function TermsConditionsPage() {
  return (
    <>
      <TermsPage />
    </>
  );
}
