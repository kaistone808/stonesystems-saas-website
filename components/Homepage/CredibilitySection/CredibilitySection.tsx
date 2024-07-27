'use client';

import { Image, Container, Text } from '@mantine/core';
import classes from './CredibilitySection.module.css';

export function CredibilitySection() {
  return (
    <Container size="sm" className={classes.credits}>
      <div className={classes.credit}>
        <Image src="/images/google.webp" className={classes.image} />
        <div className={classes.content}>
          <Text className={classes.title}>
            Google
          </Text>
          <div className={classes.stars}>
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
          </div>
        </div>
      </div>
      <div className={classes.credit}>
        <Image src="/images/fb.png" className={classes.image} />
        <div className={classes.content}>
          <Text className={classes.title}>
            Facebook
          </Text>
          <div className={classes.stars}>
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
          </div>
        </div>
      </div>
      <div className={classes.credit}>
        <Image src="/images/trustpilot.png" className={classes.image} />
        <div className={classes.content}>
          <Text className={classes.title}>
            Trustpilot
          </Text>
          <div className={classes.stars}>
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
          </div>
        </div>
      </div>
      <div className={classes.credit}>
        <Image src="/images/bbb.png" className={classes.image} />
        <div className={classes.content}>
          <Text className={classes.title}>
            BBB
          </Text>
          <div className={classes.stars}>
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
            <Image src="/images/star.png" className={classes.star} />
          </div>
        </div>
      </div>
    </Container>
  );
}
