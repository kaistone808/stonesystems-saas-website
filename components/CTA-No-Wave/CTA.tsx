import { Text, Title, Button, Image, Container, Modal } from '@mantine/core';
import classes from './CTA.module.css';
import { useDisclosure } from '@mantine/hooks';
import { CalendarPopup } from '../Popups/CalendarPopup/CalendarPopup';

export function CTANoWave() {
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
            <Modal opened={opened} onClose={close} size={'xl'}>
            <CalendarPopup />
            </Modal>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />
      </Container>
    </div>
  );
}
