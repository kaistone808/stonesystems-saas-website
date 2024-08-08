'use client';

import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  Flex,
  Divider,
  Button,
} from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Links',
    links: [
      { label: 'Pricing', link: '/pricing' },
      { label: 'Testimonials', link: '/testimonials' },
      { label: 'Trades We Serve', link: '/trades-we-serve' },
      { label: 'Log in', link: '/trades-we-serve' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', link: '/about-us' },
      { label: 'Our Process', link: '/our-process' },
      { label: 'Careers', link: '/careers' },
      { label: 'Partners', link: '/partners' },
      { label: 'Contact', link: '/contact-us' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Functional Website', link: '/features/functional-website' },
      { label: 'Missed Call Text Back', link: '/features/missed-call-text-back' },
      { label: '5 Star Magic Funnel', link: '/features/5-star-magic-funnel' },
      { label: 'Printing Services', link: '/features/printing-services' },
    ],
  },
  {
    links: [
      { label: 'Automated Lead Follow Up', link: '/features/automated-lead-follow-up' },
      { label: 'Marketing Campaigns', link: '/features/marketing-campaigns' },
      { label: 'All-In-One Inbox', link: '/features/all-in-one-inbox' },
      { label: 'Business Phone', link: '/features/business-phone' },
      { label: 'Local SEO', link: '/features/seo' },
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
        mb={'1rem'}
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
      <Container size={'lg'}>
        <Flex align={'center'} justify={'space-between'} direction={'row'}>
          <Image src="/images/logo-white.png" w={250} h={'100%'} />
          <Flex className={classes.ctaDiv} align={'center'}>
            <Text className={classes.cta}>Ready to get started?</Text>
            <Button className={classes.button} size="md">
              Book A Call
            </Button>
          </Flex>
        </Flex>
        <Divider my={'2.5rem'} color="var(--border-color)" />
      </Container>
      <Container size={'lg'} className={classes.inner}>
        <div className={classes.logo}>
          <Text className={classes.description}>Want to learn more about how we can help?</Text>
          <Button className={classes.button} mt={'1rem'} size="xl">
            Book A Call
          </Button>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Flex>
          <Text<'a'>
            className={classes.specialLink}
            component="a"
            mr={'3rem'}
            href={'/terms-and-conditions'}
            onClick={(event) => event.preventDefault()}
          >
            Terms & Conditions
          </Text>
          <Text<'a'>
            className={classes.specialLink}
            component="a"
            href={'/privacy-policy'}
            onClick={(event) => event.preventDefault()}
          >
            Privacy Policy
          </Text>
        </Flex>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" mx={10} color="white" variant="subtle">
            <IconBrandFacebook style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" mx={10} color="white" variant="subtle">
            <IconBrandYoutube style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
          <ActionIcon size="lg" mx={10} color="white" variant="subtle">
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
