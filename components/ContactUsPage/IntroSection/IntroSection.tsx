'use client';

import { Container, Title, useMantineTheme } from '@mantine/core';
import classes from './IntroSection.module.css';
import { useMediaQuery } from '@mantine/hooks';

export function IntroSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Want to book a time to talk?</Title>
        <Container className={classes.calendarSection} size="lg">
          <iframe
            src="https://link.stonesystems.io/widget/booking/4APjYC2WFZGvExeA9wq6"
            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            id="GETOH8LH2gfqjMI5Y5kX_1746308399715"
          ></iframe>
          <script src="https://links.stonesystems.io/js/form_embed.js" type="text/javascript"></script>
        </Container>
      </Container>
    </div>
  );
}
