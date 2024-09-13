'use client';

import { Container, Title } from '@mantine/core';
import classes from './IntroSection.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container className={classes.card} size="xl">
        <Title className={classes.mainTitle} order={1}>
          How Frank Added $20,000 of Profit To His Business While Paying Us $197/month
        </Title>
        <LazyLoadVideo
          poster={'/images/thumbnails/vsl.jpeg'}
          alt={'vsl'}
          src={'/videos/vsl.mp4#t=0.1'}
          type="video/mp4"
          width="100%"
          height="auto"
        />
      </Container>
    </div>
  );
}
