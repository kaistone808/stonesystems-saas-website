'use client';

import { Container, Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Just to be fancy, we partner with...
</Title>
      </Container>
    </div>
  );
}
