'use client';

import { Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>Our simple processes are proven to get results</Title>
    </div>
  );
}
