'use client';

import { Text, Paper, Container, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import classes from './EmployeeSection.module.css';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

interface CardProps {
  name: string;
  title: string;
  imageSrc: string;
}

function Card({ name, title, imageSrc }: CardProps) {
  return (
    <Paper py={'lg'} radius="md" bg="var(--white)">
      <Image className={classes.avatar} src={imageSrc} width={200} height={200} alt={name}/>
      <Text className={classes.name} ta="center" mt="md">
        {name}
      </Text>
      <Text className={classes.jobTitle} ta="center" c="dimmed">
        {title}
      </Text>
    </Paper>
  );
}

const data = [
  {
    name: 'Kai',
    title: 'CEO / Founder',
    imageSrc: '/images/people/kai.jpeg',
  },
  {
    name: 'Michael',
    title: 'Systems Engineer',
    imageSrc: '/images/people/michael.jpg',
  },
  {
    name: 'Astrid',
    title: 'Web Developer',
    imageSrc: '/images/people/astrid.jpeg',
  },
  {
    name: 'Kevin',
    title: 'Performance Marketer',
    imageSrc: '/images/people/kevin.jpeg',
  },
  {
    name: 'Amanda',
    title: 'Web Developer',
    imageSrc: '/images/people/amanda.jpeg',
  },
  {
    name: 'Ruth',
    title: 'Social Media Manager',
    imageSrc: '/images/people/ruth.jpeg',
  },
  {
    name: 'Valeria',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/valeria.jpeg',
  },
  {
    name: 'Camila',
    title: 'Customer Success Consultant',
    imageSrc: '/images/people/camila.jpeg',
  },
  {
    name: 'Stone Systems Man',
    title: 'Commander & Chief',
    imageSrc: '/images/people/stoneman.jpeg',
  },
];

export function EmployeeSection() {
  const slides = data.map((item) => <Card key={item.name} {...item} />);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Meet Your Team at StoneSystems</Title>
        <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
      </Container>
    </div>
  );
}
