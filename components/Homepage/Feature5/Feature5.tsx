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
import classes from './Feature5.module.css';

const features = [
  {
    title: 'Get Found On The Go',
    description:
      "Have your business's information available to potential customers when they're on the go.",
  },
  {
    title: 'Be With The Times',
    description:
      'Show potential customers that you are up-to-date with the latest technology by being found on voice search.',
  },
  {
    title: 'Get Found On Siri & Alexa',
    description:
      'Get found on Siri & Alexa by having your business information available to potential customers.',
  },
];

export function Feature5() {
  const items = features.map((feature, index) => (
    <div key={feature.title}>
      {index > 0 && <Divider my={'1.5rem'} />}
      <Text className={classes.featureTitle}>{feature.title}</Text>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <div className={classes.inner}>
          <Image src="/images/phone-right.png" className={classes.image} />

          <div className={classes.content}>
            <Title className={classes.title}>Voice Search</Title>
            <Text className={classes.description} mt="md">
              Kinda weird, we know... <br />
              But people talk to their phones, and we want you be the answer.
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
    </div>
  );
}
