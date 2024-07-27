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
    <Paper my={'var(--space-40'} shadow="md" radius="md" className={classes.card}>
      <AspectRatio ratio={16 / 9} className={classes.video}>
        <img src={imageSrc} alt="Panda" />
      </AspectRatio>
      <Title mx={'auto'} order={3} className={classes.tradeName}>
        {tradeName}
      </Title>
    </Paper>
  );
}

const data = [
  {
    tradeName: 'General Contractors',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Remodeling',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Roofing',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Home Builders',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Commercial',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Plumbing',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Electrician',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'HVAC',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Decks & Patios',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Handyman',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Painters',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Landscapers',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Pool Construction',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Siding',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Paving',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Hardscaping',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Windows & Doors',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
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
      <Container mt={'calc(var(--space-40)*2)'} mb={'var(--space-40)'} size="lg">
        <Title className={classes.mainTitle}>Who We Serve</Title>
        <Text ta={'center'} className={classes.subTitle}>
          Our system is specifically built for contractors and home service providers across
          100+ trades.
        </Text>
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
              withControls={false}
            >
              {slides}
            </Carousel>
          </Container>
          <Button mx={'auto'} size="lg" className={classes.control}>
            See All Trades We Work With
          </Button>
        </div>
      </Container>
    </>
  );
}
