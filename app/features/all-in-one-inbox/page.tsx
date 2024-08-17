import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function AllInOneInboxPage() {
  const benefits = [
    {
      title: '4-in-1 unified inbox',
      description:
        'Use our 4-in-1 unified inbox for your business to streamline communication by consolidating Facebook messages, Instagram DMs, texts, and emails into one convenient place. This ensures you never miss an important message and can respond promptly to all inquiries. It also enhances efficiency and organization, allowing you to manage and prioritize communications effortlessly.',
        icon: '/images/features/mailbox.svg'

    },
  ];

  const statistics = [
    {
      stat: '70%',
      description: 'of contractors respond faster to customers with one inbox.',
    },
    {
      stat: '61%',
      description: 'of contractors are less overwhelmed when using only one inbox.',
    },
    {
      stat: '83%',
      description: 'of contractors become more organized when using just one inbox.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string; icon: string }]}
        title="All In One Inbox"
        title2="What is the all in one inbox?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}
