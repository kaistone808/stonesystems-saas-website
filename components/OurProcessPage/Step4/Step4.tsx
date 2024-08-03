'use client';

import { Image, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './Step4.module.css';

export function Step4() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid cols={2}>
          <div className={classes.content}>
            <Title className={classes.title}>Maintenance & Updates</Title>
            <Text c="dimmed" mt="md" className={classes.description}>
              We will maintain your website, core software, and server to ensure everything is
              always running properly. We will also take care of any content updates you need. For
              example; adding photos to your portfolio, swapping out text, updating content and
              publishing blog posts. When you need us to update content you can email it us and we
              will complete it the same day, if it’s a business day.
            </Text>
          </div>
          <Image src="/images/4.svg" className={classes.image} />
        </SimpleGrid>
      </Container>
    </div>
  );
}
