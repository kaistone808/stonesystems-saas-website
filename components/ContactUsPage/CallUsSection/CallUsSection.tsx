'use client';

import { Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './CallUsSection.module.css';

export function CallUsSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.inner}>
        <Title className={classes.mainTitle}>Or Contact Us…</Title>
        <Text className={classes.description} ta="center" mt="md">
          In the last 14 years we have helped countless contractors reach their goals.
        </Text>
        <Text  className={classes.description} ta="center" mt="md">
          You could be next…
        </Text>
        <SimpleGrid cols={3}>
          <div className={classes.contactBox}>
            <Image src="/images/1.svg" className={classes.image} />
            <Text className={classes.description} ta="center" mt="md">
              (800) 555-5555
            </Text>
          </div>
          <div className={classes.contactBox}>
            <Image src="/images/1.svg" className={classes.image} />
            <Text className={classes.description} ta="center" mt="md">
              Mon-Fri: 8AM – 6PM
            </Text>
          </div>
          <div className={classes.contactBox}>
            <Image src="/images/1.svg" className={classes.image} />
            <Text className={classes.description} ta="center" mt="md">
              Serving Contractors
            </Text>
            <Text className={classes.description} ta="center" mt="md">
              Nationwide
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
