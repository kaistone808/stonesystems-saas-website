'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, Container, Image, SimpleGrid } from '@mantine/core';
import classes from './AllTradesSection.module.css';

interface CardProps {
  tradeName: string;
}

function Card({ tradeName }: CardProps) {
  return (
    <div className={classes.allTrades}>
      {' '}
      <Image
        width={30}
        height={30}
        src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61cf37d203a8ee012aadcd94_no_gray.png"
        alt="No"
      />
      <Text className={classes.tradeName}>{tradeName}</Text>
    </div>
  );
}

const data = [
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
  {
    tradeName: 'Carpenter',
  },
];

export function AllTradesSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Card {...item} />);

  return (
    <>
      <Title className={classes.mainTitle}>All Trades by Category</Title>
      <Container size="lg">
        <SimpleGrid cols={4}>{slides}</SimpleGrid>
      </Container>
    </>
  );
}
