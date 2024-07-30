import { Avatar, Text, Paper, Container, SimpleGrid, Title } from '@mantine/core';
import classes from './EmployeeSection.module.css';

interface CardProps {
  name: string;
  title: string;
  imageSrc: string;
}

function Card({ name, title, imageSrc }: CardProps) {
  return (
    <Paper py={'lg'} radius="md" shadow="md" bg="var(--white)">
      <Avatar src={imageSrc} size={200} radius={120} mx="auto" />
      <Text className={classes.name} ta="center" fw={500} mt="md">
        {name}
      </Text>
      <Text className={classes.jobTitle} ta="center" c="dimmed" fz="sm">
        {title}
      </Text>
    </Paper>
  );
}

const data = [
  {
    name: 'Kai Stone',
    title: 'CEO',
    imageSrc:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  },
  {
    name: 'Kai Stone',
    title: 'CEO',
    imageSrc:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  },
  {
    name: 'Kai Stone',
    title: 'CEO',
    imageSrc:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  },
  {
    name: 'Kai Stone',
    title: 'CEO',
    imageSrc:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
  },
];

export function EmployeeSection() {
  const slides = data.map((item) => <Card {...item} />);

  return (
    <Container size="lg">
      <Title className={classes.title}>Meet Your Team at StoneSystems</Title>
      <SimpleGrid cols={3}>{slides}</SimpleGrid>
    </Container>
  );
}
