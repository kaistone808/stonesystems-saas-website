'use client';

import { Image, Container, Title, Text, SimpleGrid, useMantineTheme } from '@mantine/core';

import classes from './Step1.module.css';
import { useMediaQuery } from '@mantine/hooks';

export function Step1() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid pb={mobile ? 'sm' : 'xl'} cols={mobile ? 1 :2}>
          <Image src="/images/1.svg" className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Consultation Call</Title>
            <Text mt="md" className={classes.description}>
              It's actually a sales call, we just didn't want to scare you. But seriously... we'll
              answer all your questions, show you any features you have questions about, and show
              you live client accounts & results.
            </Text>
          </div>
        </SimpleGrid>
        <Image src={'/images/line.svg'} className={classes.line} />
      </Container>
    </div>
  );
}
