'use client';

import { Container, Paper, SimpleGrid } from '@mantine/core';
import classes from './PartnersSection.module.css';

export function PartnersSection() {
  return (
    <>
      <Container size="md">
        <SimpleGrid cols={4}>
          <Paper className={classes.partnerCard} shadow="md">
            <img src="/images/1.svg" alt="partner" />
          </Paper>
          <Paper className={classes.partnerCard} shadow="md">
            <img src="/images/1.svg" alt="partner" />
          </Paper>
          <Paper className={classes.partnerCard} shadow="md">
            <img src="/images/1.svg" alt="partner" />
          </Paper>
          <Paper className={classes.partnerCard} shadow="md">
            <img src="/images/1.svg" alt="partner" />
          </Paper>
        </SimpleGrid>
      </Container>
    </>
  );
}
