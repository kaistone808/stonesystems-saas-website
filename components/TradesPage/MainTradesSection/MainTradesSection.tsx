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
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    tradeName: 'Carpenter',
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
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
