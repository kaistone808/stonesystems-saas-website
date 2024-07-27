'use client';

import { Container, Text, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <>
      <Title className={classes.mainTitle}>How can we help?</Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Do you have a question or are you interested in working with our team?
      </Text>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Just Book a consultation call below.
      </Text>
      <Container size="md">
      <iframe src="https://api.ezclick.io/widget/booking/kxxPjpAlijjYxioZsRkX" style={{width: '100%', border:'none',overflow: 'hidden'}}scrolling="no" id="C74WoFNbfESXPtLVtmx8_1721647765202"></iframe><script src="https://api.ezclick.io/js/form_embed.js" type="text/javascript"></script>
      </Container>
    </>
  );
}
