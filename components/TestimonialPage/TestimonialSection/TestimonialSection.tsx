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
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
    companyName: 'John Construction LLC',
  },
  {
    testimonial:
      '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    videoSrc: 'https://www.youtube.com/embed/9bZkp7q19f0',
    personName: 'John',
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
