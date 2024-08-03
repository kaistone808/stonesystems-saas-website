'use client';

import { Container, Image, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './CallUsSection.module.css';
import { IconClockHour1, IconMapPin, IconPhone } from '@tabler/icons-react';

export function CallUsSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.inner}>
        <Title className={classes.mainTitle}>Or Contact Us…</Title>
        <Text className={classes.description} ta="center" mt="md">
          In the last 14 years we have helped countless contractors reach their goals.
        </Text>
        <Text className={classes.description} ta="center" mt="md">
          You could be next…
        </Text>
        <SimpleGrid cols={3}>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconPhone width={40} height={40} />
            </ThemeIcon>
            <Text className={classes.description} ta="center" mt="md">
              (800) 555-5555
            </Text>
          </div>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconClockHour1 width={40} height={40} />
            </ThemeIcon>{' '}
            <Text className={classes.description} ta="center" mt="md">
              Mon-Fri: 8AM – 6PM
            </Text>
          </div>
          <div className={classes.contactBox}>
            <ThemeIcon size={50} radius="xl" color="var(--yellow)">
              <IconMapPin width={40} height={40} />
            </ThemeIcon>{' '}
            <Text className={classes.description} ta="center" mt="md">
              Serving Contractors Nationwide
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
