import { Avatar, Text, Paper, Container, SimpleGrid, Title } from '@mantine/core';
import classes from './EmployeeSection.module.css';

export function EmployeeSection() {
  return (
    <Container size="md">
        <Title className={classes.title}>Meet Your Team at StoneSystems</Title>
      <SimpleGrid cols={3}>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size={120}
            radius={120}
            mx="auto"
          />
          <Text ta="center" fz="lg" fw={500} mt="md">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Art director
          </Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
