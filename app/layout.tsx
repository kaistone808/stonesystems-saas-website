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

const src =
    "https://t.stonesystems.io/v1/lst/universal-script?ph=d1ff03e6e535f28b0c70ca61588c134793a4ebf07f29a5b37494572df508bc86&tag=!clicked&ref_url=" +
    encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16633753107"
          strategy="afterInteractive"
        />
              <Script
        src={src}
        strategy="afterInteractive"
      />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16633753107');
          `}
        </Script>
        <MantineProvider theme={theme}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
