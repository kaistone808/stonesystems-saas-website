'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, Container, SimpleGrid, Image } from '@mantine/core';
import classes from './TestimonialSection.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  videoThumbnail: string;
  personName: string;
}

function Card({ personName, testimonial, videoSrc, videoThumbnail }: CardProps) {
  return (
    <Paper className={classes.video} radius="md">
      <LazyLoadVideo
        src={videoSrc}
        poster={videoThumbnail}
        alt={personName + ' testimonial'}
        type="video/mp4"
        width="100%"
        height="auto"
      />
      <div>
        <div className={classes.stars}>
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
        </div>
        <Text className={classes.testimonial}>{testimonial}</Text>
        <Text className={classes.personName}>{personName}</Text>
      </div>
    </Paper>
  );
}

const data = [
  {
    testimonial:
    '"I would highly recommend going with Stone Systems, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them, thank you!"',
    videoSrc: '/videos/Frank.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Frank.jpg',
    personName: '-Frank',
  },
  {
    testimonial: `"They are the absolute best at what they do. They built me a new website and within 10 day's I got my first unpaid for Lead! Best money spent with Kai and StoneSystems"`,
    videoSrc: '/videos/Armando2.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Armando.jpg',
    personName: '-Armando',
  },
  {
    testimonial: `"I've seen a significant improvement in my business. Stone Systems has made my life so much easier!"`,
    videoSrc: '/videos/David.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/David.jpg',
    personName: '-David',
  },
  {
    testimonial: `"If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"`,
    videoSrc: '/videos/Cody.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Cody.jpg',
    personName: '-Cody',
  },
  {
    testimonial:
    '"Nothing but professional and awesome in every way, they are absolutely great to work with"',
    videoSrc: '/videos/Netane.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Netane.jpg',
    personName: '-Netane',
  },
  {
    testimonial: `"They took our website to basic to very high end, and made getting 5 star google reviews easy with their 5 star google review funnel!. I can't say anymore good things about these guys, thank you!"`,
    videoSrc: '/videos/Leader.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Leader.jpg',
    personName: '-Ben',
  },
  {
    testimonial:
      '"Thank you to Kai and Stone Systems , our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!"',
    videoSrc: '/videos/Rick.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Rick.jpg',
    personName: '-Rick',
  },
  {
    testimonial:
      '"Getting 5 star reviews has always given me anxiety, Kai and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone looking to grow their business!"',
    videoSrc: '/videos/Wendy.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Wendy.jpg',
    personName: '-Wendy',
  },
  {
    testimonial: `"Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do, I would recommend them to anybody"`,
    videoSrc: '/videos/Luckie.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Luckie.jpg',
    personName: '-Luckie',
  },
  {
    testimonial:
      '"Before I started working with Stonesystems I was paying $1500/month with another service that just was not working for me. Stonesystems is super affordable and they do a fantastic Job!"',
    videoSrc: '/videos/Lopaka.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Lopaka.jpg',
    personName: '-Lopaka',
  },
  {
    testimonial:
      '"Fantastic product. I use them for my website and my CRM. Anytime I have any questions Kai is always available. I highly recommend StoneSystems"',
    videoSrc: '/videos/Emannuel.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Emannuel.jpg',
    personName: '-Emannuel',
  },
  {
    testimonial: `"It's been great and all I needed was one sale a month to pay for the service. Since I signed up i've gotten quite a bit more than that. I would recommend them to anyone!"`,
    videoSrc: '/videos/Adam.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Adam.jpg',
    personName: '-Adam',
  },
  {
    testimonial: `"Since we've started working with StoneSystems, our website has been on pointer. These guys really know what they're doing and i highly recommend them!"`,
    videoSrc: '/videos/Andrew.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Andrew.jpg',
    personName: '-Andrew',
  },
  {
    testimonial:
      '"After going through 2-3 other people i finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"',
    videoSrc: '/videos/James.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/James.jpg',
    personName: '-James',
  },
  {
    testimonial: `"Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately."`,
    videoSrc: '/videos/Manny.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Manny.jpg',
    personName: '-Manny',
  },
  {
    testimonial:
      '"They were incredibly helpfull and made everything super smooth and efficient. We highly recommend them to anyone that needs top notch web services!"',
    videoSrc: '/videos/Mariah.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Mariah.jpg',
    personName: '-Mariah',
  },
  {
    testimonial: `"They made me a brand new website, super professional and it's been absolutely amazing. I cannot say enough good things about theme. It turned those 100s of viewers into 100s of clients!"`,
    videoSrc: '/videos/Mason.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Mason.jpg',
    personName: '-Mason',
  },
  {
    testimonial: `"First i thought it was a scam, but then it turns out they're just a really good company at a really good price. I would recommend them to anyone!"`,
    videoSrc: '/videos/Matt.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Matt.jpg',
    personName: '-Matt',
  },
  {
    testimonial: `"They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out"`,
    videoSrc: '/videos/RyanSmith.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/RyanSmith.jpg',
    personName: '-Ryan',
  },
  {
    testimonial: `"He really got everything going well. I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!"`,
    videoSrc: '/videos/William.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/William.jpg',
    personName: '-Scott',
  },
  {
    testimonial:
      '"Big shoutout to Kai and Stone Systems for helping me with my website and getting me more leads. I would recommend them to anyone!"',
    videoSrc: '/videos/Zach.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Zach.jpg',
    personName: '-Zach',
  },
  {
    testimonial:
      `"Shoutout to Kai from Stone Systems! If you're looking to take your business to the next level, definitely reach out to them. They're great!"`,
    videoSrc: '/videos/Andrew1.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Andrew1.jpg',
    personName: '-Andrew',
  },
  {
    testimonial:
      `"Shoutout to Kai! If you're looking for someone to help your business grow, this is the guy. I'm getting about 10 times the value of what I'm spending!"`,
    videoSrc: '/videos/Tom.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Tom.jpg',
    personName: '-Tom',
  },
  {
    testimonial:
      `"I was impressed and shocked by what he included while only charging me so little. He's gone above and beyond, and I would highly recommend him!"`,
    videoSrc: '/videos/Tommy.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Tommy.jpg',
    personName: '-Tommy',
  },
  {
    testimonial:
      `"I've been through the ringer with these companies man, trying to find a legit company. I can tell you... these guys are the truth, spot on, communication is amazing, give these guys a try"`,
    videoSrc: '/videos/SteveBlack.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/SteveBlack.jpg',
    personName: '-Steve',
  },
  {
    testimonial:
      `"Shout out to Kai over at StoneSystems, they did a great job on our website. The website makes it super easy for our customers to leave us their information. If you need a good website hit up Kai and StoneSystems"`,
    videoSrc: '/videos/JasonTheorner.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/JasonTheorner.jpg',
    personName: '-Jason',
  },
  {
    testimonial:
      `"They re-did our website, they are AMAZING at getting you 5 star Google reviews. If you're looking to get your business found on google you need to give StoneSystems a try. We got 5 google reviews within the last 22 hours!. That's amazing, give them a call."`,
    videoSrc: '/videos/Jeslin.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Jeslin.jpg',
    personName: '-Jeslin',
  },
];

export function TestimonialSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Card key={item.personName} {...item} />);

  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>
        The proof is in the pudding...
        <br />
        Let's see what our clients have to say
      </Title>
      <Container size="xl">
        <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
      </Container>
    </div>
  );
}
