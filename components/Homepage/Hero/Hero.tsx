'use client';

import { Image, Container, Title, Button, Text, Flex, Avatar, Divider } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Flex mb={50} className={classes.titleDiv}>
              <Divider size={2} mr={40} color={'var(--border-color)'} orientation="vertical" />
              <Title className={classes.title}>Simplicity & Growth At Your Fingertips</Title>
            </Flex>
            <Flex className={classes.textDiv}>
              <Text className={classes.description}>
                More Customers. More Jobs. Less Bullsh*t. Receive a fully custom website optimized
                with AI and put your online presence on autopilot to be discovered.
              </Text>
              <div className={classes.buttonDiv}>
                <Flex>
                  <Avatar />
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </Flex>
                <Button size="xl" className={classes.control}>
                  Learn More
                </Button>
              </div>
            </Flex>
            <Flex mt={75} className={classes.creditDiv}>
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
              <Divider mx={20} color="var(--border-color)" orientation="vertical" />
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
              <Divider mx={20} color="var(--border-color)" orientation="vertical" />
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
          <Image src="/images/stone-systems-guy.png" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
