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
  tradeName2: string;
  imageSrc2: string;
}

function Card({ tradeName, imageSrc, tradeName2, imageSrc2 }: CardProps) {
  return (
    <>
      <Paper mb={'var(--space-40'} className={classes.card}>
        <AspectRatio ratio={16 / 9} className={classes.video}>
          <img src={imageSrc} alt="Panda" />
        </AspectRatio>
        <Title pt={'sm'} mx={'auto'} order={3} className={classes.tradeName}>
          {tradeName}
        </Title>
      </Paper>

      <Paper mb={'var(--space-40'} className={classes.card}>
        <AspectRatio ratio={16 / 9} className={classes.video}>
          <img src={imageSrc2} alt="Panda" />
        </AspectRatio>
        <Title pt={'sm'} mx={'auto'} order={3} className={classes.tradeName}>
          {tradeName2}
        </Title>
      </Paper>
    </>
  );
}

const data = [
  {
    tradeName: 'Windows & Doors',
    imageSrc: '/images/trades/windowsanddoors.png',
    tradeName2: 'Dog Groomers',
    imageSrc2: '/images/trades/doggroomer.png',
  },
  {
    tradeName: 'Landscapers',
    imageSrc: '/images/trades/landscapers.png',
    tradeName2: 'Remodeling',
    imageSrc2: '/images/trades/remodeling.png',
  },
  {
    tradeName: 'Paving',
    imageSrc: '/images/trades/paving.png',
    tradeName2: 'HVAC',
    imageSrc2: '/images/trades/hvac.png',
  },
  {
    tradeName: 'Roofing',
    imageSrc: '/images/trades/roofing.png',
    tradeName2: 'Home Builders',
    imageSrc2: '/images/trades/homebuilders.png',
  },
  {
    tradeName: 'Commercial',
    imageSrc: '/images/trades/commercial.png',
    tradeName2: 'Plumbing',
    imageSrc2: '/images/trades/plumbing.png',
  },
  {
    tradeName: 'Decks & Patios',
    imageSrc: '/images/trades/decksandpatios.png',
    tradeName2: 'Handyman',
    imageSrc2: '/images/trades/handyman.png',
  },
  {
    tradeName: 'Painters',
    imageSrc: '/images/trades/painters.png',
    tradeName2: 'General Contractors',
    imageSrc2: '/images/trades/generalcontractor.png',
  },
  {
    tradeName: 'Pool Construction',
    imageSrc: '/images/trades/poolbuilders.png',
    tradeName2: 'Siding',
    imageSrc2: '/images/trades/siding.png',
  },
  {
    tradeName: 'Electrician',
    imageSrc: '/images/trades/electrician.png',
    tradeName2: 'Hardscaping',
    imageSrc2: '/images/trades/hardscaping.png',
  },
];

export function WhoWeServeSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.tradeName}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="xl">
          <Title className={classes.mainTitle}>Serving all these trades and more...</Title>
          <div className={classes.card}>
            <Container size="xl">
              <Carousel
                slideSize={{ base: '33.33%', sm: '33.33%' }}
                slideGap={{ base: 'xl', sm: 'xl' }}
                align="start"
                loop
                dragFree
                slidesToScroll={mobile ? 1 : 3}
                plugins={[autoplay.current]}
                classNames={{
                  control: classes.control,
                  controls: classes.controls,
                  root: classes.root,
                }}
              >
                {slides}
              </Carousel>
            </Container>
            <Button component='a' href='/trades-we-serve' mx={'auto'} bg="var(--yellow)" size={mobile ? 'lg' : "xl"} className={classes.button}>
              See All Trades We Work With
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
