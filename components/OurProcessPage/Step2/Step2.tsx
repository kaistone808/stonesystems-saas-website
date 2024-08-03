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
          <Text c="dimmed" mt="md" className={classes.description}>
            During this phase we will build out your website and set up a staging link. A staging
            link is a testing website that gives you the ability to use the new website before it’s
            live. Once the build is ready we will send you the staging link to review your new
            website.
          </Text>
        </div>
        <Image
          src="/images/2.svg"
          className={classes.image}
        />
      </SimpleGrid>
    </Container>
    </div>
  );
}
