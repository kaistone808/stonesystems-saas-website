'use client';

import { Container, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Want to book a time to talk?</Title>
        <Container className={classes.calendarSection} size="lg">
          <iframe
            src="https://link.stonesystems.io/widget/booking/4APjYC2WFZGvExeA9wq6"
            style={{ width: '100%', height: '900px', border: 'none', overflow: 'scroll' }}
            id="calendar-iframe"
            loading="eager"
          ></iframe>
        </Container>
      </Container>
    </div>
  );
}
