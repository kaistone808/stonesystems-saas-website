'use client';

import { Image, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './Step2.module.css';

export function Step2() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid pb={'xl'} cols={2}>
          <div className={classes.content}>
            <Title className={classes.title}>Buildout</Title>
            <Text mt="md" className={classes.description}>
              Fill out a basic onboarding form with your business details. After we have the correct
              information, we'll get to work on building your new website & marketing system.
            </Text>
          </div>
          <Image src="/images/2.svg" className={classes.image} />
        </SimpleGrid>
      </Container>
    </div>
  );
}
