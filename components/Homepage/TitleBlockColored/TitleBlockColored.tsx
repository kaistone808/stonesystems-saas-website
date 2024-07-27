"use client"

import { Container, Title } from '@mantine/core';

import classes from './TitleBlockColored.module.css';

export function TitleBlockColored() {
  return (
    <div className={classes.outer}>
    <Container size="lg">
          <Title className={classes.title}>
          Focus on doing great work, leave the rest to us
          </Title>
    </Container>
    </div>
  );
}