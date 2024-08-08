'use client';

import { Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>What working with us looks like...</Title>
    </div>
  );
}
