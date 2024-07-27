'use client';

import { Image, Container, Title, Button, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleDashedCheck } from '@tabler/icons-react';
import classes from './Feature1.module.css';

export function Feature1() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />

        <div className={classes.content}>
          <Title className={classes.title}>Functional Website</Title>
          <Text className={classes.description} mt="md">
            Get a functional website that converts visitors into customers without paying thousands
            of dollars.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="md"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCircleDashedCheck style={{ width: rem(20), height: rem(20) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Modern design that's built to convert</List.Item>
            <List.Item>SEO optimized to get found in the search results</List.Item>
            <List.Item>Fast & optimized for mobile devices</List.Item>
            <List.Item>Get found in local search results</List.Item>
          </List>

          <Button size="md" className={classes.control}>
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}
