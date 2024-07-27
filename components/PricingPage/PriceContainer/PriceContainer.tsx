import { Badge, Group, Title, Text, Card, SimpleGrid, Container } from '@mantine/core';
import classes from './PriceContainer.module.css';

const mockdata = [
  {
    title: 'Starter',
    description: 'Automate your baseline marketing',
    pricing: '$197/mo',
  },
  {
    title: 'Core',
    description: 'Automate your baseline marketing',
    pricing: '$297/mo',
  },
  {
    title: 'Pro',
    description: 'Automate your baseline marketing',
    pricing: '$497/mo',
  },
];

export function PriceContainer() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Title order={3} fw={800} className={classes.cardTitle} mt="md">
        {feature.title}
      </Title>
      <Title order={4} fw={800} className={classes.cardTitle} mt="md">
        {feature.pricing}
      </Title>
      <Text fz="md" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={1} className={classes.title} ta="center" mt="sm">
      Best price for a custom website, period.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      No contracts. No setup cost. No surprise fees.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
