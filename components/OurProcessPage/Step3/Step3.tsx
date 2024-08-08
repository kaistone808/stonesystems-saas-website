'use client';

import { Image, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './Step3.module.css';

export function Step3() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid pb={'xl'} cols={2}>
          <Image src="/images/3.svg" className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Launch</Title>
            <Text mt="md" className={classes.description}>
              We'll walk you through your new website & marketing system, answer any questions you
              have, and show you how "everything" works... And by everything, we’re really just
              talking about pressing two buttons.
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
