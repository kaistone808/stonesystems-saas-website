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
  Modal,
} from '@mantine/core';
import { IconCheckbox, IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import classes from './Feature2.module.css';
import { VideoPopup } from '@/components/Popups/VideoPopup/VideoPopup';
import { useDisclosure } from '@mantine/hooks';

const features = [
  {
    title: '5-Star Reviews Only',
    description:
    "You can’t make everyone happy, but our magic funnel sure can. Five stars, every time.",
  },
  {
    title: 'Automatic Follow-Up Reminders',
    description:
      `"Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' reminder them for a few weeks until they remember.`,
  },
  {
    title: 'Ask For Reviews In One Click',
    description:
      "As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
  },
];

export function Feature2() {
  const [opened, { close, open }] = useDisclosure(false);
  const items = features.map((feature, index) => (
    <div key={feature.title}>
      <Flex>
        <IconRosetteDiscountCheckFilled color='var(--yellow)' />
        <Text className={classes.featureTitle}>{feature.title}</Text>
      </Flex>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>5-Star Magic Funnel</Title>
          <Text className={classes.description} mt="md">
          "Sure I'll leave you a review", but the truth is people forget. We’ll 'gently' remind them for a few weeks until they remember.
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
        <Image
          src="/images/phone-left.png"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
