"use client"

import { Container, Title, Text } from '@mantine/core';

import classes from './GuaranteeSection.module.css';

export function GuaranteeSection() {
  return (
    <div className={classes.outer}>
    <Container size="md">
          <Title className={classes.title}>
          So, we built the Pro Pipeline
          </Title>
          <Text size="md" c="dimmed">
          If you don't earn money from your website in the first year, we'll completely refund you.
          No questions asked.
        </Text>
    </Container>
    </div>
  );
}