'use client';

import { Image, Container, Title, Button, Text } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            The all-in-one <span className={classes.highlight}>home service business</span>{' '}
            marketing platform
          </Title>
          <Text mt="md" className={classes.description}>
            More Customers. More Jobs. Less Bullsh*t. Receive a fully custom website optimized with
            AI and put your online presence on autopilot to be discovered, trusted, and booked.
          </Text>
          <Button size="xl" className={classes.control}>
            Learn More
          </Button>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
