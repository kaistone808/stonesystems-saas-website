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
import classes from './Feature2.module.css';

const features = [
  {
    title: '5-Star Reviews Only',
    description:
      'Only the best reviews will be published on Google, so that you can attract more customers.',
  },
  {
    title: 'Automatic Follow-Up',
    description:
      'Automatically follow up with customers through SMS to get more reviews, so that you can build a 5-star reputation.',
  },
  {
    title: 'Ask In One Click',
    description:
      'To keep it simple, you can ask for reviews wit just one click. No mobile app or emails needed.',
  },
];

export function Feature2() {
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
        <div className={classes.content}>
          <Title className={classes.title}>5-Star Magic Funnel</Title>
          <Text className={classes.description} mt="md">
            Okay… <br />
            It’s not magic but it comes pretty close, and it’s automated
          </Text>
          <Flex mt={'lg'} direction={'column'}>
            {items}
          </Flex>
          <Button size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
        </div>
        <Image
          src="/images/phone-left.png"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
