'use client';

import { Container, Paper, SimpleGrid, useMantineTheme } from '@mantine/core';
import classes from './PartnersSection.module.css';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const data = [
  {
    imageSrc: '/images/partners/localfalcon.png',
  },
  {
    imageSrc: '/images/partners/meta.svg.png',
  },
  {
    imageSrc: '/images/partners/godaddy.png',
  },
  {
    imageSrc: '/images/partners/openai.webp',
  },
  {
    imageSrc: '/images/partners/gmb.webp',
  },
  {
    imageSrc: '/images/partners/canva.svg.png',
  },
  {
    imageSrc: '/images/partners/ahrefs.png',
  },
  {
    imageSrc: '/images/partners/googleanalytics.png',
  },
  {
    imageSrc: '/images/partners/mailgun.png',
  },
  {
    imageSrc: '/images/partners/semrush.png',
  },
  {
    imageSrc: '/images/partners/twilio.png',
  },
  {
    imageSrc: '/images/partners/zapier.svg.png',
  },
  {
    imageSrc: '/images/partners/googlesearch.png',
  },
  {
    imageSrc: '/images/partners/keywordseverywhere.jpeg',
  },
  {
    imageSrc: '/images/partners/leadconnector.png',
  },
  {
    imageSrc: '/images/partners/ads.png',
  },
];

export function PartnersSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const partners = data.map((item, index) => (
    <Paper className={classes.partnerCard} shadow="md" key={index}>
      <Image className={classes.image} width={200} height={136} src={item.imageSrc} alt="partner" />
    </Paper>
  ));
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid cols={mobile ? 2 :4}>{partners}</SimpleGrid>
      </Container>
    </div>
  );
}
