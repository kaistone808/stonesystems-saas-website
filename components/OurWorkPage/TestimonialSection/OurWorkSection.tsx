'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Title, useMantineTheme, Container, SimpleGrid } from '@mantine/core';
import classes from './OurWorkSection.module.css';
import Image from 'next/image';

const data = [
  '/images/websites/1.png',
  '/images/websites/25.png',
  '/images/websites/23.png',
  '/images/websites/26.png',
  '/images/websites/2.png',
  '/images/websites/3.png',
  '/images/websites/21.png',
  '/images/websites/8.png',
  '/images/websites/10.png',
  '/images/websites/11.png',
  '/images/websites/16.png',
  '/images/websites/7.png',
];

export function OurWorkSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Image className={classes.image} width={1000} height={576} key={item} src={item} alt="website example" />);

  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>
        Look at what we've done for other contractors
      </Title>
      <Container size="xl">
        <SimpleGrid cols={mobile ? 1 : 2}>{slides}</SimpleGrid>
      </Container>
    </div>
  );
}
