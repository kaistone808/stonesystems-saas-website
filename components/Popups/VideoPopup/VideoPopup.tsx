'use client';

import { Container } from '@mantine/core';
import classes from './VideoPopup.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

export function VideoPopup({ videoSrc }: { videoSrc: string }) {
  return (
      <Container className={classes.popup} size="xl">
        <LazyLoadVideo src={videoSrc} type="video/mp4" width="100%" height="auto" />
      </Container>
  );
}
