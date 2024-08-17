'use client';

import { Image, Container, Title, Button, Text, Flex, Modal } from '@mantine/core';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import classes from './Feature1.module.css';
import { VideoPopup } from '@/components/Popups/VideoPopup/VideoPopup';
import { useDisclosure } from '@mantine/hooks';

const features = [
  {
    title: 'Actually Get Found Online',
    description:
      "If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen.",
  },
  {
    title: 'Showcase Your Best Reviews',
    description:
      "We all have one or two bad reviews... That doesn't mean your customers need to see them.",
  },
  {
    title: 'Mobile Friendly',
    description:
      "87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile.",
  },
  {
    title: 'Optimized For Local Google Searches',
    description:
      "This should go without saying but we'll still say it. We make sure your business is found on Google.",
  },
];

export function Feature1() {
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
      <Title className={classes.mainTitle}>
        Simple systems that actually work <br /> No degrees required, just a hard hat
      </Title>
      <div className={classes.inner}>
        <Image src="/images/phone-right.png" className={classes.image} />

        <div className={classes.content}>
          <Title className={classes.title}>Functional Website</Title>
          <Text className={classes.description} mt="md">
            Get a website that instantly turns leads into text conversations that go DIRECTLY to
            your phone.
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
