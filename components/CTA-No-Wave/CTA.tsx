import { Text, Title, Button, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

import classes from './CTA.module.css';

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
          <Button
            component="a"
            href="/contact"
            onClick={open}
            size="xl"
            bg="var(--yellow)"
            className={classes.control}
          >
            Book A Call
          </Button>
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
