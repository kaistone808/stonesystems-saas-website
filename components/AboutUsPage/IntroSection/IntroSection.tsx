'use client';

import { Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <>
      <Title className={classes.mainTitle}>Built with love for contractor small businesses</Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We noticed contractors looking to grow their business online were getting tied down with
        complex software, so we built a platform that handles everything for you.
      </Text>
    </>
  );
}
