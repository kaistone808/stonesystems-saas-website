'use client';

import { Container, Title, Text, SimpleGrid, Paper } from '@mantine/core';

import classes from './AboutUsSection.module.css';

export function AboutUsSection() {
  return (
    <div className={classes.outer}>
      <Container size="md">
        <Title className={classes.title}>Focus on doing great work, leave the rest to us</Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          We noticed contractors looking to grow their business online were getting tied down with
          complex software, so we built a platform that handles everything for you.
        </Text>
        <SimpleGrid cols={4}>
          <Paper pt="xl" pb="xl">
            <Text c="dimmed" className={classes.normalText} ta="center">
              Founded in
            </Text>
            <Text c="dimmed" className={classes.largeText} ta="center">
              2020
            </Text>
          </Paper>
          <Paper pt="xl" pb="xl">
            <Text c="dimmed" className={classes.normalText} ta="center">
              Serving all
            </Text>
            <Text c="dimmed" className={classes.largeText} ta="center">
              50
            </Text>
            <Text c="dimmed" className={classes.normalText} ta="center">
              states
            </Text>
          </Paper>
          <Paper pt="xl" pb="xl">
            <Text c="dimmed" className={classes.normalText} ta="center">
              More than
            </Text>
            <Text c="dimmed" className={classes.largeText} ta="center">
              150
            </Text>
            <Text c="dimmed" className={classes.normalText} ta="center">
              websites built
            </Text>
          </Paper>
          <Paper pt="xl" pb="xl">
            <Text c="dimmed" className={classes.normalText} ta="center">
              Made with love in
            </Text>
            <Text c="dimmed" className={classes.largeText} ta="center">
              5
            </Text>
            <Text c="dimmed" className={classes.normalText} ta="center">
              cities
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </div>
  );
}
