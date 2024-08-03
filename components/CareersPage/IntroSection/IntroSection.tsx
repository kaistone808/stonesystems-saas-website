'use client';

import { Container, Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Discover Your Next Team</Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Everyone at Stone Systems is dedicated to helping one another and our customers
          succeed. Behind our services are real people who create real impact for our clients.
          Together, we live our core values and create a culture that’s part of our everyday life.
        </Text>
      </Container>
    </div>
  );
}
