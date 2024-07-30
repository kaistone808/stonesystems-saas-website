'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Text, Title, useMantineTheme, Container, SimpleGrid, AspectRatio } from '@mantine/core';
import classes from './IntroSection.module.css';

const data = [
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
  {
    imageSrc: 'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp',
  },
];

export function IntroSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <AspectRatio ratio={16 / 9} className={classes.video}>
      <img src={item.imageSrc} alt="Panda" />
    </AspectRatio>
  ));

  return (
    <>
      <Title className={classes.mainTitle}>Don't just take our word for it</Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        With tons of testimonials and 5-star reviews, our customers love StoneSystems
      </Text>
      <Container size="responsive">
        <SimpleGrid cols={2}>{slides}</SimpleGrid>
      </Container>
    </>
  );
}
