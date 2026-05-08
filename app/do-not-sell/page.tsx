import { Metadata } from 'next';
import { DoNotSellPage } from './DoNotSellPage';

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information',
  description:
    'Manage your do-not-sell or share privacy preferences and submit account-level opt-out requests.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DoNotSellOrSharePage() {
  return <DoNotSellPage />;
}
