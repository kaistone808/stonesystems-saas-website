'use client';

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Product',
    links: [
      { label: 'Functional Website', link: '#' },
      { label: 'Automated Follow Up', link: '#' },
      { label: 'SEO', link: '#' },
      { label: 'Printing Services', link: '#' },
      { label: 'Missed Call Text Back', link: '#' },
      { label: '5 Star Only Reviews', link: '#' },
      { label: 'VoiceSearch', link: '#' },
      { label: 'Reactivation Campaigns', link: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', link: '#' },
      { label: 'Our Process', link: '#' },
      { label: 'Careers', link: '#' },
      { label: 'Partners', link: '#' },
      { label: 'Contact', link: '#' },
    ],
  },
  {
    title: 'Links',
    links: [
      { label: 'Pricing', link: '#' },
      { label: 'Testimonials', link: '#' },
      { label: 'Trades We Serve', link: '#' },
      { label: 'Blog', link: '#' },
      { label: 'Youtube', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 Stone Systems All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
