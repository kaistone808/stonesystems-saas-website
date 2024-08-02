'use client';

import {
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
  Flex,
  Divider,
  SimpleGrid,
} from '@mantine/core';
import { IconDeviceMobile, IconLicense, IconWorldSearch } from '@tabler/icons-react';
import classes from './Feature1.module.css';

const features = [
  {
    icon: IconLicense,
    title: 'Optimized For SEO',
    description:
      'Everything is optimized so that people will be able to find your website on Google.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Mobile Friendly',
    description:
      'Your website will look great on any device, from desktop to mobile and everything in between.',
  },
  {
    icon: IconWorldSearch,
    title: 'Local Search Results',
    description:
      'Get found in local search results, so that people in your area can find you easily when they need a contractor.',
  },
];

export function Feature1() {
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
        <Image
          src="/images/phone-right.png"
          className={classes.image}
        />

        <div className={classes.content}>
          <Title className={classes.title}>Functional Website</Title>
          <Text className={classes.description} mt="md">
            No customer wants to go back and forth over email… <br />
            Get a website that turns leads into text conversations.
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
