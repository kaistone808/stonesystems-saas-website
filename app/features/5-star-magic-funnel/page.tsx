import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export default function StarMagicFunnelPage() {
  const benefits = [
    {
      title: '5-Star Reviews Only',
      description:
        "We create a custom 5-star review link for your customers. If they rate you below 4 stars, they’ll be redirected for private feedback, and you'll be notified to address any issues directly.",
    },
    {
      title: 'Automatic Follow-Up Reminders',
      description:
        "Your customers are busy and often forget to leave reviews, even when they're happy to do so. We follow up with them 4-5 times over four weeks, using customized messages. To avoid annoying them, we space out the reminders by about a week.",
    },
    {
      title: 'Ask For Reviews In One Click',
      description: `We keep things simple. Just enter your customer's name and phone number, click submit, and our system handles the rest.`,
    },
    {
      title: 'Contractor Review Injector',
      description: `If you have a list of past customers, we can run our "Contractor Review Injector" campaign to gradually request reviews from your entire list of previous clients.`,
    },
  ];

  const statistics = [
    {
      stat: '97%',
      description: 'of people read a review before they choose a business',
    },
    {
      stat: '72%',
      description: 'of people use google reviews to find a business',
    },
    {
      stat: '2.7x',
      description: 'more people buy a service from a business with a lot of reviews',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string }]}
        title="5-Star Magic Funnel"
        title2="What is the 5-star magic funnel?"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
      />
    </>
  );
}
