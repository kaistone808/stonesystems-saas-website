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
import classes from './MainTradesSection.module.css';

interface CardProps {
  tradeName: string;
  imageSrc: string;
}

function Card({ tradeName, imageSrc }: CardProps) {
  return (
    <Paper shadow="md" radius="md" className={classes.card}>
      <AspectRatio ratio={16 / 9} className={classes.video}>
        <img src={imageSrc} alt="Panda" />
      </AspectRatio>
      <Title order={3} className={classes.tradeName}>
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

export function MainTradesSection() {
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
