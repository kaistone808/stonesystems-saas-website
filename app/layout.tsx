import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Sora } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { theme } from '../theme';

import '@mantine/carousel/styles.css';
import '../globals.css';
import { LayoutWrapper } from '@/components/LayoutWrapper/LayoutWrapper';
import Script from 'next/script';
import { ConsentTracking } from '@/components/Tracking/ConsentTracking';

const APP_NAME = 'Stone Systems';
const APP_DEFAULT_TITLE = 'Stone Systems - Website Design & Marketing Systems For Contractors!';
const APP_TITLE_TEMPLATE = 'Stone Systems - Website Design & Marketing Systems For Contractors!';
const APP_DESCRIPTION =
  'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#e8a743',
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
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <Script src="/cookie-consent.js" strategy="beforeInteractive" />
        <Script
          async
          src="https://app.usecortana.ai/api/widgets/cmhapx2wt000hjy04gs3ipqjf.js"
        ></Script>
        <MantineProvider theme={theme}>
          <ConsentTracking />
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
