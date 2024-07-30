'use client';

import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './BlogSection.module.css';
import { Article } from '../Article/Article';

export function BlogSection() {
  const blogData = [
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
    {
      title: 'How to get your business to the next level',
      imageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      writer: 'John Doe',
      writerImageSrc: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
      link: '/blog/how-to-get-your-business-to-the-next-level',
    },
  ];

  const blogPosts = blogData.map((post) => <Article {...post} />);

  return (
    <>
      <Container size="lg">
        <Title className={classes.mainTitle}>Let's help you get better</Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Read about some of the lessons we learned over the years that will help your business
          grow.
        </Text>
        <SimpleGrid cols={3}>{blogPosts}</SimpleGrid>
      </Container>
    </>
  );
}
