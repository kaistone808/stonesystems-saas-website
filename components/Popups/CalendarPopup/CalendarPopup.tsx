'use client';

import { Container, Title } from '@mantine/core';
import classes from './CalendarPopup.module.css';
import Script from 'next/script';

export function CalendarPopup() {
  return (
    <>
      <Container size="xl">
        <iframe
          src="https://link.stonesystems.io/widget/booking/hUF685Mpy55WxvsB3UV1"
          style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="hUF685Mpy55WxvsB3UV1_1723761228001"
        />
        <Script src="https://api.ezclick.io/js/form_embed.js" type="text/javascript"/>
      </Container>
    </>
  );
}
