import { Metadata } from 'next';
import { Container, Title } from '@mantine/core';
import { client, ALL_POSTS_QUERY, SanityBlogPost } from '@/lib/sanity';
import { BlogGrid } from '@/components/Blog/BlogGrid/BlogGrid';
import classes from './blog.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Stone Systems - Marketing & Website Tips for Contractors',
  description:
    'Expert advice on contractor marketing, website design, reputation management, and business automation. Grow your home service business with Stone Systems.',
  openGraph: {
    title: 'Blog | Stone Systems',
    description: 'Expert contractor marketing tips and growth strategies.',
    url: 'https://stonesystems.io/blog',
    siteName: 'Stone Systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stonesystems.io/blog',
  },
};

export default async function BlogPage() {
  const posts: SanityBlogPost[] = await client.fetch(ALL_POSTS_QUERY);

  return (
    <div className={classes.outer}>
      <div className={classes.hero}>
        <Container size="lg">
          <p className={classes.eyebrow}>Resources &amp; Insights</p>
          <Title order={1} className={classes.heroTitle}>
            The Stone Systems Blog
          </Title>
          <p className={classes.heroSub}>
            Marketing strategies, website tips, and growth playbooks built specifically for
            contractors and home service businesses.
          </p>
        </Container>
      </div>

      <Container size="lg" className={classes.content}>
        {posts.length === 0 ? (
          <div className={classes.empty}>
            <Title order={3}>No posts yet — check back soon!</Title>
          </div>
        ) : (
          <BlogGrid posts={posts} />
        )}
      </Container>
    </div>
  );
}
