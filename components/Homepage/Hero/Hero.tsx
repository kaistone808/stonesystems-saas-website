'use client';

import { Image, Container, Title, Button, Text, Flex, Avatar, Divider, Modal } from '@mantine/core';
import classes from './Hero.module.css';
import { CalendarPopup } from '@/components/Popups/CalendarPopup/CalendarPopup';
import { useDisclosure } from '@mantine/hooks';

export function Hero() {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div className={classes.outer}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Flex className={classes.titleDiv}>
              <Divider size={2} mr={40} color={'var(--border-color)'} orientation="vertical" />
              <Title className={classes.title}>
                Website Design & Marketing Systems For Contractors
              </Title>
            </Flex>
            <Flex className={classes.textDiv}>
              <Text className={classes.description}>
                Cut the bullsh*t, Marketing isn't rocket science. <br /> No agency... (including
                ours) has the miracle solution to all your problems. We'll give you the tools to win
                but you need to commit to using them!
              </Text>
              <div className={classes.buttonDiv}>
                <Flex>
                  <Avatar className={classes.avatar} src="/images/people/michael.jpg" />
                  <Avatar className={classes.avatar} src="/images/people/kai.jpeg" />
                  <Avatar className={classes.avatar} src="/images/people/kevin.jpeg" />
                  <Avatar className={classes.avatar} src="/images/people/astrid.jpeg" />
                </Flex>
                <Button size="xl" onClick={open} className={classes.control}>
                  Book A Call
                </Button>
                <Modal opened={opened} onClose={close} size={'xl'}>
                  <CalendarPopup />
                </Modal>
              </div>
            </Flex>
            <Flex className={classes.creditDiv}>
              <div className={classes.credit}>
                <Image src="/images/google.webp" className={classes.creditImage} />
                <div className={classes.creditContent}>
                  <Text className={classes.creditTitle}>Google</Text>
                  <div className={classes.stars}>
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                  </div>
                </div>
              </div>
              <Divider
                className={classes.divider}
                mx={20}
                color="var(--border-color)"
                orientation="vertical"
              />
              <div className={classes.credit}>
                <Image src="/images/fb.png" className={classes.creditImage} />
                <div className={classes.creditContent}>
                  <Text className={classes.creditTitle}>Facebook</Text>
                  <div className={classes.stars}>
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                  </div>
                </div>
              </div>
              <Divider
                className={classes.divider}
                mx={20}
                color="var(--border-color)"
                orientation="vertical"
              />
              <div className={classes.credit}>
                <Image src="/images/trustpilot.png" className={classes.creditImage} />
                <div className={classes.creditContent}>
                  <Text className={classes.creditTitle}>Trustpilot</Text>
                  <div className={classes.stars}>
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                    <Image src="/images/star.png" className={classes.star} />
                  </div>
                </div>
              </div>
            </Flex>
          </div>
          <Image src="/images/new.png" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
