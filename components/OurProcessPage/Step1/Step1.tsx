'use client';

import { Image, Container, Title, Text, SimpleGrid } from '@mantine/core';

import classes from './Step1.module.css';

export function Step1() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid pb={'xl'} cols={2}>
          <Image src="/images/1.svg" className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Consultation Call</Title>
            <Text mt="md" className={classes.description}>
              It's actually a sales call, we just didn't want to scare you. But seriously... we'll
              answer all your questions, show you any features you have questions about, and show
              you live client accounts & results.
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
