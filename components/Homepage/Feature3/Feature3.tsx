'use client';

import { Image, Container, Title, Button, Text, rem, SimpleGrid, Flex } from '@mantine/core';
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
    title: 'Always Respond Quickly',
    description:
      'Respond to missed calls with a text message in less than 5 minutes, making it 21x more likely to convert.',
  },
  {
    title: 'Show People You Care',
    description:
      'Show potential customers that you care about their business by responding to missed calls with a text message.',
  },
];

export function Feature3() {
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
          <Title className={classes.title}>Missed Call Text Back</Title>
          <Text className={classes.description} mt="md">
            It’s not rocket science… <br />
            Quickly getting back to customers will make you more money.
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
