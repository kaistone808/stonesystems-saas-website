'use client';

import { useMediaQuery } from '@mantine/hooks';
import {
  Paper,
  Text,
  Title,
  useMantineTheme,
  Container,
  SimpleGrid,
  AspectRatio,
} from '@mantine/core';
import classes from './TestimonialSection.module.css';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  personName: string;
  companyName: string;
}

function Card({ personName, companyName, testimonial, videoSrc }: CardProps) {
  return (
    <Paper shadow="md" my={'calc(var(--space-40)/2)'} radius="md">
      <AspectRatio ratio={10 / 11} className={classes.video}>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
      <div>
        <Text className={classes.testimonial}>{testimonial}</Text>
        <Text className={classes.personName} size="xs">
          {personName}
        </Text>
        <Text className={classes.companyName}>{companyName}</Text>
      </div>
    </Paper>
  );
}

const data = [
  {
    testimonial:
      "I can't say anymore good things about these guys, thank you Kai and Stone Systems!",
    videoSrc: 'https://www.youtube.com/embed/bWyTPJnU3t4',
    personName: 'Ben',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      'Nothing but professional and awesome in every way, they are absolutely great to work with',
    videoSrc: 'https://www.youtube.com/embed/5hXZMg8nsTo',
    personName: 'Netane',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      'My business has ramped up, literally overnight and their prices are very affordable.',
    videoSrc: 'https://www.youtube.com/embed/egzkjJrVYqM',
    personName: 'Frank',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      "They built me a new website and within 10 day's I got my first unpaid for Lead! I'm so happy with them!",
    videoSrc: 'https://www.youtube.com/embed/uM9kTzFmPC8',
    personName: 'Armando',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      "I've seen a significant improvement in my business. Stone Systems has made my life so much easier!",
    videoSrc: 'https://www.youtube.com/embed/loTB8xKbagU',
    personName: 'David',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      "If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!",
    videoSrc: 'https://www.youtube.com/embed/fXSYQR3r9t8',
    personName: 'Cody',
    companyName: 'Next Level Carpet Masters',
  },
  {
    testimonial:
      'Our company finally has the web presence it needs and our sales and profits have grown significantly!',
    videoSrc: 'https://www.youtube.com/embed/a5aRLRKbQqg',
    personName: 'Rick',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      'I have seen a significant increase in business since I started working with them. Highly recommend!',
    videoSrc: 'https://www.youtube.com/embed/gornitx-N1I',
    personName: 'Wendy',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      "They're super helpful with everything they do and deliver quality, I would recommend them to anybody",
    videoSrc: 'https://www.youtube.com/embed/orjSm-VlTMU',
    personName: 'Rickie',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      'Stonesystems is super affordable and they do a fantastic Job! Would recommend to anyone!',
    videoSrc: 'https://www.youtube.com/embed/TOdbUPsM-QM',
    personName: 'Lopaka',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      'Fantastic product. I use them for my website and my CRM. Anytime I have any questions Kai is always available.',
    videoSrc: 'https://www.youtube.com/embed/Jh6A-iN2EXc',
    personName: 'Emannuel',
    companyName: 'John Construction LLC',
  },
];

export function TestimonialSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Card {...item} />);

  return (
    <>
      <Title className={classes.mainTitle}>Don't just take our word for it</Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        With tons of testimonials and 5-star reviews, our customers love StoneSystems
      </Text>
      <Container size="lg">
        <SimpleGrid cols={3}>{slides}</SimpleGrid>
      </Container>
    </>
  );
}
