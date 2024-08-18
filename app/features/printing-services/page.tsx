import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function PrintingServicesPage() {
  const benefits = [
    {
      title: 'Branded Business Cards',
      description:
        "We create a custom 5-star review link for your customers. If they rate you below 4 stars, they’ll be redirected for private feedback, and you'll be notified to address any issues directly.",
        icon: '/images/features/id.svg'

    },
    {
      title: 'Branded QR Review Code Cards',
      description:
        "Your customers are busy and often forget to leave reviews, even when they're happy to do so. We follow up with them 4-5 times over four weeks, using customized messages. To avoid annoying them, we space out the reminders by about a week.",
        icon: '/images/features/qrcode.svg'
    },
  ];

  const statistics = [
    {
      stat: '88%',
      description: 'of people keep a business card longer if it has a QR code.',
    },
    {
      stat: '50%',
      description: 'of people visit a website linked through a QR code on a card.',
    },
    {
      stat: '78%',
      description: 'of customers view businesses with QR-coded cards as more tech-savvy.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string; icon: string }]}
        title="Printing Services"
        title2="What do I need printing services for?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}
