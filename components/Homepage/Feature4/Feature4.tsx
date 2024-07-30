'use client';

import { Image, Container, Title, Button, Text, rem, SimpleGrid, Flex } from '@mantine/core';
import { IconCheckbox } from '@tabler/icons-react';
import classes from './Feature4.module.css';

const features = [
  {
    title: 'More Reviews',
    description:
      'We create a marketing campaign that will get you a ton of reviews on Google. All 5-Stars of course.',
  },
  {
    title: 'More Referrals',
    description:
      'We create a marketing campaign that will incentivize your customers to refer you to their friends.',
  },
  {
    title: 'More Repeat Customers',
    description:
      'We create a marketing campaign that will get your customers to come back to you again and again.',
  },
  {
    title: 'Done For You',
    description:
      'We create the marketing campaigns for you, so you can focus on running your business.',
  },
];

export function Feature4() {
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
          <Title className={classes.title}>Marketing Campaigns</Title>
          <Text className={classes.description} mt="md">
            You know it, and we know it… <br />
            Referrals and repeat customers are the best. Let’s get you both!
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
