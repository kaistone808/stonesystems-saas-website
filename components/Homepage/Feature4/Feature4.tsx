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
import classes from './Feature4.module.css';

const features = [
  {
    title: 'More Reviews',
    description:
      'We create a marketing campaign that will get you a ton of reviews on Google. All 5-Stars of course.',
  },
  {
    title: 'More Referrals & Repeat Customers',
    description:
      'We create a marketing campaign that will incentivize your customers to refer you to their friends and come back.',
  },
  {
    title: 'Done For You',
    description:
      'We create the marketing campaigns for you, so you can focus on running your business.',
  },
];

export function Feature4() {
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
          <Title className={classes.title}>Marketing Campaigns</Title>
          <Text className={classes.description} mt="md">
            You know it, and we know it… <br />
            Referrals and repeat customers are the best. Let’s get you both!
          </Text>
          <Flex mt={'lg'} direction={'column'}>
            {items}
          </Flex>
          <Button size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
        </div>
        <Image src="/images/phone-left.png" className={classes.image} />
      </div>
    </Container>
  );
}
