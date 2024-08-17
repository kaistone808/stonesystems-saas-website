'use client';

import { Container, SimpleGrid, Text, Title, Image, useMantineTheme } from '@mantine/core';
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
            src="https://link.stonesystems.io/widget/booking/hUF685Mpy55WxvsB3UV1"
            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            id="hUF685Mpy55WxvsB3UV1_1723761228001"
          ></iframe>
          <script src="https://api.ezclick.io/js/form_embed.js" type="text/javascript"></script>
        </Container>
      </Container>
    </div>
  );
}
