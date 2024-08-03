'use client';

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Paper, Text, rem, Container, AspectRatio, Title, Image } from '@mantine/core';
import classes from './TestimonialSection.module.css';
import { useRef } from 'react';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  personName: string;
}

function Card({ personName, testimonial, videoSrc }: CardProps) {
  return (
    <Paper mb={'var(--space-40'} radius="md" className={classes.testimonialCard}>
      <AspectRatio ratio={16 / 9} className={classes.video}>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
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
      "They took our website to basic to very high end, and made getting 5 star google reviews easy with their 5 star google review funnel!. I can't say anymore good things about these guys, thank you!",
    videoSrc: 'https://www.youtube.com/embed/bWyTPJnU3t4',
    personName: 'Ben',
  },
  {
    testimonial:
      'Nothing but professional and awesome in every way, they are absolutely great to work with',
    videoSrc: 'https://www.youtube.com/embed/5hXZMg8nsTo',
    personName: 'Netane',
  },
  {
    testimonial:
      'I would highly recommend going with Stone Systems, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them, thank you!',
    videoSrc: 'https://www.youtube.com/embed/egzkjJrVYqM',
    personName: 'Frank',
  },
  {
    testimonial:
      "They are the absolute best at what they do. They built me a new website and within 10 day's I got my first unpaid for Lead! Best money spent with Kai and StoneSystems",
    videoSrc: 'https://www.youtube.com/embed/uM9kTzFmPC8',
    personName: 'Armando',
  },
  {
    testimonial:
      "I've seen a significant improvement in my business. Stone Systems has made my life so much easier!",
    videoSrc: 'https://www.youtube.com/embed/loTB8xKbagU',
    personName: 'David',
  },
  {
    testimonial:
      "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!",
    videoSrc: 'https://www.youtube.com/embed/fXSYQR3r9t8',
    personName: 'Cody',
  },
  {
    testimonial:
      'Thank you to Kai and Stone Systems , our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!',
    videoSrc: 'https://www.youtube.com/embed/a5aRLRKbQqg',
    personName: 'Rick',
  },
  {
    testimonial:
      'Getting 5 star reviews has always given me anxiety, Kai and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone looking to grow their business!',
    videoSrc: 'https://www.youtube.com/embed/gornitx-N1I',
    personName: 'Wendy',
  },
  {
    testimonial:
      "Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do, I would recommend them to anybody",
    videoSrc: 'https://www.youtube.com/embed/orjSm-VlTMU',
    personName: 'Luckie',
  },
  {
    testimonial:
      'Before I started working with Stonesystems I was paying $1500/month with another service that just was not working for me. Stonesystems is super affordable and they do a fantastic Job!',
    videoSrc: 'https://www.youtube.com/embed/TOdbUPsM-QM',
    personName: 'Lopaka',
  },
  {
    testimonial:
      'Fantastic product. I use them for my website and my CRM. Anytime I have any questions Kai is always available. I highly recommend StoneSystems',
    videoSrc: 'https://www.youtube.com/embed/Jh6A-iN2EXc',
    personName: 'Emannuel',
  },
];

export function TestimonialSection() {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.videoSrc}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            Focus on doing great work, leave the rest to us
          </Title>
        </Container>
        <Container size="responsive">
          <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={{ base: rem(2), sm: 'xl' }}
            align="start"
            loop
            dragFree
            slidesToScroll={1}
            plugins={[autoplay.current]}
            classNames={{control: classes.control, controls: classes.controls, root: classes.root}}
            >
            {slides}
          </Carousel>
        </Container>
      </div>
    </>
  );
}
