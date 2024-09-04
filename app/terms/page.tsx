import { Metadata } from 'next';
import { TermsPage } from '@/components/TermsPage/TermsPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Terms & Conditions',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function TermsConditionsPage() {
  return (
    <>
      <TermsPage />{' '}
    </>
  );
}
