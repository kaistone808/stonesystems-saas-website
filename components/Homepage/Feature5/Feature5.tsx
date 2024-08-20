'use client';

import { Image, Container, Title, Button, Text, Flex, Modal } from '@mantine/core';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import classes from './Feature5.module.css';
import PhoneImage from '@/public/images/phone-right.png';

const VideoPopup = dynamic(() => import('@/components/Popups/VideoPopup/VideoPopup').then(mod => mod.VideoPopup));

const features = [
  {
    title: 'Qualified Leads',
    description:
      "Sounds better than paying $50 for a lead that doesn't even pick up the phone, right?",
  },
  {
    title: 'Stop Paying For Unqualified Lead',
    description: 'Like mom always said, quality over quantity. Do we agree with her on this?',
  },
  {
    title: 'Organic Acquisition System',
    description: 'Create your own qualified leads instead of paying for tirekickers.',
  },
];

export function Feature5() {
  const [opened, { close, open }] = useDisclosure(false);
  const items = features.map((feature) => (
    <div key={feature.title}>
      <Flex>
        <IconRosetteDiscountCheckFilled color="var(--yellow)" />
        <Text className={classes.featureTitle}>{feature.title}</Text>
      </Flex>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <div className={classes.inner}>
        <Image width={500} height={800} alt="website animation" src="/images/phone-right.png" className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Local SEO</Title>
            <Text className={classes.description} mt="md">
              "Rank number one on Google in a week!"
              <br /> Just kidding, SEO takes time...
            </Text>
            <Flex mt="lg" direction="column">
              {items}
            </Flex>
            <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
              See 30 Second Demo
            </Button>
            <Modal opened={opened} onClose={close} size="xl">
              <VideoPopup />
            </Modal>
          </div>
        </div>
      </Container>
    </div>
  );
}
