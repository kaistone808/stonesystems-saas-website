'use client';

import { Image, Container, Title, Text, SimpleGrid, useMantineTheme } from '@mantine/core';
import classes from './Step2.module.css';
import { useMediaQuery } from '@mantine/hooks';

export function Step2() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
      <SimpleGrid pb={mobile ? 'sm' : 'xl'} cols={mobile ? 1 :2}>
      {mobile && <Image src="/images/2.svg" className={classes.image} />}
          <div className={classes.content}>
            <Title className={classes.title}>Buildout</Title>
            <Text mt="md" className={classes.description}>
              Fill out a basic onboarding form with your business details. After we have the correct
              information, we'll get to work on building your new website & marketing system.
            </Text>
          </div>
          {!mobile && <Image src="/images/2.svg" className={classes.image} />}
        </SimpleGrid>
        <Image src={'/images/line.svg'} className={classes.line} />
      </Container>
    </div>
  );
}
