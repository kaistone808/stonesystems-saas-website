import { Metadata } from 'next';
import { PrivacyPage } from '@/components/PrivacyPage/PrivacyPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Privacy Policy',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPage />
    </>
  );
}
