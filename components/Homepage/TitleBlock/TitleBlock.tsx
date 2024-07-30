"use client"

import { Container, Title } from '@mantine/core';

import classes from './TitleBlock.module.css';

export function TitleBlock() {
  return (
    <div className={classes.outer}>
    <Container size="md">
          <Title className={classes.title}>
          That's why we built the <span className={classes.highlight}>Stone System</span>
          </Title>
    </Container>
    </div>
  );
}