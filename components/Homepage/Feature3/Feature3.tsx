'use client';

import { Image, Container, Title, Button, Text, Flex, Modal } from '@mantine/core';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import classes from './Feature3.module.css';
import { VideoPopup } from '@/components/Popups/VideoPopup/VideoPopup';
import { useDisclosure } from '@mantine/hooks';

const features = [
  {
    title: 'Stand out from your competition',
    description:
      'Everyone misses calls, but not everyone texts back. Be the one who does and outshine your competition.',
  },
  {
    title: 'No More Lost Leads',
    description:
      "On a job site and can't answer the phone? No problem, we'll fire off a text and start the conversation for you.",
  },
  {
    title: 'Show Customers You Care',
    description:
      "Your ex didn't like it when you missed their calls - neither do your customers. At least send a text so they know you care.",
  },
  {
    title: 'Be available 24/7',
    description:
      'Missed a call after hours? No worries, we’ll make sure everyone feels loved even while you’re getting your beauty sleep.',
  },
];

export function Feature3() {
  const [opened, { close, open }] = useDisclosure(false);
  const items = features.map((feature, index) => (
    <div key={feature.title}>
      <Flex>
        <IconRosetteDiscountCheckFilled color="var(--yellow)" />
        <Text className={classes.featureTitle}>{feature.title}</Text>
      </Flex>
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
            Everyone misses calls, but not everyone texts back. Be the one who does. Outshine your
            competition.
          </Text>
          <Flex mt={'lg'} direction={'column'}>
            {items}
          </Flex>
          <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
            See 30 Second Demo
          </Button>
          <Modal opened={opened} onClose={close} size={'xl'}>
            <VideoPopup />
          </Modal>
        </div>
      </div>
    </Container>
  );
}
