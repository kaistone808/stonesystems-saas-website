'use client';

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Paper, Text, rem, Container, AspectRatio } from '@mantine/core';
import classes from './TestimonialSection.module.css';
import { useRef } from 'react';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  personName: string;
  companyName: string;
}

function Card({ personName, companyName, testimonial, videoSrc }: CardProps) {
  return (
    <Paper shadow="md" my={'var(--space-40'} radius="md">
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
];

export function TestimonialSection() {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.companyName}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
    <div className={classes.outer}>
      <Container size="responsive">
        <Carousel
          slideSize={{ base: '100%', sm: '25%' }}
          slideGap={{ base: rem(2), sm: 'xl' }}
          align="start"
          loop
          dragFree
          slidesToScroll={1}
          plugins={[autoplay.current]}
          withControls={false}
        >
          {slides}
        </Carousel>
      </Container></div>
    </>
  );
}
