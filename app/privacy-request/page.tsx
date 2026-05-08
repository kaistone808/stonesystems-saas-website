import { Metadata } from 'next';
import { PrivacyRequestForm } from './PrivacyRequestForm';

export const metadata: Metadata = {
  title: 'Stone Systems - Privacy Request',
  description:
    'Submit a privacy request to access, correct, delete, or manage your personal data at Stone Systems.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function PrivacyRequestPage() {
  return <PrivacyRequestForm />;
}
