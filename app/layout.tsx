import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Sora } from 'next/font/google';
import { theme } from '../theme';

import '@mantine/carousel/styles.css';
import '../globals.css';
import { LayoutWrapper } from '@/components/LayoutWrapper/LayoutWrapper';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--sora',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
