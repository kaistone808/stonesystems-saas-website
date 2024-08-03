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
          <Text c="dimmed" mt="md" className={classes.description}>
            Once the site is exactly how you want it, we will launch the website live. When we
            launch your new website there will be limited down time and a smooth transition to your
            new website. If you hired us for marketing services, we will get started on your growth
            strategy after the new site is live.
          </Text>
        </div>
      </SimpleGrid>
    </Container>
    </div>
  );
}
