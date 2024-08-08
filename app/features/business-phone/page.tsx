import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function BusinessPhonePage() {
  const benefits = [
    {
      title: 'Legal Business Phone Number',
      description:
        "When clients call your business, they’ll reach a dedicated legal phone number that clearly represents your firm. This helps build trust and professionalism, showing that you’re serious about handling their legal matters. Plus, you’ll get notifications for every call so you can respond promptly and stay organized.",
    },
    {
      title: 'Call Tracking',
      description:
        "With call tracking, every call to your business is monitored and recorded, giving you valuable insights into how customers are reaching you. This helps you understand which marketing efforts are working, improves your response strategy, and ensures you never miss an important call.",
    },
    {
      title: 'Separate Personal and Business',
      description: `By using separate phone numbers for personal and business calls, you keep your professional interactions organized and ensure privacy. This helps you maintain a clear boundary between work and personal life, improves your response time for business calls, and presents a professional image to clients.`,
    },
  ];

  const statistics = [
    {
      stat: '80%',
      description: 'more calls to contractors with a business phone lead to jobs.',
    },
    {
      stat: '71%',
      description: 'of customers are more likely to refer contractors with a business phone.',
    },
    {
      stat: '58%',
      description: 'of contractors handle appointments better with a business phone.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string }]}
        title="Blog Posts"
        title2="Why do i need blog posts?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}
