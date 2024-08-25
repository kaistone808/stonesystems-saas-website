import { Text, Title, Button, Container, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import classes from './CTA.module.css';

const CalendarPopup = dynamic(() =>
  import('@/components/Popups/CalendarPopup/CalendarPopup').then((mod) => mod.CalendarPopup)
);

export function CTA() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Want to schedule a time to talk?</Title>
          <Text className={classes.description} c="dimmed">
            See everything we do to help you grow your business so you can implement it yourself or
            let us do it for you.
          </Text>

          <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
            Book A Call
          </Button>
          <Modal
            closeButtonProps={{
              size: 'xl',
            }}
            opened={opened}
            onClose={close}
            size="xl"
          >
            <CalendarPopup />
          </Modal>
        </div>
        <Image
          width={1080}
          height={1080}
          src="/images/cta-stoneman.png"
          alt="cta image"
          className={classes.image}
        />
      </Container>
    </div>
  );
}
