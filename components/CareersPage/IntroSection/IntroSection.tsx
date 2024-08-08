'use client';

import { Container, Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Want to join the squad?</Title>
        <Text className={classes.description} ta="center" mt="md">
          At Stone Systems, we’re all about blending business with pleasure, whether it’s closing
          deals or stealing smiles. Our clients leave happy, and so do we. Let’s just say we know
          how to make an impression, both in and out of the office.
        </Text>
      </Container>
    </div>
  );
}
