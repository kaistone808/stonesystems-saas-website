'use client';

import { Image, Container, Title, Button, Text, rem, SimpleGrid, Flex } from '@mantine/core';
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
    title: 'Prevent Negative Reviews',
    description:
      'Prevent negative reviews from being published on Google, so that you can maintain a 5-star reputation.',
  },
  {
    title: 'Ask In One Click',
    description:
      'To keep it simple, you can ask for reviews wit just one click. No mobile app or emails needed.',
  },
];

export function Feature2() {
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
        <div className={classes.content}>
          <Title className={classes.title}>5-Star Magic Funnel</Title>
          <Text className={classes.description} mt="md">
            Okay… <br />
            It’s not magic but it comes pretty close, and it’s automated
          </Text>
          <SimpleGrid mt={'lg'} cols={2} spacing={20}>
            {items}
          </SimpleGrid>
          <Button size="lg" bg="var(--yellow)" className={classes.control}>
            Learn More
          </Button>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
