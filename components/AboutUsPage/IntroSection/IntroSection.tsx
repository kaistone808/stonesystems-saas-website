'use client';

import { Container, Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <>
      <Container size="lg">
        <Title className={classes.mainTitle}>Built with love for contractors</Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          We noticed contractors looking to grow their business online were having a lot of issue
          putting systems in to place, so we built the perfect system that handles everything for you.
        </Text>
      </Container>
    </>
  );
}
