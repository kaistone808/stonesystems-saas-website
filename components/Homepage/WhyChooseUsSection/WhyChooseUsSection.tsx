'use client';

import { Paper, Text, Title, Container, SimpleGrid, Image } from '@mantine/core';
import classes from './WhyChooseUsSection.module.css';

interface CardProps {
  cardTitle: string;
  cardDescription: string;
  imageSrc: string;
}

function Card({ cardTitle, cardDescription, imageSrc }: CardProps) {
  return (
    <Paper shadow="md" radius="md" className={classes.card}>
      <Image src={imageSrc} alt="Panda" className={classes.cardImg} />
      <Title order={3} className={classes.cardTitle}>
        {cardTitle}
      </Title>
      <Text className={classes.cardDescription}>{cardDescription}</Text>
    </Paper>
  );
}

const data = [
  {
    cardTitle: 'Simple To Use',
    cardDescription:
      "We've made everything so easy you don't have to learn anything and can practically do it in your sleep.",
    imageSrc: '/images/why/easy.png',
  },
  {
    cardTitle: 'Affordable',
    cardDescription:
      'Affordable plans made to fit the budget of contracting businesses of all sizes to support your growth year round.',
    imageSrc: '/images/why/low-price.png',
  },
  {
    cardTitle: 'No Contracts ',
    cardDescription:
      "We don't lock you in any contracts because we believe that continue business should be earned.",
    imageSrc: '/images/why/documents.png',
  },
  {
    cardTitle: 'Round-the-Clock Support',
    cardDescription:
      '24/7 customer support to help with any issues, ensuring your business keeps running smoothly.',
    imageSrc: '/images/why/back-in-time.png',
  },
  {
    cardTitle: 'Proven Results',
    cardDescription:
      "We already know what's working and have all the reviews & testimonials to back it up.",
    imageSrc: '/images/why/business.png',
  },
  {
    cardTitle: 'Constant Improvements',
    cardDescription:
      'We regularly make new improvements and updates to our systems to make sure you get the best value for your money.',
    imageSrc: '/images/why/efficacy.png',
  },
];

export function WhyChooseUsSection() {
  const slides = data.map((item) => <Card {...item} />);

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>Why Choose Us</Title>
          <Text ta={'center'} className={classes.subTitle}>
            There's nothing quite like Stone Systems
          </Text>
            <Container size="lg">
              <SimpleGrid cols={3}>{slides}</SimpleGrid>
            </Container>
        </Container>
      </div>
    </>
  );
}
