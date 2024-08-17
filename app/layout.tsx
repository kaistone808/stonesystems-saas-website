// app/layout.tsx
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

import '@mantine/carousel/styles.css';
import '../globals.css';
import { LayoutWrapper } from '@/components/LayoutWrapper/LayoutWrapper';
import Script from 'next/script';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6683957add58569330bbe445"
      />
    </html>
  );
}
