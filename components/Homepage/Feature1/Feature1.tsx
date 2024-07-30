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
} from '@mantine/core';
import { IconCheckbox } from '@tabler/icons-react';
import classes from './Feature1.module.css';

const features = [
  {
    title: 'Modern Design',
    description:
      'Modern design with latest trends, optimized to create text conversations instead of emails.',
  },
  {
    title: 'SEO Optimized',
    description:
      'Everything is optimized so that people will be able to find your website on Google.',
  },
  {
    title: 'Mobile Friendly',
    description:
      'Your website will look great on any device, from desktop to mobile and everything in between.',
  },
  {
    title: 'Local Search Results',
    description:
      'Get found in local search results, so that people in your area can find you easily when they need a contractor.',
  },
];

export function Feature1() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <Flex>
        <IconCheckbox
          style={{ width: rem(24), height: rem(24) }}
          color="var(--yellow)"
          stroke={2}
        />
        <Text fz="lg" ml={5} fw={500}>
          {feature.title}
        </Text>
      </Flex>

      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />

        <div className={classes.content}>
          <Title className={classes.title}>Functional Website</Title>
          <Text className={classes.description} mt="md">
            No customer wants to go back and forth over email… <br />
            Get a website that turns leads into text conversations.
          </Text>
          <SimpleGrid mt={'lg'} cols={2} spacing={20}>
            {items}
          </SimpleGrid>
          <Button size="lg" bg="var(--yellow)" className={classes.control}>
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}
