'use client';

import {
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
  SimpleGrid,
  Flex,
  Divider,
} from '@mantine/core';
import { IconCheckbox } from '@tabler/icons-react';
import classes from './Feature3.module.css';

const features = [
  {
    title: 'No More Lost Leads',
    description:
      "Send potential customers a text message when you miss their call, so they don't go to the next guy.",
  },
  {
    title: 'Be available 24/7',
    description:
      'Automatically respond to missed calls with a text message, so that you can be available 24/7.',
  },
  {
    title: 'Show People You Care',
    description:
      'Show potential customers that you care about their business by responding to missed calls with a text message.',
  },
];

export function Feature3() {
  const items = features.map((feature, index) => (
    <div key={feature.title}>
      {index > 0 && <Divider my={'1.5rem'} />}
      <Text className={classes.featureTitle}>{feature.title}</Text>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <Image src="/images/phone-right.png" className={classes.image} />

        <div className={classes.content}>
          <Title className={classes.title}>Missed Call Text Back</Title>
          <Text className={classes.description} mt="md">
            It’s not rocket science… <br />
            Quickly getting back to customers will make you more money.
          </Text>
          <Flex mt={'lg'} direction={'column'}>
            {items}
          </Flex>
          <Button size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
        </div>
      </div>
    </Container>
  );
}
