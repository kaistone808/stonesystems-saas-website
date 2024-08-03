'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  Paper,
  Text,
  Title,
  useMantineTheme,
  rem,
  Container,
  AspectRatio,
  Button,
} from '@mantine/core';
import classes from './WhoWeServeSection.module.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface CardProps {
  tradeName: string;
  imageSrc: string;
}

function Card({ tradeName, imageSrc }: CardProps) {
  return (
    <Paper mb={'var(--space-40'} radius="md" className={classes.card}>
      <AspectRatio ratio={16 / 9} className={classes.video}>
        <img src={imageSrc} alt="Panda" />
      </AspectRatio>
      <Title pt={'sm'} mx={'auto'} order={3} className={classes.tradeName}>
        {tradeName}
      </Title>
    </Paper>
  );
}

const data = [
  {
    tradeName: 'General Contractors',
    imageSrc: '/images/trades/generalcontractor.png',
  },
  {
    tradeName: 'Remodeling',
    imageSrc: '/images/trades/remodeling.png',
  },
  {
    tradeName: 'Roofing',
    imageSrc: '/images/trades/roofing.png',
  },
  {
    tradeName: 'Home Builders',
    imageSrc: '/images/trades/homebuilders.png',
  },
  {
    tradeName: 'Commercial',
    imageSrc: '/images/trades/commercial.png',
  },
  {
    tradeName: 'Plumbing',
    imageSrc: '/images/trades/plumbing.png',
  },
  {
    tradeName: 'Electrician',
    imageSrc: '/images/trades/electrician.png',
  },
  {
    tradeName: 'HVAC',
    imageSrc: '/images/trades/hvac.png',
  },
  {
    tradeName: 'Decks & Patios',
    imageSrc: '/images/trades/decksandpatios.png',
  },
  {
    tradeName: 'Handyman',
    imageSrc: '/images/trades/handyman.png',
  },
  {
    tradeName: 'Painters',
    imageSrc: '/images/trades/painters.png',
  },
  {
    tradeName: 'Landscapers',
    imageSrc: '/images/trades/landscapers.png',
  },
  {
    tradeName: 'Pool Construction',
    imageSrc: '/images/trades/poolbuilders.png',
  },
  {
    tradeName: 'Siding',
    imageSrc: '/images/trades/siding.png',
  },
  {
    tradeName: 'Paving',
    imageSrc: '/images/trades/paving.png',
  },
  {
    tradeName: 'Hardscaping',
    imageSrc: '/images/trades/hardscaping.png',
  },
  {
    tradeName: 'Windows & Doors',
    imageSrc: '/images/trades/windowsanddoors.png',
  },
];

export function WhoWeServeSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.tradeName}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>Who We Serve</Title>
          <div className={classes.card}>
            <Container size="lg">
              <Carousel
                slideSize={{ base: '100%', sm: '33.33%' }}
                slideGap={{ base: rem(2), sm: 'xl' }}
                align="start"
                loop
                dragFree
                slidesToScroll={mobile ? 1 : 3}
                plugins={[autoplay.current]}
                classNames={{control: classes.control, controls: classes.controls, root: classes.root}}
              >
                {slides}
              </Carousel>
            </Container>
            <Button mx={'auto'} bg="var(--yellow)" size="lg" className={classes.control}>
              See All Trades We Work With
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
