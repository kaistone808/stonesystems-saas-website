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
            src="https://link.stonesystems.io/widget/booking/hUF685Mpy55WxvsB3UV1"
            style={{ width: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="no"
            id="hUF685Mpy55WxvsB3UV1_1723761228001"
          ></iframe>
          <script src="https://api.ezclick.io/js/form_embed.js" type="text/javascript"></script>
        </Container>
        <iframe
          src="https://links.stonesystems.io/widget/form/wsgeBOWeKk5cflebd4to"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          id="inline-wsgeBOWeKk5cflebd4to"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Opt-In Form"
          data-height="656"
          data-layout-iframe-id="inline-wsgeBOWeKk5cflebd4to"
          data-form-id="wsgeBOWeKk5cflebd4to"
          title="Opt-In Form"
        ></iframe>
        <script src="https://links.stonesystems.io/js/form_embed.js"></script>
      </Container>
    </div>
  );
}
