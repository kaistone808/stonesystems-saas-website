'use client';

import { Container, Image, Paper, SimpleGrid } from '@mantine/core';
import classes from './PartnersSection.module.css';

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
  const partners = data.map((item) => (
    <Paper className={classes.partnerCard} shadow="md">
      <Image className={classes.image} src={item.imageSrc} alt="partner" />
    </Paper>
  ));
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid cols={4}>{partners}</SimpleGrid>
      </Container>
    </div>
  );
}
