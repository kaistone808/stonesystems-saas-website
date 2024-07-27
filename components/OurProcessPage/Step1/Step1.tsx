'use client';

import { Image, Container, Title, Text, SimpleGrid } from '@mantine/core';

import classes from './Step1.module.css';

export function Step1() {
  return (
    <Container size="md">
      <SimpleGrid mb={'xl'} cols={2}>
        <Image src="/images/1.svg" className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Consultation Call</Title>
          <Text c="dimmed" mt="md" className={classes.description}>
            This first step is the most important. We will have a call to get a better understanding
            of your company, services, goals, and objectives for wanting a new website or site
            redesign.
          </Text>
        </div>
      </SimpleGrid>
    </Container>
  );
}
