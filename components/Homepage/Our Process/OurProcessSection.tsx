'use client';

import { Title, Container, Image } from '@mantine/core';
import classes from './OurProcessSection.module.css';

export function OurProcessSection() {

  return (
    <>
      <Container size="lg">
        <Title className={classes.mainTitle}>Our Process</Title>
        <div className={classes.card}>
          <Container size="lg">
            <Image src={'https://3e2022dc.rocketcdn.me/wp-content/uploads/2022/09/Remodeling.webp'} />
          </Container>
        </div>
      </Container>
    </>
  );
}
