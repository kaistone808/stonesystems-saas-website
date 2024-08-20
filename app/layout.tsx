import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import Script from 'next/script';
import { Sora } from 'next/font/google';
import { theme } from '../theme';

import '@mantine/carousel/styles.css';
import '../globals.css';
import { LayoutWrapper } from '@/components/LayoutWrapper/LayoutWrapper';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
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
