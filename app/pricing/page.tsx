import { Metadata } from 'next';
import { PriceContainer } from '@/components/PricingPage/PriceContainer/PriceContainer';

export const metadata: Metadata = {
  title: 'Stone Systems - Pricing',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function PricingPage() {
  return (
    <>
      <PriceContainer />
    </>
  );
}
